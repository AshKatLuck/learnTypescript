type FileSource = {
  type: "file";
  filepath: string;
};
type DBSource = {
  type: "db";
  dbURL: string;
};

type Source = FileSource | DBSource;

function isFile(source: Source) {
  return source.type == "file";
}

function LoadData(source: FileSource | DBSource) {
  //   if ("filepath" in source) {
  //   if (source.type == "file") {
  if (isFile(source)) {
    //code to load file data
    console.log(source.filepath);
    return;
  }
  //code to load db data
  console.log(source.dbURL);
  return;
}

// class User {
//   constructor(public name: string) {}
// }

// class Admin {
//   constructor(public permissions: string[]) {}
// }

// const user1 = new User("Asha");
// const admin1 = new Admin(["ban", "suspend", "create"]);

// type Entity = User | Admin;

// function init(entity: Entity) {
//   if (entity instanceof User) {
//     console.log(entity.name);
//     return;
//   }
//   console.log(entity.permissions);
// }
