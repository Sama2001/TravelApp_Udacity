console.log('Script loaded!'); // Add this line at the top of index.js

import { handleFormSubmit } from './app.js';  // Correct import path

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('travel-form').addEventListener('submit', handleFormSubmit);
});