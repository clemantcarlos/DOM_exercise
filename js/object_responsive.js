export default function responsiveMedia(id,mediaQuery,mobileContent,desktopContent){
    let breakpoint =window.matchMedia(mediaQuery);
    
    const responsive = (e)=>{
        if(e.matches)
            $(id).html(desktopContent)
        else   
            $(id).html(mobileContent)

    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}