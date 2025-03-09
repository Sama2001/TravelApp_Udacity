console.log('Script loaded!'); // tetsing

import { handleFormSubmit } from './app.js';  //  import path

// Add event listener to the form
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('travel-form').addEventListener('submit', handleFormSubmit);
});
