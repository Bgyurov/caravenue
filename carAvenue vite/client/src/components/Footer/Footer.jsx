import { AppBar, Toolbar, Typography , IconButton  } from '@mui/material';
import { createTheme , ThemeProvider  } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/Github';
import LanguageIcon from '@mui/icons-material/Language';
export const Footer = () => {
    const theme = createTheme({
        palette: {
          primary: {
            light: '#f79845',
            main: '#605b5b',
            dark: '#f79845',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#fffff',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });
 
      return (
        <ThemeProvider theme={theme}>
        <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="body2" color='secondary' >
        { `© ${new Date().getFullYear()} CarAvenue. All rights reserved.`}
            
          </Typography>
          <IconButton sx={{ marginLeft: '5rem' }} color="inherit" target='_blank' href="https://www.linkedin.com/in/boyan-gyurov-8276b0239/">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="inherit" target='_blank' href="https://github.com/Bgyurov">
          <GitHubIcon />
        </IconButton>
        <IconButton color="inherit" target='_blank' href="https://gyurov.netlify.app/">
          <LanguageIcon />
        </IconButton>
          
        </Toolbar>
  
      </AppBar>

        </ThemeProvider>
              
    )
}