function esteregg() {
    window.open(window.open("https://www.facebook.com/porcodiopizza", "_blank"))
}

function federica() {
    window.scrollTo(0, 2100);
}

function matteo() {
    window.scrollTo(0, 2100);
}

function antonella() {
    window.scrollTo(0, 2800);
}

function noelle() {
    window.scrollTo(0, 4200);
}

function luigi() {
    window.scrollTo(0, 700);
}

function fede() {
    window.scrollTo(0, 4900);
}

function chiara() {
    window.scrollTo(0, 5600);
}

function brunella() {
    window.scrollTo(0, 7700);
}

//funzioni dell'esteregg
function doc_keyUp(e) {

    
    if (e.key === 'p') {
        
        esteregg();
    };

    if (e.key === 'm') {
        
        matteo();
    };
    if (e.key === 'a') {
        
        antonella();
    };

    if (e.key === 'n') {
        
        noelle();
    };
    if (e.key === 'f') {
        
        fede();
    };
    if (e.key === 'l') {
        
        luigi();
    };

    if (e.key === 'c') {
        
        chiara();
    };

    if (e.key === 'b') {
        
        brunella();
    };



}

document.addEventListener('keyup', doc_keyUp, false);