import { useState } from 'react'
import styles from './Login.module.css'

function Login(){

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const [bordaErroEmail, setBordaErroEmail] = useState(styles.input);
    const [bordaErroSenha, setBordaErroSenha] = useState(styles.input);
    const [mensagemErro, setMensagemErro] = useState('transparent')

    function validar(){        
        if(email == '' && senha != ''){
            setBordaErroEmail(styles.inputErro)    
            setBordaErroSenha(styles.input)
            setMensagemErro('red')
        }else if(senha == '' && email != ''){
            setBordaErroSenha(styles.inputErro)
            setBordaErroEmail(styles.input)    
            setMensagemErro('red')
        }else if(email == '' && senha == ''){
            setBordaErroSenha(styles.inputErro)
            setBordaErroEmail(styles.inputErro)    
            setMensagemErro('red')
        }else{
            setBordaErroEmail(styles.input)    
            setBordaErroSenha(styles.input)
            setMensagemErro('transparent')
            //API
        }
    }

    return(
        <div id={styles.container}>
            <div id={styles.login}>
                <img src=""/>
                <div id={styles.form}>
                    <input className={bordaErroEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail'/>
                    <input className={bordaErroSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <button onClick={validar}>Entrar</button>
                    <div id={styles.caixaAviso}>
                        <p style={{color: mensagemErro}}>Preencha todos os campos!</p>
                    </div>
                </div>
                <a href="">Esqueci minha senha</a>
            </div>
        </div>
    )
}

export default Login
