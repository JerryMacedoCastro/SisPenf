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

export interface IPatient {
  id: number;
  name: string;
  birthDate: Date;
  admissionDate: Date;
  isActive: boolean;
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

export interface IOptionChecked {
  description: string;
  checked: boolean;
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

export interface IAnswer {
  id: number;
  comment: string;
  createdAt: Date;
  patient: IPatient;
  description: string;
  question: {
    id: number;
    description: string;
    allowComment: boolean;
  };
  selectedOptions: { id: number; description: string }[];
  selectedDiagnoses: { id: number; description: string }[];
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
export type PsycologicalNeedsType =
  | "Estado civil"
  | "Falta de apoio social"
  | "Escolaridade"
  | "Falta de conhecimento sobre a amamentação"
  | "Falta de conhecimento sobre a ordenha do leite materno"
  | "Falta de conhecimento sobre a situação clínica do recém-nascido"
  | "Falta de conhecimento sobre o autocuidado com a ferida cirúrgica"
  | "Falta de conhecimento sobre o autocuidado com as mamas"
  | "Falta de conhecimento sobre os cuidados com recém-nascido"
  | "Falta de conhecimento sobre o planejamento familiar"
  | "Comunicação verbal prejudicada"
  | "Ansiedade"
  | "Atitude familiar conflitante"
  | "Maternidade/paternidade prejudicada"
  | "Risco de maternidade/paternidade prejudicada"
  | "Risco de vínculo mãe-filho prejudicado";

export interface ISpiritualNeedsForm {
  "Angústia espiritual": string;
  "Sofrimento espiritual": string;
  "Risco de sofrimento espiritual": string;
}

export type SpiritualneedsType =
  | "Angústia espiritual"
  | "Sofrimento espiritual"
  | "Risco de sofrimento espiritual";

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

export type PsycobiologicNeedstype =
  | "Gesta"
  | "Para"
  | "Aborto"
  | "Número de filhos vivos"
  | "Pré-natal"
  | "Número de consultas"
  | "Intercorrências na gestação"
  | "Doenças associadas"
  | "Alergias"
  | "Uso de medicamentos"
  | "Anti-HIV"
  | "VDRL"
  | "Classificação sanguínea e fator RH"
  | "Outro"
  | "Uso de substâncias lícitas e/ou ilícitas"
  | "Data do parto"
  | "Hora do parto"
  | "Gestação"
  | "Tipo de parto"
  | "RPMO"
  | "Tempo de bolsa rota até o parto";

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

export type FirstPhysicalExamType =
  | "Condições gerais"
  | "Estado mental"
  | "Pele"
  | "Cabelo"
  | "Cabeça"
  | "Olhos"
  | "Ouvidos"
  | "Nariz e seios nasais"
  | "Boca e garganta"
  | "Pescoço"
  | "Mamas"
  | "Axila";

export interface IParamsDiagnosis {
  judgments: string[];
  actions: string[];
}

export interface IFocusDiagnosisForm {
  "Edema periférico": IParamsDiagnosis;
  "Amamentação exclusiva": IParamsDiagnosis;
  Constipação: IParamsDiagnosis;
  "Eliminação urinária": IParamsDiagnosis;
  Sono: IParamsDiagnosis;
  "Comportamento de repouso": IParamsDiagnosis;
  Deambulação: IParamsDiagnosis;
  "Exaustão no período pós-parto": IParamsDiagnosis;
  "Fadiga no período pós-parto": IParamsDiagnosis;
  "Higiene pessoal": IParamsDiagnosis;
  "Ferida cirúrgica (cicatrização)": IParamsDiagnosis;
  "Fissura na mama": IParamsDiagnosis;
  "Ingurgitamento mamário": IParamsDiagnosis;
  "Pressão sanguínea": IParamsDiagnosis;
  "Risco de processo hemorrágico": IParamsDiagnosis;
  "Risco de infecção": IParamsDiagnosis;
  "Dor no período pós-parto": IParamsDiagnosis;
  Ansiedade: IParamsDiagnosis;
  "Risco de parentalidade prejudicada": IParamsDiagnosis;
  "Risco de ligação afetiva pais-criança prejudicada": IParamsDiagnosis;
  "Conhecimento sobre amamentação": IParamsDiagnosis;
  "Conhecimento sobre ordenha": IParamsDiagnosis;
  "Conhecimento sobre recém-nascido": IParamsDiagnosis;
  "Conhecimento sobre o cuidado com a ferida ": IParamsDiagnosis;
  "Regime de cuidados com as mamas": IParamsDiagnosis;
  "Capacidade do cuidador para executar os cuidados com recém-nascido": IParamsDiagnosis;
  "Planejamento familiar ": IParamsDiagnosis;
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
  "Sistema ginecológico/obstétrico": string;
  "Saúde sexual": string;
  "Sistema musculoesquelético": string;
  "Sistema neurológico": string;
  "Sistema hematológico": string;
  "Sistema endócrino": string;
  Autocuidado: string;
}

export type SecondPhysicalExamType =
  | "Sistema respiratório"
  | "Sistema cardiovascular"
  | "Sistema vascular periférico"
  | "Sistema gastrointestinal"
  | "Sistema urinário"
  | "Sistema ginecológico/obstétrico"
  | "Saúde sexual"
  | "Sistema musculoesquelético"
  | "Sistema neurológico"
  | "Sistema hematológico"
  | "Sistema endócrino"
  | "Autocuidado";

export interface IPatientEvolution {
  Evolução: string;
}
