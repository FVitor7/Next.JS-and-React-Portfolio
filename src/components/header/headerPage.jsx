import { TiArrowBack } from 'react-icons/ti';
//import { FaReact } from 'react-icons/fa';
import Link from 'next/link'

export default function HeaderPage({ url_back }) {

    return (
        <>
            <header className="headerPages">
                <div>
                    <Link href={url_back}>
                        <a>
                            <TiArrowBack />
                        </a>
                    </Link>
                </div>
            </header>

        </>

    )
}