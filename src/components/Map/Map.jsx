import React from 'react'
import { Paper, Typography , useMediaQuery } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import { Rating } from '@material-ui/lab'
import { LocationOnOutlined } from '@material-ui/icons'

import useStyles from './styles'

const Map = ({setCoordinates , setBounds , coordinates , places , setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width-600px)')


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
      bootstrapURLKeys={{key:'AIzaSyA0W9yUWbqKN8t41qiMOgTEgs594wxeCTc'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50 ,50]}
      options={''}
      onChange={(e) => {
        setCoordinates({lat: e.center.lat, lng: e.center.lng})
        setBounds({ne: e.marginBounds.ne , sw: e.marginBounds.sw})
      }}
      onChildClick={(child) => {setChildClicked(child)}}>
        {places?.map((place ,i ) => (
          <div className={classes.markerContainer}
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          key={i}>
            {
              isDesktop ? (
                <LocationOnOutlined color='primary ' fontSize='large'/>
              ) : (
                  <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                        {place.name}
                      </Typography>
                      <img 
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url :'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.681998220.1707486706&semt=sph'}
                      alt={place.name}/>
                      <Rating size='small' value={Number(place.rating)} readOnly/>
                      
                  </Paper>
              )
            }

          </div>
        ))}
        
      </GoogleMapReact>
    </div>
  )
}

export default Map