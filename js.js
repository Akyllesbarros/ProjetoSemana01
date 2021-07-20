
// Atualizar Pet
contador = 1 ;

function proximoPet() {
    contador += 1 ;

    // Encontra o Próximo PET a cada Clique
    if (contador == 1) {
        document.getElementById('pet').src='/caofeliz.png';        // Altera imagem principal do PET
        document.getElementById('h2').innerText='LV 30'            // Altera o Level do PET
        document.getElementById('h3').innerText='1450/1500 Xp'     // Altera o Xp do CSS
        document.getElementById('botao01').src='/iconebeer.png'             //  
        document.getElementById('botao02').src='/iconechurraswhite.png'     // Altera os ícones de Gostos dos Pets
        document.getElementById('botao03').src='/iconefloresta.png'         //
        document.getElementById('xpbarra2').style.width='75%'       // Altera Barra de status
    }

    else if (contador == 2) {
        document.getElementById('pet').src='/cachorra.png';
        document.getElementById('h2').innerText='LV 21'
        document.getElementById('h3').innerText='950/1500 Xp'
        document.getElementById('botao01').src='/iconebeer.png'
        document.getElementById('botao02').src='/iconechurraswhite.png'
        document.getElementById('botao03').src='/iconefloresta.png'
        document.getElementById('xpbarra2').style.width='63%'
    }

    else if (contador == 3) {
        document.getElementById('pet').src='/gata.png';
        document.getElementById('h2').innerText='LV 26'
        document.getElementById('h3').innerText='1050/1500 Xp'
        document.getElementById('botao01').src='/iconebeerwhite.png'
        document.getElementById('botao02').src='/iconechurrasblue.png'
        document.getElementById('botao03').src='/iconefloresta.png'
        document.getElementById('xpbarra2').style.width='70%'
    }

    else if (contador == 4) {
        document.getElementById('pet').src='/dogdef.png';
        document.getElementById('h2').innerText='LV 8'
        document.getElementById('h3').innerText='1500/1500 Xp'
        document.getElementById('botao01').src='/iconebeer.png'
        document.getElementById('botao02').src='/iconechurrasblue.png'
        document.getElementById('botao03').src='/iconeflorestawhite.png'
        document.getElementById('xpbarra2').style.width='100%'
    }

    else if (contador == 5) {
        document.getElementById('pet').src='/passarinho.png';
        document.getElementById('h2').innerText='LV 15'
        document.getElementById('h3').innerText='700/1500 Xp'
        document.getElementById('botao01').src='/iconebeer.png'
        document.getElementById('botao02').src='/iconechurrasblue.png'
        document.getElementById('botao03').src='/iconeflorestawhite.png'
        document.getElementById('xpbarra2').style.width='45%'
    }

    else if (contador == 6) {
        document.getElementById('pet').src='/ramster.png';
        document.getElementById('h2').innerText='LV 19'
        document.getElementById('h3').innerText='350/1500 Xp'
        document.getElementById('botao01').src='/iconebeerwhite.png'
        document.getElementById('botao02').src='/iconechurrasblue.png'
        document.getElementById('botao03').src='/iconefloresta.png'
        document.getElementById('xpbarra2').style.width='23%'
    }


    // Zera o contador 
    else {
        contador = 0;
    }

        
}