
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Review from './Components/Reviews/Review'
import Search from './Components/Search/Search'
import './App.css'
import Sellers from './Components/Sellers/Seller'
import Best from './Components/Auctions/Best'

function App() {
  return (
   <div>
    <Search/>
    {/* <Sellers/> */}
    <Best/>
    <Review/>
    <Footer/>
   </div>
  )
}

export default App
