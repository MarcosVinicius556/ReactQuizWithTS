import { IQuestion } from "../interfaces/Question";

const data: IQuestion[] = [
      {
        question: "Qual é a finalidade do TypeScript?",
        options: ["Facilitar a escrita de código JavaScript", "Criar aplicativos móveis", "Gerenciar bancos de dados", "Desenvolver jogos"],
        answer: "Facilitar a escrita de código JavaScript"
      },
      {
        question: "O que é o TypeScript?",
        options: ["Um framework para back-end", "Uma linguagem de programação", "Um superset de JavaScript", "Um sistema de gerenciamento de banco de dados"],
        answer: "Um superset de JavaScript"
      },
      {
        question: "Qual é a extensão dos arquivos TypeScript?",
        options: [".ts", ".js", ".html", ".css"],
        answer: ".ts"
      },
      {
        question: "Como declaramos uma variável em TypeScript?",
        options: ["const", "var", "let", "Todas as anteriores"],
        answer: "Todas as anteriores"
      },
      {
        question: "Qual é o comando para compilar um arquivo TypeScript em JavaScript?",
        options: ["tsc", "compile", "ts-compile", "convert"],
        answer: "tsc"
      },
      {
        question: "O TypeScript oferece suporte a qual sistema de tipos?",
        options: ["Tipagem dinâmica", "Tipagem estática", "Tipagem fraca", "Tipagem forte"],
        answer: "Tipagem estática"
      },
      {
        question: "Qual é a principal vantagem do uso do TypeScript?",
        options: ["Melhor desempenho", "Mais recursos visuais", "Detecção de erros em tempo de compilação", "Integração com bancos de dados"],
        answer: "Detecção de erros em tempo de compilação"
      },
      {
        question: "Como podemos definir tipos de dados personalizados em TypeScript?",
        options: ["Usando palavras-chave especiais", "Não é possível definir tipos de dados personalizados", "Usando interfaces e tipos", "Apenas usando classes"],
        answer: "Usando interfaces e tipos"
      },
      {
        question: "O que é um módulo em TypeScript?",
        options: ["Um bloco de código JavaScript", "Uma função", "Um tipo de dados", "Um arquivo que pode conter valores, funções, classes"],
        answer: "Um arquivo que pode conter um ou mais valores, funções ou classes"
      },
      {
        question: "Qual é o método preferido para instalar o TypeScript?",
        options: ["Baixar diretamente do site oficial", "Usar npm (Node Package Manager)", "Instalar manualmente", "Usar yarn"],
        answer: "Usar npm (Node Package Manager)"
      }
    ];
    
export default data;