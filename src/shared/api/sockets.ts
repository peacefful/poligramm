import { io } from 'socket.io-client'

export const sockets = io(import.meta.env.BASE_URL)