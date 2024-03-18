import { io } from 'socket.io-client'

export const sockets = io('http://localhost:3000')