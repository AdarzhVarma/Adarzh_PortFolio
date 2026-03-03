// Translation dictionary (English + German). Replace text as needed.
const T = {
    en: {
        /* Personal Details English */
        name: 'Sai Adarsh Varma Chittari',
        headline: 'Software Engineer | M.Sc. Student at TUHH | • Embedded • Web • AI | Formula Student Germany (Egnition Hamburg) | Ex-Co Function Resp CDD Bosch (Mercedes-Benz)',
        about_title: 'About',
        about_text: `
        Hi, I’m Adarsh! 👋✨<br />
        I am a <strong>Master’s student at the Hamburg University of Technology (TUHH)</strong> 🏫🎒 studying Information and Communication Systems, specializing in Secure IT and Dependable Systems🧑‍💻. Previously, I worked as a <strong>Co-Function Responsible</strong> for complex device drivers for airbag software for <strong>Mercedes-Benz at Bosch</strong>, orchestrating the software backbone for their most prestigious vehicle platforms across global teams <strong>(Germany and Vietnam)</strong>.<br />
        I have been a part of building <strong>awesome solutions in hackathons, organized and presented solutions at corporate tech events, led technical clubs, and managed full product life cycles</strong>. I thrive on solving complex technical bottlenecks.<br />
        With a <strong>track record of 10+ projects and 4 Excellence Awards from Bosch, my expertise spans Embedded Systems, Full-Stack Web Development, ML/AI, and Security. Whether leading technical projects as a Product Owner or handling software design and development</strong>, I build systems that are as secure as they are smart! 🛡️🌐<br />
        <strong>What gets me excited 🤔:</strong><br /> 
        🏎️ Motorsport Tech: Engineering race car electronics and software as smart as the driver at e-gnition Hamburg.<br />
        🤖 Edge AI: Diving deep into TinyML to bring intelligent hardware.<br />
        🔌 IoT + Web: Turning ideas into seamless, real-world products.<br />
        I’m always in the loop to research, build, and scale the next generation of technology. <br />
        <strong>Let's connect and create something impactful!</strong> ⚡🤝🔥`,

        /* Navigation Bar */
        nav_about_text: 'About',
        nav_projects_text: 'Projects',
        nav_experience_text: 'Experience',
        nav_Patent_Research_text: 'Patent & Research',
        nav_courses_text: 'Courses',
        nav_extracirrcular_text: 'ExtraCurricular/Awards',
        nav_skills_text: 'Skills',
        nav_contact_text: 'Contact',
        nav_resume_text: 'Download Resume',

        /* Projects Title English*/
        projects_title: 'Projects',

        /* Project 1 Information English*/
        proj1_title: 'Development Of Uncrewed Vehicle uisng deep Learning and IoT',
        proj1_desc: `Developed a Software-Defined Vehicle(SDV) prototype featuring three driving modes: Manual, Semi-Automatic
        (Adaptive Cruise Control) and Autonomous (Lane Detection) integrated with safety features like accident
        detection. The mobile application enables communication with the vehicle and seamless drive mode transitions`,
        proj1_link: 'View code',

        /* Project 2 Information English*/
        proj2_title: 'Jack-The Personal Assistant',
        proj2_desc: `Developed a personal assistant in Python using libraries like NLTK, Speech Recognition, and APIs for tasks such as weather
        reporting,WhatsApp messaging, email management, and COVID case updates.`,
        proj2_link: 'View code',

        /* Project 3 Information English*/
        // proj3_title: 'Industrial Motor Controller',
        // proj3_desc: 'PID + FOC-based controller with watchdogs, fail-safe states and CAN remote commands.',
        // proj3_link: 'View code',

        /* Experience Title English*/
        experience_title: 'Experience',

        /* Experience 1 Description English */
        experience1_desc: `
        <ul>
          <li>Developed airbag software for Mercedes-Benz, handling COM stack (FlexRay, CAN, LIN) and Complex Device Drivers (CDD) across platforms (MMA, MRA2M, S-Class, E-Class).</li>
          <li>Managed requirements in DOORS, ensuring compliance with ASIL, ISO 26262, and system standards.</li>
          <li>Designed UML-based software architecture and detailed design models, conducted unit testing, HiL/SiL testing, and peer artifact reviews.</li>
          <li>Resolved customer defects through root cause analysis, bug fixing, and validation.</li>
          <li>Implemented new signals for FlexRay, LIN, and CAN in the COM stack, including routing, mapping, module configuration (EcuM, BswM, PduR, ComM, etc.), and RTE generation.</li>
          <li>Handled change requests for modules like Battery Disconnect Management (BDM), Sleep Mode Management, E-Call (SOS Warning System), Warning Lamp Management, Crash Output, and Switch & Squib Management.</li>
          <li>Redesigned the Diagnostics Crash Output component, improving fault management and communication between Diagnostics, CDD, and COM — enhancing scalability and robustness in Mercedes-Benz Van projects.</li>
          <li>Spearheaded deployment of SiL (Software-in-the-Loop) testing frameworks across global locations, collaborating with the SiL team in Vietnam to streamline integration and testing workflows for Mercedes-Benz projects.</li>
        </ul>
        `,

        /* Experience 2 Description English*/
        experience2_desc: `
        <ul>
            <li>Designed and developed a GUI-based Remote Target Access Solution for GRA (Graphics Domain), enabling
            remote interaction with BOSCH graphics team ECUs from General Motors and Integrated key
            functionalities like
            hardware control, software executions, ECU flashing,switch configuration and switch hardware control,
            thereby improving efficiency by 80%.</li>
            <li>Implemented real-time camera streaming feature for remote lab monitoring, enhancing visibility and
            debugging capabilities. Developed the solution with collaboration and support from the tech architect, gaining
            experience on full software development cycle from architecture design to deployment further on
            pitching at ADIT GmbH workshop, ensuring scalability and robustness for future enhancements.</li>
        </ul>
        `,

        /* Patent and Research Title English */
        Patent_Research_title:'Patent & Research',
        
        /* Patent and Research Description English*/
        patent_research_description:`
        <ul>
          <li> IJARIIT 2020: ”Pothole Detection For Accident Prevention : A Review </li>
          <li>ICSTCEE 2023: ”Development Of An Uncrewed Vehicle Prototype Using Deep Learning And IOT</li>
          <li>KSCST Funding:”Development Of An Uncrewed Vehicle Prototype Using Deep Learning And IOT” Please
          refer proposal No: 46S BE 2688</li>
          <li>Intellectual Property Of India: Development Of Self-Driving Car Prototype (Application No:202241029012·Issued Jun 10) </li>
        </ul>
        `,

        /* Courses Title English */
        Courses_title:'Courses',

        /* Courses Description English */
        courses_description:`
        <ul>
          <li> Course 1 in EN </li>
          <li> Course 2 in EN </li>
        </ul>
        `,

        /* ExtraCurricular/Awards Title English */
        ExtraCirrucular_title: 'ExtraCurricular/Awards',
       
        /* ExtraCurricular/Awards Description English */
        extracirrucular1_description: `Mentored and guided developers through workshops, collaborative projects, and
        coding events, fostering skill growth and engagement. Supported junior members in improving technical proficiency.`,

        /* ExtraCurricular/Awards Description English */
        extracirrucular2_description: `🎉 As the Head of Fun at Work in my team, I took the initiative to organize
        engaging activities and events that fostered collaboration and strengthened team bonding. 🤝 From fun games and creative
        challenges 🎲 to team-building sessions and informal gatherings, I focused on creating a positive, energetic work culture 🌟 that encouraged participation, boosted morale,
        and brought people closer together.`,

        /* Skills Title English */  
        skills_title: 'Skills',      

        /* Education Title English */  
        education_title: 'Education',

        /* Download Resume Title English */  
        resume_title: 'Resume',

        /* Download Resume Description English */ 
        resume_description: 'Download a printable copy of my resume (PDF).',

        /* Download Resume Button Description English */ 
        resume_btn: 'Download Resume',

        /* Personal Interest Title English */ 
        personal_interests_title:'🌟 Personal Interests',

        /* Personal Interest Description English */ 
        personal_description_1:'🥾 Hiking & trekking adventures in the great outdoors',
        personal_description_2:'🌍 Traveled across half of India, exploring its diversity',
        personal_description_3:'🤝 Passionate about connecting with new cultures & people',
        personal_description_4:'🍳 Love cooking and experimenting with global cuisines',
        personal_description_5:'🗣️ Multilingual — fluent in 5 languages, currently pursuing my 6th language German A2',
        
        /* Contact Title English */ 
        contact_title: 'Contact'
    },

    de: {
        /* Personal Details Deutsch */
        name: 'Sai Adarsh Varma Chittari',
        headline: 'Software Ingenieur | Masterstudent an der TUHH | • Embedded • Web • AI | Formula Student Germany (Egnition Hamburg) | Ex-Co Function Resp CDD Bosch (Mercedes-Benz)',
        about_title: 'Über mich',
        about_text: `
        Hallo, ich bin Adarsh! 👋✨
        Ich bin <strong>Masterstudent an der Technischen Universität Hamburg (TUHH)</strong> 🏫🎒 im Studiengang Informations- und Kommunikationstechnik mit dem Schwerpunkt "Secure IT and Dependable Systems"🧑‍💻. Zuvor war ich als <strong>Co-Function Responsible für komplexe Gerätetreiber (CDD) in der Airbag-Software für Mercedes-Benz</strong> bei Bosch tätig, wo ich das Software-Rückgrat für prestigeträchtige Fahrzeugplattformen in<strong> globalen Teams (Deutschland und Vietnam)</strong> mitgestaltet habe.<br />
        Ich habe innovative Lösungen in <strong>Hackathons entwickelt, technische Lösungen auf Corporate-Events präsentiert, Technik-Clubs geleitet und den gesamten Produktlebenszyklus begleitet</strong>. Es ist meine Leidenschaft, komplexe technische Engpässe zu lösen.<br />
        Mit einer <strong>Bilanz von über 10 Projekten und 4 "Excellence Awards" von Bosch umfasst meine Expertise Embedded Systems, Full-Stack Webentwicklung, ML/AI und Security. Ob als Product Owner in der technischen Projektleitung oder in der Softwarearchitektur und -entwicklung </strong>– ich baue Systeme, die ebenso sicher wie intelligent sind! 🛡️🌐<br />
        <strong>Was mich begeistert 🤔:</strong><br /> 
        🏎️ Motorsport-Technologie: Entwicklung von Elektronik und Software für Rennwagen, die genauso intelligent sind wie der Fahrer bei e-gnition Hamburg.<br />
        🤖 Edge-KI: Ich tauche tief in TinyML ein, um intelligente Hardware zu entwickeln.<br />
        🔌 IoT + Web: Ich verwandle Ideen in nahtlose, realitätsnahe Produkte.<br />
        Ich bin immer auf dem Laufenden, um die nächste Generation von Technologien zu erforschen, zu entwickeln und zu skalieren.<br /> 
        <strong>Lassen Sie uns zusammenarbeiten und etwas Beeindruckendes schaffen!</strong>⚡🤝🔥`,

        /* Navigation Bar Deutsch */
        nav_about_text: 'Über mich',
        nav_projects_text: 'Projekte',
        nav_experience_text: 'Berufserfahrung',
        nav_Patent_Research_text: 'Patente & Forschung',
        nav_courses_text: 'Kurse',
        nav_extracirrcular_text: 'Außerschulische Aktivitäten & Auszeichnungen',
        nav_skills_text: 'Kompetenzen',
        nav_contact_text: 'Kontakt',
        nav_resume_text: 'Lebenslauf herunterladen',

        /* Projects Title Deutsch */
        projects_title: 'Projekte',

        /* Project 1 Information Deutsch*/
        proj1_title: 'Development Of Uncrewed Vehicle uisng deep Learning and IoT',
        proj1_desc: `Developed a Software-Defined Vehicle(SDV) prototype featuring three driving modes: Manual, Semi-Automatic
        (Adaptive Cruise Control) and Autonomous (Lane Detection) integrated with safety features like accident
        detection. The mobile application enables communication with the vehicle and seamless drive mode transitions`,
        proj1_link: 'View code',

        /* Project 2 Information Deutsch*/
        proj2_title: 'Jack-The Personal Assistant',
        proj2_desc: `Developed a personal assistant in Python using libraries like NLTK, Speech Recognition, and APIs for tasks such as weather
        reporting,WhatsApp messaging, email management, and COVID case updates.`,
        proj2_link: 'View code',

        /* Project 3 Information Deutsch*/
        // proj3_title: 'Industrieller Motorregler',
        // proj3_desc: 'PID + FOC-basierter Regler mit Watchdogs, Fail-Safe-Zuständen und CAN-Fernsteuerbefehlen.',
        // proj3_link: 'Code ansehen',

        /* Experience Title Deutsch*/
        experience_title: 'Erfahrung',
        
        /* Experience 1 Description Deutsch */
        experience1_desc: `
        <ul>
        <li>Entwicklung von Airbag-Software für Mercedes-Benz, Betreuung des COM-Stacks (FlexRay, CAN, LIN) und der Complex Device Drivers (CDD) über verschiedene Plattformen (MMA, MRA2M, S-Klasse, E-Klasse).</li>
        <li>Verwaltung von Anforderungen in DOORS unter Einhaltung von ASIL, ISO 26262 und Systemstandards.</li>
        <li>Erstellung von UML-basierter Softwarearchitektur und detaillierten Designmodellen, Durchführung von Unit-Tests, HiL-/SiL-Tests und Peer-Reviews von Artefakten.</li>
        <li>Behebung von Kundenfehlern durch Root-Cause-Analyse, Bug-Fixing und Validierung.</li>
        <li>Implementierung neuer Signale für FlexRay, LIN und CAN im COM-Stack, einschließlich Routing, Mapping, Modulspezifikation (EcuM, BswM, PduR, ComM usw.) und RTE-Generierung.</li>
        <li>Bearbeitung von Change Requests für Module wie Battery Disconnect Management (BDM), Sleep Mode Management, E-Call (SOS-Warnsystem), Warnlampen-Management, Crash-Output sowie Switch- & Squib-Management.</li>
        <li>Neugestaltung der Komponente „Diagnostics Crash Output“ zur Verbesserung des Fehlermanagements und der Kommunikation zwischen Diagnostics, CDD und COM — Steigerung von Skalierbarkeit und Robustheit in Mercedes-Benz Van-Projekten.</li>
        <li>Leitung der Einführung von SiL- (Software-in-the-Loop) Testframeworks an globalen Standorten, enge Zusammenarbeit mit dem SiL-Team in Vietnam zur Optimierung von Integrations- und Test-Workflows für Mercedes-Benz-Projekte.</li>
        </ul>
        `,

        /* Experience 2 Description Deutsch*/
        experience2_desc: `
        <ul>
        <li>Konzeption und Entwicklung einer GUI-basierten Remote-Target-Access-Lösung für GRA (Graphics Domain), die eine Remote-Interaktion mit ECUs des BOSCH-Grafikteams für General Motors ermöglicht. Integration zentraler Funktionen wie Hardwaresteuerung, Softwareausführung, ECU-Flashing, Schaltkonfiguration und Schalthardware-Steuerung — Steigerung der Effizienz um 80%.</li>
        <li>Implementierung einer Echtzeit-Kamerastreaming-Funktion für die Fernüberwachung des Labors, Verbesserung der Transparenz und Debugging-Fähigkeiten. Entwicklung der Lösung in Zusammenarbeit mit dem Tech-Architekten, umfassende Erfahrung im gesamten Softwareentwicklungszyklus von Architekturdesign bis Deployment. Präsentation der Lösung im ADIT GmbH Workshop, Sicherstellung von Skalierbarkeit und Robustheit für zukünftige Erweiterungen.</li>
        </ul>
        `,

        /* Patent and Research Title Deutsch */
        Patent_Research_title:'Patente & Forschung',
        
        /* Patent and Research Description Deutsch*/
        patent_research_description:`
        <ul>
          <li> IJARIIT 2020: ”Pothole Detection For Accident Prevention : A Review </li>
          <li>ICSTCEE 2023: ”Development Of An Uncrewed Vehicle Prototype Using Deep Learning And IOT</li>
          <li>KSCST Funding:”Development Of An Uncrewed Vehicle Prototype Using Deep Learning And IOT” Please
          refer proposal No: 46S BE 2688</li>
          <li>Intellectual Property Of India: Development Of Self-Driving Car Prototype (Application No:202241029012·Issued Jun 10) </li>
        </ul>
        `,

        /* Courses Title Deutsch */
        Courses_title:'Kurse',

        /* Courses Description Deutsch */
        courses_description:`
        <ul>
          <li> Course 1 in DE </li>
          <li> Course 2 in DE </li>
        </ul>
        `,

        /* ExtraCurricular/Awards Title Deutsch */
        ExtraCirrucular_title: 'Außerschulische Aktivitäten & Auszeichnungen',
       
        /* ExtraCurricular/Awards Description Deutsch */
        extracirrucular1_description: `Durch Workshops, Gemeinschaftsprojekte und Coding-Events Entwickler betreut und angeleitet, 
        um Kompetenzentwicklung und Engagement zu fördern. Unterstützung von Junior-Mitgliedern beim Ausbau ihrer technischen Fähigkeiten.`,

        /* ExtraCurricular/Awards Description Deutsch */
        extracirrucular2_description: `🎉 Als ,Head of Fun at Work“ in meinem Team habe ich die Initiative ergriffen, 
        spannende Aktivitäten und Events zu organisieren, die Zusammenarbeit gefördert und den Teamzusammenhalt gestärkt. 
        🤝 Von Spielen und kreativen Challenges 🎲 bis hin zu Teambuilding-Sessions und informellen Treffen lag mein Fokus 
        darauf, eine positive, energiegeladene Arbeitskultur 🌟 zu schaffen, die Motivation steigerte, Beteiligung förderte 
        und Menschen enger zusammenbrachte.`,

        /* Skills Title Deutsch */
        skills_title: 'Fähigkeiten',

        /* Education Title Deutsch */  
        education_title: 'Bildung',
        
        /* Download Resume Title Deutsch */  
        resume_title: 'Lebenslauf',
       
        /* Download Resume Description Deutsch */ 
        resume_description: 'Laden Sie eine druckbare Kopie meines Lebenslaufs (PDF) herunter.',
        
        /* Download Resume Button Description Deutsch */ 
        resume_btn: 'Lebenslauf herunterladen',

        /* Personal Interest Title Deutsch */ 
        personal_interests_title:'🌟 Persönliche Interessen',

        /* Personal Interest Description Deutsch */ 
        personal_description_1:'🥾 Wandern & Trekking-Abenteuer in der Natur',
        personal_description_2:'🌍 Reisen durch die Hälfte Indiens und Entdecken seiner Vielfalt',
        personal_description_3:'🤝 Leidenschaft für den Austausch mit neuen Kulturen & Menschen',
        personal_description_4:'🍳 Liebe zum Kochen und Experimentieren mit internationalen Küchen',
        personal_description_5:'🗣️ Mehrsprachig — fließend in 5 Sprachen, derzeit Deutsch A2 als sechste Sprache',
        
        /* Contact Title Deutsch */ 
        contact_title: 'Kontakt'

    }
};

/* To disable German Feature Comment Below Section */
/* German Language Feature Starts Here */
// Apply translations to the page
function applyLang(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const k = el.getAttribute('data-key');
        if (T[lang] && T[lang][k]) {
            // small heuristic: if element is an anchor and translation contains url-like text, leave href.
            //el.textContent = T[lang][k]; To enable as text
            el.innerHTML = T[lang][k]; // use if you have HTML elements inside
        }
    });
    
}

// Initial language
let current = 'en';
applyLang(current);

// Toggle handler
const chk = document.getElementById('langCheck');
chk.addEventListener('change', (e) => {
    current = e.target.checked ? 'de' : 'en';
    applyLang(current);
    // persist in localStorage
    try { localStorage.setItem('siteLang', current); } catch (e) { }
});

// Load persisted language
try {
    const saved = localStorage.getItem('siteLang');
    if (saved) {
        chk.checked = (saved === 'de');
        current = saved;
        applyLang(current);
    }
} catch (e) { }
/* To disable German Feature Comment Above Section */
/* German Language Feature Ends Here */


// Small accessibility: toggle via keyboard (space on label)
document.querySelector('.toggle').addEventListener('keydown', (ev) => {
    if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); chk.checked = !chk.checked; chk.dispatchEvent(new Event('change')); }
});

// Example: wire up view code links to sample GitHub (placeholder)
document.querySelectorAll('[data-key$="_link"]').forEach(a => {
    a.href = 'https://github.com/yourusername';
    a.target = '_blank';
});




//Navigation Fix
/*
    const navButtons = document.querySelectorAll('.navbar button');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Get target section ID from data-target attribute
    const targetId = button.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);

    // Scroll smoothly to that section if it exists
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
*/

const navButtons = document.querySelectorAll('.navbar button');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* Detailed Skills Section */ 
const filterBtns = document.querySelectorAll(".filter-btn");
const skillBars = document.querySelectorAll(".skill-bar");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // update active button
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    // get filter
    let filter = btn.getAttribute("data-filter");

    // show/hide instantly
    skillBars.forEach(bar => {
      if (filter === "all" || bar.classList.contains(filter)) {
        bar.style.display = "block";
      } else {
        bar.style.display = "none";
      }
    });
  });
});



const toggleButton = document.getElementById('theme-switch');
const themeLink = document.getElementById('theme-link');

// Function to update icons
function updateIcons() {
    const moon = toggleButton.querySelector('svg:first-child');
    const sun = toggleButton.querySelector('svg:last-child');
    if (themeLink.href.includes('style.css')) {
        moon.style.display = 'block';  // show moon in light mode
        sun.style.display = 'none';    // hide sun
    } else {
        moon.style.display = 'none';   // hide moon in dark mode
        sun.style.display = 'block';   // show sun
    }
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    themeLink.href = 'dark_mode.css';
}
updateIcons();

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    if (themeLink.href.includes('style.css')) {
        themeLink.href = 'dark_mode.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.href = 'style.css';
        localStorage.setItem('theme', 'light');
    }
    updateIcons();
});



// ── Avatar photo overlay ──
const avatarBtn    = document.getElementById('avatarBtn');
const avatarOverlay = document.getElementById('avatarOverlay');
const overlayClose  = document.getElementById('overlayClose');

function openOverlay()  { avatarOverlay.classList.add('open');    document.body.style.overflow = 'hidden'; }
function closeOverlay() { avatarOverlay.classList.remove('open'); document.body.style.overflow = ''; }

avatarBtn.addEventListener('click', openOverlay);
overlayClose.addEventListener('click', closeOverlay);

// Close on backdrop click (outside the card)
avatarOverlay.addEventListener('click', (e) => {
  if (e.target === avatarOverlay) closeOverlay();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeOverlay();
});