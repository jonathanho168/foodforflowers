import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
