import { certificates } from "../../data/Certificates";
import Title from "../../components/title";
import Link from "next/link";
import HeaderPage from "../../components/header/headerPage";
import Image from "next/image";

export default function Certificates({ certificates }) {
  return (
    <>
      <div className="certificatesPage">
        <HeaderPage url_back={"/"} />
        <main>
          <Title title={"Certificados"} />
          <section>
            {certificates.map((item) => {
              return (
                <Link
                  href={`/certificados/${encodeURIComponent(item.url)}`}
                  key={item.id}
                >
                  <a>
                    <div className="divImgCertifiers">
                      <Image
                        src={item.image}
                        alt="Photo Certifier"
                        height={390}
                        width={600}
                      />
                      <style jsx global>{`
                        .divImgCertifiers {
                            width: 100%;
                            height: 100%;
                            object-fit: fill;
                            transition: all 0.5s ease 0s;
                        }
                      `}</style>
                    </div>
                    <div className="certifiersDescription">
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
      certificates: certificates,
    },
  };
}
