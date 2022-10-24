/** 
 * Script used from https://www.emailjs.com/docs/tutorial/overview/
 * Sends the contact form to my email address
 */

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        (function () {
            emailjs.init('gYXtPTZK-RGOqYwNl');
        })();
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
                alert('Message sent');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};

/** function to reset the contact form on the contact page */

function resetForm() {
    document.getElementById('contact-form').reset();
}