import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { Typography, InputBase, Box, Toolbar, AppBar  } from '@material-ui/core'
import useStyles from './styles'
import { Search } from '@material-ui/icons'


const Header = ({setCoordinates}) => {
    const classes = useStyles();
   const [autoComplete , setAutoComplete] = useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC)
    const onPlaceChanged = () => {
        const lat = autoComplete.getPlace().geometry.location.lat();
        const lng = autoComplete.getPlace().geometry.location.lang();

       setCoordinates({lat , lng})
    }

  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Travel
            </Typography>
            <Box display='flex'>
                <Typography variant='h6' className={classes.title}>
                    Expolre new places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase placeholder='Search places' classes={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </Autocomplete>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header