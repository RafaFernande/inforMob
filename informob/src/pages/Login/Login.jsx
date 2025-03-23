import { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';

function Login(){

    //variaveis para login e cadastro
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaConfimar, setSenhaConfirmar] = useState('')
    const [emailRecuperacao, setEmailRecuperacao] = useState('')

    //controle de erro
    const [bordaEmail, setBordaEmail] = useState(styles.input)
    const [bordaSenha, setBordaSenha] = useState(styles.input)
    const [bordaSenhaConfirmar, setBordaSenhaConfirmar] = useState(styles.input)
    const [erroDisplay, setErroDisplay] = useState('none')
    
    //controle de telas
    const [telaAtual, setTelaAtual] = useState('login');

    const navigate = useNavigate();

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
            navigate('/home');
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

    function recuperarSenha(){
        if(emailRecuperacao != ''){
            console.log("E-mail enviado");
            //Chamar API
        }else{
            setBordaEmail(styles.inputErro)
            setErroDisplay('block')
        }
    }

    return(
        <div id={styles.container}>
            {telaAtual === 'login' && (
                <form onSubmit={(e) => {e.preventDefault(), validarLogin()}} className={styles.login}>
                    <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail'/>
                    <p>{}</p>
                    <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <button type='submit'>Entrar</button>
                    <button type='button' onClick={() => {setTelaAtual('cadastro'), resetarErros()}}>Cadastrar</button>
                    <p style={{display: erroDisplay, color: 'red'}}>Preencha todos os campos!</p>
                    <p style={{cursor: 'pointer'}} onClick={() => {setTelaAtual('recuperarSenha'), resetarErros()}}>Esqueci minha senha</p>
                </form>
        )}
            {telaAtual === 'cadastro' && (
                <form onSubmit={(e) => {e.preventDefault(), validarCadastro()}} className={styles.cadastro}>
                    <input className={bordaEmail} onChange={e => setEmail(e.target.value)} type="text" placeholder='e-mail' />
                    <input className={bordaSenha} onChange={e => setSenha(e.target.value)} type="password" placeholder='senha'/>
                    <input className={bordaSenhaConfirmar} onChange={e => setSenhaConfirmar(e.target.value)} type="password" placeholder='repetir senha'/>
                    <button>Cadastrar</button>
                    <p style={{display: erroDisplay, color: 'red'}}>Preencha todos os campos!</p>
                    <p style={{cursor: 'pointer'}} onClick={() => {setTelaAtual('login'), resetarErros()}} >Já tenho uma conta</p>
                </form>
            )}

            {telaAtual === 'recuperarSenha' &&(
                <form onSubmit={(e) => {e.preventDefault(), recuperarSenha()}} className={styles.recuperarSenha}>
                    <p>Digite o e-mail do seu cadastro para recuperar a senha</p>
                    <input className={bordaEmail} onChange={e => setEmailRecuperacao(e.target.value)} type="text" placeholder='e-mail'/>
                    <p  style={{display: erroDisplay, color: 'red'}}>Preencha o campo!</p>
                    <button>Enviar e-mail</button>
                </form>     
            )}
           
        </div>
    )
}

export default Login;
