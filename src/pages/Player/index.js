import Banner from 'components/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada';
import { useEffect, useState } from 'react';


function Player() {

    const [video, setVideo] = useState();
    const parametros = useParams();  // hock do react ele pega um parametro e vamos coloca-lo na url
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/GabrielRoOl/cinetag-api/videos?id=${parametros.id}`)
            .then(resp => resp.json())
            .then(dados => {
            setVideo(...dados)
        })
    }, [])
    /*
    const video = videos.find((video) => { // faz procura no BD a partir do id passado como parametro
        return video.id === Number(parametros.id);
    })
    */
    if (!video) {
        return <NaoEncontrada></NaoEncontrada>
    }

    return (
        <>
            <Banner imagem="Player" />
            <Titulo>
                <h1>
                    Player
                </h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;