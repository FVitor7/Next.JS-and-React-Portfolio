import Image from "next/image";
import Link from "next/link";
import HeaderPage from "../../components/header/headerPage";
import Title from "../../components/title";
import { projects } from "../../data/Projects";

export default function Projects({ projects }) {
  return (
    <>
      <div className="projectsPage">
        <HeaderPage url_back={"/"} />
        <main>
          <Title title={"Projetos"} />
          <section>
            {projects.map((item) => {
              return (
                <Link
                  href={`/projetos/${encodeURIComponent(item.url)}`}
                  key={item.id}
                >
                  <a>
                    <div className="divImgProjects">
                      <Image
                        src={item.image}
                        alt="Photo Project"
                        height={390}
                        width={600}
                      />
                      <style jsx global>{`
                        .divImgProjects {
                          width: 100%;
                          height: 100%;
                          object-fit: cover;
                          transition: all 0.5s ease 0s;
                        }
                      `}</style>
                    </div>
                    <div className="projectsDescription">
                      <h1>{item.title}</h1>
                      <span>{item.description_min}</span>
                    </div>
                  </a>
                </Link>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: {
      projects: projects,
    },
  };
}
