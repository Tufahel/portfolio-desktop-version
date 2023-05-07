const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

closeIcon.style.display = 'none';
function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    closeIcon.style.color = 'gray';
    hamburger.style.background = 'none';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const projects = [
  {
    title: "Tufahel's Blog",
    org: 'Microverse',
    stack: 'Full Stack Dev',
    year: '2022',
    src: 'images/blog.gif',
    description: ["Tufahel's Blog app is a classic example of a blog website. It is a fully functional website that will show the list of posts and empower readers to interact with them by adding comments and liking posts."],
    technologies: ['RoR', 'PostgreSQL', 'React', 'Redux', 'JWT', 'TailwindCSS', 'Heroku', 'Netlify'],
    seeLiveLink: 'https://euphonious-semolina-b80229.netlify.app/',
    seeSourceLink: 'https://github.com/Tufahel/blog-app-front-end',
  },
  {
    title: 'Dirt Bikes',
    org: 'Microverse',
    stack: 'Full Stack Dev',
    year: '2022',
    src: 'images/dirt_bike.gif',
    description: ['Dirt Bikes is an application to book dirt bikes for rent. The user will be able to choose a bike according to his preferences and book a period during which he will use the desired bike.'],
    technologies: ['RoR', 'PostgreSQL', 'React', 'Redux', 'JWT', 'Rswag', 'Heroku', 'Netlify'],
    seeLiveLink: 'https://incredible-unicorn-5f0c7d.netlify.app/',
    seeSourceLink: 'https://github.com/Tufahel/book-dirt-bike-back-end',
  },
  {
    title: 'Air Pollution Tracker',
    org: 'Microverse',
    stack: 'Front End Dev',
    year: '2022',
    src: 'images/air_pollution.gif',
    description: ['Air pollution Tracker is basically a mobile webApp application which tracks the data of air pollution based on gas percentage of air from Air Pollution API of a specific country from Rest Countries API based on their continent.'],
    technologies: ['React', 'Redux', 'Jest', 'Bootstrap', 'CSS', 'API', 'Netlify'],
    seeLiveLink: 'https://voluble-elf-b07508.netlify.app/',
    seeSourceLink: 'https://github.com/Tufahel/air-pollution-tracker',
  },
  {
    title: 'Space Traveller Hub',
    org: 'Microverse',
    stack: 'Front End Dev',
    year: '2022',
    src: 'images/space_traveller.gif',
    description: ['Space Travelers Hub is a web application that shows information about space missions and rockets and gives the option to select a rocket and join in a mission. It is built with React/Redux, Bootstrap and CSS.'],
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS', 'API', 'Netlify'],
    seeLiveLink: 'https://celadon-churros-f5ad84.netlify.app/',
    seeSourceLink: 'https://github.com/Tufahel/space-travelers-hub',
  },
  {
    title: 'Book Store',
    org: 'Microverse',
    stack: 'Front End Dev',
    year: '2022',
    src: 'images/book_store.gif',
    description: ['This is a Book Store web app where we can choose a book, a category and see the writer and our reading progress.'],
    technologies: ['React', 'Redux', 'Bootstrap', 'CSS', 'Fontawesome', 'API', 'Netlify'],
    seeLiveLink: 'https://benevolent-melomakarona-75d9f6.netlify.app/',
    seeSourceLink: 'https://github.com/Tufahel/book-store',
  },
];

const BtnsMobile = document.getElementsByClassName('btn-mobile');
const projectWorkMobile = document.querySelector('.project-mobile');
const Btns = document.getElementsByClassName('btn-desktop');
const projectWork = document.querySelector('.project-desktop');
const popUp = document.createElement('section');
popUp.classList.add('modal');

function popUpDesktop(cardNumber) {
  popUp.style.display = 'block';
  projectWork.appendChild(popUp);
  popUp.innerHTML = `
      <div class="modal-content">
      <div>
      <div class="modal-header">
      <h2>${projects[cardNumber].title}</h2>
      <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
      </div>
      <div class="card__tag card__tag__modal">
          <div class="tag">
            <p>${projects[cardNumber].org}</p>
          </div>
          <div class="tag__inactive">
            <img src="images/Counter.png" alt="" />
            <p>${projects[cardNumber].stack}</p>
          </div>
          <div class="tag__inactive">
            <img src="images/Counter.png" alt="" />
            <p>${projects[cardNumber].year}</p>
          </div>
      </div>
      <div class="modal-image">
        <img src=${projects[cardNumber].src} alt="App Image">
        <div class="modal-technologies">
          <ul class="project-tools">
            <ul class="mini__btn">
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[0]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[1]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[2]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[3]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[4]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[5]}</p>
                </li>
            </ul>
          </ul>
          <div class="modal-btns">
            <button>
              <a href="${projects[cardNumber].seeLiveLink}">See Live <img src="images/tir.png" alt="See live"></i></a>
            </button>
            <button>
              <a href="${projects[cardNumber].seeSourceLink}">See Source <img src="images/cartoon.png" alt="Github icon"></a>
            </button>
          </div>
        </div>
      </div>
      <div class="modal-flex">
      <div class="modal-description">
        <p>${projects[cardNumber].description[0]}</p>
      </div>
      </div>
    </div>
    </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'close-popUp') {
      popUp.style.display = 'none';
    }
  });
}

for (let i = 0; i < Btns.length; i += 1) {
  Btns[i].addEventListener('click', () => {
    popUpDesktop(i);
  });
}

function popUpMobile(cardNumber) {
  popUp.style.display = 'block';
  projectWorkMobile.appendChild(popUp);
  popUp.innerHTML = `
      <div class="modal-content">
      <div>
      <div class="modal-header">
      <h2>${projects[cardNumber].title}</h2>
      <i class="fa fa-times" id="close-popUp" aria-hidden="true"></i>
      </div>
      <div class="card__tag card__tag__modal">
          <div class="tag">
            <p>${projects[cardNumber].org}</p>
          </div>
          <div class="tag__inactive">
            <img src="images/Counter.png" alt="" />
            <p>${projects[cardNumber].stack}</p>
          </div>
          <div class="tag__inactive">
            <img src="images/Counter.png" alt="" />
            <p>${projects[cardNumber].year}</p>
          </div>
      </div>
      <div class="modal-image">
        <img src=${projects[cardNumber].src} alt="App Image">
      </div>
      <div class="modal-flex">
      <div class="modal-description">
        <p>${projects[cardNumber].description}</p>
      </div>
      <div class="modal-technologies">
        <ul class="project-tools">
            <ul class="tech__mini__btn">
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[0]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[1]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[2]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[3]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[4]}</p>
                </li>
                <li class="btn tech__btn">
                <p>${projects[cardNumber].technologies[5]}</p>
                </li>
            </ul>
        </ul>
        <div class="modal-btns">
        <button>
          <a href="${projects[cardNumber].seeLiveLink}">See Live <img src="images/tir.png" alt="See live"></i></a>
        </button>
        <button>
          <a href="${projects[cardNumber].seeSourceLink}">See Source <img src="images/cartoon.png" alt="Github icon"></a>
        </button>
      </div>
      </div>
      </div>
    </div>
    </section>`;
  document.addEventListener('click', (event) => {
    if (event.target.id === 'close-popUp') {
      popUp.style.display = 'none';
    }
  });
}

for (let i = 0; i < BtnsMobile.length; i += 1) {
  BtnsMobile[i].addEventListener('click', () => {
    popUpMobile(i);
  });
}

const formId = 'form';
const url = location.href;
const formIdentifier = `${url} ${formId}`;
const saveButton = document.querySelector('#submitButton');
const form = document.querySelector(`#${formId}`);
const formElements = form.elements;

const getFormData = () => {
  const data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

saveButton.onclick = (event) => {
  function validation(e) {
    const email = document.getElementById('email').value;

    const text = document.getElementById('text');
    const pattern = /^([a-z0-9._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if (email.match(pattern)) {
      text.innerHTML = 'Your Email Address is valid';
      text.style.color = 'green';
    } else {
      text.innerHTML = 'Enter valid Email using small letter only';
      text.style.color = 'red';
      e.preventDefault();
    }
  }

  form.addEventListener('submit', validation);
  const data = getFormData();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
};

const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier));
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm();

const skillBtns = document.querySelectorAll('.skill__button');
const skillUl = document.querySelectorAll('.skill__ul');

for (let i = 0; i < 3; i += 1) skillUl[i].style.display = 'none';

function toggleFirstSkills() {
  if (skillUl[0].classList.contains('showSkill')) {
    skillUl[0].classList.remove('showSkill');
    skillUl[0].style.display = 'block';
  } else {
    skillUl[0].classList.add('showSkill');
    skillUl[0].style.display = 'none';
  }
}

function toggleSecondSkills() {
  if (skillUl[1].classList.contains('showSkill')) {
    skillUl[1].classList.remove('showSkill');
    skillUl[1].style.display = 'block';
  } else {
    skillUl[1].classList.add('showSkill');
    skillUl[1].style.display = 'none';
  }
}
function toggleThirdSkills() {
  if (skillUl[2].classList.contains('showSkill')) {
    skillUl[2].classList.remove('showSkill');
    skillUl[2].style.display = 'block';
  } else {
    skillUl[2].classList.add('showSkill');
    skillUl[2].style.display = 'none';
  }
}

skillBtns[0].addEventListener('mouseover', toggleFirstSkills);
skillBtns[1].addEventListener('mouseover', toggleSecondSkills);
skillBtns[2].addEventListener('mouseover', toggleThirdSkills);
