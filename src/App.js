import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Box, Flex, Button } from './components/styledComponents';
import Navbar from './components/navbar';
import HeroBlock from './components/heroBlock';
import CtaBlock from './components/ctaBlock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex flexDirection="column">
        <Navbar />
        <HeroBlock />
        <CtaBlock />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
