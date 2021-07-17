import { FaGithub, FaLink } from 'react-icons/fa';
import { projects } from '../../data/Projects';
import Link from 'next/link'
import Title from '../../components/title'
import HeaderPage from '../../components/header/headerPage'


export default function Project({ project }) {
  return (
    <>
      <div className="projectPage">
        <HeaderPage url_back={'/projetos'}/>
        <main>
          
              <Title title={project.title} />
              <h3>Tecnologia: <span>{project.category}</span></h3>
              
            <div className="imgProject">
                <h2>Página Inicial</h2>
                <img src={project.image}></img>
                <h2>Descrição</h2>
                <p>{project.description}</p>
            </div>
            <h2>Links</h2>
            <div className="icons">
              <a href={project.github} target="_blank" className="icon-holder">
                <FaGithub className="icon gh"/>
              </a>
              <a href={project.url_project} target="_blank" className="icon-holder">
                <FaLink className="icon gm"/>
              </a>
            </div>
            

        </main>
      </div>
    </>
  )
}



export async function getStaticProps({ params }) {
  const projectList = projects.filter(
    (p) => p.url.toString() === params.project);
  //console.log(projectList)
  return {
    props: {
      project: projectList[0],
    },
  };
};
