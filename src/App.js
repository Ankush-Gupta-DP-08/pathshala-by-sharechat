import './App.css';
import AdminUpload from './pages/AdminUpload';
import Landing from './pages/Landing';
import VideoLogs from './pages/VideoLogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Landing />
          </>
        } />
        <Route path='/upload' element={
          <AdminUpload />
        } />
        <Route path='/videoLogs' element={
          <VideoLogs />
        } />
        <Route path='/videoPage/:title/:author' element={
          <VideoPage />
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
