// Moje prvé portfólio — logika šablóny
const $ = (s) => document.querySelector(s);

// Rok vo footeri
$("#year").textContent = new Date().getFullYear();

// Mobilné menu
$("#burger").onclick = () => $("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach((a) => {
  a.onclick = () => $("#nav").classList.remove("open");
});

// Zručnosti
function renderSkills() {
  $("#skills").innerHTML = SKILLS.map(
    (s) => `
    <div class="skill reveal">
      <div class="skill-top"><span>${s.name}</span><span>${s.level}%</span></div>
      <div class="bar"><i style="width:${s.level}%"></i></div>
    </div>`
  ).join("");
}

// Projekty + filter
let activeFilter = "";
function renderProjects() {
  const list = PROJECTS.filter((p) => !activeFilter || p.cat === activeFilter);
  $("#projects").innerHTML = list
    .map(
      (p) => `
    <article class="proj reveal in">
      <div class="img" style="background:linear-gradient(135deg,${p.color},#0f172a)">${p.emoji}</div>
      <div class="proj-b">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="proj-foot"><span>${p.tag}</span><a href="#">Detail →</a></div>
      </div>
    </article>`
    )
    .join("");
}

document.querySelectorAll("#projectFilters button").forEach((b) => {
  b.onclick = () => {
    activeFilter = b.dataset.f;
    document
      .querySelectorAll("#projectFilters button")
      .forEach((x) => x.classList.toggle("on", x === b));
    renderProjects();
  };
});

// Kontakt (len šablóna)
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#formOk").classList.remove("hidden");
  e.target.querySelectorAll("input, textarea").forEach((el) => {
    if (el.id !== "cSubject") el.value = "";
  });
  $("#cSubject").value = "";
});

// Scroll reveal
function reveal() {
  document.querySelectorAll(".reveal").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 40) el.classList.add("in");
  });
}
window.addEventListener("scroll", reveal);

renderSkills();
renderProjects();
reveal();
