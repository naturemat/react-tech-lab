import { makeAutoObservable } from "mobx";

export interface User {
  id: string;
  nombre: string;
  email: string;
}

class UserStore {
  users: User[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addUser(nombre: string, email: string): void {
    this.users.push({
      id: crypto.randomUUID(),
      nombre,
      email,
    });
  }

  get userCount(): number {
    return this.users.length;
  }
}

export const userStore = new UserStore();
