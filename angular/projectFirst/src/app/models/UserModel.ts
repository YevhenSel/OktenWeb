import {CompanyModel} from './CompanyModel';

export class UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  company: CompanyModel;
}
