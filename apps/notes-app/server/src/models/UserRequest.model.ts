import { UserEntity } from "../db/schema/users";

declare global{
  namespace Express{
    interface Request{
      currentUser: UserEntity;
      /*
        other variables (if needed)
      */
    }
  }
}