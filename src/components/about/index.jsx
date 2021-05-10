import Title from '../title'

export default function About() {

    return(
        <>
        <section className="sectionsPage">
           <Title title={'Sobre'} />
            <div className="textAbout">
                <p>
                Atualmente com 23 anos, solteiro e sem filhos. Sou desenvolvedor fullstack com experiência em desenvolvimento front end e back end. Estou sempre me especializando para ter mais  facilidade no trabalho em equipe, atuando com metodologias ágeis. Possuo um conhecimento sólido em Python. Alem do estudo diario para me aprofundar ainda mais no JavaScript. 
                </p>
                <br/>
                <p>
                Tenho habilidade para criar e consumir APIs Rest.
                Possuo conhecimentos sólidos com o framework Next.Js e React.
                Sou graduando em Matemática, e resido na cidade de Paulo Afonso na Bahia.
                Atualmente trabalhando como Auxiliar Administrativo na Horizont Estética Integrada e como Freelancer pela plataforma 99freelas.
                </p>
            </div>
            
            <div className="btnHome">
                <a target="_blank" href="https://drive.google.com/file/d/1HyPrHJNRBSHIijS5UTKPQs8Ia4pK8KoK/view">
                    <button>Download CV</button>
                </a>
            </div>
            </section>
            
        </>
    )

}