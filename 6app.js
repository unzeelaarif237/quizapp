document.getElementById('congratulationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the name from the input field
    const name = document.getElementById('name').value;

    // Display the thank you message
    document.getElementById('userName').textContent = name;
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionally, you can clear the form after submission
    this.reset();
});