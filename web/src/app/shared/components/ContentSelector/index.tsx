import { StyledContentSelector } from "./styles";

interface IContentSelectorProps {
  title: string;
  link?: string;
}

export function ContentSelector({ title, link }: IContentSelectorProps) {
  return (
    <StyledContentSelector to={link || ""}>
      <li>
        <div className="image" />
        <p>{title}</p>
      </li>
    </StyledContentSelector>
  );
}
