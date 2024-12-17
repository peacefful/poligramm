import { storage } from '@/shared/api'
import { ID, type Models } from 'appwrite'

export const setFileToStorage = async (file: File): Promise<Models.File | null> => {
  try {
    return await storage.createFile(import.meta.env.VITE_BUCKET_ID, ID.unique(), file)
  } catch (error) {
    return null
  }
}
