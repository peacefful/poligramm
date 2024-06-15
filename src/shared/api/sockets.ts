import { io } from 'socket.io-client'
export const SOCKETS = io(import.meta.env.VITE_BASE_URL)