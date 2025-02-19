import React, { useState , useEffect , createRef } from 'react'
import { Typography, CircularProgress , Grid, InputLabel , FormControl, MenuItem , Select } from '@material-ui/core'
import PlaceDetails from '../PlaceDatails/PlaceDetails'
import useStyles from './styles'


const List = ({places , childClicked , isLoading , type , setType , rating , setRating  }) => {
  const classes = useStyles()
  
  const [elRefs , setElRefs] = useState([]) 

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) =>elRefs[i] || createRef());
    setElRefs(refs);
  },[places])

  return (
    <div className={classes.container}>
      <Typography variant='h4'> Resturants , Hotels & Attractions</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
          </div>
      ): (
        <>
      <FormControl className={classes.formControl}>
        <InputLabel >Type...</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="resturants">Resturants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attraction</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>3.0</MenuItem>
          <MenuItem value={4}>4.0</MenuItem>
          <MenuItem value={4.5}>4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
       {places?.map((place, i) => (
        <Grid  item key={i} xs={12}>
            <PlaceDetails place={place}
            selected = {Number(childClicked) === i}
            refProp={elRefs[i]}/>
        </Grid>
       ))}
      </Grid>
      </>
      )}
    </div>
  )
}

export default List