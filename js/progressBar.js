// var container = document.getElementsByClassName("bar-container");

var skilArr = [
    {
        "color": "#cd3e3f,#adadad",
        "width": "90",
        "skill": "Java",
        "exp": "6",
        "content": "Major language. Data structures, APIs, OO concepts, Generics, Multithreading. Developed console programs, web automation tools and Swing app"
    },
    {   "color": "#5fb92e,#adadad",
        "width": "125",
        "skill": "Spring",
        "exp": "2",
        "content": "IoC, Bean, dependency injection, AOP, event handling, Spring MVC, JDBC. Developed web applications with Spring MVC"
    },
    {
        "color": "#3270a1,#adadad",
        "width": "125",
        "skill": "Python",
        "exp": "3",
        "content": "Secondary language. pandas, numpy, matplotlib, regular expression, json, scikit learn. Developed web automation tool with Selenium Python"
    },
    {
        "color": "#0a2f20,#adadad",
        "width": "112",
        "skill": "Django",
        "exp": "2",
        "content": "Request mapping/handling, routing, ORM, SqlLite, Admin. Developed face singin web application"
    }, 
    {
        "color": "#111111,#adadad",
        "width": "53",
        "skill": "Flask",
        "exp": "3",
        "content": "Request mapping/handling, routing, template, blueprint, SQLAlchemy, Session, Message Flashing. Developed a property sale/rental web app with Flask"
    }, 
    {
        "color": "#617cbe,#adadad",
        "width": "80",
        "skill": "PHP",
        "exp": "2",
        "content": "Session, Cookies, HTML embedded or MVC. Developed an online learning platform with online courses, forum, blog and news section"
    }, 
    {
        "color": "#e2b161,#adadad",
        "width": "106",
        "skill": "MySQL",
        "exp": "4",
        "content": "Basic CRUD, join, count, group by, order by, index, schema design"
    }, 
    {
        "color": "#f16524,#adadad",
        "width": "66",
        "skill": "HTML",
        "exp": "5",
        "content": "Profficient with HTML 5 tags, default attributes and usages, semantics and basic SEO"
    }, 
    {
        "color": "#2863f0,#adadad",
        "width": "105",
        "skill": "CSS",
        "exp": "5",
        "content": "Profficient with box model, sizing and positioning, Flexbox, css selectors, rules overiding mechanisms, media query, css 3D, animation"
    }, 
    {
        "color": "#ce679a,#adadad",
        "width": "73",
        "skill": "Sass",
        "exp": "3",
        "content": "variables, nesting, modules, extends, operators"
    }, 
    {
        "color": "#5b4084,#adadad",
        "width": "90",
        "skill": "Bootstrap",
        "exp": "4",
        "content": "container, grid system, responsiveness, drop-down, pagination, button group, forms, modal, carousel."
    }, 
    {
        "color": "#f0db4f,#adadad",
        "width": "62",
        "skill": "Javascript",
        "exp": "4",
        "content": "DOM manipulation, APIs, DOM query methods, Event handling, Closures, Callbacks, Promises, XMLHttpRequest"
    }, 
    {
        "color": "#4d7daa,#adadad",
        "width": "110",
        "skill": "jQuery",
        "exp": "4",
        "content": "DOM manipulation, APIs, DOM query methods, Event handling, Ajax, plugin"
    }, 
    {
        "color": "#a5dceb,#adadad",
        "width": "115",
        "skill": "React",
        "exp": "6",
        "content": "props and states, value passing between components, functional or class components, Refs, hooks. Developed a property sale/rental web app with React"
    }
];



var inputtext = ['Java','Spring','Python','Django','HTML','CSS','JS','jQuery','React','BootStrap','PHP', 'MySQL'];
var progress = [0.80,0.7, 0.65, 0.7,0.95,0.90,0.7,0.75, 0.7,0.85, 0.65, 0.8];

var bars = new Array(12);



