const profile = {
  name: "Ferhan",
  roleLabel: "Autonomous Systems Design Engineer / Research Fellow",
  tagline: "I build control, simulation, and autonomy systems for marine vehicles.",
  summary:
    "Experienced in autonomous marine systems with a background in shipbuilding, ocean engineering, and mechatronics. My work focuses on path planning, path following control, Hardware-in-the-Loop systems, and real-time modeling for unmanned surface vehicles.",
  availability: "Currently based in Genoa and active in autonomous marine systems research",
  quickFacts: [
    { label: "Location", value: "Genoa, Italy" },
    { label: "Focus", value: "USV autonomy, control systems, System Identification, simulation" },
    { label: "Tools", value: "Python, C++, Matlab, Simulink, ROS/ROS2" },
  ],
  story: [
    {
      title: "Who am I?",
      text: "I am an Autonomous Systems Design Engineer with academic and industrial experience in marine autonomy, control, and simulation. My background combines shipbuilding and ocean engineering with mechatronics.",
    },
    {
      title: "What do I work on?",
      text: "I work on dynamic path planning, obstacle avoidance, path following control, system identification, and Hardware-in-the-Loop environments for unmanned surface vehicles.",
    },
    {
      title: "What do I bring?",
      text: "I bring hands-on experience from research and defense projects, including controller design, target machine modeling, sensor integration, and model predictive control for marine platforms.",
    },
  ],
  focusText:
    "My core interest is turning theoretical control and autonomy concepts into working systems that can operate reliably on real marine vehicles.",
  focusAreas: [
    "Dynamic path planning",
    "Path following control",
    "Collision avoidance",
    "Hardware-in-the-Loop systems",
    "Model predictive control",
    "Sensor integration",
  ],
  timeline: [
    {
      year: "2013-2018",
      title: "Shipbuilding and Ocean Engineering",
      text: "Completed my BSc at Istanbul Technical University and built a strong foundation in marine systems, hydrodynamics, and vessel modeling.",
    },
    {
      year: "2020-2023",
      title: "Mechatronics and marine autonomy",
      text: "Completed my MSc in Mechatronics Engineering with a thesis on dynamic model-based path planning optimization and control for USVs in inland waterways.",
    },
    {
      year: "2024-Present",
      title: "Research and collaborative maneuvering",
      text: "Working as a Research Fellow at the University of Genoa on simulation and control algorithms for collaborative maneuvering of marine vehicles.",
    },
  ],
  projects: [
    {
      type: "University of Genoa",
      title: "Research Fellow",
      description:
        "Developing simulation and control algorithms for collaborative maneuvering of marine vehicles, with emphasis on reliable coordination and system-level behavior.",
      links: [{ label: "Current focus", href: "#focus" }],
    },
    {
      type: "ASELSAN",
      title: "Senior Autonomous and Unmanned Systems Design Engineer",
      description:
        "Developed a Hardware-in-the-Loop system, worked on phase-mode architecture and autopilot design for a   USV, and contributed to path planning algorithms.",
      links: [{ label: "Experience", href: "#story" }],
    },
    {
      type: "TUBITAK BILGEM / ITU",
      title: "Robotics, modeling, and competition work",
      description:
        "Worked on USV navigation controllers, trajectory tracking with MPC, catamaran modeling, sensor integration, and supported the ITU Autonomous Sailing Team in RobotX Sydney 2022.",
      links: [{ label: "Get in touch", href: "#contact" }],
    },
  ],
  quote: "I focus on autonomy systems that are mathematically grounded, practically deployable, and tested against real operational constraints.",
  contactText:
    "If you are working on autonomous marine systems, control algorithms, simulation environments, or USV research, I am open to discussing research and engineering collaborations.",
  contactLinks: [
    { label: "Email", value: "ferhanbuyukcolak@gmail.com", href: "mailto:ferhanbuyukcolak@gmail.com" },
    { label: "Phone", value: "+39 351 419 1432"},
    { label: "Location", value: "Genoa, Italy", href: "https://maps.google.com/?q=Genoa,Italy" },
  ],
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

setText("brand-name", profile.name);
setText("hero-label", profile.roleLabel);
setText("hero-name", profile.name);
setText("hero-tagline", profile.tagline);
setText("hero-summary", profile.summary);
setText("availability", profile.availability);
setText("focus-text", profile.focusText);
setText("signature-quote", `"${profile.quote}"`);
setText("contact-text", profile.contactText);

const primaryLink = document.getElementById("primary-link");
const secondaryLink = document.getElementById("secondary-link");

if (primaryLink) {
  primaryLink.textContent = "Get in touch";
}

if (secondaryLink) {
  secondaryLink.textContent = "Explore my story";
}

const quickFacts = document.getElementById("quick-facts");
profile.quickFacts.forEach((fact) => {
  const item = document.createElement("li");
  item.innerHTML = `<span class="fact-label">${fact.label}</span><span class="fact-value">${fact.value}</span>`;
  quickFacts.appendChild(item);
});

const storyCards = document.getElementById("story-cards");
profile.story.forEach((entry, index) => {
  const article = document.createElement("article");
  article.className = "story-card reveal";
  article.innerHTML = `
    <span class="story-index">0${index + 1}</span>
    <h3>${entry.title}</h3>
    <p>${entry.text}</p>
  `;
  storyCards.appendChild(article);
});

const focusChips = document.getElementById("focus-chips");
profile.focusAreas.forEach((area) => {
  const chip = document.createElement("span");
  chip.className = "chip reveal";
  chip.textContent = area;
  focusChips.appendChild(chip);
});

const timeline = document.getElementById("timeline");
profile.timeline.forEach((item) => {
  const article = document.createElement("article");
  article.className = "timeline-item reveal";
  article.innerHTML = `
    <span class="timeline-year">${item.year}</span>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  `;
  timeline.appendChild(article);
});

const projectGrid = document.getElementById("project-grid");
profile.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project-card reveal";
  const links = project.links
    .map((link) => `<a href="${link.href}" target="${link.href.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer">${link.label}</a>`)
    .join("");

  article.innerHTML = `
    <span class="project-type">${project.type}</span>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-links">${links}</div>
  `;
  projectGrid.appendChild(article);
});

const contactLinks = document.getElementById("contact-links");
profile.contactLinks.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.className = "reveal";
  anchor.href = link.href;
  if (link.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  anchor.innerHTML = `<span>${link.label}</span><span>${link.value}</span>`;
  contactLinks.appendChild(anchor);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${index * 45}ms`;
  observer.observe(element);
});
