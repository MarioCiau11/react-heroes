import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line react/prop-types
const HeroPage = ({ title, children }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
};

export default HeroPage;
