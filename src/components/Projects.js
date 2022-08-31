import React from 'react'
import adnegs7 from '../../src/assets/adnegs7.png';
import adnegs2 from '../../src/assets/adnegs2.png';
import adnegs3 from '../../src/assets/adnegs3.png';
import adnegs4 from '../../src/assets/adnegs4.png';
import adnegs5 from '../../src/assets/adnegs5.png';
import adnegs6 from '../../src/assets/adnegs6.png';
import styled from 'styled-components'


const ProjectWrapper = styled.div`
  .box img{
    width: 100%;
    height: 100%;
  }
  .project-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 20px 0 80px 0;
    }
    
    .div1 { grid-area: 1 / 1 / 2 / 2; border:0.5px solid green;}
    .div2 { grid-area: 1 / 2 / 3 / 4; border:0.5px solid green;}
    .div3 { grid-area: 3 / 3 / 4 / 4; border:0.5px solid green;}
    .div4 { grid-area: 3 / 2 / 4 / 3; border:0.5px solid green;}
    .div5 { grid-area: 3 / 1 / 4 / 2; border:0.5px solid green;}
    .div6 { grid-area: 2 / 1 / 3 / 2; border:0.5px solid green;}
`;

const Projects = () => {
  return (
    <ProjectWrapper>
      <div style={{textAlign:'center'}}>
        <h1>Projects</h1>
        <p>Here are few  projects i’ve partnered and worked on.</p>
      </div>
      <div class="rowComponent project-container">
        <div className="box div1">
          <a href='https://adewaletosin.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs7} alt="adnegs1" /></a>
        </div>
        <div className="box div2">
        <a href='https://adnegsfood.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs2} alt="adnegs2" /></a>
        </div>
        <div className="box div3">
        <a href='https://sushi-food-app.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs3} alt="adnegs3" /></a>
        </div>
        <div className="box div4">
        <a href='https://adewaletosinsamuel.netlify.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs4} alt="adnegs4" /></a>
        </div>
        <div className="box div5">
        <a href='https://adnegs-foods.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs5} alt="adnegs5" /></a>
        </div>
        <div className="box div6">
        <a href='https://adewaletosin.vercel.app/' target="_blank" rel="noopener noreferrer"><img src={adnegs6} alt="adnegs6" /></a>
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Projects