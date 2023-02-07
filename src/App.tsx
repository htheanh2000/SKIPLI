import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/public/home';
import VerifyPage from './pages/public/verify';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/verify",
    element: <VerifyPage/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
