type Admin = {
  rights: string[];
};
type Guest = {
  rights: string[];
};

type User = Admin | Guest;
let user: User = {
  rights: ["admin"], // no way to determine whether user is contained in this or not . here,
};

function isAdmin(user: User) {
  if ("admin" in user.rights) {
    // using ' in ' notation to find out whether it contains  the value or not .
    return true;
  } else false;
}

// second type guard is ' instanceof ' : useful for classes

class GuestClass {
  constructor(name: string, rights: string[]) {}
}
class AdminClass {
  constructor(name: string, rights: string[]) {}
}

let guestInstance = new GuestClass("userName", []);
let adminInstance = new AdminClass("adminName", ["admin"]);
type UserType = AdminClass | GuestClass;

const isAdminClass: (person: UserType) => boolean = (person: UserType) => {
  if (person instanceof AdminClass) return true;
  else return false;
};
