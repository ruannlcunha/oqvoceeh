
export function useTrocarTexto() {

    function trocarTexto(setTexto, tempo, texto) {
        setTimeout(()=>{
            setTexto(texto)
        },tempo)
    }

    return { trocarTexto }

}