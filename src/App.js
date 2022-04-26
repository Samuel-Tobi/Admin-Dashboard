import Sidebar from './component/sidebar/Sidebar';
import Topbar from './component/topbar/Topbar';
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
