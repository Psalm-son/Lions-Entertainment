// Get modal elements
const modal = document.getElementById('booking-modal');
const closeModal = document.getElementById('close-modal');
const bookBtn = document.querySelector('.book-btn');

// Open modal when "Book Session Now" is clicked
bookBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.getElementById('signin-form').style.display = 'block';  
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('booking-form').style.display = 'none';
});

// Close modal when "X" is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Switch to Sign-Up Form
function switchToSignup() {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Switch to Sign-In Form
function switchToSignin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
}

// Switch to Booking Form after successful sign-in
function switchToBooking() {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('booking-form').style.display = 'block';
}

// Validate Sign-In Form
function validateSignin() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    // For demo purposes, assume any email/password is valid
    if (email && password) {
        switchToBooking();
        return false; // Prevent form submission
    } else {
        alert("Please fill in both fields.");
        return false;
    }
}

// Validate Sign-Up Form
function validateSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    if (name && email && password) {
        alert("Account created successfully! You can now sign in.");
        switchToSignin(); // Automatically switch to sign-in form after sign-up
        return false; // Prevent form submission
    } else {
        alert("Please fill in all fields.");
        return false;
    }
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Booking Session Logic (for simplicity, just alert)
document.getElementById('booking').addEventListener('submit', (e) => {
    e.preventDefault();
    const timeSlot = document.getElementById('session-time').value;
    alert("Session booked for " + timeSlot);
    modal.style.display = 'none'; // Close modal after booking
});
