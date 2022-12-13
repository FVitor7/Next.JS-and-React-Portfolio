import Typical from 'react-typical'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaFacebook } from 'react-icons/fa';


export default function HomePortfolio() {

    return (
        <section className="homeContent">
            <div className="homeText">
                <h1>
                    Olá <span className="wave">👋🏻</span>
                </h1>
                <h2>Eu sou o <span>Fábio Vitor</span></h2>
                <h4>
                    <Typical
                        steps={
                            [
                                'FullStack e FullCycle', 1000,
                                'Python e TypeScript', 1000,
                                'NestJS & Express', 1000,
                                'Django, Flask & FastAPI', 1000,
                                'MongoDB & PostgreSQL', 1000,
                                'Next.Js & React.Js', 1000,
                                'Styled Components & Sass', 1000,
                                
                            ]
                        }
                        loop={Infinity}
                        wrapper="p"
                    />
                </h4>
            </div>

            <div className="icons">
                <a className="icon-holder" href='https://github.com/FVitor7' target="_blank">
                    <FaGithub className="icon gh" />
                </a>
                <a className="icon-holder" href="https://www.linkedin.com/in/fvitor7/" target="_blank">
                    <FaLinkedin className="icon in" />
                </a>
                <a className="icon-holder" href="https://github.com/f_vitor7" target="_blank">
                    <FaInstagram className="icon ig" />
                </a>
                <a className="icon-holder" href="https://api.whatsapp.com/send?phone=5575992392907&text=Contato%20atrav%C3%A9s%20do%20site." target="_blank">
                    <FaWhatsapp className="icon wp" />
                </a>
                <a className="icon-holder" href="mailto:fabvitor2010@gmail.com?Subject=Contato%20através%20do%20site">
                    <FaEnvelope className="icon gm" />
                </a>
            </div>


        </section>
    )
}