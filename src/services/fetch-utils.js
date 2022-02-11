import { client, checkError } from './client';

export default function getUser() {

  return client.auth.session();
}

export async function signOut() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  console.log('||response', response);
  return response.user;
}