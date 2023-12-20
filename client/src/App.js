import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Home from './pages/Login';
import Home from './pages/Register';

import { Button, Divider, Flex } from 'antd';
function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     </Routes>
      </BrowserRouter>
     

   </div>
  );
}

export default App;
