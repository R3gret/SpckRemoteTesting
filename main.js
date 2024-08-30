document.addEventListener('DOMContentLoaded', function() {
  // Display a welcome message
  const profileName = document.querySelector('.profile-details h1').textContent;
  alert(`Welcome to ${profileName}'s Profile Page!`);

  // Toggle bio visibility
  const bioSection = document.querySelector('.profile-bio');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Toggle Bio';
  toggleButton.style.display = 'block';
  toggleButton.style.margin = '20px auto';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.fontSize = '1.1em';
  toggleButton.style.cursor = 'pointer';

  document.querySelector('.profile-container').appendChild(toggleButton);

  toggleButton.addEventListener('click', function() {
    if (bioSection.style.display === 'none' || bioSection.style.display === '') {
      bioSection.style.display = 'block';
      toggleButton.textContent = 'Hide Bio';
    } else {
      bioSection.style.display = 'none';
      toggleButton.textContent = 'Show Bio';
    }
  });
});
