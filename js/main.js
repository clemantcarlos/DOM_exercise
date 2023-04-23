import hamburgerMenu from "./menu_hamburger.js"
import { digitalClock,alarm } from "./reloj_alarma.js"
import {shortcuts,moveBall} from "./keybord_events.js"
import countdown from "./countdown.js"
import upScroll from "./up_scrolling.js"
import themeChanger from "./theme_changer.js"
$(document).ready(()=>{
    
    hamburgerMenu('.hamburger','.panel','.menu>a')
    digitalClock('.btn_startClock','#clock','.btn_stopClock')
    alarm('.btn_alarmClock','./audio/alarm_clock.mp3','.btn_silenceClock')
    countdown('#countdown','May 11, 2023 12:00:00',"Happy birthday me")
    upScroll('#btn_upScroll')
    themeChanger('#btn_themeChanger','#body','change-theme')
})

$(document).keydown((e)=>{
    shortcuts(e);
    moveBall(e,'.ball','.stage');
})


 