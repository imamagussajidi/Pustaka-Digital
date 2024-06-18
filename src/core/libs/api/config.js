import { getContentType } from "./types.js";

async function createRequest(endpoint, method, apiOption, body) {
  const res = await fetch(
    apiOption?.path ? `${endpoint}/${apiOption.path}` : endpoint,
    {
      method,
      headers: {
        "Content-Type": getContentType(apiOption?.contentType || "json"),
        ...(apiOption?.bearerToken &&
          typeof apiOption.bearerToken !== "undefined" && {
            Authorization: `Bearer ${apiOption.bearerToken}`,
          }),
        ...apiOption?.headers,
      },
      body: JSON.stringify(body),
    }
  );
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export const HTTP_REQUEST = {
  get: (endpoint) => (apiOption) => createRequest(endpoint, "GET", apiOption),
  post: (endpoint) => (body, apiOption) => createRequest(endpoint, "POST", apiOption, body),
  put: (endpoint) => (body, apiOption) => createRequest(endpoint, "PUT", apiOption, body),
  patch: (endpoint) => (body, apiOption) => createRequest(endpoint, "PATCH", apiOption, body),
  delete: (endpoint) => (apiOption) => createRequest(endpoint, "DELETE", apiOption),
};
