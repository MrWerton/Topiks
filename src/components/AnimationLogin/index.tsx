import React from 'react';
import Lottie from 'react-lottie';
import AnimationLogin from './anime.json'
export const Animation =()=>{
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationLogin,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return(
        <Lottie
       
        width= {'100%'}
        height={ 'auto'}
        options={defaultOptions}
        />
    )


}
export default Animation;