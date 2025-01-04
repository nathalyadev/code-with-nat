import { ContentSelector, Footer, Header } from "../../shared/components";
import { StyledHome, StyledMain } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Header />

      <StyledMain>
        <section className="main-content">
          <h1>Seja Bem-vindo(a) ao Code with Nat!</h1>

          <div className="container">
            <p>
              Explore um universo de conhecimento técnico com documentações
              detalhadas e guias práticos sobre programação. Aqui, você
              encontrará:
            </p>

            <ul className="items">
              <ContentSelector title="Tutoriais" link="" />
              <ContentSelector title="Documentações" link="" />
              <ContentSelector title="Gestão de Conteúdo" link="" />
            </ul>

            <div className="helper-text">
              <p>
                Aqui você encontrará tutoriais organizados e documentações de
                diversas linguagens, tudo pensado para facilitar o aprendizado e
                o desenvolvimento no dia a dia.
              </p>
              <p>
                Este espaço foi criado com carinho para ser uma fonte de
                consulta e inspiração. Aproveite sua visita!
              </p>
            </div>
          </div>
        </section>
      </StyledMain>

      <Footer />
    </StyledHome>
  );
}
