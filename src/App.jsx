import { useState } from 'react';
import {Button, Card,CardBody,CardHeader,CardImg,CardTitle} from 'reactstrap';
import './App.css';
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

function App() {
  const [pic1s,setPic1] = useState(0);
  const [pic2s,setPic2] = useState(0);
  const [pic3s,setPic3] = useState(0);
  const [pic4s,setPic4] = useState(0);
  const [pic5s,setPic5] = useState(0);
  const [pic6s,setPic6] = useState(0);
  const [pic7s,setPic7] = useState(0);
  const [pic8s,setPic8] = useState(0);
  const [pic9s,setPic9] = useState(0);
  const [pic10s,setPic10] = useState(0);
  const [pic11s,setPic11] = useState(0);

  const pics = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11,pic11];

  function handleDrag(e) {
    console.log(e.target);
  };
  const imageCards = pics.map((pic,index) => {
    if (index===0) {
      return (
          <Card style={{width: '350px', height: '350px', margin: '15px'}}>
            <CardImg src={pic} alt='b'  onDrag={handleDrag}/>
          </Card>
      );
    } else {
      return (
        <Card style={{display: 'flex', width: '160px', height: '160px', margin: '15px'}}>
          <CardImg src={pic} alt='b' onDrag={handleDrag}/>
        </Card>
      );
    }
  });

  return (
    <Card style={{margin: '10px'}}>
      <CardHeader>
        <CardTitle>Image Gallery</CardTitle>
      </CardHeader>
      <CardBody style={{padding: '10px'}}>
        <div className='row'>
          {imageCards}
          <Card style={{textAlign: 'center', width: '160px', height: '160px', margin: '15px'}}>
            <h4 style={{paddingTop: '50px'}}>Add Image</h4>
          </Card>
        </div>
      </CardBody>
    </Card>
  )
}

export default App;
