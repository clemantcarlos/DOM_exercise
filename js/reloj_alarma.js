export  function digitalClock(btnStart,clockDisplay,btnStop){
    let time;
    $(document).click((e)=>{
        if(e.target.matches(btnStart)){
            $(btnStart).prop('disabled',true);
            time = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                $(clockDisplay).text(`${clockHour}`);
            },1000)
        }
        if (e.target.matches(btnStop)) {
            clearInterval(time);
            $(clockDisplay).text('');
            $(btnStart).prop('disabled', false);
        }
    })
}
export function alarm(btnAlarm,audioAlarm,btnSilence){
    const audio = new Audio(audioAlarm)
    $(document).click((e)=>{
        if(e.target.matches(btnAlarm)){
            audio.play()
            audio.loop=true;
            $(btnAlarm).prop('disabled', true);
        }
        if(e.target.matches(btnSilence)){
            audio.pause();
            audio.currentTime=0;
            $(btnAlarm).prop('disabled', false);

        }
    })
}
