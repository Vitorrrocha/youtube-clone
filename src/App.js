import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './App.css';
import Home from './components/Home';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#065FD4'
      }
    }
  });

  return(
    <ThemeProvider theme={theme}>
      <Home />
        
    </ThemeProvider>
    
    
  )
}

export default App;