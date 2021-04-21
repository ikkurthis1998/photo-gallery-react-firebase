import { useState } from 'react';
import './App.css';
import AddImage from "./components/AddImage";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="App">
      <h1>Iron Man Art Compilation</h1>
      <p style={{width: "80%", margin: "auto"}}>All of my favourite Iron Man art in one place. Add yours too.</p>
      <AddImage />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
