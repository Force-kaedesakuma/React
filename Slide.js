import { SlideshowOutlined } from '@material-ui/icons';
import './App.css';

const Slide = () => {
  const showMassage = () =>{
    alert('Hello');
  }
  return (
    <div className="App" id="root" onClick={showMassage}>
      HelloReact!
    </div>
  );
}

export default Slide;
