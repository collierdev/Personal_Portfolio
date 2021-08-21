import './Work.css';
import Button from '../Button/Button'
import Code from '../images/Code.JPG'
import Nextclade from '../images/Nextclade.JPG'
import T1D from '../images/T1D.jpg'
import Covidfem from '../images/fem-covid.jpg'
  function Work(props) {
    return (
      <>
        <div className='work' id={props.id}>
          <div className="work-header">
            <h2 className="pre-title">Portfolio</h2>
            <h3 className="title">Selected Works</h3>
          </div>
          
          
          <div className="web-portfolio">
              <div className="portfolio-card" style={{ backgroundImage: `linear-gradient(90deg, #0A1969 0%, rgba(15, 44, 194, 0.64) 45.19%, rgba(9, 12, 88, 0) 100%), linear-gradient(0deg, rgba(12, 18, 54, 0.41), rgba(12, 18, 54, 0.41)), url(${Code})`, backgroundSize: 'cover', backgroundBlendMode: `normal, darken, normal`}}>
                <h1>Personal Portfolio</h1>
                <h2>Designed in Cinema 4d, Illustrator and Figma.
Written in React using Express and MongoDB</h2>
                <Button direction="left">
                  <a href="https://github.com/collierdev/Personal_Portfolio"> Visit Project </a>
                </Button>
              </div>
              <div className="portfolio-card" style={{ backgroundImage: `linear-gradient(90deg, #0A1969 0%, rgba(15, 44, 194, 0.64) 45.19%, rgba(9, 12, 88, 0) 100%), linear-gradient(0deg, rgba(12, 18, 54, 0.41), rgba(12, 18, 54, 0.41)), url(${Nextclade})`, backgroundSize: 'cover', backgroundBlendMode: `normal, darken, normal`}}>
                <h1>COVID-19 Variant Analysis</h1>
                <h2>Bash - GATK - BWA - NextClade - Pangolin</h2>
                
                <Button direction="left">
                  <a href="https://github.com/collierdev/COVID-19_Variant_Analysis_and_Visualization"> Visit Project </a>
                </Button>
              </div>
              <div className="portfolio-card" style={{ backgroundImage: `linear-gradient(90deg, #0A1969 0%, rgba(15, 44, 194, 0.64) 45.19%, rgba(9, 12, 88, 0) 100%), linear-gradient(0deg, rgba(12, 18, 54, 0.41), rgba(12, 18, 54, 0.41)), url(${T1D})`, backgroundSize: 'cover', backgroundBlendMode: `normal, darken, normal`}}>
                <h1>Type 1 Diabietes Three Country Cohort Analysis </h1>
                <h2> R - Kraken - Bracken - Krona - Phyloseq - AmpVis</h2>
                <div className='buttons'>
                <Button direction="left">
                  <a href="https://github.com/collierdev/T1D_Diabimmune_Three_Country_Cohort_Analysis"> Visit Project </a>
                </Button>
                <Button direction="left">
                  <a href="/Krona/G69230_krona.html"> View Krona </a>
                </Button>
                </div>
              </div>
              <div className="portfolio-card" style={{ backgroundImage: `linear-gradient(90deg, #0A1969 0%, rgba(15, 44, 194, 0.64) 45.19%, rgba(9, 12, 88, 0) 100%), linear-gradient(0deg, rgba(12, 18, 54, 0.41), rgba(12, 18, 54, 0.41)), url(${Covidfem})`, backgroundSize: 'cover', backgroundBlendMode: `normal, darken, normal`}}>
                <h1>COVID-19 Female Differnetial Analysis </h1>
                <h2> R - DESeq - STAR Alignment - Gprofiler - EnrichR</h2>
                <Button direction="left">
                  <a href="https://github.com/collierdev/COVID-19_Infected_Female-Differential_Analysis"> Visit Project </a>
                </Button>
              </div>
          </div>
          
        </div>
        
      </>
    );
  }
  
  export default Work;
