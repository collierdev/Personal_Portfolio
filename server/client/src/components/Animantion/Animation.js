import gsap from "gsap"

export const heroTextReveal = (title,subtitle) => { 
    gsap.from(title, { xPercent: -10, opacity: 0, stagger: 0.1, duration: 1.5, ease: "none", });
    gsap.from(subtitle, { xPercent: -5, opacity: 0, stagger: 0.2, duration: 1.5, ease: "none", });
 };

 export const buttonRevealRight = (button) => { 
    gsap.from(button, { xPercent: -3, opacity: 0, stagger: 0.3, duration: 1.5, ease: "none", });
 };
 export const buttonRevealLeft = (button) => { 
    gsap.from(button, { 
        xPercent: +10, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 1.5, 
        ease: "sine",
        scrollTrigger: {
            trigger: button,
        }
     });
};
 export const formButtonReveal = (button) => { 
    gsap.from(button, { xPercent: -10, opacity: 0, stagger: 0.1, duration: 1.5, ease: "sine", });
    
};
export const workTextReveal = (title,subtitle) => { 
    gsap.from(title, { yPercent: -100, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: title}});
    gsap.from(subtitle, { yPercent: -50, opacity: 0, stagger: 0.2, duration: 1, ease: "none",scrollTrigger: {trigger: subtitle}} );
 };
export const portfolioCardReveal = (card) => { 
    gsap.from(card, { xPercent: -10, opacity: 0, stagger: 0.1, duration: 1.5, ease: "sine",scrollTrigger: {trigger: card}});
};
export const portfolioTextReveal = (title,subtitle) => { 
    gsap.from(title, { xPercent: -10, opacity: 0, stagger: 0.1, duration: 1.5, ease: "sine", scrollTrigger: {trigger: title}});
    gsap.from(subtitle, { xPercent: -10, opacity: 0, stagger: 0.1, duration: 1.5, ease: "sine", scrollTrigger: {trigger: subtitle}});
};
export const aboutTitleReveal = (title) => { 
    gsap.from(title, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: title}});
 };
 export const headshotReveal = (image) => { 
    gsap.from(image, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: image}});
 };
 export const aboutArticleReveal = (article) => { 
    gsap.from(article, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: article}});
 };
 export const skillCardContentReveal = (card,icon,title,bar,list) => { 
    gsap.from(card, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "sine", scrollTrigger: {trigger: card, start:"top center"}});
    
 };
 export const contactCardReveal = (card) => { 
    gsap.from(card, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: card}});
 };
 export const contactTitle = (title,content, buttonText,button,socialText) => { 
    gsap.from([title,content, buttonText,button,socialText], { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: title, start:"top center"}});
   };
 export const resumeReveal = (content,button) => { 
    gsap.from(content, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: content}});
    gsap.from(button, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "none", scrollTrigger: {trigger: button}});
 };
 export const heroSocialReveal = (socials) => {
    gsap.from(socials, { xPercent: 15, opacity: 0, stagger: 0.1, duration: 1, ease: "sine",});
 };
 export const heroSocialRevealMobile = (socials) => {
    gsap.from(socials, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "sine",});
 };
 export const contactSocialReveal = (socials) => {
    gsap.from(socials, { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "sine", scrollTrigger: {trigger: socials, start:"top 80%"}});
 };
 export const contactForm = (name, nameInput, email, emailInput, message, messageInput) => { 
   gsap.from([name, nameInput, email, emailInput, message, messageInput], { yPercent: -15, opacity: 0, stagger: 0.1, duration: 1, ease: "sine",scrollTrigger: {trigger: name, start:"top center"} });

 };