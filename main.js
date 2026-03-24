// Add any necessary interactive logic here
console.log('Silence Timer Landing Page loaded.');

document.addEventListener('DOMContentLoaded', () => {
  const iosBtn = document.getElementById('ios-cta');
  const iosForm = document.getElementById('ios-form');
  const inputGroup = iosForm?.querySelector('.input-group');
  const formSuccess = document.getElementById('form-success');

  if (iosBtn && iosForm) {
    iosBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Hide the button and show the form
      iosBtn.classList.add('hidden');
      iosForm.classList.remove('hidden');
    });
    
    iosForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('ios-email').value;
      const submitBtn = iosForm.querySelector('.submit-btn');
      
      if (email) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
          const response = await fetch('https://formspree.io/f/mjganeye', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
          });
          
          if (response.ok) {
            // Show success state
            inputGroup.classList.add('hidden');
            iosForm.querySelector('.form-text').classList.add('hidden');
            formSuccess.classList.remove('hidden');
          } else {
            submitBtn.textContent = 'Error';
            submitBtn.disabled = false;
          }
        } catch (error) {
          submitBtn.textContent = 'Network Error';
          submitBtn.disabled = false;
        }
      }
    });
  }

  // App Screenshot Carousel Logic
  const carouselImgs = document.querySelectorAll('#mockup-carousel .app-screenshot');
  if (carouselImgs.length > 1) {
    let currentIdx = 0;
    setInterval(() => {
      carouselImgs[currentIdx].classList.remove('active');
      currentIdx = (currentIdx + 1) % carouselImgs.length;
      carouselImgs[currentIdx].classList.add('active');
    }, 4000); // Change image every 4 seconds
  }
});
