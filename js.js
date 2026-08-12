// const slider = document.querySelector('.slider');

// setInterval(() => {
//   // Если дошли до конца — возвращаемся в начало, иначе листаем вправо
//   if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
//     slider.scrollTo({ left: 0, behavior: 'smooth' });
//   } else {
//     slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
//   }

// }, 3000);
const body = document.querySelector(".body")
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
// =========================================================================
const masivs = [ 
  {link:"index-de.html",img:"imgflag/DE.webp"},
  {link:"index.html",img:"imgflag/RUS.png"},
  {link:"index-en.html",img:"imgflag/EU.png"}
]



document.addEventListener("DOMContentLoaded", () => {
  let langSelector = document.getElementById("toggle-lang-icon");
  let flags = document.getElementById("flags");
 
  function toggle() {
    if (flags.style.height === "0px") {
      flags.style.height = "130px";
      for (let i = 1; i < 4; i++) {
        // document.getElementById(`flag${i}`).style.height = "30px";
        // document.getElementById(`flag${i}`).style.width = "35px";
       
      }
    } else {
      flags.style.height = "0px";
      for (let i = 1; i < 4; i++) {
        // document.getElementById(`flag${i}`).style.height = "0px";
        
      }
    }
  }
  langSelector.addEventListener("click", toggle);


  
masivs.forEach(masiv => { 
     
        const linkk = document.createElement('a')
        linkk.setAttribute("href",masiv.link)
        const imgg = document.createElement('img')
        // imgg.src=masiv.img;
        // imgg.style.margin="10px"
        imgg.setAttribute("src",masiv.img)
        imgg.setAttribute("class","flag")
        imgg.setAttribute("height","26px")


        linkk.appendChild(imgg);
        flags.appendChild(linkk)

      });
    
      
})

  
  //   for (let i = 1; i < 4; i++) {
  //   let flink = document.createElement("a");
  //   let flag = document.createElement("img"); 
  //   flag.setAttribute("class", "flag");
  //   flag.setAttribute("id", `flag${i}`);
  //   flag.setAttribute("src", masiv[`${i}`]);   
  //   flink.setAttribute("href", "#"); 
  //   flink.appendChild(flag);
  //   flags.appendChild(flink);
  // }

// }
//================================
const display = window.getComputedStyle(fon).display;


if (display ==='display'){
  document.body.style.overflowY = 'none';

}