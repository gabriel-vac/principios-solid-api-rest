import { uuid } from 'uuidv4';

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  // todas as propriedades da classe User menos a ID
  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
