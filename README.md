# Namaste React

# Parcel - parceljs.org

- Dev build
- Local Server
- HMR= Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster build
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differnential Bundling - to support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

#Namaste Food

/\_ Components>> Header

> > Logo >> Header menu (Nav Items) Body  
> > Search >> RestaurantContainer >> Restaurant Card >> img >> Name of rest,
> > star rating, cuisine, delivery time Footer  
> > Copyright >> Links >> Address >> Contact \_/

## https://legacy.reactjs.org/docs/faq-structure.html

# Two types of exports

- Default Export/Import -> export default Component import Component from "path"

- Named Export/Import
  > export const Component import {Component} from "path"

# React Hooks

(Normal JS utility functions)

- useState() - Super powerful state variables in React
- useEffect()

# Got error for useState hook as can not import module react

Reason : If you ever get this error it is because you are using an old pre-hooks
version of React. Solution: The easiest fix is to simply run "npm upgrade" (or
yarn, or whatever your preferred package manager is) OR npm install npm@latest

# React reconciliation (React Fiber)

> https://github.com/acdlite/react-fiber-architecture

# chapter 7 routing

-react-router-dom -createReactRouter -RouterProvider -path, element,
errorElement -useRouteError

# Chapter 8 Class based component

NEVER UPDATE STATE VARIABLE DIRECTLY

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
https://api.github.com/users/chandaneashish

/\* Render phase >>

- Parent constructor called
- Parent render called -- First constructor called -- First render called --
  Second constructor called -- Second render called -- Third constructor called
  -- Third render called

> > <DOM manupulation pase> Commit phase --First component did mount called
> > --Second component did mount called --Third component did mount called

- Parent Component did mount called

\*/

/\*\*\*

- COMPONENT LIFECYCLE
-
- ---MOUNTING-----
-
- Constructor (dummy)
- Render (dummy)
-      <HTML  dummy>
- Component Did Mount
-      <API call>
-      <this.setState> -> State variable is updated
-
-
- ---UPDATE----
-
- Render(API data)
-      <HTML (new API data)>
- Component Did Update
-
- \*/

# Chapter 9 Optimizing the app

- custom hooks
- Component budling to optimize the app
- lazy loading also know as

      Chunking
      Code Splitting
      Dynamic Bundling
      on demand loading
      dynamic import

- Suspense component
