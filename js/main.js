import hamburgerMenu from "./menu_hamburger.js"
import { digitalClock,alarm } from "./reloj_alarma.js"
import {shortcuts,moveBall} from "./keybord_events.js"
import countdown from "./countdown.js"
import upScroll from "./up_scrolling.js"
import themeChanger from "./theme_changer.js"
import responsiveMedia from "./object_responsive.js"
import responsiveTester from "./responsive_tester.js"
import userDeviceInfo from "./device_detection.js"
import onlineDetector from "./online_detecter.js"
import webCam from "./webCam_detection.js"
import getGeolocation from "./geolocation.js"

$(document).ready(()=>{
    
    hamburgerMenu(
        '.hamburger',
        '.panel',
        '.menu>a'
    );
    digitalClock(
        '.btn_startClock',
        '#clock',
        '.btn_stopClock'
        );
    alarm(
        '.btn_alarmClock',
        './audio/alarm_clock.mp3',
        '.btn_silenceClock'
    );
    countdown(
        '#countdown',
        'May 11, 2023 12:00:00',
        "Happy birthday me"
    );
    upScroll('#btn_upScroll');
    themeChanger(
        '#btn_themeChanger',
        '#body',
        'change-theme'
    );
    responsiveMedia(
        '#youtube',
        "(min-width:1024px)",
        `<a href='https://www.youtube.com/embed/J9sp7c00NyE'>Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/J9sp7c00NyE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );
    responsiveMedia(
        '#gmaps',
        "(min-width:1024px)",
        `<a href='https://goo.gl/maps/kndwjbEUbnWZCD7q6'>Ver Monumento</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.793295288504!2d-69.21623207269954!3d9.556565840495619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7dc16b26aa92f5%3A0xcf62f3708f6caa3f!2sMonumento%20La%20Espiga!5e0!3m2!1ses-419!2sve!4v1682468167197!5m2!1ses-419!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester('#tester-form');
    userDeviceInfo('#user-device');
    webCam('#webCam-video')
    getGeolocation('#geolocationOutput')
})

    onlineDetector()

$(document).keydown((e)=>{
    shortcuts(e);
    moveBall(
        e,
        '.ball',
        '.stage'
    );

})


 