import axios from "axios";




 export const getPlaceData = async ( type, sw , ne) => {
    try {
        const {data : { data }} = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary` , {
            params: {
                bl_latitude: sw.lat,
                tr_latitude:ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'c69d36bf62msh5aac27d98f37ab8p18ccf4jsnba89272560d2',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        });
        
        return data;

    } catch (error) {
        console.log(error)
    }
}
   
  
