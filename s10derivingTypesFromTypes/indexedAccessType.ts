//indexed access types

type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[];
};
//we need a type for only the persmissions
type Perms = AppUser["permissions"];

type Perm = Perms[number];
