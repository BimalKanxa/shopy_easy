// import React from 'react'
import Slider from "../components/Slider"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Products from "../components/Products"
// import Dummyfooter from "../components/Dummyfooter"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"



const Home = () => {
  return (
    <>
    <Announcement/>
   <Navbar/>
   <Slider/>
   <Categories/>
   <Products/>
<Newsletter/>
<Footer/>
   
    </>
  )
}    

export default Home