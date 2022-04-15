const dino = document.querySelector('.dino');
const background = document.querySelector(".background");
let position = 0;

//evitará que o dino pule quando já estiver saltando no ar
let isJumper = false;

function verificaTecla(event) {
    if (event.keyCode === 32) {
        if (!isJumper) {
            jump();
        }
    }
}

function jump() {
    isJumper = true;
   
    let upInterval = setInterval(() => {
        if (position >= 150) {

            clearInterval(upInterval);
            // faz o dino descer apos a sua subida
            let downInterval = setInterval(() => {
                //evita que o dino desça desimbestadamente
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumper = false;
                } else {

                    position -= 20;
                    dino.style.bottom = position + 'px';
                }


            }, 20);


        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }


    }, 20);
}

function criarCactus() {
    const cactus = document.createElement("div");
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;
    console.log(randonTime);

    cactus.classList.add("cactus");//minha classe
    cactus.style.left = 1000 + "px";
    background.appendChild(cactus);

    let letInterval = setInterval(() => {

        if (cactusPosition < -60) {
            clearInterval(letInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position< 60) {
            //game over
            clearInterval(letInterval);
          //  document.body.innterHTML = '<h1 class="game-over"> Fim de jogo</h1>';
          document.body.innerHTML="<h1 class='game-over'>Fim de Jogo</h1>";

        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);
    setTimeout(criarCactus, randonTime);
    //setTimeout
}



criarCactus();
document.addEventListener("keyup", verificaTecla);