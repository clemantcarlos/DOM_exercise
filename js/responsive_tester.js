
export default function responsiveTester(form){
    let openWindow;
    let $form = $(form).get(0);
    
    $(document).on('submit',(e)=>{
        if(e.target === $form){
            e.preventDefault();
            openWindow= window.open(`
            ${$form.url.value}`,
            '',
            `width=${$form.width.value},height=${$form.height.value}`
            ); 
        }
    })
    $(document).on('click',(e)=>{
        if(e.target=== $form.close)
            openWindow.close();
    })
}    
