import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import spotifyicon from "../../assets/icons/spotifyicon.svg";
import netlifyicon from "../../assets/icons/netlifyicon.svg";
import rendericon from "../../assets/icons/rendericon.svg";
import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import astro from "../../assets/icons/astro.svg";
import tastyMockup from "../../assets/img/tasty_mockup.webp";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import kaliLinux from "../../assets/icons/kaliLinux.svg";
import metasploit from "../../assets/icons/metasploit.svg";
import burpSuit from "../../assets/icons/burpSuite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    es: "Hola, Soy Duberney",
    en: "Hi, I'm Duberney",
  },
  subtitle: "Desarrollo de Software - Ciberseguridad",
  description: {
    es: "Soy Desarrollador de Software con experiencia en soluciones web. Construyo plataformas funcionales, atractivas y seguras. Especializado en hacking ético, realizo pruebas de penetración y auditorías para mitigar riesgos.",
    en: "I am a Software Developer with experience in innovative web solutions. My goal is to build functional, attractive, and secure platforms. Passionate about cybersecurity, I specialize in ethical hacking, performing penetration tests, vulnerability analysis, and audits to mitigate risks",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        es: "Contáctame",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        es: "Mis Proyectos",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Tasty App",
    description:
      "Eine Rezepte App, die wir als Team mit React und der MealDB API gebaut haben. Ich war der Front-End Entwickler und habe Features wie Voice Search oder Print to PDF programmiert. Das Design wurde mit Figma erstellt. Die Website ist responsive und mobile-optimiert.",
    description_EN:
      "A recipe app that we built as a team with React and the MealDB API. I was the front-end developer and programmed features like voice search or print to PDF. The design was created with Figma. The website is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Netlify", icon: netlifyicon },
      { name: "Trello", icon: trelloicon },
    ],
    image: tastyMockup,
    deploymenturl: "https://delightful-cheesecake-9b19f0.netlify.app/",
    githuburl: "https://github.com/AlpayC/Frontend_Abschlussprojekt_Tasty",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Silentmoon",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "A yoga and meditation app that we built as a team with React, MongoDB, Express and Node.js. My task as a gitmaster and backend developer was to program the backend with connection using a restful API and to model the database in MongoDB.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Spotify Api", icon: spotifyicon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
    ],
    image: silentmoonMockup,
    deploymenturl: "https://silentmoon-grpw.onrender.com/",
    githuburl:
      "https://github.com/AlpayC/Fullstack_Abschlussprojekt_SilentMoon",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Furniture Organizer",
    description:
      "Eine Möbel-Organizer App, die wir als Duo-Team mit React, MongoDB, Express und Node.js programmiert haben. Als Gitmaster habe ich die Verknüpfung des Frontends mit dem Backend und die Datenbankmodellierung übernommen. Die App ist responsive und mobile-optimiert.",
    description_EN:
      "A furniture organizer app that we programmed as a duo team with React, MongoDB, Express and Node.js. As a gitmaster, I took over the connection of the frontend to the backend and the database modeling. The app is responsive and mobile-optimized.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "JWT & Bcrypt", icon: jwticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Express", icon: expressiconwhite },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Render", icon: rendericon },
      { name: "Trello", icon: trelloicon },
    ],
    image: instorMockup,
    deploymenturl: "https://mern-haushaltsbuch.onrender.com/",
    githuburl: "https://github.com/AlpayC/Furniture_MERN",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    es: "Mas Proyectos en Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Astro",
        hash: "#Astro",
        icon: astro,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const skillsDataHackingEtico = [
  {
    skillsTitle: "Hacking-Etico",
    skills: [
      {
        title: "KaliLinux",
        hash: "#KaliLinux",
        icon: kaliLinux,
        color: "#21759B",
      },
      {
        title: "Metasploit",
        hash: "#Metasploit",
        icon: metasploit,
        color: "#7AB55C",
      },
      {
        title: "BurpSuit",
        hash: "#BurpSuit",
        icon: burpSuit,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { es: "Home", en: "Home", hash: "#home", icon: GoHome },
  { es: "Habilidades", en: "Skills", hash: "#skills", icon: GoStack },
  { es: "Proyectos", en: "Projects", hash: "#projects", icon: GoProject },
  { es: "Sobre mi", en: "About me", hash: "#about-me", icon: GoPerson },
  { es: "Contacto", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { es: "Aviso Legal", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { es: "Privacidad", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "duberney22915@gmail.com",
  text: "duberney22915@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/alpay/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/AlpayC",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailt",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    es: '"No importa en absoluto acertar a la primera. Es de vital importancia acertar a la última."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Duberney",
  },
  {
    es: '"La web es como un lienzo, y el código es la pintura. Crea tu obra maestra."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Acerca de Mi",
  title_EN: "About me",
  description: "Algunos fragmentos de código sobre mí",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Los circuitos de mi corazón",
      description:
        "Cuando no estoy navegando por el mundo digital, exploro el fascinante mundo de la tecnología y el hardware. Los circuitos y las soldaduras son para mí como piezas de un rompecabezas en una emocionante aventura.",
      icon: hardwareicon,
    },
    {
      title: "En el carril rápido de la vida",
      description:
        "Además de programar, me gusta ir a toda velocidad, en el sentido más estricto de la palabra. Los coches son mi pasión y disfruto recorriendo caminos desconocidos con máquinas potentes.",
      icon: caricon,
    },
    {
      title: "La alegría del descubrimiento como lema de vida",
      description:
        "Mi trayectoria como desarrollador web es solo una parte de mi camino. Vivo bajo el lema de que la aventura solo comienza cuando dejas atrás lo familiar. Descubrir nuevos lugares y culturas es mi fuente de inspiración creativa.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    es: "Contacto",
    en: "Contact",
  },
  description: {
    es: "Hola y me pondré en contacto contigo.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        es: "Tu nombre",
        en: "Your Name",
      },
      type: "text",
      validation: {
        es: "Por favor, rellene su nombre",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        es: "Tu email",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        es: "Por favor, rellene su email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        es: "Tu asunto",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        es: "Por favor, rellene su asunto",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      es: "Tu Mensaje",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      es: "Por favor, rellene su mensaje",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      es: "Enviar",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      es: "Acepto que Duberney utilice mis datos personales (nombre y dirección de correo electrónico) para contactarme.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      es: "Al enviar esta solicitud, usted reconoce que ha leído la Política de Privacidad.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    es: "🦄 La demostración en vivo se abrirá en breve. Iniciando servidores...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    es: "🦄 Gracias por su correo electrónico. Me pondré en contacto con usted lo antes posible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    es: "🦄 Lamentablemente, el envío de su correo electrónico no funcionó. Inténtelo de nuevo más tarde.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    es: "Por favor, rellene su nombre",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    es: "ES",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
