
export default function countdown(id,limitDate,finalMessage){
    const countdownDate= new Date(limitDate).getTime();

    let timer = setInterval(()=>{
        let currentDate = new Date().getTime(),
        limitTime=countdownDate-currentDate,
        // format time
        dd=Math.floor(limitTime/(1000*60*60*24)),
        hh= ('0'+ Math.floor(limitTime%(1000*60*60*24)/(100*60*60))).slice(-2),
        mm=('0'+ Math.floor(limitTime%(1000*60*60)/(100*60))).slice(-2),
        ss=('0'+ Math.floor(limitTime%(1000*60)/(1000))).slice(-2);
        
        $(id).text(`${dd} days ${hh} hours ${mm} minutes and ${ss} seconds left until my birthday`)
    
        if(limitTime<0){
            clearInterval(timer)
            $(id).text('Happy Birthday')
        }
    },1000)

}