import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import OurService from './components/Our Service.jsx'
import MybookingApp from './components/Mybooking App.jsx'
import Signup from './components/Signup.jsx'
import JoinWaitlist from './components/Join Waitlist.jsx'
import FAQ from './components/FAQ.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Blogs from './components/Blogs.jsx'
import Bookingnow from './components/Bookingnow.jsx'
import Bookingdetails from './components/Bookingdetails.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about us' element={<About/>}/>
      <Route path='/our services' element={<OurService/>}/>
      <Route path='/my booking' element={<MybookingApp/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/join waitlist' element={<JoinWaitlist/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/privacy policy' element={<PrivacyPolicy/>}/>
      <Route path= '/gallery' element={<Gallery/>}/>
      <Route path= '/contact us' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/bookingnow' element={<Bookingnow/>}/>
      <Route path='/bookingdetails' element={<Bookingdetails/>}/>



    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
