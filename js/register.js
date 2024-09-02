// ? =============> Global ===============>
const inputs = document.querySelectorAll('input')
const form = document.forms[0];
const container = document.getElementById('container');

// console.log(inputs[0]);

// ! =============> When Start ===============>

inputs[0].addEventListener('input', function () {
    validation(this)
})
inputs[1].addEventListener('input', function () {
    validation(this)
})
inputs[2].addEventListener('input', function () {
    validation(this)
})
inputs[3].addEventListener('input', function () {
    validation(this)
})
inputs[4].addEventListener('input', function () {
    validation(this)
})

// * =============> Events ===============>
document.getElementById('loginLink').addEventListener('click', function () {
    location.href = './index.html'
})


form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (validation(inputs[0]) && validation(inputs[1]) && validation(inputs[2]) && validation(inputs[3]) && validation(inputs[4])) {



        setForm()
    }

    else {
        validMsg(inputs[0], fNameMsg)
        validMsg(inputs[1], lNameMsg)
        validMsg(inputs[2], emailMsg)
        validMsg(inputs[3], passwordMsg)
        validMsg(inputs[4], ageMsg)
    }



})


for (let i = 0; i < 3; i++) {
    inputs[i].addEventListener('focus', function () {
        const container = document.querySelector('.register .container');
        container.style.setProperty('--before-position', 'calc(66% - 2px');
        container.style.setProperty('--before-bottom', '98%');
        container.style.setProperty('--after-content', '');

    })
}
for (let i = 0; i < 3; i++) {
    inputs[i].addEventListener('blur', function () {
        const container = document.querySelector('.register .container');
        container.style.setProperty('--before-position', '33%');
        container.style.setProperty('--before-bottom', '94%');
        container.style.setProperty('--after-content', '');
    })
}

inputs[3].addEventListener('focus', function () {
    const container = document.querySelector('.register .container');
    container.style.setProperty('--before-position', '100%');
    container.style.setProperty('--before-bottom', '98%');

    container.style.setProperty('--after-content', 'none');
})

inputs[3].addEventListener('blur', function () {
    const container = document.querySelector('.register .container');
    container.style.setProperty('--before-position', '33%');
    container.style.setProperty('--before-bottom', '94%');

    container.style.setProperty('--after-content', '');
})



inputs[4].addEventListener('focus', function () {
    const container = document.querySelector('.register .container');
    container.style.setProperty('--before-position', 'calc(66% - 2px');
    container.style.setProperty('--before-bottom', '98%');
    container.style.setProperty('--after-content', '');

})


inputs[4].addEventListener('blur', function () {
    const container = document.querySelector('.register .container');
    container.style.setProperty('--before-position', '33%');
    container.style.setProperty('--before-bottom', '94%');
    container.style.setProperty('--after-content', '');
})








// ! =============> Functions ===============>
function setForm() {
    let user = {
        first_name: inputs[0].value,
        last_name: inputs[1].value,
        email: inputs[2].value,
        password: inputs[3].value,
        age: inputs[4].value
    }

    registerUser(user)


}





async function registerUser(user) {
    const api = await fetch('https://movies-api.routemisr.com/signup', {
        method: 'POST', body: JSON.stringify(user), headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    const response = await api.json()

    if(response.message == 'success'){
        document.getElementById('successMsg').innerHTML = response.message;
        clearForm(inputs)
    }

}





//  =============> Validation ===============>
// function validationName(nameInput) {

//     const regex = /^[a-zA-Z]{3,}([a-zA-Z\s'-]*[a-zA-Z])?$/;


//     if (regex.test(nameInput.value)) {
//         nameInput.classList.add('is-valid');
//         nameInput.classList.remove('is-invalid');

//         return true;
//     }
//     else {
//         nameInput.classList.remove('is-valid');
//         nameInput.classList.add('is-invalid');
//         return false;
//     }
// }

// function validationEmail() {

//     const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     if (regex.test(inputs[2].value)) {
//         inputs[2].classList.add('is-valid');
//         inputs[2].classList.remove('is-invalid');
//         return true;
//     }
//     else {
//         inputs[2].classList.remove('is-valid');
//         inputs[2].classList.add('is-invalid');
//         return false;
//     }
// }

// function validationPassword() {

//     const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//     if (regex.test(inputs[3].value)) {
//         inputs[3].classList.add('is-valid');
//         inputs[3].classList.remove('is-invalid');
//         return true;
//     }
//     else {
//         inputs[3].classList.remove('is-valid');
//         inputs[3].classList.add('is-invalid');
//         return false;
//     }
// }

// function validationAge() {

//     const regex = /^[1-7][0-9]$/;

//     if (regex.test(inputs[4].value)) {
//         inputs[4].classList.add('is-valid');
//         inputs[4].classList.remove('is-invalid');
//         return true;
//     }
//     else {
//         inputs[4].classList.remove('is-valid');
//         inputs[4].classList.add('is-invalid');
//         return false;
//     }
// }



function validation(input) {
    const regex = {
        fNameInput: /^[a-zA-Z]{3,}([a-zA-Z\s'-]*[a-zA-Z])?$/,
        lNameInput: /^[a-zA-Z]{3,}([a-zA-Z\s'-]*[a-zA-Z])?$/,
        emailInput: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        passwordInput: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        ageInput: /^[1-7][0-9]$/
    }
    if (regex[input.id].test(input.value)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        return true;
    }
    else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
    }
}

function validMsg(input, msgId) {

    const msgs = {
        fNameInput: 'Enter Valid Name : min 3 digit',
        lNameInput: 'Enter Valid Name : min 3 digit',
        emailInput: 'Enter Valid Email',
        passwordInput: 'Enter Valid Password : least 8 character , 1 upper , 1 lower character ',
        ageInput: 'Enter Valid age : 10 - 79',
    }
    msgId.innerHTML = msgs[input.id];
}






function clearForm(inputs){
    for(let i = 0 ; i<inputs.length ; i++){
        inputs[i].value = '';
        inputs[i].classList.remove('is-valid')
    }
}