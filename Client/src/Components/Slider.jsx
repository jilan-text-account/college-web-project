import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [ 'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg' ];

function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrev () { 
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };
    function handleNext () {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
    };

  return (
    <div>
        <div className="slider"> 
            <button className='prevbutton' onClick={handlePrev}><ArrowBackIosNewIcon /></button> 
            <img src={images[currentIndex]} alt="slider" /> 
            <button className='nextbutton' onClick={handleNext}><ArrowForwardIosIcon /></button> 
        </div>
    </div>
  )
}

export default Slider