import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
