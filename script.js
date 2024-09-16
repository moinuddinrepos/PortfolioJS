const sidemenu = document.querySelector('#sideMenu')
const navbar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu() {
    sidemenu.style.transform = 'translateX(-16rem)'
}
function closeMenu() {
    sidemenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', () => {
    if(scrollY > 50){
        navbar.classList.add('bg-[#b4e4e5]', 'background-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20') 
        navLinks.classList.remove('bg-[#b4e4e5]','shadow-sm', 'dark:border', 'dark:border-white/70','dark:bg-[#b4e4e5]')   
    } else {
        navbar.classList.remove('bg-[#b4e4e5]', 'background-blur-lg', 'shadow-sm')    
        navLinks.classList.add('bg-[#b4e4e5]','shadow-sm')   
    }
})

// light mode and dark mode

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark'
    }else{
        localStorage.theme = 'light'
    }
  }


//   visitor counter


var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbz-u0JjgqJj3gk5sj0M9o8My8YhuA-DlqLfsSm00k0C601cXS-KWbmu40GpYrVfKSfaTw/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

