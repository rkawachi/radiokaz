function carregahome() {
document.getElementById("contentpage").innerHTML = "<div class='cel g6' onclick='carregando();include('https://rkawachi.github.io/radiokaz/home.js');'>RÁDIOS</div><div class='cel g6' onclick='carregando(); carregaestacoes()'>ESTAÇÕES</div><br/>";
carregandoout();
};
