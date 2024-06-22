



/*parte que alterna entre escondr e aparecer conteudo do menu lateral da pagina "por que jodar*/
const iconeSub = document.querySelectorAll(".iconSub")
const subTexto = document.querySelectorAll(".right-container-subtext ")


iconeSub.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        const subtext = subTexto[index]
        if (subtext.style.display === "none" || subtext.style.display === "") {
            subtext.style.display = "block"
            icon.classList.remove("fi-rr-angle-small-down")
            icon.classList.add("fi-rr-angle-small-up")
        } else {
            subtext.style.display = "none"
            icon.classList.remove("fi-rr-angle-small-up")
            icon.classList.add("fi-rr-angle-small-down")
        }
    })
})


document.querySelector('.hamburger').addEventListener('click', function() {
    if (window.innerWidth <= 800) {
        document.querySelector('.button-bar-header').classList.toggle('open')
    }
})

const EmailUser = document.getElementById('EmailInput')
const NameUser = document.getElementById('userInput')
const GeneroUser = document.getElementById('generoInput')
const IdadeUser = document.getElementById('IdadeInput')
const SenhaUser = document.getElementById('SenhaInput')
const ValidSenhaUser = document.getElementById('ValidSenhaInput')
const checkout = document.getElementById('checkout')
const buttomConfirm = document.getElementById('buttomConfirm')
const URL = 'https://api-guardiao-do-itapecuru.onrender.com/auth/register'
const Game = 'https://romulo-mr.itch.io/guardiao-do-itapecuru'
const registrationForm = document.getElementById('registrationForm')

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const Email = EmailUser.value
    const Name = NameUser.value
    const Genero = GeneroUser.value
    const Idade = IdadeUser.value
    const Senha = SenhaUser.value
    const ValidSenha = ValidSenhaUser.value

    if (Senha !== ValidSenha) {
        alert('As senhas não coincidem. Tente novamente!')
        return
    }

    if (!checkout.checked) {
        alert('Você deve aceitar os termos de serviço.')
        return
    }

    const data = {
        username: Name,
        email: Email,
        gender: Genero,
        ageRange: Idade,
        password: Senha
    }

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Resposta da API:', data)
        console.log(Email, Name, Genero, Idade, Senha)

        if (data.success) {
            window.open(Game, '_blank')
            alert('Cadastro realizado com sucesso!')
        } else {
            window.open(Game, '_blank')
            alert('Cadastro realizado com sucesso!')
        }
    })
    .catch(error => {
        console.error('Erro:', error)
        alert('Erro ao realizar cadastro. Tente novamente mais tarde.')
    })
})
