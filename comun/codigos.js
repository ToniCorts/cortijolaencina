/*
  Juan Díaz - deide.com
*/

// Inicializa JQuery
$(document).ready(function() {
  // Zoom en foto de galería
  /*$("#albumfotos a").fancybox({
    'overlayShow': true,
    'hideOnContentClick': true
  });*/
  // Enlaces externos en ventana nueva
  $("a[@rel^='external']").attr('target','_blank');
  //$("#cuerpo a[@rel^='external']").attr('class','enlace-externo');
});

// Email encriptado
var ecc = [99,111,114,116,105,106,111,108,97,101,110,99,105,110,97,64,121,97,104,111,111,46,101,115];
var em = '';
for (var i=0; i<ecc.length; i++) em += String.fromCharCode(ecc[i]);


/*
  Foto ampliada
*/
function foto(a,f,t) {
  if (a=='n') {
    document.getElementById('fotograndebg').style["visibility"]='';
    document.getElementById('fotogrande').style["visibility"]='';
    document.getElementById('fotogrande').innerHTML='<table align="center" cellspacing="0" cellpadding="0"><tr style="vertical-align:top"><td><img src="/img/esquina-sup-izq-c.gif"/></td><td style="padding-top:2px;text-align:right" class="fondo"><a href="javascript:;" onclick="foto(\'f\',\'\')">Cerrar imagen <img src="/img/icono-equis.gif" alt="Cerrar" valign="absmiddle"/></a></td><td><img src="/img/esquina-sup-der-c.gif"/></td></tr><tr><td class="fondo"></td><td id="foto"><img src="/img/galeria/foto-'+f+'-grande.jpg" onclick="foto(\'f\',\'\')"/></td><td class="fondo"></td></tr><tr style="vertical-align:bottom"><td><img src="/img/esquina-inf-izq-c.gif"/></td><td style="padding-bottom:2px;font-weight:bold" class="fondo">'+t+'</td><td><img src="/img/esquina-inf-der-c.gif"/></td></tr></table>';
  }
  else {
    document.getElementById('fotograndebg').style["visibility"]='hidden';
    document.getElementById('fotogrande').style["visibility"]='hidden';
    document.getElementById('fotogrande').innerHTML='';
  }
}