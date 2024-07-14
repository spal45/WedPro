import './slider.css';
import { useState } from 'react';

function CardSlider(){
    const imgIndex = [1,2,3,4]
    
    
    const [image, setImage] = useState(imgIndex)
    function changeImage(){
        let updatedImage = [...image]
        let initial = updatedImage[0]
        console.log(updatedImage)
        setInterval(()=>{
            for(let i=0; i<4; i++){
                if(i>2){
                    updatedImage[i]=initial;
                }else if(i<=2){
                    updatedImage[i] = updatedImage[i+1];
                }
            }
            setImage(updatedImage);
            changeImageText()
        },3000)
    }
    const imgText = ["10+ Years of Experiences", "150+ Happy Clients", "150+ Wedding / Event Shoot", "Professional Equipment & Team"];

    
    const [text, setText] = useState(imgText);
    function changeImageText(){
      let updatedImageText = [...text]
      let initial = updatedImageText[0]
        for(let i=0; i<4; i++){
          if(i>2){
            updatedImageText[i]= initial
          }else if(i<=2){
            updatedImageText[i] = updatedImageText[i+1];
          }
        }
      setText(updatedImageText);
    }
    changeImage();
    return(
        <div className='containerC'>
            <div className='sliderHeading'>Why Our Photography Stands Out</div>
            <div className='sliderCards'>
                {/* <div className='arrowLeft' id='leftA' onClick={changeImage}>
                <i class="fa-solid fa-less-than"></i>
                </div> */}
                <div className='cardS1'>
                    <img className='cardSDiv' src={`/images/iconImg${image[2]}.jpg`}/>
                    <div className='cardStext'>{text[2]}</div>
                </div>
                <div className='cardS2'>
                    <img className='cardSDiv' src={`/images/iconImg${image[0]}.jpg`}/>
                    <div className='cardStext'>{text[0]}</div>
                </div>
                <div className='cardS3'>
                    <img className='cardSDiv' src={`/images/iconImg${image[1]}.jpg`}/>
                    <div className='cardStext'>{text[1]}</div>
                </div>    
                {/* <div className='arrowRight' id='rightA' onClick={changeImage}>
                <i class="fa-solid fa-greater-than"></i>  
                </div>             */}
            </div>
        </div>
    )
}
export default CardSlider;