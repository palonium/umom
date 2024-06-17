const input = document.getElementById('myInput');

input.addEventListener('input', function() {
  if (input.validity.valid) {
    input.classList.remove('invalid');
  }
});



//селекты кнопки
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); 
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
//второй ряд
const projectButtons = document.querySelectorAll('.button-project');

projectButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    projectButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});




//медиа карточки
// Получаем кнопки и карточки
const businessButton = document.getElementById('business-button');
const designersButton = document.getElementById('designers-button');
const businessCards = document.querySelector('.media__cards-buiseness');
const designersCards = document.querySelector('.media__cards-designers');

function checkScreenWidth() {
  return window.innerWidth <= 800;
}

businessButton.addEventListener('click', function() {
  if (checkScreenWidth()) {
    businessCards.style.display = 'block';
  } else {
    businessCards.style.display = 'grid';
  }
  
  designersCards.style.display = 'none';

  businessButton.classList.add('active-media');
  designersButton.classList.remove('active-media');
});


designersButton.addEventListener('click', function() {
  if (checkScreenWidth()) {
    designersCards.style.display = 'block';
  } else {
    designersCards.style.display = 'grid';
  }

  businessCards.style.display = 'none';

  designersButton.classList.add('active-media');
  businessButton.classList.remove('active-media');
});

window.addEventListener('load', function() {
  if (checkScreenWidth()) {
    businessCards.style.display = 'block';
    designersCards.style.display = 'none';
  }
});


//модальное окно

document.querySelector(".header__button").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.querySelector(".subscribe__button").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
});


//ссылки по кнопкам
const button = document.getElementById('btn-link');

button.addEventListener('click', () => {
  window.open('https://umom.notion.site/095018f9e93d4b6fa5ee20127da15d29?pvs=4', '_blank');
});

const btn = document.getElementById('btn-lin');

btn.addEventListener('click', () => {
  window.open('https://umom.notion.site/f5070caf861540dab7e539e6cc1a0e5e?pvs=4', '_blank');
});

const btnTg = document.getElementById('btn-tg');

btnTg.addEventListener('click', () => {
  window.open('https://t.me/dyoma_umom', '_blank');
});


//форма инвалиды инпуты, кнопка активация

const myInput = document.getElementById('myInput');
const contactInput = document.getElementById('contactInput');
const submitButton = document.getElementById('submitButton');
const infoInput = document.getElementById('detailsInput')


myInput.value = localStorage.getItem('myInputValue') || '';
contactInput.value = localStorage.getItem('contactInputValue') || '';
infoInput.value = localStorage.getItem('detailsInputValue')

function checkInputs() {

  const myInputValue = myInput.value.trim();
  const contactInputValue = contactInput.value.trim();

  if (myInputValue !== '' && contactInputValue !== '') {
      submitButton.classList.add('btn');
      submitButton.classList.add('btn-md');
      submitButton.classList.add('position_aware_effect');
      submitButton.classList.add('submit-active');
  } else {
      submitButton.classList.remove('submit-active');
      submitButton.classList.remove('btn');
      submitButton.classList.remove('btn-md');
      submitButton.classList.remove('position_aware_effect');
  }
}

function handleSubmit(event) {
    event.preventDefault(); 

    const myInputValue = myInput.value.trim();
    const contactInputValue = contactInput.value.trim();

    if (myInputValue === '' || contactInputValue === '') {
        myInput.classList.add('invalid-input');
        myInput.placeholder = 'Напишите что-нибудь :)';

        contactInput.classList.add('invalid-input');
        contactInput.placeholder = 'Напишите что-нибудь :)';
    } else if (contactInputValue === '') {
        contactInput.classList.add('invalid-input');
        contactInput.placeholder = 'Напишите что-нибудь :)';
    } else if(myInputValue === ''){
      contactInput.classList.add('invalid-input');
      contactInput.placeholder = 'Напишите что-нибудь :)';
    }else{

      myInput.value = '';
      contactInput.value = '';
  
      const popup = document.getElementById('popup');
      const closeBtn = document.getElementsByClassName('popup-close')[0];
      const mainBtn = document.getElementById('toPage')
      
      popup.style.display = 'block';

      mainBtn.onclick = function(){
        popup.style.display = 'none'
      }
  
      closeBtn.onclick = function () {
        popup.style.display = 'none';
      };
    }
}

myInput.addEventListener('input', checkInputs);
contactInput.addEventListener('input', checkInputs);

submitButton.addEventListener('click', handleSubmit);

myInput.addEventListener('mouseover', function () {
    myInput.classList.remove('invalid-input');
    myInput.placeholder = 'Имя*';
});

contactInput.addEventListener('mouseover', function () {
    contactInput.classList.remove('invalid-input');
    contactInput.placeholder = 'Любой контакт*';
});

window.addEventListener('beforeunload', function() {
  localStorage.setItem('myInputValue', myInput.value.trim());
  localStorage.setItem('contactInputValue', contactInput.value.trim());
  localStorage.setItem('detailsInputValue', detailsInput.value.trim())
});




function hideModal() {
  document.getElementById("myModal").style.display = "none";
}

function resetForm() {

  myInputModal.value = '';
  contactInputModal.value = '';
  infoInputModal.value = '';

  localStorage.removeItem('myInputValueModal');
  localStorage.removeItem('contactInputValueModal');
  localStorage.removeItem('detailsInputValueModal');
}


//модалка рабочий код

const myInputModal = document.getElementById('myInput-modal');
const contactInputModal = document.getElementById('contactInput-modal');
const submitButtonModal = document.getElementById('submitButton-modal');
const infoInputModal = document.getElementById('detailsInput-modal')

myInputModal.value = localStorage.getItem('myInputValueModal') || '';
contactInputModal.value = localStorage.getItem('contactInputValueModal') || '';
infoInputModal.value = localStorage.getItem('detailsInputValueModal') || '';

function checkInputsModal() {
  const myInputValue = myInputModal.value.trim();
  const contactInputValue = contactInputModal.value.trim();

  if (myInputValue !== '' && contactInputValue !== '') {
      submitButtonModal.classList.add('btn');
      submitButtonModal.classList.add('btn-md');
      submitButtonModal.classList.add('position_aware_effect');
      submitButtonModal.classList.add('submit-active');
  } else {
      submitButtonModal.classList.remove('submit-active');
      submitButtonModal.classList.remove('btn');
      submitButtonModal.classList.remove('btn-md');
      submitButtonModal.classList.remove('position_aware_effect');
  }
}

function handleSubmitModal(event) {
    event.preventDefault(); 

    const myInputValue = myInputModal.value.trim();
    const contactInputValue = contactInputModal.value.trim();

    if (myInputValue === '' || contactInputValue === '') {
        myInputModal.classList.add('invalid-input');
        myInputModal.placeholder = 'Напишите что-нибудь :)';

        contactInputModal.classList.add('invalid-input');
        contactInputModal.placeholder = 'Напишите что-нибудь :)';
    } else if (contactInputValue === '') {
        contactInputModal.classList.add('invalid-input');
        contactInputModal.placeholder = 'Напишите что-нибудь :)';
    } else if(myInputValue === ''){
      contactInputModal.classList.add('invalid-input');
      contactInputModal.placeholder = 'Напишите что-нибудь :)';
    }else{

        myInput.value = '';
        contactInput.value = '';

      const popup = document.getElementById('popup');
      const closeBtn = document.getElementsByClassName('popup-close')[0];
      const mainBtn = document.getElementById('toPage')

      resetForm();
      hideModal();
      popup.style.display = 'block';
  
      mainBtn.onclick = function(){
        popup.style.display = 'none'
      }
      // Закрытие попапа по клику на крестик
      closeBtn.onclick = function () {
        popup.style.display = 'none';
      };
        
    }
}
myInputModal.addEventListener('input', checkInputsModal);
contactInputModal.addEventListener('input', checkInputsModal);
submitButtonModal.addEventListener('click', handleSubmitModal);


myInputModal.addEventListener('mouseover', function () {
    myInputModal.classList.remove('invalid-input');
    myInputModal.placeholder = 'Имя*';
});

contactInputModal.addEventListener('mouseover', function () {
    contactInputModal.classList.remove('invalid-input');
    contactInputModal.placeholder = 'Любой контакт*';
});

window.addEventListener('beforeunload', function() {
  localStorage.setItem('myInputValueModal', myInput.value.trim());
  localStorage.setItem('contactInputValueModal', contactInput.value.trim());
  localStorage.setItem('detailsInputValueModal', detailsInput.value.trim())
});





//текст

(function(){
	const observer = new IntersectionObserver((entries) => { 
	    entries.forEach((entry) => {
		   if(entry.isIntersecting) {
		   	entry.target.classList.add('show');
			observer.unobserve(entry.target);
		   }
	    })
	});
	
	const els = document.querySelectorAll('.animate-words')
	
	els.forEach((el)=>{
		observer.observe(el);
		const spans = el.innerText.split(' ');
		el.innerHTML = `<span>${spans.join('</span> <span>')}</span>`;
		
	})

})()

//плавный скрол

function scrollToBlock(event) {
  event.preventDefault(); 

  const targetId = this.getAttribute("href");

  const targetBlock = document.querySelector(targetId);
  const targetOffsetTop = targetBlock.offsetTop;

  window.scrollTo({
      top: targetOffsetTop,
      behavior: "smooth"
  });
}

const scrollLink = document.querySelector("a.main__button");
scrollLink.addEventListener("click", scrollToBlock);
