import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map"
import List from "./components/List/List"
import { getPlaceData } from "./api";
import {  CssBaseline , Grid ,  } from "@material-ui/core";

const App = () => {

const [places , setPlaces] = useState([]);
const [coordinates , setCoordinates] = useState({});
const [bounds , setBounds] = useState({})
const [childClicked , setChildClicked] = useState(null)
const [isLoading , setIsLoading] = useState(false)
const [type , setType] = useState('attractions') 
const [rating , setRating] = useState('') 

useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords : {latitude , longitude}}) => {
        setCoordinates({lat:latitude , lng:longitude})
    })
},[]);


useEffect( () => {
    setIsLoading(true);
    getPlaceData(  type, bounds.sw , bounds.ne).then((data) => {
        setPlaces(data);
        setIsLoading(false);
    })

}, [type,  coordinates , bounds]);


    return (
       <>
       <CssBaseline/>
       <Header setCoordinates={setCoordinates}/>
       <Grid container spacing={3} style={{width:"100%"}}>
        <Grid item xs={12} md={4} >
            <List places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}          
            />
        </Grid>
        <Grid item xs={12} md={8}>
            <Map  
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            setChildClicked={setChildClicked}
            places={places}/>

            
            
        </Grid>
       </Grid>
       </>
    )
}

export default App;