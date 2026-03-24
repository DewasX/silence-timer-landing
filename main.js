// Add any necessary interactive logic here
console.log('Silence Timer Landing Page loaded.');

// Optional placeholder for when users click Disabled iOS button
document.addEventListener('DOMContentLoaded', () => {
  const iosBtn = document.querySelector('.ios-btn');
  if (iosBtn) {
    iosBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Visual feedback that it's disabled
      iosBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        iosBtn.style.transform = 'scale(1)';
      }, 150);
    });
  }
});
