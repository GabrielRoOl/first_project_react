import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from "json/db.json";

function Favoritos() {
    /*
    return (
        <>
            <Banner imagem="Favoritos" />
            <Titulo>
                <h1>
                    Meus Favoritos!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                   return <Card {...video} key={video.id}></Card>
                })}
            </section>
        </>
    ) */
    
    return (
        <>
        
            <Banner imagem="Favoritos" />
        
            <Titulo>
                <h1>
                    Meus Favoritos
                </h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato' capa='https://cdn2.thecatapi.com/images/Rl39SPjDO.png'></Card>
            </section>
        </>
    )
}

export default Favoritos;