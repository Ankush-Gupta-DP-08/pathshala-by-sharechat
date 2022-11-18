import './App.css';
import AdminUpload from './pages/AdminUpload';
import Landing from './pages/Landing';
import VideoLogs from './pages/VideoLogs'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoPage from './pages/VideoPage';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`http://localhost:4000/api/v1/media/all/`)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };

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
          <AdminUpload getAllMedias={getAllMedias} />
        } />
        <Route path='/videoLogs' element={
          <VideoLogs />
        } />
        <Route path='/videoPage/:title/:author' element={
          <VideoPage medias={medias} />
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
