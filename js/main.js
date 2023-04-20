import hamburgerMenu from "./menu_hamburger.js"
import { digitalClock,alarm } from "./reloj_alarma.js"

$(document).ready(()=>{
    
    hamburgerMenu('.hamburger','.panel','.menu>a')
    digitalClock('.btn_startClock','#clock','.btn_stopClock')
    alarm('.btn_alarmClock','./audio/alarm_clock.mp3','.btn_silenceClock')
})


 