  function openNav() {
    document.querySelector('.sidebar').style.width = '400px';
  }

  function closeNav() {
    document.querySelector('.sidebar').style.width = '0';
  }

  function toggleSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('visible');
    });

    // Ajouter la classe "visible" pour afficher la section correspondante
    document.getElementById(sectionId).classList.add('visible');
  }