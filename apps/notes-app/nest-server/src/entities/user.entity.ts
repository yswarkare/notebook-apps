import { NotebookEn } from './notebook.entity';

export class UserEn {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  email: string;

  createdAt: Date;
  updatedAt?: Date;
  role: 'ADMIN' | 'EDITOR' | 'USER';
  notebooks?: Array<NotebookEn>;
}
