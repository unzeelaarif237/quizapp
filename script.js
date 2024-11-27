document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
var name = document.getElementById('name').value;
var rollno = document.getElementById('rollno').value;
var email = document.getElementById('email').value;
var contact = document.getElementById('contact').value;
var timing = document.getElementById('timing').value;
var trainer = document.getElementById('trainer').value;

    // Use string concatenation instead of template literals
    window.location.href = 'nextpage.html?name=' + encodeURIComponent(name) + 
                           '&rollno=' + encodeURIComponent(rollno) + 
                           '&email=' + encodeURIComponent(email) + 
                           '&contact=' + encodeURIComponent(contact) + 
                           '&timing=' + encodeURIComponent(timing) + 
                           '&trainer=' + encodeURIComponent(trainer);
});


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Here you can add your form submission logic (e.g., using fetch or XMLHttpRequest)
    // For demonstration, we'll simulate a successful submission with a timeout

    setTimeout(function() {
        // Simulate successful submission
        document.getElementById('myForm').style.display = 'none'; // Hide the form
        document.getElementById('successMessage').style.display = 'block'; // Show success message
    }, 1000); // Simulate a delay for the form submission
});