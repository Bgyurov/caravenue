import React from 'react';
import { Avatar, Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        photoUrl: 'https://example.com/john-doe.jpg',
      };
    
      const ads = [
        { id: 1, title: 'Ad Title 1', description: 'Description for Ad 1' },
        { id: 2, title: 'Ad Title 2', description: 'Description for Ad 2' },
      ];
    
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
        borderBottom: '1px solid #ccc',
      };
    
      return (
        <div>
          <Card style={cardStyle}>
            <CardContent>
              <Avatar alt={user.name} src={user.photoUrl} sx={avatarStyle} />
              <Typography sx={userStyle} variant="h5">{user.name}</Typography>
              <Typography sx={userStyle} variant="subtitle1">{user.email}</Typography>
            </CardContent>
          </Card>
    
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Ads from {user.name}</Typography>
              <List>
                {ads.map((ad) => (
                  <ListItem key={ad.id} style={listItemStyle}>
                    <ListItemText primary={ad.title} secondary={ad.description} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
    
          <Card style={cardStyle}>
            <CardContent>
              <Typography variant="h6">Favorites of {user.name}</Typography>
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