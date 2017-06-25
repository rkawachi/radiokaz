function carregahome() {
document.getElementById(&quot;contentpage&quot;).innerHTML = &quot;<div class='cel g6' onclick='carregando(); carregaradios()'>RÁDIOS</div><div class='cel g6' onclick='carregando(); carregaestacoes()'>ESTAÇÕES</div>&quot;;
carregandoout();
};

function carregaradios() {
document.getElementById(&quot;contentpage&quot;).innerHTML = &quot;<a href='http://radio.redekaz.com/2017/06/rkz-webradio.html' onclick='carregando()'><div>RÁDIO KAZ</div></a><br/><a href='http://radio.redekaz.com/2017/03/107FM.html' onclick='carregando()'><div>99FM</div></a>&quot;;
carregandoout();
};

function carregaestacoes() {
document.getElementById(&quot;contentpage&quot;).innerHTML = &quot;<a href='http://radio.redekaz.com/2017/06/rkz-webradio.html' onclick='carregando()'><div>RÁDIO KAZ</div></a><br/><a href='http://radio.redekaz.com/2017/03/107FM.html' onclick='carregando()'><div>99FM</div></a>&quot;;
carregandoout();
};
