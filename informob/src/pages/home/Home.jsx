import styles from './Home.module.css'

const generateCards = (quantity) => {
    const cards = [];

    for (let i = 0; i < quantity; i++) {
        cards.push(
            <div key={i} className={styles.card}>
                <h2>Ubisoft agradece pelo suporte a Assassin's Creed Shadows e diz que é apenas o começo para o jogo</h2>
                <hr id={styles.linha}/>
                <img className={styles.banner} src="src/assets/AC.jpg" alt="Assassin's Creed" />
                <hr id={styles.linha}/>
                <p className={styles.previa}>
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto texto texto texto texto
                    texto texto texto texto texto texto 
                </p>
            </div>
        );
    }

    return cards;
};

function Home(){
    return(
        <div id={styles.main}>
            <div id={styles.pagina}>
                <div id={styles.esquerda}></div>
                <div id={styles.central}>
                    {generateCards(10)}
                </div>
                <div id={styles.direita}></div>
            </div>
        </div>
    )
}

export default Home;