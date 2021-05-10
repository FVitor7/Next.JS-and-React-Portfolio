import React, { useState } from 'react'
import swal from 'sweetalert'
import Title from '../title'

export default function Contact() {

    let reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/

    function isValidEmail(email) {
        return reg.test(email)
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        //console.log('Sending')

        if (name == '') {
            swal("Ocorreu um erro!", "Por favor, verifique o seu NOME e tente novamente.", "warning", {
                button: "Fechar",
            })
            return
        }

        if (isValidEmail(email) === false) {
            swal("Ocorreu um erro!", "Por favor, verifique o seu E-MAIL e tente novamente.", "warning", {
                button: "Fechar",
            })
            return
        }

        if (message == '') {
            swal("Ocorreu um erro!", "Por favor, verifique se você escreveu algo no campo da mensagem e tente novamente.", "warning", {
                button: "Fechar",
            })
            return
        }

        let data = {
            name,
            email,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            //console.log('Response received')
            if (res.status === 200) {
                //console.log('Response succeeded!')

                swal("E-mail enviado!", "Responderei assim que possível!", "success", {
                    button: "Fechar",
                })
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            }
            else {
                swal("Ocorreu um erro!", "Por favor, tente entrar em contato através de alguma das minhas redes-sociais presentes no topo da página.", "warning", {
                    button: "Fechar",
                })
            }
        })
    }

    return (

        <>
            <section>
                <Title title={'Contato'} />
                <form className="formContact">
                    <div className="formDiv">
                        <label>Nome</label>
                        <input name="name" type="text"
                            onChange={(e) => { setName(e.target.value) }}>
                        </input>
                    </div>
                    <div className="formDiv">
                        <label>Email</label>
                        <input type='email'
                            onChange={(e) => { setEmail(e.target.value) }} name='email'>
                        </input>
                    </div>
                    <div className="formDiv">
                        <label>Mensagem</label>
                        <textarea type='text'
                            onChange={(e) => { setMessage(e.target.value) }} name='message'>
                        </textarea>
                    </div>
                    <div className="formButton">
                        <button type="submit"
                            onClick={(e) => { handleSubmit(e) }}>
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}
