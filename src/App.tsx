import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/public/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
