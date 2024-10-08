// Função para abrir uma aba e ocultar outras
function openTab(evt, tabName) {
    // Ocultar todas as seções de conteúdo
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "active" de todos os links de abas
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar a aba atual e adicionar a classe "active" ao link da aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Adiciona a classe "active" e exibe a primeira aba ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});
