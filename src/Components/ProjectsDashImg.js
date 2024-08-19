import React from 'react'
import './ProjectsDashImgStyles.css'
import projectsimg from '../Images/projectpic1.jpg';
import projectsimg2 from '../Images/projectspic2.jpg'
import projectsimg3 from '../Images/projectspic3.jpg'


const ProjectsDashImg = (props) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <img src={projectsimg3} className='img' alt='project-intro Img'></img>
                <h1 className='parahead'>{props.heading}</h1>
                <p className='parapro'>{props.text}</p>
            </div>
        </div>
    )
}

export default ProjectsDashImg











// import React from 'react';
// import './ProjectsDashImgStyles.css';
// import projectsimg from '../Images/projectpic1.jpg';

// const ProjectsDashImg = () => {
//     return (
//         <div className='hero-img'>
//             <img src={projectsimg} className='img' alt="Projects" />
//             <div className='heading'>
//                 <h1>Projects.</h1>
//                 <p>Some of my recent projects</p>
//             </div>
//         </div>
//     );
// };

// export default ProjectsDashImg;
