export interface IMessage {
	id: number
	text: string
	sendTime: string
	uuid?:string,
	username:string|null
}