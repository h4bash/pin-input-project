$(document).ready(function() {
            // Define the correct PIN (you can replace this with a server-side check)
            const correctPIN = "1966";

            // Check if the user is already logged in
            if (localStorage.getItem('loggedIn') === 'true') {
                // If logged in, show the success message
                $('#pin-form').hide();
                $('#success-message').removeClass('hidden');
            }

            // Function to handle PIN submission
            function handlePinSubmission() {
                var userPIN = $('#pin-input').val();

                if (userPIN === correctPIN) {
                    // If PIN is correct, show the success message and hide the PIN form
                    $('#pin-form').hide();
                    $('#success-message').removeClass('hidden');
                    
                    // Save the login state in localStorage
                    localStorage.setItem('loggedIn', 'true');
                } else {
                    // Show failure feedback
                    $('#pin-feedback').removeClass('hidden');
                    $('#pin-input').val(''); // Clear the input
                }
            }

            // Handle PIN submission on button click
            $('#submit-pin').on('click', function() {
                handlePinSubmission();
            });

            // Handle PIN submission on "Enter" key press
            $('#pin-input').on('keydown', function(event) {
                if (event.keyCode === 13) { // 13 is the keyCode for "Enter"
                    handlePinSubmission();
                }
            });

            // Handle Logout
            $('#logout').on('click', function() {
                // Clear the login state from localStorage
                localStorage.removeItem('loggedIn');
                
                // Reset the form and show it again
                $('#pin-input').val('');
                $('#success-message').addClass('hidden');
                $('#pin-form').show();
            });
        });
