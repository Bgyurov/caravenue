import { useEffect, useState } from 'react';

import { Avatar,Button , Card,  List, ListItem, ListItemText,ListItemAvatar ,Stack , CardActionArea,CardMedia } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import profilePic from '../../assets/R.png'
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { profileServiceFactory } from '../../services/profileService';
import { useService } from '../../hooks/useService';
import { useParams,Link } from 'react-router-dom';
import {currencyConverter} from '../../services/Convertor'
const Profile = () => {
  const { userEmail, userName } = useContext(AuthContext)
  const profileService = useService(profileServiceFactory)
  const { profileId } = useParams()

  const [adsByUser, setAdsByUser] = useState([])
  const [favsByUser, setFavsByUser] = useState([])
  useEffect(() => {
    profileService.allAdsByUser(profileId)
      .then(result => {
        setAdsByUser(result)
      })
  }, [])
  useEffect(() => {
    profileService.favsByUser(profileId)
      .then(result => {
        setFavsByUser(result)
      })
  }, [])


  const cardStyle = {
    marginBottom: '20px',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    margin: '10px auto',
  };
  const userStyle = {
    textAlign: 'center',

  };
  const listItemStyle = {
    border: '2px solid #000000',
    borderRadius: '8px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    
  };
  const avatar = {
    marginRight: '10px',
  }


  

 
console.log(favsByUser)


  return (

    <div>
    <Card style={cardStyle}>
      <CardContent>
        <Avatar alt={userName} src={profilePic} sx={avatarStyle} />
        <Typography sx={userStyle} variant="h5">{userName}</Typography>
        <Typography sx={userStyle} variant="subtitle1">{userEmail}</Typography>
      </CardContent>
    </Card>

     <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h6">Ads from {userName}</Typography>
        <List> 

          {adsByUser.length == 0 && (
        <Typography variant="h6">You have no active ads yet</Typography>

          )}
          
          {adsByUser.map((ad) => (
            <ListItem className={listItemStyle}>
              <ListItemAvatar className={avatar}>
                <Avatar alt={ad.car} src={ad.imageUrl} />
              </ListItemAvatar>
              <ListItemText primary={`${ad.car} ${ad.modification}`} secondary={`${ad.price} ${currencyConverter(ad.currency)}`} />
              <Stack direction="row" spacing={1}>
   
    <Link to={`/catalog/${ad._id}/edit`} className="button">Edit</Link>

  </Stack>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>

    <Card style={cardStyle}>
        <Typography variant="h6">Favorites of {userName}</Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        {favsByUser.length == 0 && (
          <Typography variant="h6">You haven't added any ads to your favorites.</Typography>

          )}

          {favsByUser.map((favorite) => (
            
            <CardContent key={favorite.id}>
              <Card  sx={{ maxWidth: 345 }} style={{ marginRight: '10px', marginBottom: '10px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={favorite.publication.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {favorite.publication.car} {favorite.publication.model} {favorite.publication.modification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {favorite.publication.price}{currencyConverter(favorite.publication.currency)}
                  </Typography>

                </CardContent>
              </CardActionArea>
              <Link to={`/catalog/${favorite.publicationId}`} className="details">Details</Link>
            </Card>
      </CardContent>
          ))}
          </div>
    </Card> 
  </div>
  );
}

export default Profile;