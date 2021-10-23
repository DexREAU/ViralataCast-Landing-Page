let windowPosition;
const parallaxImg = document.querySelector('.desktop_intro')

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;
    parallaxImg.style.transform = "translateY( -" + windowPosition * 1.25 + "px)";
}

function success() {
    const button = document.querySelector('form button');
    const input = document.querySelector('form input');

    button.innerText = "OBRIGADO!"

    inputs.value = ""

}

const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => success()).catch((error) =>
      alert(error))
  }

document.querySelector("form").addEventListener("submit", handleSubmit);
