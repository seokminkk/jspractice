const backToTop = document.getElementById('backtotop');

const checkScroll = () => {

  let pageYOffset = window.pageYOffset;

  if (pageYOffset !== 0){
      backToTop.classList.add('show');
  } else {
      backToTop.classList.remove('show');
  }
}

const moveBackToTop = () => {
  if (window.pageYOffset > 0){

    window.scrollTo({top: 0, behavior: "smooth"})
  }
}


window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);




function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = event.nextElementSibling;

  const classList = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = classList.getAttribute('data-position');
  const liList = classList.getElementsByTagName('li');

  if (classList.clientWidth < (liList.length *260 + Number(activeLi))){
    activeLi = Number(activeLi) - 260;

    slideNext.style.color = '#2f3059';
    slideNext.classList.add('slide-next-hover');
  }

  classList.style.transition = 'transform 1s';
  classList.style.transform = 'translaatteX(' + String(activeLi) + 'px)';
  classList.setAttribute('data-position', activeLi);
}

const slidePrivewList = document.getElementsByClassName('slide-prev');

for (let i = 0; i< slidePrivewList.length; i++) {
  let classList = slidePrivewList[i].parentElement.parentElement.nextElementSibling;
  let liList = classList.getElementsByTagName('li');

  if(classList.clientWidth < (liList.length * 260)){
    slidePrivewList[i].classList.add('slide-prev-hover');
    slidePrivewList[i].addEventListener('click' , transformPrev);
  } else{
    const arrowContainer = slidePrivewList[i].parentElement;
    arrowContainer.removeChild(slidePrivewList[i].nextElementSibling);
    arrowContainer.removeChild(slidePrivewList[i]);
  }
}

