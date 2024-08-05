let sliders = document.querySelectorAll('.slide');
let carousel = document.querySelector('.carousel');
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= sliders.length) {
        slideIndex = 0;
    }

    carousel.style.transform = `translateX(calc(-${100 * slideIndex}% - ${20 * slideIndex}px))`;

    slideIndex++;
}

setInterval(() => {
    createSlide();
}, 3000);


let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nextBtns = document.querySelectorAll(".next-btn");

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    
    nextBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth + 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});



const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("nav-links");

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}

if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}

const cardData = [
    {
        Project_heading: "YouTube Channel Analysis",
        desc: "A report of a Channel Analysis with help of Python and YouTube API.",
        image_link: "Data/youtube.jpg",
        web_link:"https://github.com/Prakhar1802/CWH-Dashboard",
    },
    {
        Project_heading: "Netflix Data Analysis",
        desc: "A report on an analysis of netflix data with the help of python.",
        image_link: "Data/netflix.png",
        web_link:"https://github.com/Prakhar1802/Netflix_data_analysis",
    },
    {
        Project_heading: "Churn Analysis",
        desc: "Analysis of a telecom churn rate with the help of Power-BI.",
        image_link: "Data/churn.png",
        web_link:"https://github.com/Prakhar1802/Churn-Analysis",
    },
    {
        Project_heading: "Emp. Management System",
        desc: "A database manipulation program that uses the python Script.",
        image_link: "Data/employee.jpg",
        web_link:'https://github.com/Prakhar1802/Employee-information-database',
    },
    {
        Project_heading: "Sales Analysis",
        desc: "Analysis of a sales Analysis with the help of Power-BI and Python.",
        image_link: "Data/sales.jpg",
        web_link:'https://github.com/Prakhar1802/Sales-Analysis',
    },
    {
        Project_heading: "Courier Charges Analysis",
        desc: "Analysis in which we find out the fraud of courier charges.",
        image_link: "Data/Courier.jpg",
        web_link:'https://github.com/Prakhar1802/Courier-Charges-Analysis',
    }
]

const projectContainer = document.querySelector(".card-container");

const projectMethods = ()=>{
    cardData.map((postData)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("card");
        postElement.innerHTML = `
            <img src="${postData.image_link}" alt="" class="card-img">
            <div class="card-body">
                <h2 class="project-name">${postData.Project_heading}</h2>
                <h6 class="project-desc">${postData.desc}</h6>
                <a href="${postData.web_link}" target = '_blank'><button class="watchlist-btn">Check it</button></a>
            </div>

        `
        projectContainer.appendChild(postElement)
    })

}

projectMethods()

const pythoncardData = [
    {
        Project_heading: "Morning Wish Sender",
        desc: "A python program, that sends morning wishes",
        image_link: "Data/morningWish.png",
        web_link:"https://github.com/Prakhar1802/Morning_wish_sender",
    },
    {
        Project_heading: "Game of Intimacy ",
        desc: "A python program that ask questions according to your choice.",
        image_link: "Data/game.jpg",
        web_link:"https://github.com/Prakhar1802/Game_of_Intimacy",
    },
    {
        Project_heading: "SpaceX Clone",
        desc: "A HTML, CSS and JS clone project of SpaceX website",
        image_link: "Data/spacex.jpg",
        web_link:"https://prakhar1802.github.io/SpaceX-Clone/",
    },
    {
        Project_heading: "Portfolio Design",
        desc: "A web portfolio project to show my skills and about me",
        image_link: "Data/portfolio.jpg",
        web_link:'https://prakhar1802.github.io/My-Portfolio/',
    },
    {
        Project_heading: "To Do List",
        desc: "It is use to add the task that you want to do and it store them for you.",
        image_link: "Data/todo.jpg",
        web_link:'https://github.com/Prakhar1802/TO_DO_LIST',
    },
    {
        Project_heading: "Tic Tac Toe",
        desc: "I try to make that game using HTML, CSS and JS.",
        image_link: "Data/tictactoe.jpg",
        web_link:'https://prakhar1802.github.io/tic-tac-toe/',
    }
]
const pythonprojectContainer = document.querySelector(".python-card-container");

const pythonprojectMethods = ()=>{
    pythoncardData.map((postData)=>{
        const postElement = document.createElement("div");
        postElement.classList.add("card");
        postElement.innerHTML = `
            <img src="${postData.image_link}" alt="" class="card-img">
            <div class="card-body">
                <h2 class="project-name">${postData.Project_heading}</h2>
                <h6 class="project-desc">${postData.desc}</h6>
                <a href="${postData.web_link}" target = '_blank'><button class="watchlist-btn">Check it</button></a>
            </div>

        `
        pythonprojectContainer.appendChild(postElement)
    })

}

pythonprojectMethods()

