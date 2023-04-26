const n = navigator,
    ua=n.userAgent;
export default function userDeviceInfo(id){
        
    
    const isMobile={
        android:()=>ua.match(/android/i),
        ios:()=>ua.match(/iphone|ipad|ipod/i),
        windows:()=>ua.match(/windows phone/i),
        any:function(){
            return this.android()||this.ios()||this.windows();
        }
    },
    isDesktop={
        linux:()=> ua.match(/linux/i),
        mac:()=> ua.match(/mac is/i),
        windows:()=> ua.match(/windows nt/i),
        any:function(){
            return this.linux()||this.mac()||this.windows();
        }
    },
    isBrowser={
        chrome: () => ua.match(/chrome/i),
        safari: () => ua.match(/safari/i),
        firefox: () => ua.match(/firefox/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function (){
            return (
                this.ie()||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            )
        }
    };

    $(id).html(`
        <ul>
            <li>User Agent: ${ua}</li>
            <li>Platform: ${isMobile.any()?isMobile.any():isDesktop.any()}</li>
            <li>Browser: ${isBrowser.any()}</li>
        </ul>
    `)

    if(isBrowser.chrome()){
        $(id).append(`<p>This content is only visible in chrome</p>`)
    }
    if(isBrowser.firefox()){
        $(id).append(`<p>This content is only visible in firefox</p>`)
    }
    if(isBrowser.opera()){
        $(id).append(`<p>This content is only visible in opera</p>`)
    }

    /* if(isMobile.android()){
        window.location.href='https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA'
    } */
}