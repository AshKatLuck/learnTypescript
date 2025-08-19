function logError(msg?: string): void {
  throw new Error(msg);
}

logError();

type User = {
  name: string;
  age: number;
  role?: "Admin" | "Guest"; // this is optional
};

let user1: User = {
  name: "Asha",
  age: 39,
};
