import { ToastOptions } from "react-toastify";

const socialLinks = {
    linkedIn: "https://www.linkedin.com/in/matinkaviiani",
    github: "https://github.com/matinkaviani",
    telegram: "https://t.me/matinkaviani",
    email: "mhp5454@gmail.com",
    instagram: "https://www.instagram.com/matinkaviiani/",
    discord: "https://discordapp.com/users/505795959104733199"
}
const projects = [{
    id: "proj-0",
    image: "/images/sample.png",
    title: "E-Commerce",
    techStack: "Next.js"
},
{
    id: "proj-1",
    image: "/images/sample.png",
    title: "Music Player",
    techStack: "Next.js"
},
{
    id: "proj-2",
    image: "/images/sample.png",
    title: "MCMS",
    techStack: "Next.js"
}]
const experiences = [{
    id: "exp-0",
    date: "2019-2020",
    title: "IT Expert",
    loc: "MFT Pirouzi"
},
{
    id: "exp-1",
    date: "2020-2022",
    title: "Front-End Dev",
    loc: "Raahbar Co."
},
{
    id: "exp-2",
    date: "2022-now",
    title: "Front-End Dev",
    loc: "Asa Co."
}]
const aboutMe = "Hi, I'm Matin Kaviani, a skilled Front-End Developer dedicated to delivering exceptional user experiences. My expertise lies in creating captivating web applications and interfaces. I excel in using cutting-edge technologies to design responsive, user-friendly websites and applications. With a passion for pixel-perfect design and an eye for detail. I exhibit a fervent commitment to continuous learning and a relentless pursuit of optimal resolutions to unresolved issues."
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