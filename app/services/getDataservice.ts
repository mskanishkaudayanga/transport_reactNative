

const getDataService =  {

    getListOfData:async ()=>{
        try{
            const response = await fetch("https://api.publibike.ch/v1/public/stations")
            return response.json();
        }catch(error){
            console.error('Error:', error);
        }
    },
    getDataById:async (id:string)=>{
        try{
            const response = await fetch(`https://api.publibike.ch/v1/public/stations/${id}`)
            return response.json();
        }catch(error){
            console.error('Error:', error);
        }
    },
    // getImageResponse:async (lat:number,lon:number)=>{
    //     try{
    //         const response = await fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=15&size=400x400&key=AIzaSyD-5G2J8yJzQwzZt3v6Z8L2j1y2v6y6zXQ`)
    //         return response;
    //     }catch(error){
    //         console.error('Error:', error);
    //     }
    // }
}
export default getDataService;