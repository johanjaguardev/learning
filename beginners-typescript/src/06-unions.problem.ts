// Solution 1
// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   /**
//    * How do we ensure that role is only one of:
//    * - 'admin'
//    * - 'user'
//    * - 'super-admin'
//    */
//   role: "admin" | "user" | "super-admin";
// }

// Solution 2
// type SuperAdmin = "super-admin";
// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   /**
//    * How do we ensure that role is only one of:
//    * - 'admin'
//    * - 'user'
//    * - 'super-admin'
//    */
//   role: "admin" | "user" | SuperAdmin
// }


// Solution 3
enum RolesEnum {
  Admin = "admin",
  User = "user",
  SuperAdmin = "super-admin"
}
interface User {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: RolesEnum
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};
