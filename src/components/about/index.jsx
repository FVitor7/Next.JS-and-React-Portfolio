import Title from "../title";

export default function About() {
  return (
    <>
      <section className="sectionsPage">
        <Title title={"Sobre"} />
        <div className="textAbout">
          <p>
            Programador FullStack e aluno do curso FullCycle, com experiência em
            desenvolvimento nas linguagens Python, JavaScript e TypeScript.
            Atualmente estou estudando e desenvolvendo microsserviços e sistemas
            de mensageria.
          </p>
          <br />
          <p>
            Tenho conhecimento em desenvolvimento de aplicações web com o
            framework Django e Flask, e também com o framework NestJS e Express.
            Alem de utilizar Next.JS e React.JS para a construção dos meus
            projetos web. Sou graduando em Matemática e Análise e
            Desenvolvimento de Sistemas. Resido na cidade de Paulo Afonso na
            Bahia. Atualmente trabalho como Desenvolvedor Full Stack na empresa
            Mercafacil.
          </p>
        </div>

        <div className="btnHome">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1HyPrHJNRBSHIijS5UTKPQs8Ia4pK8KoK/view"
          >
            <button>Download CV</button>
          </a>
        </div>
      </section>
    </>
  );
}
