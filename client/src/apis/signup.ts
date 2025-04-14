import {http} from './http';

type Payload = {
  email: string;
  password: string;
};

export function signup(payload: Payload) {
  return http.post('/auth/signup', payload);
}
