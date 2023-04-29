export default function onlineDetector(){

    const $div_onLine = `<div class="online">connection restored<div>`
    const $div_offLine = `<div class="offline">connection lost<div>`

    const isOnline = ()=>{
        if(navigator.onLine){
            $('html').prepend($div_onLine)
            setTimeout(()=>$('.online').remove(),2000)
        }else{
            $('html').prepend($div_offLine)
            setTimeout(()=>$('.offline').remove(),2000)
        }
    }
    $(window).on('online',(e)=>isOnline())
    $(window).on('offline',(e)=>isOnline())
}