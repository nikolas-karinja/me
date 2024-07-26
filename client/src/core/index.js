import svg_tech_cpp from '../img/icons/tech/cpp.svg'
import svg_tech_csharp from '../img/icons/tech/csharp.svg'
import svg_tech_dimensional from '../img/icons/tech/dimensional.svg'
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

import sc_polyum1 from '../img/screenshots/polyum-1.gif'
import sc_tmg1 from '../img/screenshots/tmg-1.gif'
import sc_ttt3d1 from '../img/screenshots/ttt3d-1.gif'
import sc_victorum1 from '../img/screenshots/victorum-1.png'
import sc_infinipoly1 from '../img/screenshots/infinipoly-1.png'

import photo_1dot44 from '../img/photos/1dot44.jpg'

import { Model as IBMPC5150Model } from '../models/IBMPC5150'
import { Model as LanuageStackModel } from '../models/LanguageStack'
import { Model as PencilModel } from '../models/Pencil'
import { Model as OldMobilePhoneModel } from '../models/OldMobilePhone'
import { Model as InstaCameraModel } from '../models/InstaCamera'
import { Model as MediumFloppyDiskModel } from '../models/MediumFloppyDisk'

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

export const INFO_CARDS = {
    Contact: [
        {
            title   : 'Phone',
            primary : '(310) 902-4760',
            info    : 'This is the most instant way to access me.',
            model   : <OldMobilePhoneModel 
                position={[0, -1, 0]}
                rotation={[-0.5, -0.5, -0.35]}
                scale={ 0.55 } />
        },
        {
            title   : 'Email',
            primary : 'me@nikolaskarinja.com',
            info    : `This is the traditional way to get in contact with me. This email is used for all forms of my business.`,
            model   : <IBMPC5150Model 
                scale={1.5} />
        },
        {
            title   : 'Social Media',
            primary : '@kidwithmullet',
            info    : `This is my prefered method of contact in regards to paid-partnerships, collaborations, and events. You can reach my via Instagram.`,
            model   : <InstaCameraModel 
                position={[0, 0.5, 0]}
                rotation={[0.35, -0.5, 0]}
                scale={ 1.5 } /> 
        },
    ],
    Home: [
        {
            title : 'Experienced',
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
    INSTAGRAM : 'https://www.instagram.com/kidwithbuzz/',
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
    'dimensional': {
        name : 'Dimensional Engine',
        icon : svg_tech_dimensional,
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
    'dimensional': {
        name   : 'Dimensional Game Engine',
        type   : 'tool',
        info   : <>Based on an ECS architecture, Three.js visuals, and Rapier physics. Easy to use with React. Just add the component into your project to start.<br /><br />Built with my publicly available NPM packages.</>,
        techs  : ['ts', 'reactjs', 'nodejs', 'threejs', 'sass'],
        images : [svg_tech_dimensional],
    },
    'infinipoly': {
        name   : 'InfiniPoly',
        info   : <>A world-building sandbox in low-poly style. Create fun interactive landscapes, eco-systems, and lore.<br /><br />Built using the Dimensional game engine.</>,
        techs  : ['dimensional', 'js', 'reactjs', 'threejs', 'sass'],
        images : [sc_infinipoly1],
    },
    'victorum': {
        name   : 'Victorum',
        info   : <>A grand-strategy game influenced by the Total War and Crusader Kings franchises. Time period takes place between 1066 and 1904 AD.<br /><br />Built using the Dimensional game engine.</>,
        techs  : ['dimensional', 'js', 'reactjs', 'threejs', 'sass'],
        images : [sc_victorum1],
    },
}

// lists
export const PACKAGES = [
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