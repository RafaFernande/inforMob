import { useState } from 'react'
import styles from './Login.module.css'

function Login(){

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[aviso, setAviso] = useState('')
    const[corAviso, setCorAviso] = useState('')
    const [bordaErro, setbordaErro] = useState(styles.input);

    function validar(){
        if(email == "" || senha == ""){
            setAviso("Preencha todos os campos!")
            setCorAviso("red")       
            setbordaErro(styles.inputErro)
        }
    }

    return(
        <div id={styles.container}>

            <div id={styles.login}>
                <img src="" alt="logo aqui" />
                <div id={styles.form}>
                    <input className={bordaErro} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail'/>
                    <input className={bordaErro} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <button onClick={validar}>Entrar</button>
                    <div id={styles.caixaAviso}>
                        <p style={{color: corAviso}}>{aviso}</p>
                    </div>
                </div>
                <a href="">Esqueci minha senha</a>
            </div>

        </div>
    )
}

export default Login
