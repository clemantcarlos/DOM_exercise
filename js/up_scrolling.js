export default function upScroll(btnUpScroll){
    $(document).scroll(()=>{
        if($(document).scrollTop() >= 600){
            $(btnUpScroll).show(100)
        }else{
            $(btnUpScroll).hide(100)
            $(btnUpScroll).css('right','10vw')
            $(btnUpScroll).css('bottom','1vh')
        }
    })
    $(document).click((e)=>{
        if(e.target.matches(btnUpScroll)|| e.target.matches(`${btnUpScroll} *`)){
            $(document).scrollTop(0)
        }
    })
}