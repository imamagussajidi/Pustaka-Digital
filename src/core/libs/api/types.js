export const getContentType = (type) => {
  switch (type) {
    case "form-data":
      return "multipart/form-data";
    case "url-encoded":
      return "application/x-www-form-urlencoded";
    default:
      return "application/json";
  }
};

export const MethodTypes = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
};
