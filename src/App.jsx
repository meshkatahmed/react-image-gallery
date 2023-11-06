import { useState } from 'react';
import {Card,CardBody,CardHeader,CardTitle} from 'reactstrap';
import './App.css';
import FeatureImage from './components/images/FeatureImage';
import RegularImage from './components/images/RegularImage';
import AddImage from './components/images/AddImage';
import pic1 from './assets/images/image-1.webp';
import pic2 from './assets/images/image-2.webp';
import pic3 from './assets/images/image-3.webp';
import pic4 from './assets/images/image-4.webp';
import pic5 from './assets/images/image-5.webp';
import pic6 from './assets/images/image-6.webp';
import pic7 from './assets/images/image-7.webp';
import pic8 from './assets/images/image-8.webp';
import pic9 from './assets/images/image-9.webp';
import pic10 from './assets/images/image-10.webp';
import pic11 from './assets/images/image-11.webp';

export default function App() {
  const [images,setImages] = useState([
    {id: 1, path: pic1, selected : false, status: true},
    {id: 2, path: pic2, selected : false, status: true},
    {id: 3, path: pic3, selected : false, status: true},
    {id: 4, path: pic4, selected : false, status: true},
    {id: 5, path: pic5, selected : false, status: true},
    {id: 6, path: pic6, selected : false, status: true},
    {id: 7, path: pic7, selected : false, status: true},
    {id: 8, path: pic8, selected : false, status: true},
    {id: 9, path: pic9, selected : false, status: true},
    {id: 10, path: pic10, selected : false, status: true},
    {id: 11, path: pic11, selected : false, status: true},
  ]); 

  let activeImages = images.filter(image=>{return image.status});
  let style = {margin: '15px', padding: '2px'};
  let selectedFiles = images.reduce((result,image) => {
    image.selected ? result = result + 1 : result = result;
    return result;
  },0);

  function handleHover(e) {
    e.target.style.opacity = '30%';
  }

  function handleHoverEnd(e) {
    e.target.style.opacity = '';
  }
  
  function handleClick(e,image) {
    if (!image.selected) {
      image.selected = true;
      e.target.style.border = 'solid blue';
    } else {
      image.selected = false;
      e.target.style.border = '';
    }
    setImages(images.map(pic => {
      if (pic.id != image.id) return pic 
      return image;
    }));
  }

  function handleDragStart(e) {
    e.dataTransfer.setData('webp',e.target.id); // set the id of the drag element as data
  }
  
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const data = e.dataTransfer.getData('webp'); // get the id of the source(drag) element as data
    const sourceState = images.filter(image=>image.id==data)[0];
    const sourcePath = sourceState.path;
    const targetState = images.filter(image=>image.id==e.target.id)[0];
    const targetPath = targetState.path;
    
    setImages(images.map(image => {
      if (image.id==data) image.path = targetPath;
      else if (image.id==e.target.id) image.path = sourcePath;
      return image;
    }));
  }

  function handleDelete(e) {
    setImages(images.map(image => {
      if (image.selected) {
        image.status=false;
        image.selected=false;
      }
      return image;
    }));
  }
  
  const title = selectedFiles ? 
    selectedFiles===1 ? 
      <CardTitle>
        <input type='checkbox' defaultChecked/> 
        {selectedFiles} File Selected 
        <button type='button' onClick={handleDelete} className='btn btn-light'>Delete File</button>
      </CardTitle> :
      <CardTitle>
        <input type='checkbox' defaultChecked/> 
        {selectedFiles} Files Selected 
        <button type='button' onClick={handleDelete} className='btn btn-light'>Delete Files</button>
      </CardTitle>
    :
    <CardTitle>Image Gallery</CardTitle>;
  console.log(images);
  return (
    <Card style={{margin: '10px'}}>
      <CardHeader>
        {title}
      </CardHeader>
      <CardBody style={{padding: '10px'}}>
        <div className='row'>
          {activeImages.map((image,index) => {
            if (!index) {
              return (
                <FeatureImage 
                  key={image.id} 
                  image={image} 
                  style={style} 
                  handleClick={handleClick}
                  handleDragStart={handleDragStart} 
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  handleHover={handleHover} 
                  handleHoverEnd={handleHoverEnd}
                />
              );
            } else {
              return (
                <RegularImage 
                  key={image.id} 
                  image={image} 
                  style={style} 
                  handleClick={handleClick} 
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  handleHover={handleHover} 
                  handleHoverEnd={handleHoverEnd}
                />
              );
            }
           })
          }
          <AddImage />
        </div>
      </CardBody>
    </Card>
  )
}

