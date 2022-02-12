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

  return response.user;
}

export async function getInventory() {
  const response = await client
    .from('inventory')
    .select();

  return checkError(response);
}

export async function getInventoryItem(id) {
  const response = await client
    .from('inventory')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}

export async function addInventoryItem(item) {
  const response = await client
    .from('inventory')
    .insert([item]);

  return checkError(response);
}

export async function deleteItem(id) {
  const response = await client
    .from('inventory')
    .delete()
    .match({ id });

  return checkError(response);
}