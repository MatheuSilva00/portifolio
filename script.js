function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todas as abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "active" de todos os links de abas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar a aba atual e adicionar uma classe "active" ao link da aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
