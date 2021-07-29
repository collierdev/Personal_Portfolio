import './Work.css';
import Tilt from 'react-parallax-tilt'
import Button from '../Button/Button'
import Code from '../images/Code.JPG'
import Nextclade from '../images/Nextclade.JPG'
import T1D from '../images/T1D.jpg'
import Covidfem from '../images/fem-covid.jpg'
  function Work(props) {
    return (
      <>
        <div className='work'>
          
          <p className="work-header">LATEST WORK</p>
          
          <div className="web-portfolio">
              <Tilt className="parallax-effect portfolio-card" 
                tiltReverse={true}
                perspective={3000}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                transitionSpeed={3000}
                reset={true}
                scale={1.07}
                glareEnable={true} glareMaxOpacity={0.45} glareColor="#eee3fa" glarePosition="all" glareBorderRadius="2%"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                gyroscope={true}
                style={{ backgroundImage: `url(${Code})`}}
                >
              <div className="overlay"></div>
              <div className="inner-element"> 
              
               <div>
                <h1>Personal Portfolio</h1>
                <h2> React - GSAP - Express</h2>
                <Button direction="left">Visit Project</Button>
                </div>
              </div>
              </Tilt>
              <Tilt className="parallax-effect portfolio-card" 
              tiltReverse={true}
              perspective={1000}
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              transitionSpeed={3000}
              reset={true}
              scale={1.07}
              glareEnable={true} glareMaxOpacity={0.45} glareColor="#eee3fa" glarePosition="all" glareBorderRadius="2%"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              gyroscope={true}
              style={{ backgroundImage: `url(${Nextclade})`}}
              >
                <div className="overlay"></div>
              <div className="inner-elements">
                <h1>COVID-19 Variant Analysis</h1>
                <h2>Bash - GATK - BWA - NextClade - Pangolin</h2>
                <Button direction="left">Visit Project</Button>
              </div>
              </Tilt>
              <Tilt className="parallax-effect portfolio-card" 
              tiltReverse={true}
              perspective={1000}
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              transitionSpeed={3000}
              reset={true}
              scale={1.07}
              glareEnable={true} glareMaxOpacity={0.45} glareColor="#eee3fa" glarePosition="all" glareBorderRadius="2%"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              gyroscope={true}
              style={{ backgroundImage: `url(${T1D})`, borderRadius:"0.01em"}}
              >
                <div className="overlay"></div>
              <div className="inner-elements">
                <h1>Type 1 Diabietes <br></br>Three Country Cohort Analysis </h1>
                <h2> R - Kraken - Bracken - Krona - Phyloseq - AmpVis</h2>
                <Button direction="left">Visit Project</Button>
              </div>
              </Tilt>
              <Tilt className="parallax-effect portfolio-card" 
              tiltReverse={true}
              perspective={1000}
              tiltAngleXInitial={0}
              tiltAngleYInitial={0}
              transitionSpeed={3000}
              reset={true}
              scale={1.07}
              glareEnable={true} glareMaxOpacity={0.45} glareColor="#eee3fa" glarePosition="all" glareBorderRadius="2%"
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              gyroscope={true}
              style={{ backgroundImage: `url(${Covidfem})`, borderRadius:"0.01em"}}
              >
              <div className="overlay"></div>
              <div className="inner-elements">
                <h1>COVID-19 Female Differnetial Analysis </h1>
                <h2> R - DESeq - STAR Alignment - Gprofiler - EnrichR</h2>
              <Button direction="left">Visit Project</Button>
              </div>
              </Tilt>
          </div>
          
        </div>
        
      </>
    );
  }
  
  export default Work;