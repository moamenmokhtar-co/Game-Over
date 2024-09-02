// ? =============> Global ===============>
const inputs = document.querySelectorAll('input')
const form = document.forms[0];
const container = document.querySelector('.login .container');
const errorMsg = document.getElementById('errorMsg')




// ! =============> When Start ===============>

// * =============> Events ===============>
document.getElementById('registerLink').addEventListener('click', function () {
    location.href = './register.html'
})



form.addEventListener('submit', function (e) {
    e.preventDefault()


    if (inputs[0].value == '' || inputs[1].value == '') {
        errorMsg.innerHTML = 'All Inputs Required '
    }

    else {
        errorMsg.innerHTML = ' ';
        setForm()
    }




})




inputs[0].addEventListener('focus', function () {
    container.style.setProperty('--before-position', 'calc(66% - 2px');
    container.style.setProperty('--before-login-bottom', '98%');
    container.style.setProperty('--after-content', '');

})


inputs[0].addEventListener('blur', function () {
    container.style.setProperty('--before-position', '33%');
    container.style.setProperty('--before-login-bottom', '94%');
    container.style.setProperty('--after-content', '');
})

inputs[1].addEventListener('focus', function () {
    container.style.setProperty('--before-position', '100%');
    container.style.setProperty('--before-login-bottom', '98%');

    container.style.setProperty('--after-content', 'none');
})

inputs[1].addEventListener('blur', function () {
    container.style.setProperty('--before-position', '33%');
    container.style.setProperty('--before-login-bottom', '94%');

    container.style.setProperty('--after-content', '');
})









// ! =============> Functions ===============>

function setForm() {
    let user = {
        email: inputs[0].value,
        password: inputs[1].value
    }

    loginUser(user)


}





async function loginUser(user) {
    const api = await fetch('https://movies-api.routemisr.com/signin', {
        method: 'POST', body: JSON.stringify(user), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const response = await api.json()


    if (response.message == "success") {
        localStorage.setItem('userToken' , response.token)
        location.href = './home.html'
    }

    else {
        errorMsg.innerHTML = response.message;

    }


    console.log(response);
}



//  =============> Validation ===============>

