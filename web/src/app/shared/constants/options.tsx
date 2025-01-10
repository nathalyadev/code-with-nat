import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

// const StyledIcon: React.FC<{ icon: JSX.Element }> = ({ icon }) =>
//   React.cloneElement(icon);

const frontEnd: Models.DropdownOption[] = [
  {
    title: "React",
    icon: <IoLogoReact />,
    description:
      "Uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces de usuário baseadas em componentes reutilizáveis.",
  },
  {
    title: "React Native",
    icon: <IoLogoReact />,
    description:
      "Uma extensão do React para desenvolvimento de aplicativos móveis multiplataforma, permitindo criar apps nativos com JavaScript.",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    description:
      "Um superconjunto de JavaScript que adiciona tipagem estática e outros recursos avançados.",
  },
  {
    title: "JavaScript",
    icon: <SiTypescript />,
    description:
      "Uma linguagem de programação que permite criar interatividade em páginas web.",
  },
  {
    title: "HTML",
    icon: <SiTypescript />,
    description:
      "Uma linguagem de marcação para estruturar e apresentar o conteúdo de páginas web.",
  },
  {
    title: "CSS",
    icon: <SiTypescript />,
    description:
      "Uma linguagem de estilo usada para definir o layout, cores, fontes e outras características visuais de uma página web.",
  },
];

const backEnd: Models.DropdownOption[] = [];

const mobile: Models.DropdownOption[] = [];

const sql: Models.DropdownOption[] = [];

export const dropdownOptions = {
  frontEnd,
  backEnd,
  mobile,
  sql,
};
