import {http} from '../apis/http';

export const HTTP_HEADERS = {
  AUTHORIZATION: 'Authorization',
} as const;

export type HttpHeaders = (typeof HTTP_HEADERS)[keyof typeof HTTP_HEADERS];

export function getHttpHeaders(key: HttpHeaders) {
  return http.defaults.headers.common[key];
}

export function setHttpHeaders(key: HttpHeaders, value: string) {
  http.defaults.headers.common[key] = value;
}

export function deleteHttpHeaders(key: HttpHeaders) {
  if (getHttpHeaders(key)) {
    delete http.defaults.headers.common[key];
  }
}
