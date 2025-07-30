import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Banner from "components/Banner"
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/GabrielRoOl/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Cabecalho />
            <Banner imagem="home" />
            <Titulo>
                <h1>
                    Um lugar para guardar seus vídeos e filmes!
                </h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                   return <Card {...video} key={video.id}></Card>
                })}
            </section>
            <Rodape />
        </>
    )
}

export default Inicio;