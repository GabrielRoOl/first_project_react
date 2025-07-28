import { useFavoritoContext } from 'contextos/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();   // importando as funções de favorito e adicionarFavorito
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

    return (
        <div className={styles.container}>
            < img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar}
                onClick={() => {    // quando clicamos é feita a adição daquela capa e titulo especificos
                adicionarFavorito({ id, titulo, capa })
            }}/>
        </div>
    )
}

export default Card;