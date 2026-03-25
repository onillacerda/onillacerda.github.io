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
      heroSubtitle: "Lider Técnico e Desenvolvedor Sênior especializado em Angular, TypeScript e Node.js",
      aboutTitle: "Sobre",
      aboutDescription: `
        <p>Sou desenvolvedor com ampla experiência em projetos usando Angular, JavaScript e TypeScript, além de atuação com React em aplicações web modernas. Tenho evoluído para o desenvolvimento FullStack com Node.js e já atuei como Tech Lead em projetos colaborativos. Valorizo código limpo, arquitetura bem definida e soluções escaláveis.</p>
        <p>🧠 Apaixonado por inovação e em adotar novas tecnologias que aprimoram processos e resultados.</p>
        <p><br><b>Educação:</b><br>
          🎓 Pós-graduação lato sensu em Desenvolvimento Mobile (IMES) - 2026<br>
          🎓 Pós-graduação lato sensu em Desenvolvimento da Web (IMES) - 2025<br>
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
            <h3 class="font-semibold">Analista Desenvolvedor Front End | SYS4B</h3>
            <p><i>De ago de 2025 até o momento · Tempo integral</i></p>
            <p><b>Modernização da infraestrutura digital da maior distribuidora de gás canalizado do Brasil.</b>  Arquitetura & Unificação: Responsável pela arquitetura front-end e unificação das plataformas "Nossa Rede" e "Comgás Virtual", criando um sistema agnóstico (Desktop, Tablet e Mobile) para gestão de chamados em campo.</p>
            <p><b>Arquitetura Multiplataforma</b> Desenvolvimento de sistema híbrido (Desktop, Tablet e Mobile) utilizando Angular, garantindo que técnicos em campo tenham acesso resiliente a chamados de manutenção de infraestrutura crítica.</p>
          </li>
          <li>
            <h3 class="font-semibold">Software Developer Technical Lead | CompassUOL</h3>
            <p><i>De abr de 2022 até fev de 2025 · 2 anos 11 meses</i></p>
            <p><b>Desenvolvimento:</b> Atuei no desenvolvimento de soluções escaláveis e de alta performance em projetos de e-commerce e sistemas corporativos, utilizando tecnologias como React, Angular, Node.js, OCC, AWS e GraphQL. Destaque para a atuação no sistema de análise de métricas, com foco em performance, visualização de dados e experiência do usuário.</p>
            <p><b>Liderança Tecnica:</b>  Atuei como Technical Lead, coordenando decisões junto a  arquitetura e realizando mentoria técnica. Resultado: Melhoria de 40% na performance e usabilidade das aplicações entregues.</p>
          </li>
          <li>
            <h3 class="font-semibold">Analista Desenvolvedor | Indra</h3>
            <p><i>De mar de 2021 até abr de 2022 · 1 ano 2 meses</i></p>
            <p><b>Desenvolvimento de sistemas governamentais e portais de alta visibilidade.</b> Sistemas Públicos: Arquitetei o front-end do sistema de Atermação Eletrônica, SEGEPMA  e o portal do TJPB utilizando Angular 9.</p>
          </li>
          <li>
            <h3 class="font-semibold">Front-end Developer | Armazém PB</h3>
            <p><i>De fev de 2019 até mar de 2021 · 2 anos 2 meses</i></p>
            <p><b>Atuação no núcleo de inovação de um dos maiores varejistas do Nordeste.</b> E-commerce: Implementação de novas funcionalidades na plataforma Oracle (OCC) utilizando KnockoutJs, projetos do varejo usando Angular e ReactJS.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">Mostrar todas as experiências</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Projetos",
      footer: "© 2026 Nilson de Lacerda Oliveira Filho. Todos os direitos reservados."
    },
    en: {
      heroTitle: "Hello, I'm Nilson Lacerda",
      heroSubtitle: "Tech Lead and Senior Developer specialized in Angular, TypeScript, and Node.js",
      aboutTitle: "About",
      aboutDescription: `
        <p>I am a developer with extensive experience in projects using Angular, JavaScript, and TypeScript, along with experience working with React in modern web applications. I have been evolving into FullStack development with Node.js and have worked as a Tech Lead in collaborative projects. I value clean code, well-defined architecture, and scalable solutions.</p>
        <p>🧠 Passionate about innovation and adopting new technologies that improve processes and results.</p>
        <p><br><b>Education:</b><br>
          🎓 Postgraduate Degree in Mobile Development (IMES) - 2026<br>
          🎓 Postgraduate Degree in Web Development (IMES) - 2025<br>
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
            <h3 class="font-semibold">Front-End Developer Analyst | SYS4B</h3>
            <p><i>From Aug 2025 to Present · Full-time</i></p>
            <p><b>Modernization of the digital infrastructure of the largest piped gas distributor in Brazil.</b> Architecture & Unification: Responsible for front-end architecture and unification of the "Nossa Rede" and "Comgás Virtual" platforms, creating an agnostic system (Desktop, Tablet, and Mobile) for field service management.</p>
            <p><b>Multiplatform Architecture:</b> Development of a hybrid system (Desktop, Tablet, and Mobile) using Angular, ensuring that field technicians have resilient access to critical infrastructure maintenance requests.</p>
          </li>
          <li>
            <h3 class="font-semibold">Software Developer Technical Lead | CompassUOL</h3>
            <p><i>From Apr 2022 to Feb 2025 · 2 years 11 months</i></p>
            <p><b>Development:</b> Worked on scalable, high-performance solutions in e-commerce projects and enterprise systems, using technologies such as React, Angular, Node.js, OCC, AWS, and GraphQL. Highlight: worked on a metrics analysis system focused on performance, data visualization, and user experience.</p>
            <p><b>Technical Leadership:</b> Acted as Technical Lead, coordinating architectural decisions and providing technical mentorship. Result: 40% improvement in performance and usability of delivered applications.</p>
          </li>
          <li>
            <h3 class="font-semibold">Developer Analyst | Indra</h3>
            <p><i>From Mar 2021 to Apr 2022 · 1 year 2 months</i></p>
            <p><b>Development of government systems and high-visibility portals.</b> Public Systems: Designed the front-end of the Electronic Filing System (Atermação Eletrônica), SEGEPMA, and the TJPB portal using Angular 9.</p>
          </li>
          <li>
            <h3 class="font-semibold">Front-End Developer | Armazém PB</h3>
            <p><i>From Feb 2019 to Mar 2021 · 2 years 2 months</i></p>
            <p><b>Worked in the innovation hub of one of the largest retailers in Northeast Brazil.</b> E-commerce: Implementation of new features on the Oracle (OCC) platform using KnockoutJS, and retail projects using Angular and ReactJS.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">View all experiences</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Projects",
      footer: "© 2026 Nilson de Lacerda Oliveira Filho. All rights reserved."
    },
    es: {
      heroTitle: "Hola, soy Nilson Lacerda",
      heroSubtitle: "Desarrollador Senior especializado en Angular, TypeScript y Node.js",
      aboutTitle: "Sobre mí",
      aboutDescription: `
        <p>Soy desarrollador con amplia experiencia en proyectos utilizando Angular, JavaScript y TypeScript, además de experiencia trabajando con React en aplicaciones web modernas. He estado evolucionando hacia el desarrollo FullStack con Node.js y he trabajado como Tech Lead en proyectos colaborativos. Valoro el código limpio, una arquitectura bien definida y soluciones escalables.</p>
        <p>🧠 Apasionado por la innovación y la adopción de nuevas tecnologías que mejoran procesos y resultados.</p>
        <p><br><b>Educación:</b><br>
          🎓 Posgrado en Desarrollo Mobile (IMES) - 2026<br>
          🎓 Posgrado en Desarrollo Web (IMES) - 2025<br>
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
            <h3 class="font-semibold">Analista Desarrollador Front-End | SYS4B</h3>
            <p><i>De ago de 2025 hasta la actualidad · Tiempo completo</i></p>
            <p><b>Modernización de la infraestructura digital de la mayor distribuidora de gas canalizado de Brasil.</b> Arquitectura y Unificación: Responsable de la arquitectura front-end y la unificación de las plataformas "Nossa Rede" y "Comgás Virtual", creando un sistema agnóstico (Desktop, Tablet y Mobile) para la gestión de servicios en campo.</p>
            <p><b>Arquitectura Multiplataforma:</b> Desarrollo de un sistema híbrido (Desktop, Tablet y Mobile) utilizando Angular, garantizando que los técnicos en campo tengan acceso resiliente a solicitudes de mantenimiento de infraestructura crítica.</p>
          </li>
          <li>
            <h3 class="font-semibold">Technical Lead Desarrollador de Software | CompassUOL</h3>
            <p><i>De abr de 2022 a feb de 2025 · 2 años 11 meses</i></p>
            <p><b>Desarrollo:</b> Participé en el desarrollo de soluciones escalables y de alto rendimiento en proyectos de e-commerce y sistemas corporativos, utilizando tecnologías como React, Angular, Node.js, OCC, AWS y GraphQL. Destacado: participación en un sistema de análisis de métricas enfocado en rendimiento, visualización de datos y experiencia del usuario.</p>
            <p><b>Liderazgo Técnico:</b> Actué como Technical Lead, coordinando decisiones de arquitectura y realizando mentoría técnica. Resultado: Mejora del 40% en el rendimiento y la usabilidad de las aplicaciones entregadas.</p>
          </li>
          <li>
            <h3 class="font-semibold">Analista Desarrollador | Indra</h3>
            <p><i>De mar de 2021 a abr de 2022 · 1 año 2 meses</i></p>
            <p><b>Desarrollo de sistemas gubernamentales y portales de alta visibilidad.</b> Sistemas Públicos: Diseñé el front-end del sistema de Atermação Electrónica, SEGEPMA y el portal del TJPB utilizando Angular 9.</p>
          </li>
          <li>
            <h3 class="font-semibold">Desarrollador Front-End | Armazém PB</h3>
            <p><i>De feb de 2019 a mar de 2021 · 2 años 2 meses</i></p>
            <p><b>Participación en el núcleo de innovación de uno de los mayores minoristas del Nordeste de Brasil.</b> E-commerce: Implementación de nuevas funcionalidades en la plataforma Oracle (OCC) utilizando KnockoutJS, y proyectos de retail con Angular y ReactJS.</p>
          </li>
          <li>
            <h3 class="font-semibold" style="color: darkgray;">
              <i><a href="https://www.linkedin.com/in/onillacerda/" target="_blank">Ver todas las experiencias</a></i>
            </h3>
          </li>
        </ul>
        `,
      projectsTitle: "Proyectos",
      footer: "© 2026 Nilson de Lacerda Oliveira Filho. Todos los derechos reservados."
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