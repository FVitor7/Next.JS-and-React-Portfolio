import Link from 'next/link'
import HeaderPage from '../../components/header/headerPage'
import Title from '../../components/title'
import { projects } from '../../data/Projects';


export default function Projects({ projects }) {
    return (
        <>
            <div className="projectsPage">
                <HeaderPage url_back={'/'} />
                <main>
                    <Title title={'Projetos'} />
                    <section>
                        {projects.map((item) => {
                            return (
                                <Link href={`/projetos/${encodeURIComponent(item.url)}`} key={item.id}>
                                    <a>
                                        <img src={item.image} />
                                        <div>
                                            <h1>{item.title}</h1>
                                            <span>{item.description_min}</span>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })
                        }
                    </section>

                </main>
            </div>
        </>
    )
}


export async function getStaticPaths() {
    const paths = []
    return { paths, fallback: 'blocking' };
};


export async function getStaticProps({ params }) {
    //console.log(projects)
    return {
        props: {
            projects: projects,
        },
    };
};
