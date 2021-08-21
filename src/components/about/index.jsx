import Title from '../title'

export default function About() {

    return (
        <>
            <section className="sectionsPage">
                <Title title={'Sobre'} />
                <div className="textAbout">
                    <p>
                        Programador FullStack com experiência em desenvolvimento nas linguagens Python e JavaScript. Estou sempre me especializando para ter mais  facilidade no trabalho em equipe, atuando com metodologias ágeis.
                </p>
                    <br />
                    <p>
                        Tenho habilidade para criar e consumir APIs Rest.
                        Alem de utilizar Next.JS e React.JS para a construção dos meus projetos web.

                        Sou graduando em Matemática, e resido na cidade de Paulo Afonso na Bahia.
                        Atualmente trabalho como Desenvolvedor FullStack na empresa 9bits.
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
