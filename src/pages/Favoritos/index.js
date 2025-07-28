import styles from './Favoritos.module.css';
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from 'contextos/Favoritos';
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
    
    const { favorito } = useFavoritoContext(); // é aquele 'return favorito' do Favoritos.js
    
    return (
        <>
        
            <Banner imagem="Favoritos" />
        
            <Titulo>
                <h1>
                    Meus Favoritos
                </h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {    // usando .map para 
                    return <Card {...fav} key={fav.id}/>
                })}
            </section>
        </>
    )
}

export default Favoritos;