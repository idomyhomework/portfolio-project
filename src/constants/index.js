import sinderImg from '../assets/portfolio-projects/sinder.jpg';
import igotchuImg from '../assets/portfolio-projects/igotchu.jpg';
import beyondEarthImg from '../assets/portfolio-projects/beyond-earth.png';


export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Contact',
        href: '#contact',

    },
];

export const portfolioProjects = [
    {
        id: 1,
        name: 'Sinder',
        description: 'A dating app — for single socks.',
        href: '',
        backgroundImg: sinderImg,
        number: '01',
    },
    {
        id: 2,
        name: 'iGotchu',
        description: 'An app that just gets you.',
        href: '',
        backgroundImg: igotchuImg,
        number: '02',
    },
    {
        id: 3,
        name: 'Looking for Life beyond Earth',
        description: 'A project whose description would be wholly redundant.',
        href: '',
        backgroundImg: beyondEarthImg,
        number: '03',
    },
]

export const footerLinks = [
    {
        id: 1,
        name: 'Instagram',
        href: 'instagram.com/whoisyz.idmh',
    },
    {
        id: 2,
        name: 'Twitter',
        href: 'twitter.com/whoisyz',
    },
    {
        id: 3,
        name: 'Linkedin',
        href: 'linkedin.com/in/whoisyz',
    },
    {
        id: 4,
        name: 'Home',
        href: '#home',
    },
    {
        id: 5,
        name: 'About',
        href: '#about',
    },
    {
        id: 6,
        name: 'Contact',
        href: '#contact',

    },
]

export const contactInput = [
    {
        id: 1,
        type: 'text',
        name: 'first_name',
        placeholder: 'Leo',
        isRequired: true,
        label: 'First name',
        pattern: "*.",
    },
    {
        id: 2,
        type: 'text',
        name: 'last_name',
        placeholder: 'Messi',
        isRequired: true,
        label: 'Last name',
        pattern: "*.",
    },
    {
        id:3,
        type: 'email',
        name: 'email',
        placeholder: 'leomessi@gmail.com',
        isRequired: true,
        label: 'Email',
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    },
    {
        id: 4,
        type: 'text',
        name: 'company',
        placeholder: 'Company Name',
        isRequired: false,
        label: 'Company',
        pattern: "*.",
    },
    {
        id: 5,
        type: 'tel',
        name: 'phone',
        placeholder: '123-45-678',
        label: 'Phone number',
        pattern: '^\\+?[0-9\\s\\-()]{7,20}$',
        isRequired: false,
    },
    {
        id: 6,
        type: 'url',
        name: 'website',
        placeholder:'idomyhomework.com',
        isRequired: false,
        pattern: '*.',
        label: 'Website',
    },

]