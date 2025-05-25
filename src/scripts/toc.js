document.addEventListener('DOMContentLoaded', () => {
  let currentActive = null;

  const observer = new IntersectionObserver(entries => {
    const visibleEntries = entries.filter(entry => entry.isIntersecting);
    
    // Set new active state to first visible entry
    if (visibleEntries.length > 0) {
    
      // Clear previous active state
      if (currentActive) {
        const activeLink = document.querySelector(`nav li a[href="#${currentActive}"]`);
        if (activeLink) {
          activeLink.classList.remove('text-primary', 'font-medium');
        }
      }
    
      const firstVisible = visibleEntries[0];
      const id = firstVisible.target.getAttribute('id');
      const link = document.querySelector(`nav li a[href="#${id}"]`);
      if (link) {
        link.classList.add('text-primary', 'font-medium');
        currentActive = id;
      }
    }
  });

  // Track all sections that have an `id` applied
  document
    .querySelectorAll('h2[id], h3[id]')
    .forEach((section) => {
      observer.observe(section);
    });
});
