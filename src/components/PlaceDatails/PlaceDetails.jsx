import React from 'react'
import { Typography , Box, Button , Card , CardMedia , CardContent, Chip , CardActions } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import { Phone } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import useStyles from './styles'


const PlaceDetails = ({ place , selected , refProp }) => {
const classes = useStyles();
  
  if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth" , block: "start" })
  return (
  <Card elevation={6}>
    <CardMedia 
    style={{height:350}}
    image={place.photo ? place.photo.images.large.url : 'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.681998220.1707486706&semt=sph'}
     title={place.name}/>
     <CardContent>
      <Typography gutterBottom variant='h5'>{place.name}</Typography>
      <Box display="flex" justifyContent="space-between">
       <Rating value={Number(place.rating)} readOnly/>
        <Typography gutterBottom variant='subtitle1'>out of reviews {place.num_reviews}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant='subtitle1'>Price</Typography>
        <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant='subtitle1'>Ranking</Typography>
        <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
      </Box>
      {place?.awards?.map((award) =>(
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <img src={award.images.small} alt={award.display_name}/>
        </Box>
      ))}
      {place?.cuisine?.map(({name}) => (
        <Chip key={name} label={name} size='small' className={classes.chip}/>
      ))}
      {place?.address && (
        <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
          <LocationOn/> {place.address}
        </Typography>
      )}
      {place?.phone && (
        <Typography gutterBottom variant='subtitle ' color='textSecondary' className={classes.spacing}>
          <Phone/>{place.phone}
        </Typography>
      )}
      <CardActions>
        <Button size="small" color='primary' onClick={() => window.open(place.web_url, "_blank")}>
          Reviews
        </Button>
        <Button size="small" color='primary' onClick={() => window.open(place.website, "_blank")}>
          website
        </Button>
      </CardActions>
     </CardContent>
    </Card>
  )
}

export default PlaceDetails