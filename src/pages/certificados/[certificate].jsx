import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import { certificates } from "../../data/Certificates";
import Title from "../../components/title";
import HeaderPage from "../../components/header/headerPage";

export default function Certificate({ certificate }) {
  return (
    <>
      <div className="certificatePage">
        <HeaderPage url_back={"/certificados"} />
        <main>
          <Title title={certificate.title} />
          <h3>
            Instituição: <span>{certificate.institution}</span>
          </h3>

          <div className="imgCertificate">
            <h2>Preview</h2>
            <div className="divImgCertifier">
              <Image
                alt="Photo Certifier"
                height={595}
                src={certificate.image}
                width={800}
              />
              <style jsx global>{`
                .divImgCertifier {
                  width: 100%;
                  height: 100%;
                  border-radius: 2rem;
                  border: 2px solid rgb(39, 39, 39);
                  object-fit: fill;
                  padding: 3rem;
                  align-items: center;
                  display: grid;
                }
              `}</style>
            </div>

            <h2>Descrição</h2>
            <p>{certificate.description}</p>
          </div>
          <h2>Validação Online</h2>
          <div className="icons">
            <a
              href={certificate.external_url}
              target="_blank"
              className="icon-holder"
            >
              <FaLink className="icon gm" />
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = certificates.map((certificate) => ({
    params: { certificate: certificate.url.toString() },
  }));
  //console.log(paths)

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const certificateList = certificates.filter(
    (p) => p.url.toString() === params.certificate
  );
  //console.log(certificateList)
  return {
    props: {
      certificate: certificateList[0],
    },
  };
}
