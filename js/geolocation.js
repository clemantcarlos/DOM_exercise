export default function getGeolocation(id){
    const options={
        enabledHighAccuracy: true,
        timeout:5000,
        maximunAge:0
    };
    
    
    const success = (position)=>{
        let coords = position.coords

        $(id).html(`
            <ul>
                <li>Latitud: ${coords.latitude}</li>
                <li>Longitud: ${coords.longitude}</li>
                <li>Position accuracy: ${coords.accuracy}m</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},12z" target="_blank" rel="noopener">See position in Google Maps</a>
            `)
    };
    const error = (err)=>{
        $(id).empty()
        $(id).text('Location not found')

    };

    navigator.geolocation.getCurrentPosition
    (
        success, 
        error, 
        options
    )


}