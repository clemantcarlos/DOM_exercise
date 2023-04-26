let openWindow
export default function responsiveTester(url,width,height,btnOpen,btnClose){
    $(window).click((e)=>{
        if(e.target.matches(btnOpen)){
            if($(width).val()=="" || $(height).val()=="" || $(url).val()=="")
                return 
            
            openWindow= window.open(`
                ${$(url).val()}`,
                '',
                `width=${$(width).val()},height=${$(height).val()}`
            )
        }
        if(e.target.matches(btnClose))
            openWindow.close()
    })
}

