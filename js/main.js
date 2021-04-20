var swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-container.second', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Form
let message = document.getElementById('message');

const validate = (event) => {

  let txtName = document.getElementById('inputEmail4');
  let txtEmail = document.getElementById('inputEmail5');
  let txtPhone = document.getElementById('inputEmail6')
  let errors = document.querySelector('.form-message');
  let agreeChx =document.getElementsByClassName('form-check-input'); 

  errors.innerHTML = '';


  if (txtName.value.trim() === '') {

      let liError = document.createElement('li');
      liError.innerText = 'Wpisz swoje Imie';
      errors.appendChild(liError);
  }

  if (txtEmail.value.trim() === '') {
      let liError = document.createElement('li');
      liError.innerText = 'Wpisz adres E-mail';
      errors.appendChild(liError);
  }

  if (txtPhone.value.trim() === '') {
    let liError = document.createElement('li');
    liError.innerText = 'Wpisz Numer telefonu';
    errors.appendChild(liError);
}

  if (!txtEmail.value.includes('@')){
      let liError =document.createElement('li');
      liError.innerText = 'Adres e-mail musi zawierać @'
      errors.appendChild(liError);
  }

  if (!agreeChx[0].checked) {
      let liError = document.createElement('li');
      liError.innerText = "Nie wyraziłeś zgody";
      errors.appendChild(liError);
  }
  
//   if (!agreeChx[1].checked) {
//     let liError = document.createElement('li');
//     liError.innerText = "Czy jesteś robotem ?";
//     errors.appendChild(liError);
// }

  if (errors.children.length > 0) {
      event.preventDefault();
  }

}

message.addEventListener('submit', validate );