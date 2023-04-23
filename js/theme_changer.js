export default function themeChanger(btn_themeChanger,body,themeClass){
    $(document).click((e)=>{
        if(e.target.matches(btn_themeChanger) || 
        e.target.matches(`${btn_themeChanger} *`)){
            $(body).toggleClass(themeClass)
        }
    })
}