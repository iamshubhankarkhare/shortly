import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { color } from 'styled-system';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { flexbox } from 'styled-system';

function App() {
  const Box = styled.div`
    display: flex;
    ${color}
    ${flexbox}
  `;
  return (
    <ThemeProvider theme={theme}>
      <Box
        color="#fff"
        bg="neutral.veryDarkViolet"
        justifyContent="center"
        flexDirection={['row', 'column']}
      >
        <div>Tomato </div>
        <div>Tomato </div>
        <div>Tomato </div>
        <div>Tomato </div>
        <div>Tomato </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
