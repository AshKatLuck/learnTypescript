type TAddress = {
  addressLine1: string;
  addressLine2?: string;
  postCode: number | string;
  city: string;
  state: string;
  country: string;
};

type UserKeys = "username" | "email" | "firstName" | "lastName" | "address";
type TUser = Record<UserKeys, string | TAddress>;

//TypeScript satisfies - Annotated Type Has Precedence Over satisfies Type
const joe = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  lastName: "Hiyden",
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Old Avenue",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
} satisfies TUser;

console.log(joe.address.postCode); // 12345
console.log(typeof joe); // object not TUser

//explicitely annoted TUser
const joe2: TUser = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  lastName: "Hiyden",
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Old Avenue",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
};
console.log(joe2.address.postCode); //Property 'postCode' does not exist on type 'string | TAddress'.

//TypeScript satisfies - Property Name Constraining

const joe3 = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  lastName: "Hiyden",
  role: "Admin", //not in userkeys or address
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Old Avenue",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
} satisfies TUser;

//TypeScript satisfies - Property Name Fulfillment

const joe4: TUser = {
  // last name missing
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  //   lastName: "Hiyden",
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Old Avenue",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
} satisfies TUser;

//TypeScript satisfies - Optional Member Conformance
const joe5 = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  //   lastName: "Hiyden",// since it is partial TUser, it is ok that no lastname is there
  address: {
    addressLine1: "1, New Avenue",
    addressLine2: "Old Avenue",
    postCode: 12345,
    city: "California",
    state: "California",
    country: "USA",
  },
} satisfies Partial<TUser>;

//Advanced Use: Combining satisfies with Utility Types

type UserMinimal = Pick<TUser, "username" | "email">;

const joeMinimal = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
} satisfies UserMinimal;

// Using satisfies with Omit<>

type UserWithoutAddress = Omit<TUser, "address">;
const joeWithoutAddress = {
  username: "joe_hiyden",
  email: "joe@exmaple.com",
  firstName: "Joe",
  lastName: "Hiyden",
} satisfies UserWithoutAddress;

