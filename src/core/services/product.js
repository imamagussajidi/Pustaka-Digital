import { APP_CONFIG } from "@core/configs/app";
import { HTTP_REQUEST } from "@core/libs/api/config";

export const productService = {
  get: HTTP_REQUEST.get(APP_CONFIG.BASE_URL),
};
