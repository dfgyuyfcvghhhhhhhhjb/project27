document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        document.getElementById(`modal-${modalId}`).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const modalId = this.dataset.modal;
        document.getElementById(`modal-${modalId}`).style.display = 'flex';
    });
});

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

   
    console.log('Отправленные данные формы:', formData);

  
    document.getElementById('confirmation').innerText = 'Ваше сообщение было отправлено успешно!';
    document.getElementById('confirmation').style.display = 'block';

 
    document.getElementById('contact-form').reset();

   
    setTimeout(() => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }, 2000);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
