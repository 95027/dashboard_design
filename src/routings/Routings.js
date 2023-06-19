import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home/Home';

const Routings = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Home/>} />
        </Routes>
    </div>
  )
}

export default Routings