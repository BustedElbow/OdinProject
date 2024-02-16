
// document.querySelectorAll('a[href^="#"]').forEach( anchor => {
//   anchor.addEventListener('click', event => {
//     event.preventDefault();

//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault(); // Prevent default jump to section

    const target = document.querySelector(anchor.getAttribute('href'));

    if (target) { // Handle potential non-existent target
      target.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        // Optional customization:
        block: 'start', // Align top of target to top of viewport
        inline: 'nearest' // Center target horizontally
      });
    } else {
      console.warn(`Target element not found for href: ${anchor.getAttribute('href')}`);
    }
  });
});
