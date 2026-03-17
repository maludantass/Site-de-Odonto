import { Link } from "react-router-dom";
import postOncologia from "../assets/oncologia.png";
import postCriancas from "../assets/crianca.jpeg";
import postMaos from "../assets/maos.png";
import postRetrospectiva from "../assets/retrospectiva.png";
import postEscova from "../assets/escova.jpeg";
import postEu from "../assets/eu.png";
import postPaciente from "../assets/paciente.png";
import postMigos from "../assets/migos.jpeg";
import postErupcao from "../assets/erupcao.jpeg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import belFoto from "../assets/bel.jpg";
import heroFoto from "../assets/hero.png";

import VideoPostCard from "../components/VideoPostCard";
import ImagePostCard from "../components/ImagePostCard";

function ContentSection() {
  function diasDesde(dataPost) {
    const hoje = new Date();
    const data = new Date(dataPost);
    const diff = hoje - data;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (dias === 0) return "Hoje";
    if (dias === 1) return "Há 1 dia";

    if (dias < 30) {
      return `Há ${dias} dias`;
    }

    const meses = Math.floor(dias / 30);

    if (meses === 1) return "Há 1 mês";

    return `Há ${meses} meses`;
  }

  const posts = [
    {
      id: 1,
      type: "video",
      video: video1,
      category: "Conteúdo educativo",
      title: "Fato curioso sobre unhas de acrílico",
      description:
        "Legal né?? Unhas e dentes são tão diferentes mas tem suas semelhanças 🦷💅🩷 #odonto #unhas",
      link: "https://www.instagram.com/p/DV6IBP9jble/",
      date: "2026-03-15",
    },
    {
      id: 2,
      type: "image",
      image: postOncologia,
      category: "Conteúdo educativo",
      title: "Atividade de oncologia oral",
      description: "Atividade de oncologia oral 🦷❤️",
      link: "https://www.instagram.com/p/DVyx5jrkaLS/?img_index=1",
      date: "2026-03-12",
    },
    {
      id: 3,
      type: "video",
      video: video3,
      category: "Vida Pessoal",
      title: "Arrume-se comigo",
      description: "GRWM para meu primeiro dia no 5º períodoooo!! Que seja massa 🩷",
      link: "https://www.instagram.com/p/DVZtgK4DYvM/",
      date: "2026-03-02",
    },
    {
      id: 4,
      type: "image",
      image: postCriancas,
      category: "Ação Voluntária",
      title: "Mais perto da dentista que quero ser",
      description: "Dia de muito Amor em ação 🩷",
      link: "https://www.instagram.com/p/DRr_TSvDV1P/?img_index=10",
      date: "2025-11-30",
    },
    {
      id: 5,
      type: "image",
      image: postMaos,
      category: "Aula Prática",
      title: "Aprendizados que fazem parte do caminho",
      description:
        "Deixando aqui no feed pq achei muito bonitinhas as fotos ❤️ Aula prática de como lavar as mãos corretamente 😋",
      link: "https://www.instagram.com/p/DOt-Xh4j0UU/?img_index=1",
      date: "2025-09-17",
    },
    {
      id: 6,
      type: "image",
      image: postRetrospectiva,
      category: "Construção profissional",
      title: "Retrospectiva do 3° período",
      description:
        "Aproveitando as férias pra fazer uma retrospectiva desse período maravilhosoooo!! Ganhei MUITOS aprendizados. Foi o período que eu mais gostei até então!! Te espero, 4P!! 🩷",
      link: "https://www.instagram.com/odonto.bel_/",
      date: "2025-08-21",
    },
    {
      id: 7,
      type: "video",
      video: video1,
      category: "Conteúdo Educativo",
      title: "Fato Curioso",
      description: "Leia a legenda completa no Instagram",
      link: "https://www.instagram.com/p/DMqqDodPkVL/",
      date: "2025-07-28",
    },
    {
      id: 8,
      type: "video",
      video: video2,
      category: "Conteúdo Educativo",
      title: "Fato Curioso",
      description:
        "Surfando na onda do morango do amor e explicando um pouco o que é cárie 🦷 😘 Aproveitem seus docinhos e depois escovem os dentes kkkkkkkkk 🍓♥️ #morangodoamor",
      link: "https://www.instagram.com/p/DMgXTo1v5MZ/",
      date: "2025-07-24",
    },
    {
      id: 9,
      type: "video",
      video: video5,
      category: "Conteúdo Educativo",
      title: "Como passar o fio dental?",
      description: "Mais um vídeo pra aprender 🩷",
      link: "https://www.instagram.com/p/DK94LZ1Me4H/",
      date: "2025-06-16",
    },
    {
      id: 10,
      type: "video",
      video: video4,
      category: "Conteúdo Educativo",
      title: "Como escovar os dentes?",
      description:
        "Esse vídeo vai te ajudar!! Bora cuidar da saúde bucal? 🪥🦷",
      link: "https://www.instagram.com/p/DKr0tJHMebw/",
      date: "2025-06-09",
    },
    {
      id: 11,
      type: "image",
      image: postEscova,
      category: "Conteúdo Educativo",
      title: "Como escolher sua escova?",
      description: "Bora aprender? 🪥🦷🩷",
      link: "https://www.instagram.com/p/DKiX92Yv7Tj/?img_index=1",
      date: "2025-06-05",
    },
    {
      id: 12,
      type: "image",
      image: postEu,
      category: "Sobre mim",
      title: "Quem sou eu?",
      description: "Prazer 😁🩷 (demorou mas postei)",
      link: "https://www.instagram.com/p/DKabnO9vTEI/",
      date: "2025-06-02",
    },
    {
      id: 13,
      type: "image",
      image: postMigos,
      category: "Construção profissional",
      title: "DUMP de Maio",
      description:
        "DUMP DE MAIO com alegria, estudo, muita chuva e muito amor 🩷",
      link: "https://www.instagram.com/p/DKVSdcGPMs-/?img_index=1",
      date: "2025-05-31",
    },
    {
      id: 14,
      type: "image",
      image: postErupcao,
      category: "Conteúdo Educativo",
      title: "Erupção Dentária",
      description:
        "Trazendo novos conhecimentos e tirando algumas dúvidas sobre a erupção dentária!! 😁 Espero que gostem 🩷🦷🤓",
      link: "https://www.instagram.com/p/DKK-dRdvr5S/?img_index=1",
      date: "2025-05-27",
    },
    {
      id: 15,
      type: "video",
      video: video1,
      category: "Vida pessoal",
      title: "Vlog do meu dia",
      description:
        "Terçou comigooo🩷",
      link: "https://www.instagram.com/p/DJ67CP9NFD_/",
      date: "2025-05-21",
    },
    {
      id: 16,
      type: "image",
      image: postPaciente,
      category: "Construção profissional",
      title: "Primeiro Paciente",
      description:
        "Meu primeiro paciente 💙🦷 Luanzinho, futuro jogador do Real 😁⚽️",
      link: "https://www.instagram.com/p/DJaEQ3wPzKd/",
      date: "2025-05-08",
    },
  ];

  return (
    <section className="section" id="conteudos">
      <div className="content-header content-header-beautiful">
        <div className="content-top-left">
          <span className="section-tag">Conteúdos</span>
          <Link to="/" className="back-button">
            ← Voltar para início
          </Link>
        </div>

        <div className="content-title-center">
          <h2>Posts, aprendizados e momentos da jornada</h2>
          <p>
            Uma seleção de conteúdos do Instagram que representam minha rotina,
            meus estudos e temas importantes da odontologia.
          </p>
        </div>

        <a
          className="content-instagram-link"
          href="https://www.instagram.com/odonto.bel_/"
          target="_blank"
          rel="noreferrer"
        >
          Ver perfil no Instagram
        </a>
      </div>

      <div className="content-feed-grid instagram-style-feed">
        {posts.map((post) =>
          post.type === "video" ? (
            <VideoPostCard
              key={post.id}
              post={post}
              belFoto={belFoto}
              diasDesde={diasDesde}
            />
          ) : (
            <ImagePostCard
              key={post.id}
              post={post}
              belFoto={belFoto}
              diasDesde={diasDesde}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ContentSection;