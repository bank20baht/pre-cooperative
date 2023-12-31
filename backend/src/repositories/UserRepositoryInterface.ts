import Users from 'src/users/users.model';

export default interface UserRepositoryInterface {
  all(): Promise<Users[]>;
  find(id: string): Promise<Users>;
  create(data: object): Promise<Users>;
  findOneWithUserName(username: string): Promise<Users>;
}
