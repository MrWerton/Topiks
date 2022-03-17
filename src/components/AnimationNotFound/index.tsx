import Lottie from 'react-lottie';
import AnimationLogin from './anime.json'
export const AnimationNotFound =()=>{
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
          width= {'80%'}
          height={ 'auto'}
          options={defaultOptions}
        />
    )


}
export default Animation;