import { useState } from 'react';
import './App.css';
import AddImage from "./components/AddImage";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="App">
      <h1>Picture Book</h1>
      <AddImage />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
