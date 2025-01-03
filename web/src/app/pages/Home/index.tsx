import { Footer, Header } from "../../shared/components";
import { StyledHome, StyledMain } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Header />

      <StyledMain>
        <section className="main-content">
          <h1>Seja Bem-vindo(a) ao Code with Nat!</h1>

          <p>
            Explore um universo de conhecimento técnico com documentações
            detalhadas e guias práticos sobre programação. Aqui, você
            encontrará:
          </p>

          <div className="items">
            <div>Tutoriais</div>
            <div>Documentações</div>
            <div>Gestão de Conteúdo</div>
          </div>

          <p>
            Aqui você encontrará tutoriais organizados e documentações de
            diversas linguagens, tudo pensado para facilitar o aprendizado e o
            desenvolvimento no dia a dia.
          </p>

          <p>
            Este espaço foi criado com carinho para ser uma fonte de consulta e
            inspiração. Aproveite sua visita!
          </p>
        </section>
      </StyledMain>

      <Footer />
    </StyledHome>
  );
}
