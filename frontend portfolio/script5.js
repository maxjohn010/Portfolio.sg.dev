// Toggle between Login and Create Account forms
document.getElementById('loginTab').addEventListener('click', () => {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('createAccountForm').classList.add('hidden');
    document.getElementById('loginTab').classList.add('border-blue-600');
    document.getElementById('createAccountTab').classList.remove('border-blue-600');
});

document.getElementById('createAccountTab').addEventListener('click', () => {
    document.getElementById('createAccountForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('createAccountTab').classList.add('border-blue-600');
    document.getElementById('loginTab').classList.remove('border-blue-600');
});

// Show/Hide Auth Modal
document.querySelector('header button').addEventListener('click', () => {
    document.getElementById('authModal').classList.remove('hidden');
});

document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('authModal')) {
        document.getElementById('authModal').classList.add('hidden');
    }
});