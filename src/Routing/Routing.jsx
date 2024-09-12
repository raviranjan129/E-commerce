import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import ProductsDetails from '../Pages/ProductsDetails'
const Routing = () => {
  return (
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/products/:productId'  element={<ProductsDetails/>}/>
    </Routes>
  )
}

export default Routing
