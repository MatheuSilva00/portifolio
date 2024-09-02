// Função para mostrar a seção correspondente ao clique do usuário
function showSection(sectionId) {
    // Esconde todas as seções
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Exibe a seção selecionada
    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}