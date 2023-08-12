function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    // pegar a img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light-mode.png')
    } else {
        //se tiver sem light mode, manter a imagem normak
        img.setAttribute('src', './assets/avatar-dark-mode.png')
    }



}