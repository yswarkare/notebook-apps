import { UserEntity } from "../db/schema/users";

declare global{
  namespace Express{
    interface User extends UserEntity {}
    interface Request{
      User: UserEntity | undefined;
      /*
        other variables (if needed)
      */
    }
  }
}