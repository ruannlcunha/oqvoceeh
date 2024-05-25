import { AudioContainer, ContainerScreen } from "../../components"
import { AUDIOS, IMAGES } from "../../../constants"
import "./gay.style.css"

export function GayScreen() {

    return (
        <>
        <ContainerScreen>
            <AudioContainer audio={AUDIOS.EU_VIREI_GAY}/>
            <div className="gay-screen">
                <img src={IMAGES.GAY_GIF} alt="Palavra 'Gay' em colorido" />
                <section>
                    <h1>Você é gay!!!!</h1>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        Clique aqui para não ser gay
                    </a>
                </section>
                <img src={IMAGES.SPIDERMAN} alt="Homem Aranha dançando" />
            </div>
        </ContainerScreen>
        </>
    )

}