const prefix = '$polg-'

export const storage = {
  getData: (name: string) => {
    const data = localStorage.getItem(`${prefix}${name}`);
    return data ? JSON.parse(data) : null;
  },
  setData: (key: string, value: string) => {
    localStorage.setItem(`${prefix}${key}`, value);
  },
  clearData: () => {
    localStorage.clear();
  }
}
