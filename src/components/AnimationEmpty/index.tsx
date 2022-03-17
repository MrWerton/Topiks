import Lottie from 'react-lottie';
import AnimationLogin from './anime.json'
export const AnimationEmpty =()=>{
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
        style={{
          maxWidth: 400
        }}
          width= {'100%'}
          height={ 'auto'}
          options={defaultOptions}
        />
    )


}
export default Animation;