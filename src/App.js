import { useState } from 'react';
import './App.css';
import AddImage from "./components/AddImage";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';


function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [light, setLight] = useState(true);
  
  return (
    <div className={light ? "App" : "App-dark"}>
      <h1 className="app-heading">Iron Man Art Compilation <i className={ light ? "bi bi-lightbulb" : "bi bi-lightbulb-off" } onClick={() => setLight(!light)}></i></h1>
      <p style={{width: "80%", margin: "auto"}}>All of my favourite Iron Man art in one place. Add yours too.</p>
      <AddImage />
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
