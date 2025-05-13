document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('revealLogBtn');
  const logEntry = document.getElementById('projectLog');
  const modeToggleBtn = document.getElementById('modeToggle');
  const body = document.body;

  const savedMode = localStorage.getItem('theme');
  if (savedMode) {
      body.classList.add(savedMode);
      if (savedMode === 'light-mode') {
          modeToggleBtn.textContent = 'Dark Mode';
      } else {
           modeToggleBtn.textContent = 'Light Mode';
      }
  } else {
       body.classList.remove('light-mode');
       modeToggleBtn.textContent = 'Dark Mode';
  }

  revealBtn.addEventListener('click', () => {
      logEntry.classList.toggle('hidden');
      if (logEntry.classList.contains('hidden')) {
          revealBtn.textContent = 'Reveal Log Entry';
      } else {
          revealLogBtn.textContent = 'Hide Log Entry';
      }
  });

  modeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');

      if (body.classList.contains('light-mode')) {
          localStorage.setItem('theme', 'light-mode');
           modeToggleBtn.textContent = 'Dark Mode';
      } else {
          localStorage.setItem('theme', 'dark-mode');
           modeToggleBtn.textContent = 'Light Mode';
      }
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      alert('Message Sent! (Well, almost! This form requires a backend to actually send which I did not implement)');
      this.reset();
  });


  
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target); 
          }
      });
  }, {
      threshold: 0.1 
  });

  elementsToAnimate.forEach(element => {
      observer.observe(element);
  });
});