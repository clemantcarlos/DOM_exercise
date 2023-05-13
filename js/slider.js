export default function slider(){
    const $prevBtn= $('.slider-btns .prev').get(0),
        $nextBtn= $('.slider-btns .next').get(0),
        $slides=document.querySelectorAll('.slider-slide');
    
    let i =0;

    $(document).click((e)=>{
        if(e.target === $prevBtn){
            e.preventDefault();

            $slides[i].classList.remove('active');
            i--;
            if(i<0){
                i=$slides.length-1;
            }
            $slides[i].classList.add('active');
         }
    })
    $(document).click((e)=>{
        if(e.target === $nextBtn){
            e.preventDefault();

            $slides[i].classList.remove('active');
            i++;
            if(i>=$slides.length){
                i=0;
            }
            $slides[i].classList.add('active');
         }
    })
}