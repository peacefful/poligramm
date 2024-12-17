import { Client, Databases, Storage } from "appwrite";

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1')

client.setProject(import.meta.env.VITE_APP_WRITE_ID);

export const database = new Databases(client);
export const storage = new Storage(client);