const path = require('path');

// Handle GET request for /contactus route
function getContactUs(req, res) {
  res.sendFile(path.join(__dirname, '../views/contactus.html'));
}

// Handle POST request for /contactus route
function postContactUs(req, res) {
  // Handle form submission
  // Logic to process the form data and save it
  // Redirect to success page
  res.redirect('/success');
}

// Export the controller functions
module.exports = {
  getContactUs,
  postContactUs,
};
