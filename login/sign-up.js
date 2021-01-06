$signupMessage = document.querySelector('#sign-up-message')

const $signUpForm = document.querySelector('#sign-up-form')

$signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const signUpFormData = new FormData(event.target)

    const firstName = signUpFormData.get('first-name')
    const lastName = signUpFormData.get('last-name')
    const username = signUpFormData.get('username')
    const email = signUpFormData.get('email')
    const password = signUpFormData.get('password')

    const newUser = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password
    }

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(response => response.json())
        .then(response => {
            const {username, password_digest} = response.user // "destructuring"
            $signupMessage.textContent = `Your username is ${username}, and your password hash is ${password_digest}`
            // location.replace("../index.html") // vanilla js redirect
        }).catch(error => {
            $signupMessage.textContent = error.message
        })

    event.target.reset();
})