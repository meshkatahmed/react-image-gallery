import {Card} from 'reactstrap';
import './App.css';
import pic1 from './assets/images/image-1.webp';
import pic2 from './assets/images/image-2.webp';
import pic3 from './assets/images/image-3.webp';
import pic4 from './assets/images/image-4.webp';
import pic5 from './assets/images/image-5.webp';
import pic6 from './assets/images/image-6.webp';
import pic7 from './assets/images/image-7.webp';
import pic8 from './assets/images/image-8.webp';

function App() {
  return (
    <div id='app'>
      <div className='row'>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic1} alt="b"/>
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin:'2px',width:'360px'}}>
            <img id='img' src={pic2} alt="b" />
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin:'2px',width:'360px'}}>
            <img id='img' src={pic3} alt="b" />
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic4} alt="b" />
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic5} alt="b" />
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic6} alt="b" />
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic7} alt="b" />
          </Card>
        </div>
        <div className='column'>
          <Card style={{margin: '2px',width:'360px'}}>
            <img id='img' src={pic8} alt="b" />
          </Card> 
        </div>
      </div>
    </div>
  )
}

export default App;
