const projectContainer = document.querySelector(".project-grid");

const ProjectData = [
  // {
  //   id: 1,
  //   name: "DOPE",
  //   description: "A production ready chrome extension that gamifies learning experience and connect users to a vibrant community of learners.",
  //   img: "./images/dope.png",
  //   tags: ["React", "Vite", "TypeScript", "Tailwind", "CSS"],
  //   link1: "#",
  //   link2: "#"
  // },
  {
    id: 1,
    name: "Automagic Agency Site",
    description: "Built a production-ready website for an agency using Next.js, Tailwind CSS, and Framer Motion.",
    img: "./images/automagic-portfolio.png",
    tags: ["Next", "TypeScript", "Tailwind", "Framer Motion", "CSS"],
    link1: "#",
    link2: "#"
  },
  {
    id: 2,
    name: "REST Countries API",
    description: "REST Countries API is a web app that allows users to see all countries and their details when clicked.",
    img: "./images/countries.png",
    tags: ["Next.Js", "REST Countries API", "CSS"],
    link1: "https://github.com/Ugboaja-Uchechi/countries",
    link2: "https://allcountry.vercel.app/"
  },
  {
    id: 3,
    name: "Dictionary web app",
    description: "Search for words using the input field, play the audio file for a word when it's available, switch between available fonts",
    img: "./images/dictionary.png",
    link1: "https://github.com/Ugboaja-Uchechi/dictionary",
    tags: ["Next", "Typescript", "CSS"],
    link2: "https://dictionsearch.vercel.app/"
  }
]

const liveClick = (link) => {
  window.open(link, "_blank");
};

const projects = (project) => `
  <div class="project-flex" key="${project.id}">
    <div class="project-img-cover">
      <img src="${project.img}" alt="">
    </div>
    <div class="project-text-cover">
      <h4 class="project-name">${project.name}</h4>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<p class="project-tag">${tag}</p>`).join('')}
      </div>
      <div class="btn-flex">
        <div>
          <button class="git" onclick="liveClick('${project.link1}')">GitHub</button>
        </div>
        <div>
          <button class="live" onclick="liveClick('${project.link2}')">Live Link</button>
        </div>
      </div>
    </div>
  </div>
`;

projectContainer.innerHTML = ProjectData.map((project) => projects(project)).join('');

