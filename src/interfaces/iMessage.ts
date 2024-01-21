interface IJoinUser {
	username: string
	isJoin: boolean
}

export interface IMessage {
	id: number
	text: string
	sendTime: string
	username:string|null
	joinUser?: string[]
	uuid?:string,
}