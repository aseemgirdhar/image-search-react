import './App.css';
import SearchImage from './Api/Api';
import {useState} from "react"
function App() {
  const [images, setImages] = useState([])
  const [searchImg, setSearchImg] = useState("")
  const search = async () => {
    const results = await SearchImage(searchImg);
    setImages(results);
  }

  return (
    <div className="App">
       <input type='text' onChange={(e) => setSearchImg(e.target.value)} />
      <button onClick={search}>Search</button>
      <div className='img-wrapper'>
      {images.map(img => <img src={img.urls.small} alt='' />)}
      </div>
     
    </div>
  );
}

export default App;
