export default function getRaffleWinner(btnSelector,participants,display){
    $(document).click((e)=>{
        if(e.target.matches(btnSelector) || e.target.matches(`${btnSelector} *`)){

            let $winner = $(participants)[Math.floor(Math.random()*$(participants).length)];
            
            $(display).text(`El ganador es ${$winner.textContent}`)
        }
    })
}
/* 
    const getWinner=(selector)=>{
        const $participants =document.querySelectorAll(selector),
            random=Math.floor(Math.random()*$participants.length),
            winner = $players[random]

        return `El ganador es: ${winner.textContent}`
    }
*/