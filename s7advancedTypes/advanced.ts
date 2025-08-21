//Index type
type Storage = {
  [prop: string]: number | boolean;
};

let dbStore: Storage = {};
dbStore.id = 10;
dbStore.isOpen = true;
dbStore.url = "blah blah"; // not allowed cos the property value should be either a number or a boolean

//Same thing as above but using Record

let dbStore2: Record<string, number | boolean> = {};

dbStore2.id = 10;
dbStore2.isOpen = false;
dbStore.url = "hhghg"; //not allowed coz it has to be number or boolean

//const type with as const
let role = ["user", "admin", "guest"];
// we can push another role into this array
role.push("bitch"); // we dont want this to happen coz there are only 3 roles

let role2 = ["user", "admin", "guest"] as const;

role2.push(
  "bitch"
) // not allowed coz this is a constant array
``;

const dataEntries: Record<string, number> = {
  entry1: 123,
  entry2: 525,
};

dataEntries.entry3 = 694;
console.log(dataEntries);

//But i dont want the user to add more entrys but should be able to access entry1 and entry2
const dataEntries2 = {
  entry1: 123,
  entry2: 525,
} satisfies Record<string, number>;

dataEntries2.entry3 = 694;
console.log(dataEntries2);
dataEntries2.entry1 = 125;
