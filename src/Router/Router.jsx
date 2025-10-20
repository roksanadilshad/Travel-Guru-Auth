import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/root';
import Home from '../Pages/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <h2>Its an  error</h2>,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);
