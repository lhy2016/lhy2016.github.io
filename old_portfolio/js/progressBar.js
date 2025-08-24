// var container = document.getElementsByClassName("bar-container");

var skilArr = [
    {
        "color": "#cd3e3f,#adadad",
        "width": "90",
        "skill": "Java",
        "exp": "6",
        "content": "Data structures, APIs, OO, Generics, Multithreading"
    },
    {   "color": "#5fb92e,#adadad",
        "width": "125",
        "skill": "Spring",
        "exp": "2",
        "content": "IoC, Bean, DI, AOP, event handling, Spring MVC, JDBC"
    },
    {
        "color": "#3270a1,#adadad",
        "width": "125",
        "skill": "Python",
        "exp": "3",
        "content": "pandas, numpy, matplotlib, regular expression, json, scikit learn"
    },
    {
        "color": "#0a2f20,#adadad",
        "width": "112",
        "skill": "Django",
        "exp": "2",
        "content": "Request mapping/handling, routing, ORM, SqlLite, Admin"
    }, 
    {
        "color": "#111111,#adadad",
        "width": "53",
        "skill": "Flask",
        "exp": "3",
        "content": "Request mapping/handling, template, blueprint, Session, Message Flashing"
    }, 
    {
        "color": "#617cbe,#adadad",
        "width": "80",
        "skill": "PHP",
        "exp": "2",
        "content": "Session, Cookies, HTML embedded or MVC"
    }, 
    {
        "color": "#e2b161,#adadad",
        "width": "106",
        "skill": "MySQL",
        "exp": "4",
        "content": "Basic CRUD, join, count, group by, order by, index, schema design"
    }, 
    {
        "color": "#2496ed, #adadad",
        "width": "80",
        "skill": "Docker",
        "exp": "2",
        "content": "Dockerfile, Docker build, run, docker-compose, enter containers"
    },
    {
        "color": "#009639, #adadad",
        "width": "140",
        "skill": "Nginx",
        "exp": "2",
        "content": "Nginx as hosting server, proxy server, load balancer"
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
        "content": "Sizing and positioning, Flexbox, selectors, overiding, media query, 3D, animation"
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
        "content": "Grid system, responsive, drop-down, pagination, modal, carousel, other widgets"
    }, 
    {
        "color": "#f0db4f,#adadad",
        "width": "62",
        "skill": "Js",
        "exp": "4",
        "content": "DOM manipulation, APIs, query methods, Event, Closures, Callbacks, Promises, XHR"
    }, 
    {
        "color": "#4d7daa,#adadad",
        "width": "110",
        "skill": "jQuery",
        "exp": "4",
        "content": "DOM manipulation, APIs, DOM query methods, Event, Ajax, jQuery object, plugin"
    }, 
    {
        "color": "#a5dceb,#adadad",
        "width": "115",
        "skill": "React",
        "exp": "6",
        "content": "props and states, data passing, functional or class components, Refs, hooks"
    }
];



var inputtext = ['Java','Spring','Python','Django','HTML','CSS','JS','jQuery','React','BootStrap','PHP', 'MySQL'];
var progress = [0.80,0.7, 0.65, 0.7,0.95,0.90,0.7,0.75, 0.7,0.85, 0.65, 0.8];

var bars = new Array(12);



