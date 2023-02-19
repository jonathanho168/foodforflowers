import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import * as Routes from './constants/Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: Routes.HOME_PAGE,
    element: (
      <HomePage />
    ),
  },
]);


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
