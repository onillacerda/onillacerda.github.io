const repoList = document.getElementById("repo-list");
const githubUsername = "onillacerda";

fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
  .then(res => res.json())
  .then(repos => {
    // Ordena manualmente por data de atualização (decrescente)
    const sortedRepos = repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6); // Pega os 6 mais recentes

    sortedRepos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-xl shadow";
      card.innerHTML = `
        <h3 class="font-bold text-lg">${repo.name}</h3>
        <p class="text-sm text-gray-600">${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank" class="text-blue-500 text-sm">Ver no GitHub</a>
      `;
      repoList.appendChild(card);
    });
  });

  const translations = {
    pt: {
      heroTitle: "Olá, eu sou Nilson Lacerda",
      heroSubtitle: "Desenvolvedor Sênior especializado em Angular, TypeScript e Node.js",
      aboutTitle: "Sobre",
      aboutDescription: `
        <p>Sou desenvolvedor com ampla experiência em projetos usando Angular, JavaScript e TypeScript, além de atuação com React em aplicações web modernas. Tenho evoluído para o desenvolvimento FullStack com Node.js e já atuei como Tech Lead em projetos colaborativos. Valorizo código limpo, arquitetura bem definida e soluções escaláveis.</p>
        <p>🧠 Apaixonado por inovação e em adotar novas tecnologias que aprimoram processos e resultados.</p>
        <p><br><b>Educação:</b><br>
          🎓 Especialização em Arquitetura de Sistemas de Informação - 2025<br>
          🎓 Especialização em Business Intelligence, Big Data e Inteligência Artificial - 2023<br>
          🎓 Pós-graduação em Gestão de Riscos e Cibersegurança - 2022<br>
          🎓 Pós-graduação em Engenharia de Sistemas (ESAB) - 2019<br>
          👨‍🎓 Superior em Análise e Desenvolvimento de Sistemas (UNIGRAN) - 2013<br>
          💻 Curso Técnico de Design e Desenvolvimento Web (UNIBRATEC) - 2008<br>
        </p>
        <p><b>Certificações:</b><br>
          🔒 Oracle AI Foundations Associate (1Z0-1122-23)<br>
          🔒 Fundamentals in Cybersecurity by IBSEC (2023)<br>
          🔒 GenAI Technical Certification by Compass UOL (2024)
        </p>
      `,
      experienceTitle: "Experiência",
      experienceDescription: `
        <ul class="space-y-4">
          <li>
            <h3 class="font-semibold">Software Developer Technical Lead | CompassUOL</h3>
            <p><i>De abr de 2022 até fev de 2025 · 2 anos 11 meses</i></p>
            <p>Trabalhei em diferentes e-commerces, utilizando tecnologias como React, Next.js, OCC e Node.js. Atuei em um sistema de análise de métricas com Angular + GraphQL + Node.js, sempre buscando otimizar a experiência do usuário e a performance da aplicação.</p>
            <p><b>Liderança de Equipe:</b> Gerenciei uma equipe de desenvolvedores no desenvolvimento de soluções inovadoras com Angular e Node, implementando soluções que melhoraram a experiência do usuário em 40%.</p>
            <p><b>Colaboração e Metodologias Ágeis:</b> Utilização de Scrum e Kanban, garantindo entregas e melhoria na produtividade da equipe.</p>
          </li>
          <li>
            <h3 class="font-semibold">Analista Desenvolvedor | Indra</h3>
            <p><i>De mar de 2021 até abr de 2022 · 1 ano 2 meses</i></p>
            <p>Durante meu tempo na Indra, atuei em projetos desafiadores, destacando-me no desenvolvimento de soluções para o Tribunal de Justiça e o SEGEPMA. No Tribunal de Justiça, participei do desenvolvimento do portal e da criação do sistema de Atermação Eletrônica, utilizando Angular + Java. Também colaborei no desenvolvimento de um sistema interno no SEGEPMA, focado em otimizar processos internos, utilizando Angular para criar interfaces eficientes e de fácil usabilidade.</p>
          </li>
          <li>
            <h3 class="font-semibold">Front-end Developer | Armazém PB</h3>
            <p><i>De fev de 2019 até mar de 2021 · 2 anos 2 meses</i></p>
            <p>Conduzi a equipe de desenvolvimento Front-end, atuando na implantação do Ecommerce do Armazém Paraíba e no desenvolvimento de projetos internos no time de inovação, utilizando OCC, Javascript, Angular, além do uso de metodologias ágeis como Scrum e Kanban, garantindo entregas e melhorias na produtividade da equipe.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">Mostrar todas as experiências</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Projetos",
      footer: "© 2025 Nilson de Lacerda Oliveira Filho. Todos os direitos reservados."
    },
    en: {
      heroTitle: "Hello, I'm Nilson Lacerda",
      heroSubtitle: "Senior Developer specialized in Angular, TypeScript, and Node.js",
      aboutTitle: "About",
      aboutDescription: `
        <p>I am a developer with extensive experience in projects using Angular, JavaScript, and TypeScript, along with experience working with React in modern web applications. I have been evolving into FullStack development with Node.js and have worked as a Tech Lead in collaborative projects. I value clean code, well-defined architecture, and scalable solutions.</p>
        <p>🧠 Passionate about innovation and adopting new technologies that improve processes and results.</p>
        <p><br><b>Education:</b><br>
          🎓 Postgraduate in Systems Architecture - 2025<br>
          🎓 Postgraduate in Business Intelligence, Big Data, and Artificial Intelligence - 2023<br>
          🎓 Postgraduate in Risk Management and Cybersecurity - 2022<br>
          🎓 Postgraduate in Systems Engineering (ESAB) - 2019<br>
          👨‍🎓 Bachelor's in Systems Analysis and Development (UNIGRAN) - 2013<br>
          💻 Technical Degree in Web Design and Development (UNIBRATEC) - 2008<br>
        </p>
        <p><b>Certifications:</b><br>
          🔒 Oracle AI Foundations Associate (1Z0-1122-23)<br>
          🔒 Fundamentals in Cybersecurity by IBSEC (2023)<br>
          🔒 GenAI Technical Certification by Compass UOL (2024)
        </p>
      `,
      experienceTitle: "Experience",
      experienceDescription: `
        <ul class="space-y-4">
          <li>
            <h3 class="font-semibold">Software Developer Technical Lead | CompassUOL</h3>
            <p><i>From Apr 2022 to Feb 2025 · 2 years 11 months</i></p>
            <p>I worked on different e-commerce platforms using technologies like React, Next.js, OCC, and Node.js. I also contributed to a metrics analysis system using Angular + GraphQL + Node.js, always focused on improving user experience and application performance.</p>
            <p><b>Team Leadership:</b> Managed a team of developers in delivering innovative solutions with Angular and Node, implementing improvements that increased user satisfaction by 40%.</p>
            <p><b>Agile Collaboration:</b> Used Scrum and Kanban methodologies, ensuring deliveries and improving team productivity.</p>
          </li>
          <li>
            <h3 class="font-semibold">Software Developer | Indra</h3>
            <p><i>From Mar 2021 to Apr 2022 · 1 year 2 months</i></p>
            <p>At Indra, I worked on challenging projects, contributing to the development of solutions for the Court of Justice and SEGEPMA. At the Court of Justice, I participated in developing the portal and creating the Electronic Atermação System using Angular + Java. I also collaborated on an internal system at SEGEPMA focused on optimizing internal processes using Angular for efficient and user-friendly interfaces.</p>
          </li>
          <li>
            <h3 class="font-semibold">Front-end Developer | Armazém PB</h3>
            <p><i>From Feb 2019 to Mar 2021 · 2 years 2 months</i></p>
            <p>Led the Front-end development team, working on the implementation of Armazém Paraíba’s e-commerce and developing internal projects in the innovation team using OCC, JavaScript, and Angular. Also used agile methodologies such as Scrum and Kanban to ensure deliveries and boost team productivity.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">View all experiences</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Projects",
      footer: "© 2025 Nilson de Lacerda Oliveira Filho. All rights reserved."
    },
    es: {
      heroTitle: "Hola, soy Nilson Lacerda",
      heroSubtitle: "Desarrollador Senior especializado en Angular, TypeScript y Node.js",
      aboutTitle: "Sobre mí",
      aboutDescription: `
        <p>Soy desarrollador con amplia experiencia en proyectos utilizando Angular, JavaScript y TypeScript, además de experiencia trabajando con React en aplicaciones web modernas. He estado evolucionando hacia el desarrollo FullStack con Node.js y he trabajado como Tech Lead en proyectos colaborativos. Valoro el código limpio, una arquitectura bien definida y soluciones escalables.</p>
        <p>🧠 Apasionado por la innovación y la adopción de nuevas tecnologías que mejoran procesos y resultados.</p>
        <p><br><b>Educación:</b><br>
          🎓 Especialización en Arquitectura de Sistemas de Información - 2025<br>
          🎓 Especialización en Business Intelligence, Big Data e Inteligencia Artificial - 2023<br>
          🎓 Posgrado en Gestión de Riesgos y Ciberseguridad - 2022<br>
          🎓 Posgrado en Ingeniería de Sistemas (ESAB) - 2019<br>
          👨‍🎓 Licenciatura en Análisis y Desarrollo de Sistemas (UNIGRAN) - 2013<br>
          💻 Técnico en Diseño y Desarrollo Web (UNIBRATEC) - 2008<br>
        </p>
        <p><b>Certificaciones:</b><br>
          🔒 Oracle AI Foundations Associate (1Z0-1122-23)<br>
          🔒 Fundamentals in Cybersecurity by IBSEC (2023)<br>
          🔒 GenAI Technical Certification by Compass UOL (2024)
        </p>
      `,
      experienceTitle: "Experiencia",
      experienceDescription: `
        <ul class="space-y-4">
          <li>
            <h3 class="font-semibold">Software Developer Technical Lead | CompassUOL</h3>
            <p><i>De abr de 2022 hasta feb de 2025 · 2 años 11 meses</i></p>
            <p>Trabajé en varios e-commerce utilizando tecnologías como React, Next.js, OCC y Node.js. También participé en el desarrollo de un sistema de análisis de métricas con Angular + GraphQL + Node.js, siempre enfocado en mejorar la experiencia del usuario y el rendimiento de la aplicación.</p>
            <p><b>Liderazgo de equipo:</b> Gestioné un equipo de desarrolladores en la creación de soluciones innovadoras con Angular y Node, implementando mejoras que aumentaron la satisfacción del usuario en un 40%.</p>
            <p><b>Colaboración Ágil:</b> Uso de metodologías Scrum y Kanban, asegurando entregas y mejorando la productividad del equipo.</p>
          </li>
          <li>
            <h3 class="font-semibold">Desarrollador de Software | Indra</h3>
            <p><i>De mar de 2021 hasta abr de 2022 · 1 año 2 meses</i></p>
            <p>En Indra, trabajé en proyectos desafiantes, destacándome en el desarrollo de soluciones para el Tribunal de Justicia y SEGEPMA. En el Tribunal de Justicia, participé en el desarrollo del portal y en la creación del sistema de Atermação Electrónica usando Angular + Java. También colaboré en el desarrollo de un sistema interno en SEGEPMA para optimizar procesos internos, utilizando Angular para crear interfaces eficientes y fáciles de usar.</p>
          </li>
          <li>
            <h3 class="font-semibold">Front-end Developer | Armazém PB</h3>
            <p><i>De feb de 2019 hasta mar de 2021 · 2 años 2 meses</i></p>
            <p>Lideré el equipo de desarrollo Front-end, trabajando en la implementación del e-commerce de Armazém Paraíba y en el desarrollo de proyectos internos en el equipo de innovación, utilizando OCC, JavaScript y Angular. También utilicé metodologías ágiles como Scrum y Kanban para garantizar entregas y mejorar la productividad del equipo.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">Ver todas las experiencias</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Proyectos",
      footer: "© 2025 Nilson de Lacerda Oliveira Filho. Todos los derechos reservados."
    }
  };
  
  const langSelect = document.getElementById("lang-select");
  
  function setLanguage(lang) {
    const t = translations[lang];
  
    const map = {
      "hero-title": t.heroTitle,
      "hero-subtitle": t.heroSubtitle,
      "about-title": t.aboutTitle,
      "about-link": t.aboutTitle,
      "about-desc": t.aboutDescription,
      "experience-title": t.experienceTitle,
      "experience-link": t.experienceTitle,
      "experience-desc": t.experienceDescription,
      "projects-title": t.projectsTitle,
      "projects-link": t.projectsTitle,
      "footer-text": t.footer
    };
  
    for (const [id, text] of Object.entries(map)) {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = text;
      } else {
        console.warn(`Elemento com ID '${id}' não encontrado no DOM`);
      }
    }
  }
  
  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
  
  setLanguage("pt");