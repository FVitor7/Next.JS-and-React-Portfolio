import { certificates } from '../../data/Certificates';
import Title from '../../components/title'
import Link from 'next/link'
import HeaderPage from '../../components/header/headerPage'

export default function Certificates({ certificates }) {
    return (
        <>
            <div className="certificatesPage">
                <HeaderPage url_back={'/'} />
                <main>
                    <Title title={'Certificados'} />
                    <section>
                        {certificates.map((item) => {
                            return (
                                <Link href={`/certificados/${encodeURIComponent(item.url)}`} key={item.id}>
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


export async function getStaticProps({ params }) {
    return {
        props: {
            certificates: certificates,
        },
    };
};
