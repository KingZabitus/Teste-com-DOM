const init = document.querySelector('#init');
const sair = document.querySelector('#sair');

sair.addEventListener('click', () => {
    window.close();
})

init.addEventListener('click', () => {
    let nargas = document.createElement('video');
    let vidiv = document.querySelector('#container');
    let br = document.createElement('br');
    let voltar = document.createElement('button');
    voltar.textContent = 'Voltar';
    nargas.src = 'nargas.mp4';
    nargas.controls = false;
    nargas.width = 480;
    nargas.loop = true;
    nargas.autoplay = true;
    vidiv.appendChild(nargas);
    vidiv.appendChild(br);
    vidiv.appendChild(voltar);
    vidiv.removeChild(init);
    vidiv.removeChild(sair);
    voltar.addEventListener('click', () => {
        vidiv.removeChild(nargas);
        vidiv.removeChild(br);
        vidiv.removeChild(voltar);
        vidiv.appendChild(init);
        vidiv.appendChild(br);
        vidiv.appendChild(sair);
    })
})