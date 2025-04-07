import {http} from './http';

type Payload = {
  email: string;
  password: string;
};

type Response = {
  accessToken: string;
  refreshToken: string;
};

export async function login(payload: Payload) {
  return http.post<Response>('/auth/signin', payload);
}
