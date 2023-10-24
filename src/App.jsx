import './App.css'
import HomePage from './HomePage'
import ProductDetails from './ProductDetails'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from 'react-router-dom'


// Main App
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/productdetails' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
