
export function useMusic() {

    function startMusic() {
      const audioContext = new AudioContext();

      const audioElement = document.querySelector("audio");
      audioElement.loop = true

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }
      audioElement.play();
    }

    return { startMusic }

}