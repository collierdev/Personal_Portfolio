import React from 'react';
import './Socials.css';
import gsap from 'gsap';
const Socials = React.forwardRef((props, ref) => {
    let socialRef = ref;
    var color = "white";
    if(props.color){
        color = props.color;
    }
    
    function handleGithubOn(){
        gsap.timeline().to("#github",{opacity:1});
    }
    function handleGithubOff(){
        gsap.timeline().to("#github",{opacity:0.6});
    }
    function handleLinkdinOn(){
        gsap.timeline().to("#linkdin",{opacity:1});
    }
    function handleLinkdinOff(){
        gsap.timeline().to("#linkdin",{opacity:0.6});
    }
    function handleTwitterOn(){
        gsap.timeline().to("#twitter",{opacity:1});
    }
    function handleTwitterOff(){
        gsap.timeline().to("#twitter",{opacity:0.6});
    }
    function handleYoutubeOn(){
        gsap.timeline().to("#youtube",{opacity:1});
    }
    function handleYoutubeOff(){
        gsap.timeline().to("#youtube",{opacity:0.6});
    }
    return (
        <div className='socials' ref={socialRef}>
            <li className="social-list">
                <ul>
                    <a id="github" onMouseEnter={handleGithubOn} onMouseLeave={handleGithubOff} href="https://github.com/collierdev">
                        <svg className="socialIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" fill={color}/>
                        </svg>
                    </a>
                </ul>
                <ul>
                    <a id="linkdin" onMouseEnter={handleLinkdinOn} onMouseLeave={handleLinkdinOff} href="https://www.linkedin.com/in/joshua-collier-856094213/">
                        <svg className="socialIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 21H9V9H13V11C13.8526 9.91525 15.1456 9.26857 16.525 9.237C19.0056 9.25077 21.0072 11.2694 21 13.75V21H17V14.25C16.84 13.1326 15.8818 12.3036 14.753 12.306C14.2593 12.3216 13.7932 12.5378 13.4624 12.9046C13.1316 13.2715 12.9646 13.7573 13 14.25V21ZM7 21H3V9H7V21ZM5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7Z" fill={color}/>
                    </svg>
                    </a>
                </ul>
                <ul>
                    <a id="twitter" onMouseEnter={handleTwitterOn} onMouseLeave={handleTwitterOff} href="https://twitter.com/collier_dev">
                        <svg className="socialIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.995 6.68799C20.8914 6.15208 21.5622 5.30823 21.882 4.31399C21.0397 4.81379 20.118 5.16587 19.157 5.35499C17.8246 3.94552 15.7135 3.60251 14.0034 4.51764C12.2933 5.43277 11.4075 7.37948 11.841 9.26999C8.39062 9.09676 5.17598 7.4669 2.99702 4.78599C1.85986 6.74741 2.44097 9.25477 4.32502 10.516C3.64373 10.4941 2.97754 10.3096 2.38202 9.97799C2.38202 9.99599 2.38202 10.014 2.38202 10.032C2.38241 12.0751 3.82239 13.8351 5.82502 14.24C5.19308 14.4119 4.53022 14.4372 3.88702 14.314C4.45022 16.0613 6.06057 17.2583 7.89602 17.294C6.37585 18.4871 4.49849 19.1342 2.56602 19.131C2.22349 19.1315 1.88123 19.1118 1.54102 19.072C3.50341 20.333 5.78738 21.0023 8.12002 21C11.3653 21.0223 14.484 19.7429 16.7787 17.448C19.0734 15.1531 20.3526 12.0342 20.33 8.78899C20.33 8.60299 20.3257 8.41799 20.317 8.23399C21.1575 7.62659 21.8828 6.87414 22.459 6.01199C21.676 6.35905 20.8455 6.58691 19.995 6.68799Z" fill={color}/>
                    </svg>
                    </a>
                </ul>
                <ul>
                    <a id="youtube" onMouseEnter={handleYoutubeOn} onMouseLeave={handleYoutubeOff} href="https://www.youtube.com/c/CollierStudios">
                        <svg className="socialIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.006 19.012H11.986C11.924 19.012 5.721 19 4.156 18.575C3.29543 18.3432 2.62335 17.6707 2.392 16.81C2.11058 15.2224 1.97469 13.6123 1.986 12C1.97873 10.385 2.11831 8.77271 2.403 7.183C2.64071 6.32151 3.30983 5.64595 4.169 5.4C5.691 5 11.723 5 11.979 5H12C12.063 5 18.282 5.012 19.831 5.437C20.6898 5.67001 21.3605 6.3411 21.593 7.2C21.8834 8.79354 22.0197 10.4113 22 12.031C22.007 13.644 21.8671 15.2543 21.582 16.842C21.3477 17.7016 20.6752 18.3726 19.815 18.605C18.295 19.008 12.262 19.012 12.006 19.012ZM10.006 9.005L10.001 15.005L15.213 12.005L10.006 9.005Z" fill={color}/>
                    </svg>
                    </a>
                </ul>
            </li>
        </div>
    )
})

export default Socials;

