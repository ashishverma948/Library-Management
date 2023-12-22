// import browse router redux toolkit
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Home from './pages/Login';
import Home from './pages/Register';

// import css
import './stylesheets/alignments.css';
import './stylesheets/theme.css';
import './stylesheets/sizes.css';
import './stylesheets/custom-components.css';
import './stylesheets/form-elements.css';




import { Button, Divider, Flex } from 'antd';
import ProtectedRoute from './components/ProtectedRoute';
import Loader from "./components/Loader";
import { useSelector } from 'react-redux';

function App() {
  const {loading} = useSelector((state)=> state.loaders);
  return (
   <div>
    {loading && <Loader/>}

    <BrowserRouter>

    <Routes>
     <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     </Routes>
     
      </BrowserRouter>
     
 
   </div>
  );
}
export default App;