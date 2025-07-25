import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { SignupPage } from './components/Authentication/Auth.jsx'
import SignInPage from './components/Signin/Signin.jsx'
import Trending from './components/Trending/Trending.jsx'
import Reviews from './components/Reviews/Review.jsx'
import Movie from './components/Movies/Movies.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path ="" element ={<Home />} />
      <Route path ="Movie" element={<Movie />} />
      <Route path ="Signup" element={<SignupPage />} />
      <Route path = "Signin" element={<SignInPage/>} /> 
      <Route path = "Trending" element={<Trending/>} /> 
      <Route path = "Reviews" element={<Reviews/>} /> 
      <Route path = "Movie" element={<Movie/>} /> 
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
