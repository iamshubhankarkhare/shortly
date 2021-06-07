import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Box, Flex, Button } from './components/styledComponents';
import Navbar from './components/navbar';
import HeroBlock from './components/heroBlock';
import bgBoostDesktop from './assests/bg-boost-desktop.svg';

function App() {
  console.log(bgBoostDesktop);
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <Navbar />
        <HeroBlock />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
