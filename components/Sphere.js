import TagCloud from 'TagCloud';
import React ,{ useEffect }from 'react';




const Sphere = () => {

  useEffect(() =>{

    const container = ".tagcloud";
    const texts =[
      "HTML",
      "CSS",
      "SCSS",
      "SAAS",
      "LESS",
      "TAILWIND",
      "JAVA",
      "JS",
      "REACT",
      "NEXT",
      "VITE",
      "MATERIAL-UI",
      "JEST",
      "DSA",
      "GIT HUB",
      "GIT",
      "ES6",
      "PWAs",
      "GIT",
      "MySql",
      "NODEJS",
      "EXPRESS",
      "REST",
      "API",
      "MONGODB",
      "MONGOOSE",
      "HTML",
      "CSS",
      "SCSS",
      "SAAS",
      "LESS",
      "TAILWIND",
      "JAVA",
      "JS",
      "REACT",
      "NEXT",
      "VITE",
      "MATERIAL-UI",
      "JEST",
      "DSA",
      "GIT HUB",
      "GIT",
      "ES6",
      "PWAs",
      "GIT",
      "MySql",
      "NODEJS",
      "EXPRESS",
      "REST",
      "API",
      "MONGODB",
      "MONGOOSE",
      "HTML",
      "CSS",
      "SCSS",
      "SAAS",
      "LESS",
      "TAILWIND",
      "JAVA",
      "JS",
      "REACT",
      "NEXT",
      "VITE",
      "MATERIAL-UI",
      "JEST",
      "DSA",
      "GIT HUB",
      "GIT",
      "ES6",
      "PWAs",
      "GIT",
      "MySql",
      "NODEJS",
      "EXPRESS",
      "REST",
      "API",
      "MONGODB",
      "MONGOOSE",
      "HTML",
      "CSS",
      "SCSS",
      "SAAS",
      "LESS",
      "TAILWIND",
      "JAVA",
      "JS",
      "REACT",
      "NEXT",
      "VITE",
      "MATERIAL-UI",
      "JEST",
      "DSA",
      "GIT HUB",
      "GIT",
      "ES6",
      "PWAs",
      "GIT",
      "MySql",
      "NODEJS",
      "EXPRESS",
      "REST",
      "API",
      "MONGODB",
      "MONGOOSE"
  
  ];
  const options ={
    radius: 350,
    maxSpeed:"fast",
    initSpeed:"fast",
   
    keep:true
  }; 
  TagCloud(container , texts , options)
  },[])


  return (
    <div className='text-hola font-semibold'>
  <span className='tagcloud'></span>
  </div>
  )
}
export default Sphere;