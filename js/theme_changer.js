export default function themeChanger(btn_themeChanger,body,themeClass){

    if(localStorage.getItem(`theme`) !=null){
        if(localStorage.getItem(`theme`)=='true')
            $(body).addClass(themeClass)
        if(localStorage.getItem(`theme`)=='false')
            $(body).removeClass(themeClass)
    }

    $(document).click((e)=>{
        if(e.target.matches(btn_themeChanger) || 
        e.target.matches(`${btn_themeChanger} *`)){
            $(body).toggleClass(themeClass)

            if($(body).hasClass(themeClass))
                localStorage.setItem('theme','true')
            else
                localStorage.setItem('theme','false')
        }
    })
}