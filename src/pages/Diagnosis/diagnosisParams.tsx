export const DiagnosisJudgments = {
  "Edema periférico": {
    judgments: ["Presente", "Ausente"],
  },
  "Amamentação exclusiva": {
    judgments: ["Eficaz", "Prejudicada", "Interrompida"],
  },
  Constipação: {
    judgments: ["Presente", "Melhorada", "Ausente"],
  },
  "Eliminação urinária": {
    judgments: ["Eficaz", "Ausente"],
  },
  Sono: {
    judgments: ["Adequado", "Positivo", "Prejudicado"],
  },
  "Comportamento de repouso": {
    judgments: ["Adequado", "Positivo", "Prejudicado"],
  },
  Deambulação: {
    judgments: ["Eficaz", "Prejudicada", "Ausente"],
  },
  "Exaustão no período pós-parto": {
    judgments: ["Presente", "Ausente"],
  },
  "Fadiga no período pós-parto": {
    judgments: ["Presente", "Ausente"],
    actions: [
      "Encorajar repouso após o parto",
      "Explicar à paciente a causa da exaustão pós-parto.",
      "Implementar cuidados de conforto",
      "Promover ingestão nutricional positiva e hidratação",
    ],
  },
  "Higiene pessoal": {
    judgments: ["Eficaz", "Prejudicada"],
  },
  "Ferida cirúrgica (cicatrização)": {
    judgments: ["Eficaz", "Prejudicada"],
  },
  "Fissura na mama": {
    judgments: ["Presente", "Ausente"],
  },
  "Ingurgitamento mamário": {
    judgments: ["Presente", "Ausente"],
  },
  "Pressão sanguínea": {
    judgments: ["Eficaz", "Alterada - elevada", "Alterada - diminuída"],
  },
  "Risco de processo hemorrágico": {
    judgments: ["Baixo", "Elevado", "Ausente"],
  },
  "Risco de infecção": {
    judgments: ["Baixo", "Elevado", "Ausente"],
  },
  "Dor no período pós-parto": {
    judgments: ["Leve", "Moderada", "Melhorada", "Ausente"],
  },
  Ansiedade: {
    judgments: ["Ausente", "Presente", "Moderada"],
  },
  "Risco de parentalidade prejudicada": {
    judgments: ["Presente", "Parentalidade eficaz"],
  },
  "Risco de ligação afetiva pais-criança prejudicada": {
    judgments: ["Presente", "Ligação afetiva melhorada"],
  },
  "Conhecimento sobre amamentação": {
    judgments: ["Baixo", "Adequado"],
  },
  "Conhecimento sobre ordenha": {
    judgments: ["Baixo", "Adequado"],
  },
  "Conhecimento sobre recém-nascido": {
    judgments: ["Baixo", "Adequado"],
  },
  "Conhecimento sobre o cuidado com a ferida": {
    judgments: ["Baixo", "Adequado"],
  },
  "Regime de cuidados com as mamas": {
    judgments: ["Prejudicado", "Adequado"],
  },
  "Capacidade do cuidador para executar os cuidados com recém-nascido": {
    judgments: ["Baixo", "Adequado"],
  },
  "Planejamento familiar": {
    judgments: ["Prejudicado", "Adequado"],
  },
} as {
  [key: string]: {
    judgments: string[];
  };
};

export const DiagnosisActions = {
  "Edema periférico": {
    actions: [
      "Explicar causas do edema",
      "Avaliar grau de edema",
      "Avaliar pressão arterial",
      "Avaliar resposta à medicação administrada",
      "Explicar à cliente os cuidados com os pés edemaciados.",
      "Estimular exercícios passivos no leito",
      "Explicar necessidade de restrição de sódio na dieta",
      "Manter pernas elevadas",
      "Medir e registrar o débito de líquidos",
      "Monitorar integridade da pele e integridade tissular",
      "Monitorar proteinúria",
      "Monitorar sinais de congestão venosa.",
      "Motivar cuidado com os pés edemaciados.",
      "Motivar repouso no leito em decúbito lateral esquerdo",
      "Orientar restrição de líquidos",
      "Orientar uso de meias elásticas (terapia compressiva)",
      "Pesar a cliente diariamente",
      "Promover alívio das zonas de pressão nas pernas",
      "Aplicar compressa de gelo (Bolsa para compressa fria) na região vulvar.",
      "Avaliar cicatrização da vagina e períneo",
    ],
  },
  "Amamentação exclusiva": {
    actions: [
      "Avaliar conhecimento da paciente sobre amamentação",
      "Colaborar com a paciente no plano de amamentação",
      "Examinar mamas e mamilos",
      "Avaliar conforto durante a amamentação",
      "Orientar sobre cuidados com as mamas",
      "Orientar sobre ingestão de líquidos",
      "Supervisionar processo de amamentação",
      "Supervisionar a posição da mãe e do recém-nascido durante a amamentação",
      "Orientar técnicas de posicionamento para o recém-nascido durante a amamentação",
      "Demonstrar técnica de massagem e ordenha das mamas",
      "Elogiar desempenho da puérpera",
      "Promover técnica de contato pele-a-pele",
      "Orientar a mãe sobre a satisfação das necessidades nutricionais do recém-nascido",
    ],
  },
  Constipação: {
    actions: [
      "Obter dados sobre condição intestinal",
      "Monitorar sinais e sintomas de constipação",
      "Monitorar sinais e sintomas de impactação fecal",
      "Orientar sobre treinamento intestinal (massagem na região abdominal)",
      "Estimular a ingestão de líquidos",
      "Orientar sobre padrão de ingestão de alimentos",
      "Monitorar motilidade intestinal",
      "Orientar sobre medicação (óleos minerais ou supositório de glicerina conforme prescrição médica)",
      "Identificar efeito colateral de medicação",
      "Administrar enema, conforme apropriado",
      "Promover rotina intestinal",
      "Pesar a paciente regularmente",
      "Encorajar deambulação",
      "Proporcionar privacidade",
    ],
  },
  "Eliminação urinária": {
    actions: [
      "Estimular micção positiva ",
      "Identificar sinais e sintomas de infecção do trato urinário",
      "Cateterizar bexiga urinária, conforme apropriado",
      "Assegurar inserção correta do cateter urinário",
      "Orientar sobre cuidados com cateter urinário",
      "Registrar as características da drenagem urinária",
      "Implementar regime de cuidados com o cateter urinário",
      "Promover rotina vesical",
      "Proporcionar privacidade",
      "Suspender uso de cateter urinário",
    ],
  },
  Sono: {
    actions: [
      "Monitorar o padrão de sono e do repouso",
      "Identificar efeito colateral de medicação",
      "Ensinar a cliente técnicas de relaxamento",
      "Explicar a necessidade do sono e do repouso",
    ],
  },
  "Comportamento de repouso": {
    actions: [
      "Motivar rotina de hora para dormir",
      "Implementar plano de cuidados que não interfira no repouso da paciente",
      "Executar apoio emocional",
      "Orientar sobre apoio familiar",
      "Orientar a paciente a repousar enquanto o recém-nascido dorme",
    ],
  },
  Deambulação: {
    actions: [
      "Supervisionar deambulação da cliente",
      "Estimular mobilidade na cama",
      "Motivar deambulação no período pós-parto",
      "Orientar técnica de deambulação",
      "Estimular deambulação com frequência progressiva",
    ],
  },
  "Exaustão no período pós-parto": {
    actions: [
      "Encorajar repouso após o parto",
      "Explicar à paciente a causa da exaustão pós-parto",
      "Implementar cuidados de conforto",
      "Promover ingestão nutricional positiva e hidratação",
    ],
  },
  "Fadiga no período pós-parto": {
    actions: [
      "Encorajar repouso após o parto",
      "Explicar à paciente a causa da exaustão pós-parto",
      "Implementar cuidados de conforto",
      "Promover ingestão nutricional positiva e hidratação",
    ],
  },
  "Higiene pessoal": {
    actions: [
      "Educar sobre autocuidado",
      "Orientar sobre padrão de higiene",
      "Estimular hábitos diários de higiene",
      "Estabelecer horário e rotina do banho/higiene",
      "Orientar práticas higiênicas para o uso e a troca de absorventes",
      "Proporcionar privacidade durante a rotina de banho/higiene",
      "Ajudar na realização da higiene íntima no pós-parto imediato",
      "Orientar sobre a higiene do períneo após micção/evacuação",
      "Promover higiene oral",
      "Facilitar a higiene, por si próprio",
      "Assegurar a privacidade da paciente",
    ],
  },
  "Ferida cirúrgica (cicatrização)": {
    actions: [
      "Avaliar cicatrização da ferida",
      "Orientar sobre cicatrização de ferida",
      "Orientar sobre cuidados com ferida",
      "Motivar cuidados de higiene com a ferida cirúrgica",
      "Inspecionar o períneo",
      "Monitorar a temperatura corporal",
      "Monitorar sangramento da ferida cirúrgica",
      "Monitorar sinais e sintomas de infecção",
      "Orientar quanto à importância da higiene corporal e íntima",
      "Orientar sobre os sinais e os sintomas de infecção",
    ],
  },
  "Fissura na mama": {
    actions: [
      "Examinar características da fissura mamilar",
      "Avaliar a posição da mãe e recém-nascido durante a amamentação",
      "Orientar a mãe a realizar a massagem e ordenha das mamas",
      "Orientar sobre cuidados com as mamas (evitar manipulação excessiva dos mamilos, uso de sabonetes, cremes e pomadas na região aréolo-mamilar, orientar higiene das mamas e exposição ao sol, aplicar leite humano nos mamilos após cada mamada)",
      "Orientar técnicas de posicionamento para o recém-nascido durante a amamentação",
    ],
  },
  "Ingurgitamento mamário": {
    actions: [
      "Avaliar mamas diariamente",
      "Avaliar a capacidade da criança de apreender a região aréolo-mamilar",
      "Orientar a importância da pega correta do recém-nascido durante a mamada",
      "Orientar a mãe a realizar a massagem e ordenha das mamas",
      "Estimular mamadas frequentes e regulares",
      "Explicar a causa do ingurgitamento mamário",
      "Aplicar compressa fria, sob supervisão profissional",
      "Massagear e ordenhar as mamas antes da mamada",
    ],
  },
  "Pressão sanguínea": {
    actions: [
      "Monitorar pressão arterial",
      "Motivar adesão ao regime medicamentoso",
      "Motivar ingestão de líquidos",
      "Controlar infusões venosas",
      "Monitorar balanço hídrico",
      "Monitorar sinais e sintomas neurológicos (vertigem, escotomas, sonolência, confusão mental, síncope)",
      "Observar sinais de sangramento",
      "Orientar repouso relativo",
    ],
  },
  "Risco de processo hemorrágico": {
    actions: [
      "Monitorar sangramento vaginal",
      "Ensinar sobre sinais de sangramento vaginal alterado",
      "Manter acesso intravenoso",
      "Identificar etiologia do sangramento vaginal",
      "Inspecionar características do sangramento (cor, odor, intensidade e presença de coágulos)",
      "Gerenciar cuidados pós-parto",
      "Gerenciar terapia com líquidos (hidratação)",
      "Monitorar contração uterina (tonicidade e involução do útero)",
      "Identificar sinais de choque hipovolêmico",
      "Monitorar sinais vitais",
    ],
  },
  "Risco de infecção": {
    actions: [
      "Avaliar cicatrização da ferida",
      "Orientar sobre cicatrização da ferida",
      "Orientar sobre cuidados com a ferida ",
      "Educar sobre cuidados perineais",
      "Monitorar sinais e sintomas de infecção",
      "Orientar quanto à importância da higiene corporal e íntima",
      "Monitorar temperatura corporal",
    ],
  },
  "Dor no período pós-parto": {
    actions: [
      "Registrar características da dor",
      "Aplicar compressa fria ou quente, de acordo com a necessidade",
      "Administrar medicação para dor",
      "Avaliar resposta a medicação",
      "Avaliar resposta ao manejo da dor",
      "Orientar sobre dor",
      "Promover conforto",
      "Encorajar repouso",
      "Implementar cuidados pós-parto",
    ],
  },
  Ansiedade: {
    actions: [
      "Identificar atitude em relação ao cuidado",
      "Ajudar a paciente a reconhecer sua ansiedade",
      "Explicar sobre o plano de cuidados",
      "Executar apoio emocional",
      "Ensinar técnica de relaxamento",
      "Monitorar o nível de ansiedade",
      "Promover conforto (ambiente tranquilo, redução dos estímulos visuais e auditivos)",
      "Encorajar afirmações positivas",
      "Encaminhar para assistente social",
      "Estimular mecanismos de adaptação sadios",
    ],
  },
  "Risco de parentalidade prejudicada": {
    actions: [
      "Encorajar a comunicação de sentimentos e preocupações",
      "Orientar sobre o cuidado com o recém-nascido",
      "Promover técnica de contato pele-a-pele",
      "Estimular na participação dos cuidados com recém-nascido",
      "Estimular visitas ao recém-nascido",
      "Incentivar a amamentação exclusiva",
    ],
  },
  "Risco de ligação afetiva pais-criança prejudicada": {
    actions: [
      "Promover técnica de contato pele-a-pele",
      "Estimular na participação dos cuidados com recém-nascido",
      "Estimular visitas ao recém-nascido",
      "Incentivar a amamentação exclusiva",
      "Orientar a importância do vínculo mãe-filho",
      "Supervisionar a paciente durante a amamentação",
      "Elogiar a mãe durante a amamentação",
      "Informar sobre a condição saúde do recém-nascido",
      "Orientar sobre cuidados com recém-nascido",
      "Orientar sobre importância da amamentação exclusiva",
      "Prover apoio emocional",
      "Estimular a paciente a desempenhar seu papel de mãe",
      "Elogiar a paciente durante o desempenho do papel de mãe",
    ],
  },
  "Conhecimento sobre amamentação": {
    actions: [
      "Avaliar conhecimento sobre amamentação",
      "Avaliar disposição para aprender",
      "Ensinar sobre o processo de amamentação",
      "Ensinar sobre posicionamento do recém-nascido durante a amamentação",
      "Colaborar com a paciente no plano de amamentação",
      "Fornecer material de instrução sobre amamentação",
      "Encaminhar para grupo de apoio à amamentação",
    ],
  },
  "Conhecimento sobre ordenha": {
    actions: [
      "Reforçar a importância da massagem e ordenha das mamas",
      "Avaliar a técnica de massagem e ordenha manual",
      "Demonstrar técnica de massagem e ordenha das mamas",
      "Supervisionar capacidade da mãe em massagear e ordenhar as mamas",
      "Demonstrar técnica de administração de leite por copinho",
    ],
  },
  "Conhecimento sobre recém-nascido": {
    actions: [
      "Avaliar conhecimento sobre a situação clínica do recém-nascido",
      "Avaliar disposição para aprender",
      "Informar sobre a situação clínica do recém-nascido",
      "Facilitar o conhecimento sobre processo patológico",
      "Facilitar o conhecimento sobre regime terapêutico",
      "Avaliar resposta psicossocial à instrução",
      "Instruir acerca de regime terapêutico (consultas, exames, medicações, vacinas do recém-nascido)",
    ],
  },
  "Conhecimento sobre o cuidado com a ferida": {
    actions: [
      "Avaliar disposição para aprender",
      "Avaliar capacidade para executar o autocuidado",
      "Avaliar o conhecimento sobre autocuidado com a ferida cirúrgica",
      "Ensinar sobre cuidados com a ferida cirúrgica",
      "Ensinar sobre cuidados com o períneo (episiorrafia)",
      "Instruir sobre o período adequado para remoção de sutura",
      "Reforçar padrão de higiene",
      "Avaliar resposta à instrução sobre ferida",
    ],
  },
  "Regime de cuidados com as mamas": {
    actions: [
      "Avaliar a disposição para aprender",
      "Avaliar o conhecimento sobre o cuidado com as mamas",
      "Ensinar sobre cuidados diários com as mamas",
      "Encorajar o autocuidado",
      "Reforçar padrão de higiene",
    ],
  },
  "Capacidade do cuidador para executar os cuidados com recém-nascido": {
    actions: [
      "Avaliar disposição para aprender",
      "Avaliar o conhecimento sobre os cuidados com o recém-nascido",
      "Orientar sobre os cuidados com recém-nascido",
      "Encorajar a execução dos cuidados com o recém-nascido",
      "Ensinar sobre o desenvolvimento do bebê",
      "Demonstrar como realizar os cuidados com o bebê",
      "Encorajar a verbalização de sentimentos e preocupações",
      "Reforçar amamentação exclusiva",
      "Instruir acerca de regime terapêutico (consultas, exames, medicações, vacinas do recém-nascido, consultas de puericultura)",
    ],
  },
  "Planejamento familiar": {
    actions: [
      "Avaliar conhecimento da paciente sobre planejamento familiar",
      "Avaliar disposição para aprender",
      "Aconselhar sobre comportamento sexual",
      "Encorajar comportamento de busca de saúde",
      "Motivar amamentação exclusiva",
      "Encaminhar para serviço de planejamento familiar",
      "Orientar sobre a importância do acompanhamento no período pós-parto (consulta puerperal)",
      "Orientar sobre uso de contraceptivo",
    ],
  },
} as {
  [key: string]: {
    actions: string[];
  };
};
