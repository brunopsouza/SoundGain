// ==UserScript==
// @name         SoundGain_TIEXAMES
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script desenvolvido com finalidade de obter um ganho de volume nas video aulas oferecidas pela TIEXAMES
// @author       Bruno Souza
// @match        https://www.tiexames.com.br/*
// @match        http://www.tiexames.com.br/*
// @grant        none
// ==/UserScript==

(function() {
setTimeout( function() {
  document.getElementsByClassName("cs-volume")[1].max = "5.0";
}, 6000 );
})();