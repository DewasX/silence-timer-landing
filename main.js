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
    
    iosForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('ios-email').value;
      if (email) {
        // Here you would typically send the email to your backend/Supabase/Mailchimp
        console.log('Email captured for iOS waitlist:', email);
        
        // Show success state
        inputGroup.classList.add('hidden');
        iosForm.querySelector('.form-text').classList.add('hidden');
        formSuccess.classList.remove('hidden');
      }
    });
  }
});
