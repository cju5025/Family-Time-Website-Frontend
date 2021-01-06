
const $signInForm = document.querySelector('#sign-in-form')

$signInForm.addEventListener('submit', signIn)

function signIn (event) {
    event.preventDefault();

    const signInFormData = new FormData(event.target)

    const email = signInFormData.get('email')
    const password = signInFormData.get('password')

    const user = {
        email: email,
        password: password
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) throw new Error("Incorrect email or password")
            return response.json()
        })
        .then(response => {
            localStorage.setItem("token", response.token)
            location.replace("../index.html")
        }).catch(error => {
            alert(error.message)
        })

    event.target.reset();
}