let a: null;
a = null; //ok
a = "hi"; //not ok

let b: string;
b = "hi"; //ok
b = null; //not ok

let c: null | string;
c = "Hi"; //ok
c = null; //ok

let d: undefined | string; //null and undefined is not the same
d = null; //not ok
d = undefined; //ok
d = "GGOO"; //ok
