// JavaScript source code
let vue_body = new Vue({
    el: '#vue_body',
    data: {
        program_imgs: [
            { img: "HTML5Logo.png" },
            { img: "CSS3Logo.png" },
            { img: "JSLogo.png" },
            { img: "bootstrapLogo.png" },
            { img: "Vue-JS-01.png" },
            { img: "mysqlLogo.png" }
        ],
        cv_skills: [
            { skill: "MS Office" },
            { skill: "Version Control Software (Git)" },
            { skill: "Object Oriented Programming" },
            { skill: "Strategic Planning" },
            { skill: "Problem Solving" },
            { skill: "Conceptual Understanding" },
            { skill: "Office Administration" },
            { skill: "Customer Service" }

        ],
        projects: [
            {
                id:"project_details_0",
                img: "fashion.png",
                name: "Mens Fashion Website",
                desc: "HTML, CSS, JavaScript, Bootstrap, Vue.js",
                src: "https://ruanvanniekerk.github.io/fashion_website/"
            },
            {
                id: "project_details_1",
                img: "todoList.png",
                name: "JavaScript To Do App",
                desc: "HTML, CSS, JavaScript, Bootstrap",
                src: "https://ruanvanniekerk.github.io/javascript_todo_app/"
            },
            {
                id: "project_details_2",
                img: "Calculator.png",
                name: "JavaScript Calculator App",
                desc: "HTML, JavaScript",
                src: "https://ruanvanniekerk.github.io/javascript_calculator/"
            },
        ]
    }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function show_info(x) {
    console.log(x);
    document.getElementById(vue_body.projects[x].id).style.display = "initial";
}

function hide_info(x) {
    document.getElementById(vue_body.projects[x].id).style.display = "none";
}