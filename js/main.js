import hamburgerMenu from "./menu_hamburger.js"
import relojAlarm from "./reloj_alarma.js"

$(document).ready(()=>{
    
    hamburgerMenu('.hamburger','.panel','.menu>a')
    relojAlarm('.btn_startClock','#clock','.btn_stopClock')

})


 