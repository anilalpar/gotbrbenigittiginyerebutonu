// content.js

(function() {
    'use strict';

    // "Kendimi Şanslı Hissediyorum" butonunu seç
    const button = document.querySelector("input[name='btnI']");
    if (button) {
        // Butonun metnini değiştir
        button.value = "Götür beni gittiğin yere.";
        
        // Buton tıklandığında işlevini değiştir
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Götür beni gittiğin yere.");
        });
    }
})();// JavaScript Document