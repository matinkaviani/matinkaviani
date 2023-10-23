import { ToastOptions } from "react-toastify";
const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/matinkaviiani",
    github: "https://github.com/matinkaviani",
    telegram: "https://t.me/matinkaviani",
    email: "mhp5454@gmail.com",
    instagram: "https://www.instagram.com/matinkaviiani/",
    discord: "https://discordapp.com/users/505795959104733199"
}
const techStacks = {
    html: {
        key: "HTML5",
        icon: "/images/techLogo/html5.svg"
    },
    stylecss: {
        key: "CSS",
        icon: "/images/techLogo/CSS3.svg"
    },
    bootstrap: {
        key: "Bootstrap",
        icon: "/images/techLogo/bootstrap4.svg"
    },
    jquery: {
        key: "JQuery",
        icon: "/images/techLogo/jquery.svg"
    }
}

const projects = [{
    id: "proj-0",
    image: "/images/projects/currency.png",
    title: "Currency Exchange",
    link: "https://matinkaviani.github.io/Toranj-Exchange-Project/",
    techStack: [techStacks.html, techStacks.stylecss, techStacks.bootstrap]
},
{
    id: "proj-1",
    image: "/images/projects/safarpost.png",
    title: "Safarpost",
    link: "https://matinkaviani.github.io/Safarpost/",
    techStack: [techStacks.html, techStacks.stylecss, techStacks.bootstrap, techStacks.jquery]
},
{
    id: "proj-2",
    image: "/images/projects/mapna.png",
    title: "Mapna MRC",
    link: "https://matinkaviani.github.io/Mapna-MRC/index-en",
    techStack: [techStacks.html, techStacks.stylecss, techStacks.bootstrap, techStacks.jquery]
},
]
const experiences = [{
    id: "exp-0",
    date: "2019-2020",
    title: "IT Expert",
    loc: "MFT Pirouzi",
    quit: true
},
{
    id: "exp-1",
    date: "2020-2022",
    title: "Front-End Dev",
    loc: "Raahbar Co.",
    quit: true
},
{
    id: "exp-2",
    date: "2022-now",
    title: "Front-End Dev",
    loc: "Asa Co.",
    quit: false
}]
const aboutMe = "skilled Front-End Developer dedicated to delivering exceptional user experiences. My expertise lies in creating captivating web applications and interfaces. I excel in using cutting-edge technologies to design responsive, user-friendly websites and applications. With a passion for pixel-perfect design and an eye for detail."
const contactText = "Feel free to contact me. About work stuff, recommendations or just chat. I'll respond ASAP.";
const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
}
const breakpoints = {
    xs: 576,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
}
const config = {
    socialLinks,
    projects,
    experiences,
    aboutMe,
    contactText,
    toastOptions,
    breakpoints
}

export default config;