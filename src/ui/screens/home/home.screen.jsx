import "./home.style.css"
import { ContainerScreen } from "../../components"
import { IMAGES } from "../../../constants"
import { useEffect, useState } from "react"
import { useTrocarTexto } from "../../../hook"
import { useNavigate } from "react-router-dom"

export function HomeScreen() {
    const [texto, setTexto] = useState("")
    const [isTextoAtivo, setIsTextoAtivo] = useState(false)
    const [isOpcoesAtiva, setIsOpcoesAtiva] = useState(false)
    const { trocarTexto } = useTrocarTexto()
    const navigate = useNavigate()

    useEffect(()=>{
        trocarTexto(setTexto, 1000, "Olá")
        trocarTexto(setTexto, 4000, "Você gostaria de saber a verdade por trás de tudo?")
        trocarTexto(setTexto, 7000, "Gostaria de saber o que você realmente é?")
        setTimeout(()=>{setIsOpcoesAtiva(true)}, 8000)
    },[])

    useEffect(()=>{
        setIsTextoAtivo(false)
        setTimeout(()=>{setIsTextoAtivo(true)}, 100)
    },[texto])

    return (
        <ContainerScreen>
            <div className="home-screen">
                {isTextoAtivo ? <h1>{texto}</h1> : null}
                <div className="morpheus">
                    {isOpcoesAtiva?
                    <>
                    <button onClick={()=>navigate("/gay")}>
                        Sim
                        <img src={IMAGES.VERMELHO} alt="Mão com Pílula Vermelha" />
                    </button>
                    
                    <a href="https://www.youtube.com/watch?v=n7DoxH6iSIk" target="_blank">
                    <button>
                        Não
                        <img src={IMAGES.AZUL} alt="Mão com Pílula Azul" />
                    </button>
                    </a>
                    </>
                    :null}
                </div>
            </div>
        </ContainerScreen>
    )

}