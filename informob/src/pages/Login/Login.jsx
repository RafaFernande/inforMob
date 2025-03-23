import { useState } from 'react'
import styles from './Login.module.css'

function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfimar, setSenhaConfirmar] = useState('')

    const [bordaEmail, setBordaEmail] = useState(styles.input)
    const [bordaSenha, setBordaSenha] = useState(styles.input)
    const [bordaSenhaConfirmar, setBordaSenhaConfirmar] = useState(styles.input)

    const [erroDisplay, setErroDisplay] = useState('none')
    const [telaAtual, setTelaAtual] = useState('recuperarSenha');

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
        setErroDisplay(erro ? 'block' : 'none');
     
        if (!erro) {
            console.log("Login realizado!");
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
        setErroDisplay(erro ? 'block' : 'none');
        if(!erro){
            console.log('cadastro realizado!');
            //Chamar API
        }
    }

    function resetarErros(){
        setBordaEmail(styles.input);
        setBordaSenha(styles.input);
        setBordaSenhaConfirmar(styles.input);
        setErroDisplay('none');

    }

    return(
        <div id={styles.container}>
            {telaAtual === 'login' && (
                <div className={styles.login}>
                    <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail'/>
                    <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <button onClick={validarLogin}>Entrar</button>
                    <button onClick={() => {setTelaAtual('cadastro'), resetarErros()}}>Cadastrar</button>
                    <p style={{display: erroDisplay, color: 'red'}}>Preencha todos os campos!</p>
                    <p style={{cursor: 'pointer'}} onClick={() => {setTelaAtual('recuperarSenha')}}>Esqueci minha senha</p>
                </div>
        )}
            {telaAtual === 'cadastro' && (
                <div className={styles.cadastro}>
                    <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail' />
                    <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <input className={bordaSenhaConfirmar} onChange={e => setSenhaConfirmar(e.target.value)} type="password" placeholder='repetir senha'/>
                    <button onClick={validarCadastro}>Cadastrar</button>
                    <p style={{display: erroDisplay, color: 'red'}}>Preencha todos os campos!</p>
                    <p style={{cursor: 'pointer'}} onClick={() => {setTelaAtual('login'), resetarErros()}} >Já tenho uma conta</p>
                </div>
            )}

            {telaAtual === 'recuperarSenha' &&(
                <div className={styles.recuperarSenha}>
                    <p>Digite o e-mail do seu cadastro para recuperar a senha</p>
                    <input type="text" placeholder='e-mail'/>
                    <button>Enviar e-mail</button>
                </div>     
            )}
           
        </div>
    )
}

export default Login;
