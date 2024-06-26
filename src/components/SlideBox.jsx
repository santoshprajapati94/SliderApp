import { useEffect } from "react";
import { useState } from "react";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import "./slidstyle.css";

const SlideBox = () => {
  const [image, setImage] = useState(1);
  const [pic, setPic] = useState()

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(`https://picsum.photos/id/${image}/450/300`);
        // const data = await res.json();
        console.log(`data`, res);
        setPic(res?.url);
        // console.log(res?.url);
      } catch (error) {
        console.error(`${error} accured !`);
      }
    }
    fetchImage();
  }, [image]);

  const ArrowBack = () => {
    image > 1 ? setImage(image - 1) : image
  };

  const ArrowNext = () => {
    image < 5 ? setImage(image + 1) : image;
    
  };
  return (
    <div className="container">
        <h2>Image Slider App</h2>
        <div className="img-rap">
        <ArrowCircleLeftRoundedIcon
      className="" 
      onClick={ArrowBack} 
      disabled={image > 1 ? false : true} 
      style={{
        color:image > 1 ? 'black' : 'red'
      }}
      sx={{fontSize :'2.5rem'}}
      />
      <img src={pic} className="slideImage" alt={image} />
      <ArrowCircleRightRoundedIcon 
        className=""
        onClick={ArrowNext}
        disabled={image < 5 ? false : true}
        sx={{fontSize :'2.5rem'}}
        style={{
            color:image < 5 ? 'black' : 'red'
          }}
      />
        </div>
    </div>  
  );
};
export default SlideBox;
