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
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IInfirmariesResponse {
  id: number;
  description: string;
  isActive: true;
  hospital: {
    id: number;
    name: string;
    isActive: true;
    createdAt: Date;
  };
}

export interface IHospitalBedResponse {
  id: number;
  description: string;
  isFilled: boolean;
  infirmary: {
    id: number;
    description: string;
    isActive: boolean;
  };
}

export interface IPatientResponse {
  id: number;
  name: string;
  birthDate: Date;
  admissionDate: Date;
  isActive: boolean;
  hospitalBed: {
    id: number;
    description: string;
    isFilled: boolean;
    infirmary: {
      id: number;
      description: string;
      isActive: boolean;
    };
  };
}

export interface IAnswerResponse {
  id: number;
  description: string;
  allowComment: boolean;
  type: {
    id: number;
    label: string;
    isActive: boolean;
  };
  options: [
    {
      option: number;
    }
  ];
}

export interface IQuestionAnswer {
  question: string;
  answer: string;
}
