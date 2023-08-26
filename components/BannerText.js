import React from 'react'
import { useState ,useEffect  } from "react";
const BannerText = () => {
    const [ loopNum , setLoopNum ] = useState(0);
    const [ isDeleting , setIsDeleting ] = useState(false);
    const toRotate =[ "Web Developer" , "Web Designer" , "Front-End Developer"];
    const [text , setText ] = useState('')
    const[delta ,setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
 

    const tick =() => {
        let i = loopNum % toRotate.length;// i is the index currently we are peeking | % is used to claculate the modules means when the  toROtate elements will  finish it will restart again
        let fullText = toRotate[i];   // this for the cuurent full text i th element
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length + 1);
        // is the letter is deleting then our next text would be the substring of full text which to toROtate[i] and it will go from 0th index 1letter less than current no of letters other wise we will add one letter ti complete the text if it is not dleteing
        
        setText(updatedText);//now setting text to updated text 
      
        if(isDeleting){
          setDelta(prevDelta => prevDelta/2);//as delta decide how fast a letter will be wrtiien or dleted as deletion should be faster than wrtting so we are cutting it to half to make it look more natural
        }
        if(!isDeleting && updatedText === fullText){//if we are not deleting and our updated text come to an end of the element of toRotates one element the now our deletin will happen and after deletion is complete our new element of toROtate will start writing again
          setIsDeleting(true);
          setDelta(period);//after deletion is over setting time period to normal which is we declared 2000
        }
        else if( isDeleting && updatedText === '' ){//if we are deleting and our deletion is over as updated text reached to an end we set is deeting to false and update the our ticker to find the new element of our toRotate funciton 
         setIsDeleting(false);
         setLoopNum(loopNum +1);//setting it to the next loop or next element of the toROtate 
         setDelta(200);//setting delta manually t0 500;
      
        }
      }
      useEffect(() => {
        let ticker =  setInterval(() => {
          tick();
        },delta)
        // delta will determine here how fast will things happen
        return () => {clearInterval(ticker)};

    },[text])

  return (
    <div>{text}</div>
  )
}

export default BannerText