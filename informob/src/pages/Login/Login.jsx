import { useState } from 'react'
import styles from './Login.module.css'

function Login(){

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[senhaConfimar, setSenhaConfirmar] = useState('')
    const [bordaEmail, setBordaEmail] = useState(styles.input)
    const [bordaSenha, setBordaSenha] = useState(styles.input)
    const [bordaSenhaConfirmar, setBordaSenhaConfirmar] = useState(styles.input)
    const [mensagemCor, setMensagemCor] = useState('transparent')
    const [loginDisplay, setLoginDisplay] = useState('flex')
    const [cadastroDisplay, setCadastroDisplay] = useState('none')

    function validarLogin(){        
        let erro = false;
        if (email === '') {
            setBordaEmail(styles.inputErro);
           erro = true;
        } else {
            setBordaEmail(styles.input);
        }
     
        if (senha === '') {
            setBordaSenha(styles.inputErro);
           erro = true;
        } else {
            setBordaSenha(styles.input);
        }
     
        setMensagemCor(erro ? 'red' : 'transparent');
     
        if (!erro) {
            mudarTela()
           // Chamar API
        }
    }

    function validarCadastro(){
         let erro = false;
        if (email === '') {
            setBordaEmail(styles.inputErro);
           erro = true;
        } else {
            setBordaEmail(styles.input);
        }
     
        if (senha === '') {
            setBordaSenha(styles.inputErro);
           erro = true;
        } else {
            setBordaSenha(styles.input);
        }
        if (senhaConfimar === '') {
            setBordaSenhaConfirmar(styles.inputErro);
           erro = true;
        } else {
            setBordaSenhaConfirmar(styles.input);
        }

        setMensagemCor(erro ? 'red' : 'transparent');
        if(!erro){
            //Chamar API
        }
    }

    function mudarTela(){
        if(loginDisplay === 'flex'){
            setLoginDisplay('none');
           setCadastroDisplay('flex');
           setMensagemCor('transparent')
           setBordaEmail(styles.input)
           setBordaSenha(styles.input)
           setBordaSenhaConfirmar(styles.input)
        }else{
            setLoginDisplay('flex');
           setCadastroDisplay('none');
           setMensagemCor('transparent')
           setBordaEmail(styles.input)
           setBordaSenha(styles.input)
           setBordaSenhaConfirmar(styles.input)
        }
    }

    return(
        <div id={styles.container}>
            <div id={styles.login} style={{display: loginDisplay}}>
                <img src=""/>
                <div id={styles.form}>
                    <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail'/>
                    <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <button onClick={validarLogin}>Entrar</button>
                    <button onClick={mudarTela}>Cadastrar</button>
                    <div id={styles.caixaAviso}>
                        <p style={{color: mensagemCor}}>Preencha todos os campos!</p>
                    </div>
                </div>
                <p style={{cursor: 'pointer'}}>Esqueci a minha senha</p>
            </div>
            <div id={styles.cadastro} style={{display: cadastroDisplay}}>
                <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail' />
                <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                <input className={bordaSenhaConfirmar} onChange={e => setSenhaConfirmar(e.target.value)} type="password" placeholder='repetir senha'/>
                <button onClick={validarCadastro}>Cadastrar</button>
                <p style={{color: mensagemCor}}>Preencha todos os campos!</p>
                <p style={{cursor: 'pointer'}} onClick={mudarTela}>Já tenho uma conta</p>
            </div>
        </div>
    )
}

export default Login
