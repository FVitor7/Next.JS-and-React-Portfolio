import { CgMoreR } from 'react-icons/cg'

export default function Title({title, url}) {
    if (url == undefined) {
        return(
            <h1 className="Title">{title}</h1>
        )
    }

    else {
        return(
            <div className="TitleAndMore">
                <h1 className="Title">{title}</h1>
                <a href={url}><CgMoreR/></a>
            </div>
        )
        
    }
    
}


