import { storage } from '@/shared/api'

export const getFileView = async (id: string): Promise<string> => {
  const fileUrl = storage.getFileView(import.meta.env.VITE_BUCKET_ID, id)
  return fileUrl
}
