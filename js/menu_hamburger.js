export default function hamburgerMenu(panelBtn,panel,menuLink){
    $(document).click((e)=>{
        // Aqui el asterisco es para todo lo que este dentro de la etiqueta hamburguesa
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            $(panel).toggleClass('is-active')
            $(panelBtn).toggleClass('is-active')
        }
        if(e.target.matches(menuLink)){
            $(panel).toggleClass('is-active')
            $(panelBtn).toggleClass('is-active')
        }
    })
}