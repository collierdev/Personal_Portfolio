import './Work.css';
import Button from '../Button/Button'
import Code from '../images/Code.JPG'
import Nextclade from '../images/Nextclade.JPG'
import T1D from '../images/T1D.jpg'
import Covidfem from '../images/fem-covid.jpg'
import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {workTextReveal,portfolioTextReveal, portfolioCardReveal} from '../Animantion/Animation';
  function Work(props) {
    let titleRef = useRef();
    let subtitleRef = useRef();
    
    const data = {
      portfolioWorks:[
        {"title":"Type 1 Diabietes Three Country Cohort Analysis", "description":"R - Kraken - Bracken - Krona - Phyloseq - AmpVis", "buttons": [{ "href": "https://github.com/collierdev/T1D_Diabimmune_Three_Country_Cohort_Analysis", "title": "Visit Github"}, {"href": "/krona", "title": "View Krona"}], "background": T1D},
        {"title":"COVID-19 Female Differnetial Analysis", "description":"R - DESeq - STAR Alignment - Gprofiler - EnrichR", "buttons": [{ "href": "https://github.com/collierdev/COVID-19_Infected_Female-Differential_Analysis", "title": "Visit Github"}, {"href": "/covid-19-differential/readme", "title": "View Project"}], "background": Covidfem},
        {"title":"Personal Portfolio", "description":"React Frontend deployed on Express using MongoDB",  "buttons": [{ "href": "https://github.com/collierdev/Personal_Portfolio", "title": "Visit Gitbhub"}], "background": Code},
        {"title":"COVID-19 Variant Analysis", "description":"Bash - GATK - BWA - NextClade - Pangolin", "buttons": [{ "href": "https://github.com/collierdev/COVID-19_Variant_Analysis_and_Visualization", "title": "Visit Github"}], "background": Nextclade},

      ]
      }
      const portfolioList = data.portfolioWorks.map((portfolioData) => 
        <PortfolioCard key={portfolioData.title} title={portfolioData.title} description={portfolioData.description} button={portfolioData.buttons} background={portfolioData.background}>
        </PortfolioCard>
      );

      useEffect(() => {
        workTextReveal(titleRef,subtitleRef);
      },[]);
    return (
      <>
        <div className='work' id={props.id}>
          <div className="work-header">
            <h2 className="pre-title" ref={elem => {titleRef = elem; }}>Portfolio</h2>
            <h3 className="title" ref={elem => {subtitleRef = elem; }}>Selected Works</h3>
          </div>
          <div className="web-portfolio">
								{portfolioList}
          </div>
        </div>
        
      </>
    );
  }
  
  export default Work;

  function PortfolioCard(props){
    let portfolioTitleRef = useRef();
    let portfolioSubtitleRef = useRef();
    let cardRef = useRef();
    let buttonRef = useRef();
    const tweenRef = useRef();

    useEffect(() => {
      portfolioCardReveal(cardRef);
    },[]);
    useEffect(() => {
      portfolioTextReveal(portfolioTitleRef,portfolioSubtitleRef);
    },[]);
    useEffect(() => {
            tweenRef.current = gsap.fromTo(cardRef,{backgroundSize:"150% 150%"}, {backgroundSize:"100% 100%", duration: 2 , paused: true});
        })

    const onHover = () =>{
        tweenRef.current.play();
    } 
    const onLeave =() =>{
        tweenRef.current.reverse();
    }
    return(
      <>
      <div className="portfolio-card" ref={elem => {cardRef = elem; }} onMouseEnter={onHover} onMouseLeave={onLeave} style={{ backgroundImage: `linear-gradient(90deg, #0A1969 0%, rgba(15, 44, 194, 0.64) 45.19%, rgba(9, 12, 88, 0) 100%), linear-gradient(0deg, rgba(12, 18, 54, 0.41), rgba(12, 18, 54, 0.41)), url(${props.background})`, backgroundSize: 'cover', backgroundBlendMode: `normal, darken, normal`}}>
                <h1 ref={elem => {portfolioTitleRef = elem; }}>{props.title}</h1>
                <h2 ref={elem => {portfolioSubtitleRef = elem; }}>{props.description}</h2>
                <div className='buttons'>
                {props.button.map((buttonData) => {
								return (
                  
									<Button key={buttonData.href} direction="left" ref={buttonRef}>
                  <a href={buttonData.href}> {buttonData.title} </a>
                </Button>
                
								);
							})}
              </div>
              </div>
      </>
    )
  }