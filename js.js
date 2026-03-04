// const slider = document.querySelector('.slider');

// setInterval(() => {
//   // Если дошли до конца — возвращаемся в начало, иначе листаем вправо
//   if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
//     slider.scrollTo({ left: 0, behavior: 'smooth' });
//   } else {
//     slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
//   }
// }, 3000);
const slider = document.querySelector('.slider');

// Функция автопрокрутки
function startMobileSlider() {
  // Проверяем ширину экрана при запуске
  if (window.innerWidth < 768) {
    const autoScroll = setInterval(() => {
      // Снова проверяем ширину внутри (вдруг пользователь повернул экран)
      if (window.innerWidth >= 768) {
        clearInterval(autoScroll);
        return;
      }

      const step = slider.clientWidth;
      if (Math.ceil(slider.scrollLeft + step) >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3000);

    // Остановка при касании пальцем
    slider.addEventListener('touchstart', () => {
        clearInterval(autoScroll);
    }, { passive: true });
  }
}

// Запускаем
startMobileSlider();