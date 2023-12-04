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

export const ANIM_DELAY = {
    homeCards       : 0.5,
    backgroundTechs : 0.25,
}

export const BACKGROUND = {
    fnv       : ['nodejs', 'npm', 'reactjs', 'threejs', 'socketio', 'stripe'],
    languages : ['js', 'ts', 'cpp', 'csharp', 'java', 'html5', 'sass'],
}

export const EVENTS_STORED = {}
export const EVENTS_LIST   = ['show-dashboard']

export const INFO = {
    displaySideMenus : true,
}

// objects
export const LINKS = {
    GITHUB    : 'https://github.com/nikolas-karinja',
    INSTAGRAM : 'https://www.instagram.com/kxrinja/',
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
        tool   : true,
        info   : `A JavaScript 3D game engine in the works. It's object handling is based off my ECS package. Hopefully I can use it to make building my games easier. For now I'm still deciding wether to use WebGPU or WebGL.`,
        techs  : ['js', 'reactjs', 'nodejs', 'webgpu', 'webgl', 'sass'],
        images : [svg_tech_dimensional],
    },
    'tmg': {
        name   : 'Tilemap Generator',
        info   : `A WebGL app that automatically builds a tilemap from multiple specified bitmaps. The one being displayed is based on the British Isles. For the geometry it uses existing geometry from an external model pack. It then places, rotates, sand scales them based on the relevant bitmap.`,
        techs  : ['js', 'reactjs', 'threejs', 'sass'],
        images : [sc_tmg1],
    },
    'polyum': {
        name   : 'Polyum',
        info   : `A web-based multiplayer sandbox game. Simulate ecosystems and civilizations. Start off with a randomly generated world of your input and influence life within it. You will be able to view other people's worlds if they are set to public.`,
        techs  : ['js', 'reactjs', 'threejs', 'nodejs', 'sass'],
        images : [sc_polyum1],
    },
    'ttt3d': {
        name   : 'Tic-Tac-Toe 3D!',
        info   : `A web-based ai/hotseat tic-tac-toe game using WebGL. Done as a little challenge for myself in between college classes. Tested it with a couple coworkers and kids at my job and it was fun. It's just the game you know well.`,
        techs  : ['reactjs', 'sass', 'threejs'],
        images : [sc_ttt3d1],
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