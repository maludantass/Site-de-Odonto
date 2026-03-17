import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import primeiraFoto from "../assets/primeira.jpeg";
import estudandoFoto from "../assets/estudando.jpeg";
import jalecoFoto from "../assets/jaleco.jpeg";

function Jornada() {
  return (
    <>
      <Navbar />

      <main className="journey-page">
        <section className="journey-hero">
          <div className="journey-hero-text">
            <span className="section-tag">Minha jornada</span>
            <h1>Período após período, construindo meu caminho na odontologia</h1>
            <p>
              Cada fase da graduação tem seus próprios desafios, descobertas,
              amizades e aprendizados. Aqui quero registrar um pouco da minha
              trajetória na UFPE e de tudo o que venho vivendo até aqui.
            </p>

            <div className="journey-hero-buttons">
              <Link to="/" className="secondary-button">
                Voltar para início
              </Link>

              <a
                className="primary-button"
                href="https://www.instagram.com/stories/highlights/18283807702300118/"
                target="_blank"
                rel="noreferrer"
              >
                Ver Destaques
              </a>
            </div>
          </div>

          <div className="journey-hero-image-box">
            <img
              src={primeiraFoto}
              alt="Bel Raposo"
              className="journey-hero-image"
            />
          </div>
        </section>

        <section className="journey-intro-card">
          <h2>Uma trajetória feita de crescimento, afeto e descoberta</h2>
          <p>
            A odontologia entrou na minha vida como um sonho e, com o passar
            dos períodos, foi se tornando também uma construção diária. Essa
            página é uma forma de guardar memórias, reconhecer minha evolução e
            compartilhar um pouco dessa caminhada com quem acompanha minha
            história.
          </p>
        </section>

        <section className="timeline-modern">
          <div className="timeline-period">
            <div className="timeline-photo">
              <img src={estudandoFoto} alt="Primeiro período na faculdade" className="foto-primeiro-periodo" />
            </div>

            <div className="timeline-content">
              <span className="timeline-badge">1º período</span>
              <h3>O começo de tudo</h3>
              <p>
                O início da graduação foi marcado por ansiedade, entusiasmo e
                muitas descobertas. Era tudo novo: o ambiente, a rotina, as
                pessoas e a sensação de finalmente começar uma jornada tão
                sonhada.
              </p>
              <p>
                Foi também um período de acolhimento, criação de vínculos e
                primeiros passos dentro do universo da odontologia.
              </p>
            </div>
          </div>

          <div className="timeline-period reverse">
            <div className="timeline-photo">
              <img src={estudandoFoto} alt="Evolução na graduação" />
            </div>

            <div className="timeline-content">
              <span className="timeline-badge">2º e 3º períodos</span>
              <h3>Adaptação, amadurecimento e rotina</h3>
              <p>
                Com o passar dos períodos, fui entendendo melhor o ritmo da
                faculdade e me adaptando aos desafios da graduação. Vieram mais
                conteúdos, mais exigência e também mais segurança.
              </p>
              <p>
                Foi uma fase de crescimento acadêmico e pessoal, aprendendo a
                lidar com responsabilidades e construindo minha identidade como
                estudante de odontologia.
              </p>
            </div>
          </div>

          <div className="timeline-period">
            <div className="timeline-photo">
              <img src={estudandoFoto} alt="Vivências e amadurecimento" />
            </div>

            <div className="timeline-content">
              <span className="timeline-badge">4º período</span>
              <h3>Mais confiança no caminho</h3>
              <p>
                Nesse momento da jornada, a odontologia começou a fazer ainda
                mais sentido para mim. A vivência acadêmica ficou mais intensa e
                os aprendizados passaram a ter um peso ainda maior na forma como
                eu enxergo meu futuro.
              </p>
              <p>
                Foi uma etapa importante para fortalecer minha confiança e me
                aproximar da profissional que quero me tornar.
              </p>
            </div>
          </div>

          <div className="timeline-period reverse">
            <div className="timeline-photo">
              <img src={estudandoFoto} alt="Bel no quinto período" />
            </div>

            <div className="timeline-content">
              <span className="timeline-badge">5º período</span>
              <h3>Onde estou agora</h3>
              <p>
                Hoje estou vivendo uma fase de mais maturidade, consciência e
                aprofundamento. Continuo aprendendo todos os dias, mas já consigo
                olhar para trás e perceber o quanto cresci desde o começo.
              </p>
              <p>
                Ainda há muito pela frente, e isso é justamente o que torna essa
                trajetória tão especial.
              </p>
            </div>
          </div>
        </section>

        <section className="journey-quote">
          <p>
            “Cada período me aproxima um pouco mais da dentista que sonho em me
            tornar.”
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Jornada;