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
            $("#logoI").css('background-color','#fff')
            $("#logoI").css('border-radius','400px')
    } else {
        $("#nav").removeClass("colorBg") && $("#nav").addClass("bg-light") && $('#ul').removeClass('fontC')
    }
    // esta variable se llena con el estado actual de la nav a la distancia superior
    let st = window.pageYOffset;
    // si el estado actual es mayor que la ultima posicion de la nav
    if (st > ultimoScroll) {
        console.log('para abajo');
        nav.style.cssText = 'opacity:0;transition:800ms';

    } else {
        console.log('para arriba');

        nav.style.cssText = 'opacity:100;transition:800ms';
    }
    ultimoScroll = st;
})

// seleccionar todos los div con esa clase
const card = document.querySelectorAll('.card')

// recorro todos los div con esa clase
card.forEach(x => {
    // quiero saber si el mouse está encima de alguna card para ponerle o quitarle clases
    x.addEventListener('mouseover', (e) => {


        const div = x.querySelector('.m')
        div.classList.add('mAnimated')
         
    })

    // se quitan las clases que se le agregaron
    x.addEventListener('mouseout', (e) => {


        const div = x.querySelector('.m')
        div.classList.remove('mAnimated')

    })

})

 
