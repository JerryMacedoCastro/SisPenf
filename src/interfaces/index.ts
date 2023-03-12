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
export interface IFormattedDate {
  date: Date;
  formattedDate: string;
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

export interface ISpiritualNeedsForm {
  "Angústia espiritual": string;
  "Sofrimento espiritual": string;
  "Risco de sofrimento espiritual": string;
}

export interface IPsycobiologicNeedsForm {
  Gesta: string;
  Para: string;
  Aborto: string;
  "Número de filhos vivos": string;
  "Pré-natal": string;
  "Número de consultas": string;
  "Intercorrências na gestação": string;
  "Doenças associadas": string;
  Alergias: string;
  "Uso de medicamentos": string;
  "Anti-HIV": string;
  VDRL: string;
  "Classificação sanguínea e fator RH": string;
  Outro: string;
  "Uso de substâncias lícitas e/ou ilícitas": string;
  "Data do parto": string;
  "Hora do parto": string;
  Gestação: string;
  "Tipo de parto": string;
  RPMO: string;
  "Tempo de bolsa rota até o parto": string;
}

export interface IFirstPhysicalExamForm {
  "Condições gerais": string;
  "Estado mental": string;
  Pele: string;
  Cabelo: string;
  Cabeça: string;
  Olhos: string;
  Ouvidos: string;
  "Nariz e seios nasais": string;
  "Boca e garganta": string;
  Pescoço: string;
  Mamas: string;
  Axila: string;
}

export interface IFirstPhysicalExamForm {
  "Condições gerais": string;
  "Estado mental": string;
  Pele: string;
  Cabelo: string;
  Cabeça: string;
  Olhos: string;
  Ouvidos: string;
  "Nariz e seios nasais": string;
  "Boca e garganta": string;
  Pescoço: string;
  Mamas: string;
  Axila: string;
}

export interface ISecondPhysicalExamForm {
  "Sistema respiratório": string;
  "Sistema cardiovascular": string;
  "Sistema vascular periférico": string;
  "Sistema gastrointestinal": string;
  "Sistema urinário": string;
  "Sistema gincológico/obstétrico": string;
  "Saúde sexual": string;
  "Sistema musculoesquelético": string;
  "Sistema neurológico": string;
  "Sistema hematológico": string;
  "Sistema endócrino": string;
  Autocuidado: string;
}
