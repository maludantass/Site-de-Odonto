function ContentSection() {
  return (
    <section className="section" id="conteudos">
      <div className="section-header">
        <span className="section-tag">Conteúdos</span>
        <h2>O que você encontra por aqui</h2>
      </div>

      <div className="content-grid">
        <div className="content-card">
          <h3>Rotina universitária</h3>
          <p>
            Vivências reais da graduação, desafios do dia a dia e momentos que
            fazem parte da minha trajetória.
          </p>
        </div>

        <div className="content-card">
          <h3>Aprendizados em odontologia</h3>
          <p>
            Assuntos que vou descobrindo ao longo do curso, de forma leve,
            visual e acessível.
          </p>
        </div>

        <div className="content-card">
          <h3>Minha evolução</h3>
          <p>
            Um espaço para registrar fases, mudanças, experiências e tudo o que
            estou construindo como futura dentista.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;