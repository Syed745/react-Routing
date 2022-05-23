import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
import Deshboard from "./Deshboard";
function Routing() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='Signin' element={<Signin />} />
      <Route path='/Deshboard' element={<Deshboard />} />
    
    </Routes>
      
    </BrowserRouter>
    
    </>
  );
}

export default Routing;
