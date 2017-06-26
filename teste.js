function carregahome() {
document.getElementById("contentpage").innerHTML = "<div class='cel g6' onclick='carregando(); include('https://rkawachi.github.io/radiokaz/home.js');'>RÁDIOS</div><div class='cel g6' onclick='carregando(); carregaestacoes()'>ESTAÇÕES</div>";
carregandoout();
};

function carregaradios() {
document.getElementById("contentpage").innerHTML = "<a href='http://radio.redekaz.com/2017/06/rkz-webradio.html' onclick='carregando()'><div>RÁDIO KAZ</div></a><br/><a href='http://radio.redekaz.com/2017/03/107FM.html' onclick='carregando()'><div>99FM</div></a>";
carregandoout();
};

function carregaestacoes() {
document.getElementById("contentpage").innerHTML = "<a href='http://radio.redekaz.com/2017/06/rkz-webradio.html' onclick='carregando()'><div>RÁDIO KAZ</div></a><br/><a href='http://radio.redekaz.com/2017/03/107FM.html' onclick='carregando()'><div>99FM</div></a>";
carregandoout();
};
