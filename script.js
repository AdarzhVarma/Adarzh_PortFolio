/* ============================================================
   SCRIPT.JS
   Handles: theme toggle, language toggle, navbar scroll,
            avatar overlay.
   More sections will be added here as they are built.
   ============================================================ */


/* ── Theme toggle ────────────────────────────────────────────
   Adds/removes class "dark" on <body>.
   CSS vars in body.dark handle all colour changes.
   ─────────────────────────────────────────────────────────── */
const themeBtn = document.getElementById('theme-switch');

function setTheme(dark) {
  document.body.classList.toggle('dark', dark);
  document.documentElement.classList.toggle('dark', dark);
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

// Restore saved preference on load
setTheme(localStorage.getItem('theme') === 'dark');

// Toggle on click
themeBtn.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});


/* ── Language toggle ─────────────────────────────────────────
   Translations object — add/edit text here.
   ─────────────────────────────────────────────────────────── */
const T = {
  en: {
    name:    'Sai Adarsh Varma Chittari',
    headline: 'Working Student @ Nordex SE GmbH | M.Sc. Student at TUHH | • Embedded • Web • AI | Formula Student Germany (Egnition Hamburg) | Ex-Co Function Resp CDD Bosch (Mercedes-Benz)',
    about_title: 'About',
    about_text: `Hi, I'm Adarsh! 👋 An <strong>MSc student at TUHH Hamburg</strong> specialising in Secure IT &amp; Dependable Systems — and an embedded engineer with a passion for building systems that are <strong>as secure as they are smart</strong>. Previously <strong>Co-Function Responsible for Airbag Software</strong> at Bosch for Mercedes-Benz, owning safety-critical device drivers across global teams in Germany and Vietnam.<br><br>My expertise spans <strong>Embedded Systems, ML/AI, Full-Stack Web and Security</strong>. I thrive at the intersection of hardware and intelligence — whether leading as a <strong>Product Owner</strong>, engineering race car electronics 🏎️, diving into <strong>TinyML &amp; Edge AI</strong> 🤖, or turning IoT ideas into real-world products 🔌.`,
    nav_about_text:          'About',
    nav_projects_text:       'Projects',
    nav_experience_text:     'Experience',
    nav_Patent_Research_text:'Patent & Research',
    nav_courses_text:        'Courses',
    nav_extracirrcular_text: 'ExtraCurricular/Awards',
    nav_skills_text:         'Skills',
    nav_contact_text:        'Contact',
    nav_resume_text:         'Download Resume',
    projects_title: 'Projects',
    proj1_title: 'AI Agile Project Dashboard',
    proj1_desc: 'Project Nexus — AI-enhanced Agile dashboard with real-time insights into team performance, sprint health and delivery metrics.',
    proj1_link: 'View on GitHub →',
    proj2_title: 'Dual-Mode ACC &amp; Lane Detection',
    proj2_desc: 'Smart vehicle with Adaptive Cruise Control via Bluetooth app, collision avoidance, accident detection and fully autonomous lane-following mode.',
    proj2_link: 'View on GitHub →',
    proj3_title: 'Quad-Vision AutoDrive',
    proj3_desc: 'Self-driving algorithm handling four real-world scenarios: lane keeping, pothole dodging, traffic sign obedience and animal collision avoidance.',
    proj3_link: 'View on GitHub →',
    proj4_title: 'Arduino Embedded Projects',
    proj4_desc: 'Collection of Arduino-based embedded systems — sensor interfacing, actuator control, communication protocols and hardware prototyping.',
    proj4_link: 'View on GitHub →',
    proj5_title: 'Jack — Personal Assistant',
    proj5_desc: 'Voice-driven AI assistant with NLP, weather, WhatsApp messaging, email management and an integrated depression therapy conversation module.',
    proj5_link: 'View on GitHub →',
    proj6_title: 'Fishing Autonomous Forklifts',
    proj6_desc: 'Autonomous forklift navigation system — collaborative project combining embedded control, path planning and real-world obstacle handling.',
    proj6_link: 'View on GitHub →',
    experience_title: 'Experience',
    Patent_Research_title: 'Patent &amp; Research',
    Courses_title: 'Courses',
    ExtraCirrucular_title: 'Extracurricular &amp; Awards',
    extracirrucular1_description: 'Mentored developers through workshops, collaborative projects and coding events, fostering skill growth and engagement among junior members.',
    extracirrucular2_description: 'Organised team-building activities, creative challenges and informal gatherings to foster collaboration and a positive work culture across the team.',
    skills_overview_title: 'Complete Skills Overview',
    skills_overview_note: '*Proof* that I am versatile and adaptable — an honest overview of my skills.',
    skills_title: 'Skills',
    skills_btn: 'Rated breakdown ↓',
    education_title: 'Education',
    resume_title: 'Resume',
    resume_description: 'Download a printable copy of my resume (PDF).',
    resume_btn: 'Download Resume',
    personal_interests_title: '🌟 Personal Interests',
    personal_description_1: '🥾 Hiking &amp; trekking adventures in the great outdoors',
    personal_description_2: '🌍 Traveled across half of India, exploring its diversity',
    personal_description_3: '🤝 Passionate about connecting with new cultures &amp; people',
    personal_description_4: '🍳 Love cooking and experimenting with global cuisines',
    personal_description_5: '🗣️ Multilingual — fluent in 5 languages, currently pursuing German A2',
    contact_title: 'Contact',
  },
  de: {
    name:    'Sai Adarsh Varma Chittari',
    headline: 'Werkstudent @ Nordex SE GmbH | Masterstudent an der TUHH | • Embedded • Web • AI | Formula Student Germany (Egnition Hamburg) | Ex-Co Function Resp CDD Bosch (Mercedes-Benz)',
    about_title: 'Über mich',
    about_text: `Hallo, ich bin Adarsh! 👋 Masterstudent an der <strong>TUHH Hamburg</strong> im Studiengang Informations- und Kommunikationstechnik mit Schwerpunkt „Secure IT and Dependable Systems". Zuvor <strong>Co-Function Responsible für Airbag-Software</strong> bei Bosch für Mercedes-Benz — globale Teams in Deutschland und Vietnam.<br><br>Meine Expertise umfasst <strong>Embedded Systems, ML/AI, Full-Stack Web und Security</strong>. Ich bringe Hardware und Intelligenz zusammen — als <strong>Product Owner</strong>, Rennwagen-Elektroniker 🏎️, TinyML-Entwickler 🤖 oder IoT-Produktentwickler 🔌.`,
    nav_about_text:          'Über mich',
    nav_projects_text:       'Projekte',
    nav_experience_text:     'Berufserfahrung',
    nav_Patent_Research_text:'Patente & Forschung',
    nav_courses_text:        'Kurse',
    nav_extracirrcular_text: 'Außerschulische Aktivitäten',
    nav_skills_text:         'Kompetenzen',
    nav_contact_text:        'Kontakt',
    nav_resume_text:         'Lebenslauf herunterladen',
    projects_title: 'Projekte',
    proj1_title: 'KI Agile Projekt-Dashboard',
    proj1_desc: 'Project Nexus — KI-gestütztes Agile-Dashboard mit Echtzeit-Einblicken in Teamleistung, Sprint-Gesundheit und Lieferkennzahlen.',
    proj1_link: 'Auf GitHub ansehen →',
    proj2_title: 'Dual-Mode ACC &amp; Spurerkennung',
    proj2_desc: 'Intelligentes Fahrzeug mit adaptiver Geschwindigkeitsregelung via Bluetooth, Kollisionsvermeidung, Unfalldetection und autonomem Spurfolge-Modus.',
    proj2_link: 'Auf GitHub ansehen →',
    proj3_title: 'Quad-Vision AutoDrive',
    proj3_desc: 'Selbstfahrender Algorithmus für vier reale Szenarien: Spurhaltung, Schlaglochausweichen, Verkehrszeichenerkennung und Tierkollisionsvermeidung.',
    proj3_link: 'Auf GitHub ansehen →',
    proj4_title: 'Arduino Embedded Projekte',
    proj4_desc: 'Sammlung Arduino-basierter eingebetteter Systeme — Sensorschnittstellen, Aktorsteuerung, Kommunikationsprotokolle und Hardware-Prototyping.',
    proj4_link: 'Auf GitHub ansehen →',
    proj5_title: 'Jack — Persönlicher Assistent',
    proj5_desc: 'Sprachgesteuerter KI-Assistent mit NLP, Wetter, WhatsApp-Messaging, E-Mail-Verwaltung und integriertem Therapiemodul.',
    proj5_link: 'Auf GitHub ansehen →',
    proj6_title: 'Autonome Gabelstapler',
    proj6_desc: 'Autonomes Gabelstapler-Navigationssystem — Gemeinschaftsprojekt mit eingebetteter Steuerung, Pfadplanung und Hindernisbehandlung.',
    proj6_link: 'Auf GitHub ansehen →',
    experience_title: 'Berufserfahrung',
    Patent_Research_title: 'Patente &amp; Forschung',
    Courses_title: 'Kurse',
    ExtraCirrucular_title: 'Außerschulische Aktivitäten &amp; Auszeichnungen',
    extracirrucular1_description: 'Durch Workshops, Gemeinschaftsprojekte und Coding-Events Entwickler betreut und angeleitet, um Kompetenzentwicklung und Engagement zu fördern.',
    extracirrucular2_description: 'Team-Building-Aktivitäten, kreative Challenges und informelle Treffen organisiert, um Zusammenarbeit und eine positive Arbeitskultur zu fördern.',
    skills_overview_title: 'Vollständige Kompetenzübersicht',
    skills_overview_note: '*Beweis* meiner Vielseitigkeit — eine ehrliche Übersicht meiner Fähigkeiten.',
    skills_title: 'Kompetenzen',
    skills_btn: 'Bewertung ansehen ↓',
    education_title: 'Bildung',
    resume_title: 'Lebenslauf',
    resume_description: 'Laden Sie eine druckbare Kopie meines Lebenslaufs (PDF) herunter.',
    resume_btn: 'Lebenslauf herunterladen',
    personal_interests_title: '🌟 Persönliche Interessen',
    personal_description_1: '🥾 Wandern &amp; Trekking-Abenteuer in der Natur',
    personal_description_2: '🌍 Reisen durch die Hälfte Indiens und Entdecken seiner Vielfalt',
    personal_description_3: '🤝 Leidenschaft für den Austausch mit neuen Kulturen &amp; Menschen',
    personal_description_4: '🍳 Liebe zum Kochen und Experimentieren mit internationalen Küchen',
    personal_description_5: '🗣️ Mehrsprachig — fließend in 5 Sprachen, derzeit Deutsch A2',
    contact_title: 'Kontakt',
  }
};

function applyLang(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const val = T[lang]?.[el.getAttribute('data-key')];
    if (val) el.innerHTML = val;
  });
}

let currentLang = 'en';
applyLang(currentLang);

const langCheck = document.getElementById('langCheck');
langCheck.addEventListener('change', e => {
  currentLang = e.target.checked ? 'de' : 'en';
  applyLang(currentLang);
  try { localStorage.setItem('siteLang', currentLang); } catch(_) {}
});

// Restore saved language
try {
  const saved = localStorage.getItem('siteLang');
  if (saved) {
    langCheck.checked = (saved === 'de');
    currentLang = saved;
    applyLang(currentLang);
  }
} catch(_) {}

// Keyboard accessibility for toggle
document.querySelector('.toggle').addEventListener('keydown', ev => {
  if (ev.key === ' ' || ev.key === 'Enter') {
    ev.preventDefault();
    langCheck.checked = !langCheck.checked;
    langCheck.dispatchEvent(new Event('change'));
  }
});


/* ── Navbar scroll ───────────────────────────────────────────
   Smoothly scrolls to the target section on button click.
   ─────────────────────────────────────────────────────────── */
document.querySelectorAll('.navbar button').forEach(btn => {
  btn.addEventListener('click', () => {
    const el = document.getElementById(btn.dataset.target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ── Smooth scroll for all anchor links ─────────────────────
   Handles clicks on <a> tags with href="#id" for smooth scroll
   ─────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Handle all anchor links with hash hrefs
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


/* ── Avatar overlay ──────────────────────────────────────────
   Opens a fullscreen photo card when avatar is clicked.
   ─────────────────────────────────────────────────────────── */
const avatarBtn     = document.getElementById('avatarBtn');
const avatarOverlay = document.getElementById('avatarOverlay');
const overlayClose  = document.getElementById('overlayClose');

function openOverlay()  { avatarOverlay.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeOverlay() { avatarOverlay.classList.remove('open'); document.body.style.overflow = ''; }

avatarBtn.addEventListener('click', openOverlay);
overlayClose.addEventListener('click', closeOverlay);
avatarOverlay.addEventListener('click', e => { if (e.target === avatarOverlay) closeOverlay(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });


/* ── Skills filter ───────────────────────────────────────────
   Filter buttons show/hide skill bars by category.
   ─────────────────────────────────────────────────────────── */
(function () {
  const allBtn = document.querySelector('.sk-filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');

  document.querySelectorAll('.sk-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sk-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.sk-bar').forEach(bar => {
        bar.classList.toggle('hidden', filter !== 'all' && !bar.classList.contains(filter));
      });
    });
  });
})();


/* ── Did You Know rotator ─────────────────────────────────── */
(function() {
  const facts = [
    "I've collaborated with engineering teams across India, Germany and Vietnam ",
    "I hold an Indian patent for a self-driving car prototype — filed during my undergrad.",
    "I speak 5 languages fluently and am currently learning German as my 6th.",
    "I've interviewed for Apple",
    "I engineered safety-critical airbag software used in Mercedes-Benz S-Class and E-Class vehicles.",
    "I reduced hardware dependency by 50% at Bosch by deploying a global SiL testing framework."
  ];
  const textEl = document.getElementById('dykText');
  const dotsEl = document.getElementById('dykDots');
  if (!textEl || !dotsEl) return;
  let current = 0;
  facts.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'sc-dyk-dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  });
  function goTo(i) {
    current = i;
    textEl.textContent = facts[i];
    dotsEl.querySelectorAll('.sc-dyk-dot').forEach((d, j) => d.classList.toggle('active', j === i));
  }
  setInterval(() => goTo((current + 1) % facts.length), 5000);
})();


/* ── Skill Radar ─────────────────────────────────────────── */
(function() {
  function isDark() { return document.body.classList.contains('dark'); }

  function drawRadar() {
    const canvas = document.getElementById('skillRadar');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dark = isDark();
    const W = canvas.width, H = canvas.height;
    const cx = W/2, cy = H/2 + 8, R = 90, N = 6;
    const step = Math.PI*2/N, start = -Math.PI/2;
    const axes = [
      { label:'Embedded C', value:0.88 }, { label:'AUTOSAR',    value:0.85 },
      { label:'Safety',     value:0.80 }, { label:'Python/AI',  value:0.78 },
      { label:'Collab',     value:0.85 }, { label:'Leadership', value:0.82 },
    ];
    const gC = dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';
    const fC = dark ? 'rgba(200,200,200,0.20)' : 'rgba(60,60,60,0.15)';
    const sC = dark ? 'rgba(220,220,220,0.80)' : 'rgba(60,60,60,0.70)';
    const dC = dark ? '#eeeeee' : '#333333';
    const lC = dark ? '#cccccc' : '#555555';
    ctx.clearRect(0,0,W,H);
    function pt(r,i) { const a=start+i*step; return {x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)}; }
    for (let l=1;l<=5;l++) {
      const r=(R/5)*l; ctx.beginPath();
      for (let i=0;i<N;i++) { const p=pt(r,i); i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y); }
      ctx.closePath(); ctx.strokeStyle=gC; ctx.lineWidth=1; ctx.stroke();
    }
    for (let i=0;i<N;i++) { const p=pt(R,i); ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(p.x,p.y); ctx.strokeStyle=gC; ctx.lineWidth=1; ctx.stroke(); }
    ctx.beginPath();
    axes.forEach((ax,i) => { const p=pt(R*ax.value,i); i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y); });
    ctx.closePath(); ctx.fillStyle=fC; ctx.fill(); ctx.strokeStyle=sC; ctx.lineWidth=2; ctx.stroke();
    axes.forEach((ax,i) => { const p=pt(R*ax.value,i); ctx.beginPath(); ctx.arc(p.x,p.y,3,0,Math.PI*2); ctx.fillStyle=dC; ctx.fill(); });
    ctx.font='10px Inter,sans-serif'; ctx.fillStyle=lC; ctx.textAlign='center'; ctx.textBaseline='middle';
    axes.forEach((ax,i) => { const p=pt(R+18,i); ctx.fillText(ax.label,p.x,p.y); });
  }
  drawRadar();
  document.getElementById('theme-switch')?.addEventListener('click', () => setTimeout(drawRadar, 50));
})();


/* ── Pixel Art Construction Animation ────────────────────── */
(function() {
  function isDark() { return document.body.classList.contains('dark'); }
  function pal() {
    const d = isDark();
    return d ? { bg:'#1a1a1a',ground:'#333333',bldg:'#2e2e2e',bldgEdge:'#444444',winLit:'#888866',window:'#4a4a4a',crane:'#888888',craneArm:'#aaaaaa',worker:'#cccccc',hat:'#ffcc44',block:'#666666',text:'#888888' }
             : { bg:'#e8e8e8',ground:'#bbbbbb',bldg:'#d0d0d0',bldgEdge:'#aaaaaa',winLit:'#eecc88',window:'#bbbbbb',crane:'#888888',craneArm:'#666666',worker:'#555555',hat:'#cc9900',block:'#999999',text:'#888888' };
  }
  function r(ctx,x,y,w,h,c,S) { ctx.fillStyle=c; ctx.fillRect(x*S,y*S,w*S,h*S); }
  function drawBldg(ctx,bx,by,bw,bh,fl,P,S) {
    r(ctx,bx,by,bw,bh,P.bldg,S);
    for(let f=1;f<fl;f++) r(ctx,bx,by+Math.floor(bh/fl)*f,bw,1,P.bldgEdge,S);
    r(ctx,bx,by,1,bh,P.bldgEdge,S); r(ctx,bx+bw-1,by,1,bh,P.bldgEdge,S);
    for(let f=0;f<fl;f++) for(let w=0;w<Math.floor(bw/4)-1;w++)
      r(ctx,bx+2+w*4,by+Math.floor(bh/fl)*f+2,2,2,(f+w)%3?P.winLit:P.window,S);
  }
  function makeScene(id,seed) {
    const canvas=document.getElementById(id); if(!canvas)return;
    const S=2,CW=canvas.width/S,CH=canvas.height/S;
    const ctx=canvas.getContext('2d'); ctx.imageSmoothingEnabled=false;
    let frame=0,hookY=10,hookDir=1;
    const workers=[{x:10+seed*3,dir:1,speed:0.4,y:CH-10},{x:90-seed*2,dir:-1,speed:0.3,y:CH-10},{x:40+seed,dir:1,speed:0.5,y:CH-22}];
    function draw() {
      const P=pal(); ctx.clearRect(0,0,canvas.width,canvas.height);
      r(ctx,0,0,CW,CH,P.bg,S); r(ctx,0,CH-8,CW,8,P.ground,S); r(ctx,0,CH-9,CW,1,P.bldgEdge,S);
      drawBldg(ctx,5,CH-36,22,28,3,P,S); drawBldg(ctx,35,CH-30,38,22,2,P,S);
      [36,42,48,54,60,66,70].forEach(x=>r(ctx,x,CH-36,2,7,P.bldgEdge,S));
      [[33,CH-24,40],[33,CH-32,40]].forEach(([sx,sy,sw])=>{
        r(ctx,sx-1,sy,sw+2,1,P.craneArm,S); r(ctx,sx-1,sy-8,1,9,P.crane,S); r(ctx,sx+sw,sy-8,1,9,P.crane,S);
      });
      const hY=CH-38+hookY;
      r(ctx,100,CH-52,2,26,P.crane,S); r(ctx,64,CH-52,44,2,P.craneArm,S);
      r(ctx,104,CH-52,4,4,P.crane,S); r(ctx,84,CH-52,1,hY-(CH-52)-2,P.crane,S); r(ctx,82,hY,5,4,P.block,S);
      workers.forEach(w=>{
        const wx=Math.floor(w.x),wy=Math.floor(w.y),leg=frame%8<4;
        r(ctx,wx,wy-3,5,2,P.hat,S); r(ctx,wx+1,wy-1,3,3,P.worker,S); r(ctx,wx,wy+2,5,4,P.worker,S);
        r(ctx,wx+1,wy+6,2,3,P.worker,S); r(ctx,wx+3,wy+6,2,leg?3:4,P.worker,S);
        r(ctx,wx-1,wy+2,2,3,P.worker,S); r(ctx,wx+5,wy+3,2,leg?3:2,P.worker,S);
      });
      ctx.font=`bold ${S*4}px monospace`; ctx.fillStyle=P.text; ctx.textAlign='center';
      ctx.fillText('UNDER CONSTRUCTION',canvas.width/2,canvas.height-4);
      frame++; hookY+=hookDir*0.15; if(hookY>18||hookY<0)hookDir*=-1;
      workers.forEach(w=>{w.x+=w.dir*w.speed; if(w.x>CW-10){w.x=CW-10;w.dir=-1;} if(w.x<2){w.x=2;w.dir=1;}});
    }
    setInterval(draw,60);
  }
  makeScene('wipCanvas1',0); makeScene('wipCanvas2',5);
})();