import { client, checkError } from './client';

export default function getUser() {

  return client.auth.session;
}

export async function signOut() {

  
}