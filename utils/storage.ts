export const setItem = (name: string, data: any) => {
    localStorage.setItem(name, data);
}

export const get = (name: string) => {
    localStorage.get(name);
}

export const remove = (name: string) => {
    localStorage.remove(name);
}