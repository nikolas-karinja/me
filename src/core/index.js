import svg_tech_cpp from '../img/icons/tech/cpp.svg'
import svg_tech_csharp from '../img/icons/tech/csharp.svg'
import svg_tech_html5 from '../img/icons/tech/html5.svg'
import svg_tech_java from '../img/icons/tech/java.svg'
import svg_tech_js from '../img/icons/tech/js.svg'
import svg_tech_nodejs from '../img/icons/tech/nodejs.svg'
import svg_tech_npm from '../img/icons/tech/npm.svg'
import svg_tech_reactjs from '../img/icons/tech/reactjs.svg'
import svg_tech_sass from '../img/icons/tech/sass.svg'
import svg_tech_socketio from '../img/icons/tech/socketio.svg'
import svg_tech_stripe from '../img/icons/tech/stripe.svg'
import svg_tech_threejs from '../img/icons/tech/threejs.svg'
import svg_tech_ts from '../img/icons/tech/ts.svg'
import svg_tech_webgl from '../img/icons/tech/webgl.svg'
import svg_tech_webgpu from '../img/icons/tech/webgpu.svg'
import svg_tech_howlerjs from '../img/icons/tech/howlerjs.svg'

import sc_infinipoly1 from '../img/screenshots/infinipoly-1.png'
import sc_octavia1 from '../img/screenshots/octavia-1.png'
import sc_polycity1 from '../img/screenshots/polycity-1.png'
import sc_ttt3d1 from '../img/screenshots/ttt3d-1.gif'
import sc_3chat1 from '../img/screenshots/3chat-1.png'

import photo_octaviaLogo from '../img/icons/tech/octavia.png'

import { Model as IBMPC5150Model } from '../models/IBMPC5150'
import { Model as LanuageStackModel } from '../models/LanguageStack'
import { Model as PencilModel } from '../models/Pencil'
import { Model as OldMobilePhoneModel } from '../models/OldMobilePhone'
import { Model as InstaCameraModel } from '../models/InstaCamera'
import { Model as MediumFloppyDiskModel } from '../models/MediumFloppyDisk'

import {Howl} from "howler"

export const ANIM_DELAY = {
    homeCards       : 0.5,
    backgroundTechs : 0.25,
}

export const BACKGROUND = {
    fnv       : ['nodejs', 'npm', 'reactjs', 'threejs', 'socketio', 'stripe'],
    languages : ['js', 'ts', 'cpp', 'csharp', 'java', 'html5', 'sass'],
}

export const EVENTS_STORED = {}
export const EVENTS_LIST   = ['show-dashboard',  'update-page-title']

export const INFO = {
    pageTitle : '',
}

export const SOUNDS = {
    angelicTitle: new Howl({
        src: ["./audio/sfx/angelic_title.mp3"]
    }),
    cardTouched: new Howl({
        src: ["./audio/sfx/card_touched.mp3"]
    }),
    siteMenuClick: new Howl({
        src: ["./audio/sfx/site_menu_click.mp3"]
    }),
    threeModelSwoosh: new Howl({
        src: ["./audio/sfx/3d_model_swoosh.mp3"]
    }),
    welcome: new Howl({
        src: ["./audio/sfx/welcome.mp3"]
    }),
    tvButtonSmall: new Howl({
        src: ["./audio/sfx/tv_button_small.mp3"]
    }),
    tvButtonBig: new Howl({
        src: ["./audio/sfx/tv_button_big.mp3"]
    }),
    bgMusic: new Howl({
        loop: true,
        volume: 0.25,
        src: ["./audio/music/3chat.mp3"]
    }),
}

export const INFO_CARDS = {
    Contact: [
        {
            title   : 'Phone',
            info    : <>This is the most instant way to access me. I'm available from <b>9am to 5pm PST</b><br /><br /><b><a href="tel:+13109024760">Call me now!</a></b></>,
            model   : <OldMobilePhoneModel 
                position={[0, -1, 0]}
                rotation={[-0.5, -0.5, -0.35]}
                scale={ 0.55 } />
        },
        {
            title   : 'Email',
            sub     : "nikolas.aleksandr.karinja@gmail.com",
            info    : <>This is the traditional way to get in contact with me. This email is used for all forms of my business.</>,
            model   : <IBMPC5150Model 
                scale={1.5} />
        },
        {
            title   : 'Social Media',
            info    : <>This is my prefered method of contact in regards to paid-partnerships, collaborations, and events. You can reach me via Instagram<br /><br /><b>Will be available by 10/19!</b></>,
            model   : <InstaCameraModel 
                position={[0, 0.5, 0]}
                rotation={[0.35, -0.5, 0]}
                scale={ 1.5 } /> 
        },
    ],
    Home: [
        {
            title : 'Professional',
            info  : `Of programming and software design. I've been doing this for own fun since I was 12 playing around with the MS-DOS 6.0 kernel in my school's library.`,
            model : <IBMPC5150Model 
                scale={1.5} />
        },
        {
            title : 'Multilingual',
            info  : `In many programming languages. Ranging from my beloved JavaScript to C++, the vast space between allows me to work with variety.`,
            model : <LanuageStackModel 
                rotation={[0.5, -0.5, 0]}
                scale={0.85} />
        },
        {
            title : 'Flexible',
            info  : `With all types of teams and individuals. My friendly yet independent personality easily fits into any group I'm matched with, wether it's design or development.`,
            model : <MediumFloppyDiskModel 
                scale={1} />
        },
        {
            title : 'Creative',
            info  : `My interests and hobbies in life find me pursuing many different categories of work. I deeply enjoy delving into new things to work on and learn from.`,
            model : <PencilModel 
                scale={0.15} />
        },
        {
            title : 'Influential',
            info  : `My work and personal projects have gone on to see public acclaim. Not just from my close colleagues and friends, but public figures too. This includes my software and fashion.`,
            model : <InstaCameraModel 
                position={[0, 0.5, 0]}
                rotation={[0.35, -0.5, 0]}
                scale={ 1.5 } /> 
        },
        {
            title : 'Reliable',
            info  : `A mindset I follow is being for others what I would want others to be for me. If I have a task to complete, it will be executed with not only success but also efficiency.`,
            model : <OldMobilePhoneModel 
                position={[0, -1, 0]}
                rotation={[-0.5, -0.5, -0.35]}
                scale={ 0.55 } />
        },
    ]
}

// objects
export const LINKS = {
    GITHUB    : 'https://github.com/nikolas-karinja',
    INSTAGRAM : 'https://www.instagram.com/kidwithmullet/',
    LINKEDIN  : 'https://www.linkedin.com/in/nikolas-karinja-20b621285/',
    NPMJS     : 'https://www.npmjs.com/~little-island',
}

export const TECHS = {
    'cpp': {
        name : 'C++',
        icon : svg_tech_cpp,
    },
    'csharp': {
        name : 'C#',
        icon : svg_tech_csharp,
    },
    'howlerjs': {
        name : 'Howler.js',
        icon : svg_tech_howlerjs,
    },
    'html5': {
        name : 'HTML 5',
        icon : svg_tech_html5,
    },
    'java': {
        name : 'Java',
        icon : svg_tech_java,
    },
    'js': {
        name : 'Javascript',
        icon : svg_tech_js,
    },
    'nodejs': {
        name : 'Node.js',
        icon : svg_tech_nodejs,
    },
    'npm': {
        name : 'NPM',
        icon : svg_tech_npm,
    },
    'octavia': {
        name : 'Octavia Game Engine',
        icon : photo_octaviaLogo,
    },
    'reactjs': {
        name : 'React JS',
        icon : svg_tech_reactjs,
    },
    'sass': {
        name : 'SASS',
        icon : svg_tech_sass,
    },
    'socketio': {
        name : 'Socket.io',
        icon : svg_tech_socketio,
    },
    'stripe': {
        name : 'Stripe',
        icon : svg_tech_stripe,
    },
    'threejs': {
        name : 'Three.js',
        icon : svg_tech_threejs,
    },
    'ts': {
        name : 'Typescript',
        icon : svg_tech_ts,
    },
    'webgl': {
        name : 'WebGL',
        icon : svg_tech_webgl,
    },
    'webgpu': {
        name : 'WebGPU',
        icon : svg_tech_webgpu,
    },
}

export const PROJECTS = {
    'octavia': {
        name   : 'Octavia Game Engine',
        type   : 'tool',
        info   : <>Based on an ECS architecture, Three.js visuals, and Rapier physics. Easy to use with React. Just add the component into your project to start.<br /><br />Documentation in progress.<br /><br />Built with my publicly available NPM packages.</>,
        techs  : ['reactjs', 'threejs', 'howlerjs'],
        images : [sc_octavia1],
        trello : "https://trello.com/invite/b/66f51bb1af7293ce657d4ba6/ATTI311552d09b8356685b5d0f110025cb2aEFFF1CF5/octavia-engine",
        link   :'https://octavia-engine-c2jocsedk-nikolas-karinjas-projects.vercel.app/',
    },
    'infinipoly': {
        name   : 'Infinpoly',
        info   : <>An infinite terrain generator utilizing LOD and Simplex Noise. It uses web-workers to make the terrain generation faster.<br /><br />Requires a mid-tier graphics card and isn't optimised for mobile devices.<br /><br />Built using Octavia.</>,
        techs  : ['octavia', 'reactjs', 'threejs'],
        images : [sc_infinipoly1],
        trello : "https://trello.com/invite/b/67ddb94141b93724c1107f8a/ATTIfdde1be6b0e510de206213ac4a2ead743F476DCF/infinipoly",
        link   : 'https://nikolas-karinja.github.io/infinipoly/',
    },
    'polycity': {
        name   : 'PolyCity',
        info   : <>A simulator game about building communities with politics. You decide wether your administration is corrupt or virtuous. Pick a fantasy political-party and keep it in power to avoid losing the elections. Inspired by ThinMatrix's city-builder series.<br /><br />Built using Octavia.</>,
        techs  : ['octavia', 'reactjs', 'threejs'],
        images : [sc_polycity1],
        trello : "https://trello.com/invite/b/678ad4f81562d13ce32a2456/ATTI792fd11424ec0a8edfb0ca4716343acf6AD64B98/polycity",
        link   : 'https://nikolas-karinja.github.io/polycity/',
    },
    '3chat': {
        name   : '3Chat',
        info   : <>A simple chat app but with 3D avatars. Pick an avatar, create or join a chat room and talk to other players. Still working out the room features. I want to add a feature where the players can play 3D games with each other.<br /><br />Built using Octavia.</>,
        techs  : ['octavia', 'reactjs', 'threejs', 'nodejs', 'socketio'],
        images : [sc_3chat1],
        trello : "https://trello.com/invite/b/6806c819472cc93aaccbcb5e/ATTI329fabfc8be2bcbd34b04d030f968dfb99B6C9AA/3chat",
        link   : "https://threechat.onrender.com",
    },
    'ttt3d': {
        name   : 'Tic-Tac-Toe 3D!',
        info   : <>A web-based ai/hotseat tic-tac-toe game using WebGL. Done as a little challenge for myself in between college classes. Tested it with a couple coworkers and kids at my job and it was fun. It's just the game you know well.<br /><br />Works on mobile devices too!</>,
        techs  : ['reactjs', 'threejs', 'sass'],
        images : [sc_ttt3d1],
        trello : "https://trello.com/invite/b/67ddc797d52e2a5e75ee9593/ATTI61bae2c55156bddb894156c7d90194cbA1E49F7E/tic-tac-toe-3d",
        link   : 'https://nikolas-karinja.github.io/tictactoe-3d/build/index.html',
    },
}

// lists
export const PACKAGES = [
    {
        name  : '@little-island/octavia-engine',
        info  : 'A game engine framework for javascript using Three.js for visuals.',
        techs : ['ts', 'threejs'],
    },
    {
        name  : '@little-island/ecs',
        info  : 'A modular Enity Component System for JavaScript. Makes handling multiple game-objects simpler.',
        techs : ['ts'],
    },
    {
        name  : '@little-island/workers',
        info  : `Easily use and manage WebWorkers in the projects you are working on. Loosely based on SimonDev's Technique.`,
        techs : ['ts'],
    },
]