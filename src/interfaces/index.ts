export interface keyValue {
  label: string;
  value: number;
}

export interface IExam {
  id: number;
  value: string;
  isSelected: boolean;
  part: number;
}

export interface IAuthContextData {
  signed: boolean;
  loading: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signOut(): void;
}

export interface IUser {
  name: string;
  email: string;
}
