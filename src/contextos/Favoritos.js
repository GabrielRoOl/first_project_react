import Favoritos from "pages/Favoritos";
import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);
    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
             { children }
            </FavoritosContext.Provider>
    )
}

export function useFavoritoContext() { // isso é um Hook personalizado
    const { favorito, setFavorito } = useContext(FavoritosContext); // as variaveis favorito e setFavorito estão recebendo o contexto do favoritos contexto
    
    function adicionarFavorito(novoFavorito) { // função que posibilita a adição de novos favoritos
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id); // verifica se esse favorito é repetido por id, retorna booleanos, some é uma função de array

        let novaLista = [...favorito]; // nova lista, recebendo a lista antiga

        if (!favoritoRepetido) {  // se a lista favoritoRepetido for 'false', ou seja, não é um favorito, então ela irá favoritar.
            novaLista.push(novoFavorito);
            return setFavorito(novaLista); // mudar o stado para favoritado.
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id); // se favoritoRepetido for 'true' essa função ira procurar o indice dessa lista e ira remover da lista de favoritos

        return setFavorito(novaLista); // retorno com o item da lista fora dos favoritados.
    }

    return {
        favorito, // retorno para conseguir verificar a lista de favoritos
        adicionarFavorito
    }

}