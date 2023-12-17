const prefix = '$finpol-'

export const storage = {
	getData: (name:string) => {
		return localStorage.getItem(`${prefix}${name}`)
	},
	setData: (key:string, value:string) => {
		localStorage.setItem(`${prefix}${key}`, value)
	}
}