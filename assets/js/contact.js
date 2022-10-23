/** Script used from https://www.emailjs.com/docs/tutorial/overview/ */

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        (function () {
            emailjs.init('gYXtPTZK-RGOqYwNl');
        })();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
                alert('Message sent')
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function resetForm() {
    document.getElementById('contact-form').reset();

}