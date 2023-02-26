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

export interface IOption {
  description: string;
}

export interface IQuesttionType {
  id: number;
  label: string;
  isActive: boolean;
}

export interface IQuestionResponse {
  id: number;
  description: string;
  allowComment: boolean;
  type: IQuesttionType;
  options: IOption[];
}

export interface INewPuerperalForm {
  Nome: string;
  "Data de nascimento": string;
  "Data de admissão": string;
  "Diagnóstico médico": string;
  "Dieta prescrita": string;
}

export interface IPsycologicalNeedsForm {
  "Estado civil": string;
  "Falta de apoio social": string;
  Escolaridade: string;
  "Falta de conhecimento sobre a amamentação": string;
  "Falta de conhecimento sobre a ordenha do leite materno": string;
  "Falta de conhecimento sobre a situação clínica do recém-nascido": string;
  "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica": string;
  "Falta de conhecimento sobre o autocuidado com as mamas": string;
  "Falta de conhecimento sobre os cuidados com recém-nascido": string;
  "Falta de conhecimento sobre o planejamento familiar": string;
  "Comunicação verbal prejudicada": string;
  Ansiedade: string;
  "Atitude familiar conflitante": string;
  "Maternidade/paternidade prejudicada": string;
  "Risco de maternidade/paternidade prejudicada": string;
  "Risco de vínculo mãe-filho prejudicado": string;
}
