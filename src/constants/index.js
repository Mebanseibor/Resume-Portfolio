/*
    Constants:
        THEME
        QUICKLINKS
        CONTACTME
        HOMEPAGE_CONTENT
*/

// Imorting icons
import iconGitHub from '../assets/images/contact me/GitHub.png';
import iconLinkedIn from '../assets/images/contact me/LinkedIn.png';
import iconInstagram from '../assets/images/contact me/Instagram.png';



export const THEME = {
    LightTone01: "#F2E9E4",
    MidTone01: "#C9ADA7",
    MidTone02: "#9A8C98",
    MidTone03: "#4A4E69",
    DarkTone01: "#22223B", 
}

export const NAVBARLINKS = {
    Home : {
        Name : "Home",
        URL : "#biography",
    },
    
    TechnicalSkills : {
        Name : "Technical Skills",
        URL : "#technicalskills",
    },
    
    Project : {
        Name : "Projects",
        URL : "#projects",
    }
}

export const QUICKLINKS = {
    webPages:{
        Home: "",
        TechnicalSkills: "",
        Projects: "",
    }
}

export const CONTACTME = {
    linkedin : {
        name: "Linked In",
        url: "https://www.linkedin.com/in/mebanseibor-lyngdoh/",
        icon: iconLinkedIn,
        iconText: "Linked In",
    },
    github : {
        name: "GitHub",
        url: "https://github.com/Mebanseibor",
        icon: iconGitHub,
        iconText: "GitHub",
    },
    instagram : {
        name: "Instagram",
        url: "https://www.instagram.com/mebanseibor/",
        icon: iconInstagram,
        iconText: "Instagram",
    },
}

export const HOMEPAGE_PAGETOPICS = [
    {
        name: "Biography",
        url: "#biography",
    },
    {
        name: "Technical Skills",
        url: "#technicalskills",
    },
    {
        name: "Projects",
        url: "#projects",
    }
]

export const COMPONENT_BIOGRAPHY = {
    title: "Biography",
    description: "    Hello, I'm Mebanseibor Lyngdoh from Meghalaya, India. I'm an under-graduate pursueing B.Tech CSE from Lovely Professional University, Punjab",
}