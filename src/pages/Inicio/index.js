import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Banner from "components/Banner"

function Inicio() {
    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Rodape />
        </>
    )
}

export default Inicio;