import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import * as Routes from './constants/Routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Community from './pages/Community';
import UploadPage from './pages/UploadPage';
const router = createBrowserRouter([
  {
    path: Routes.HOME_PAGE,
    element: (
      <HomePage />
    ),
  },
  {
    path: Routes.COMMUNITY_PAGE,
    element: (
      <Community />
    )
  },
  {
    path: Routes.UPLOAD_PAGE,
    element: (
      <UploadPage />
    )
  }
]);


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
