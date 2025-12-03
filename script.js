document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Simple demo - check for test credentials
    if (username === 'admin' && password === 'password') {
        alert('Login successful! Welcome, ' + username);
        // Here you would normally send data to a server
    } else {
        alert('Invalid username or password');
    }
    
    // Clear form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
