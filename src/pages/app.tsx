import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
// import LoginPage from './login';

function MyApp({ }) {
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default MyApp;