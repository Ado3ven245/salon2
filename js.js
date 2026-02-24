const slider = document.querySelector('.slider');

setInterval(() => {
  // Если дошли до конца — возвращаемся в начало, иначе листаем вправо
  if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
  }
}, 3000);