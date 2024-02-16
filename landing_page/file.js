
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault(); 

    const target = document.querySelector(anchor.getAttribute('href'));

    if (target) { 
      target.scrollIntoView({
        behavior: 'smooth',
      });
      console.log(anchor.getAttribute('href'));
    } else {
      console.warn(`Target element not found for href: ${anchor.getAttribute('href')}`);
    }
  });
});
