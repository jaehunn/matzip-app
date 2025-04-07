import {http} from './http';

type Response = Profile & Category;

export async function getProfile() {
  return http.get<Response>('/auth/me');
}
