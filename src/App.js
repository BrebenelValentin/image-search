import { useState } from 'react';
import './App.css';
import Gallery from './compoents/Gallery';
import Search from './compoents/Search';
import useFetch from './compoents/useFetch';

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [perPage, setPerPage] = useState(Array.from({ length: 15 }));
  const {data: flickrData, isPending} = useFetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=15b67c2a8b4288ff1fddf5eb56655cfb&tags=" + searchInput + "&content_type=1&is_getty=1&per_page=" + perPage.length + "", searchInput);
  
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  }

  const handleItemsLength = () =>{
    setPerPage(perPage.concat(Array.from({ length: 1 })))
  }

  return (
    <div className="page-wrapper">
      <h1>Image Gallery</h1>
      <Search searchValue = {handleSearch}/>
      {isPending && <div>Loading...</div>}
      {flickrData && !isPending && <Gallery flickrImages={flickrData} perPage={perPage} itemsLength={handleItemsLength}/>}
    </div>
  );
}

export default App;
