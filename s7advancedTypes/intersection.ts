// type FileData = {
//   filePath: string;
//   fileContent: string;
// };
// type Status = {
//   isOpen: boolean;
//   errorMsg?: string;
// };

// type DatabaseData = {
//   dbURL: string;
//   credentials: string;
// };

// //we need a file access type and database access type. Then we can use intersection
// type FileAccessData = FileData & Status;
// type DatabaseAccessData = DatabaseData & Status;

// const dbdata: DatabaseAccessData = {
//   isOpen: false,
//   dbURL: "mongourl",
//   credentials: "asha",
// };

// console.log(dbdata);

interface FileData {
  filePath: string;
  fileContent: string;
}
interface Status {
  isOpen: boolean;
  errorMsg?: string;
}

interface DatabaseData {
  dbURL: string;
  credentials: string;
}

//we need a file access type and database access type. Then we can use intersection
interface FileAccessData extends FileData, Status {}
interface DatabaseAccessData extends DatabaseData, Status {}

const dbdata: DatabaseAccessData = {
  isOpen: false,
  dbURL: "mongourl",
  credentials: "asha",
};

console.log(dbdata);
