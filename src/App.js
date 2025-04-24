import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import UserContext from './utils/UserContext.js';
import Header from './components/Header';
import Body from './components/Body';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';

//import Grocery from './components/Grocery';

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// on demand loading
// dynamic import

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: 'Ashish Chandane',
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      {/* default */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        {/* Ashish Chandane */}
        <div className='app'>
          {/* <UserContext.Provider value={{ loggedInUser: "Namaste Star" }}> */}
          {/* Namaste Star */}
          <Header />
          {/* </UserContext.Provider> */}
          {/* if path is "/" */}
          {/* <Body /> */}

          {/* if path is "/about" */}
          {/* <About /> */}

          {/* if path is "/contact" */}
          {/* <Contact /> */}

          {/* The above configuration can be achieve using children and Outlet */}

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            {' '}
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {' '}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  /*   {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }, */
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
