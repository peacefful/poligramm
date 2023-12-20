import type { IUser } from "@/interfaces/iUsers";

const symbols: string[] = ["!", "@", "#", "$", "%", "&", "_", "+", "="];

export const validateRegistrationData = (authUser: IUser): boolean => {
	let isValidate: boolean = false;

	if (
		authUser.surname.trim() && authUser.name.trim() &&
		authUser.appointment.trim() && authUser.login.trim() &&
		authUser.password.trim() && authUser.rank.trim() &&
		authUser.role.trim() && authUser.phone.trim()
	) {
		if (authUser.login.length >= 5) {
			if (authUser.password.length >= 8) {
				let hasSymbol = false;
				for (const iterator of authUser.password) {
					if (symbols.includes(iterator)) {
						hasSymbol = true;
						break;
					}
				}
				if (!hasSymbol) {
					throw new Error("Ошибка, в пароле не хватает символов");
				}
				isValidate = true;
			} else {
				throw new Error("Ошибка, пароль слишком короткий");
			}
		} else {
			throw new Error("Ошибка, слишком короткий логин");
		}
	}

	return isValidate;
};