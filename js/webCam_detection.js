export default function webCam(id){

    const $video = $(id).get(0)

    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({
            video:true,
            audio:false})
            .then(stream => {
                $video.srcObject=stream;
                $video.play()
            })
            .catch(error => {
                $($video).before(`<p>${error}</p>`)
            })
    }
}