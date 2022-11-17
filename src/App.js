import './App.css';
import AdminUpload from './pages/AdminUpload';
import Landing from './pages/Landing';
import VideoLogs from './pages/VideoLogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <BrowserRouter>
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
        <Route path='/videoPage' element={
          <VideoPage title={"Video - 1: React with redux"} author={"Ankush Gupta"} />
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
