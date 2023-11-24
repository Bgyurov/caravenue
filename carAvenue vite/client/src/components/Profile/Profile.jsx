import { useEffect, useState } from 'react';

import { Avatar, Typography, Card, CardContent, List, ListItem, ListItemText,ListItemAvatar ,Stack} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import profilePic from '../../assets/R.png'
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { profileServiceFactory } from '../../services/profileService';
import { useService } from '../../hooks/useService';
import { useParams } from 'react-router-dom';
import { currencyConverter } from '../../services/Convertor'
const Profile = () => {
  const { userEmail, userName } = useContext(AuthContext)
  const profileService = useService(profileServiceFactory)
  const { profileId } = useParams()

  const [adsByUser, setAdsByUser] = useState([])
  useEffect(() => {
    profileService.allAdsByUser(profileId)
      .then(result => {
        setAdsByUser(result)
      })
  }, [])





  const favorites = [
    { id: 101, title: 'Favorite Ad 1', description: 'Description for Favorite Ad 1' },
    { id: 102, title: 'Favorite Ad 2', description: 'Description for Favorite Ad 2' },
  ];

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
            {adsByUser.map((ad) => (
              <ListItem className={listItemStyle}>
                <ListItemAvatar className={avatar}>
                  <Avatar alt={ad.car} src={ad.imageUrl} />
                </ListItemAvatar>
                <ListItemText primary={`${ad.car} ${ad.modification}`} secondary={`${ad.price} ${currencyConverter(ad.currency)}`} />
                <Stack direction="row" spacing={1}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<EditIcon />}>
        Edit
      </Button>
    </Stack>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card style={cardStyle}>
        <CardContent>
          <Typography variant="h6">Favorites of {userName}</Typography>
          <List>
            {favorites.map((favorite) => (
              <ListItem key={favorite.id} style={listItemStyle}>
                <ListItemText primary={favorite.title} secondary={favorite.description} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;