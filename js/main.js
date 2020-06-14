// iniciamos una libreria de animaciones
AOS.init();
const frm = document.getElementById('frm')
// notify div al que se le insertará una notificacion cuando se precione el boton
const notify = document.getElementById('alert')

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    notify.innerHTML = `<div class="alert alert-success pt-3" role="alert">
                        MATRICULA COMPLETA,SE VERIFICARAN SU INFORMACIÓN </div>'`

    frm.reset()
})
const nav = document.getElementById('navC')

// inicia con 0 y luego de scroliar se almacena el ultimo valor
let ultimoScroll = 0;

$(window).scroll(() => {
    if ($("#nav").offset().top > 550) {
        $("#nav").addClass("colorBg") && $("#nav").removeClass("bg-light") &&
            $('#ul').addClass('fontC')

    } else {
        $("#nav").removeClass("colorBg") && $("#nav").addClass("bg-light") && $('#ul').removeClass('fontC')
    }
    // esta variable se llena con el estado actual de la  distancia superior
    let st = window.pageYOffset;

    if (st > ultimoScroll) {
        console.log('para abajo');
        nav.style.cssText= 'opacity:0;transition:800ms';
        
    } else {
        console.log('para arriba');

        nav.style.cssText= 'opacity:100;transition:800ms';
     }
    ultimoScroll = st;
})




const card =document.querySelectorAll('.card')

 

