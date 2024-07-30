import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
//  projectId: "66a929eb0029b3697cf6",
//  url: 'https://cloud.appwrite.io/v1',
 projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
 url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
