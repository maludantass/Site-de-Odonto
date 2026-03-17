function AboutSection() {
  return (
    <section className="section" id="sobre">
      <div className="section-header">
        <span className="section-tag">Quem sou eu</span>
        <h2>Uma futura dentista em construção</h2>
      </div>

      <div className="about-card">
        <div className="about-text">
          <p>
            Sou Maria Isabel Raposo, estudante de Odontologia da UFPE, e gosto
            de compartilhar minha rotina, meus aprendizados e a caminhada que
            venho construindo dentro da graduação.
          </p>

          <p>
            Esse site é um pedacinho mais pessoal da minha trajetória: um lugar
            para reunir quem eu sou, o que estou vivendo na faculdade e o que
            venho descobrindo sobre a odontologia ao longo do caminho.
          </p>

          <p>
            Mais do que falar sobre dentes, quero dividir experiências,
            crescimento, curiosidades e tudo aquilo que faz parte da formação
            de uma estudante que sonha em cuidar de pessoas através do sorriso.
          </p>
        </div>

        <div className="about-info">
          <div className="info-box">
            <strong>Nome</strong>
            <span>Maria Isabel Raposo</span>
          </div>

          <div className="info-box">
            <strong>Curso</strong>
            <span>Odontologia</span>
          </div>

          <div className="info-box">
            <strong>Universidade</strong>
            <span>UFPE</span>
          </div>

          <div className="info-box">
            <strong>Período</strong>
            <span>5º período</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;