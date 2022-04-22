function sendMail(contactform) {
    emailjs.send("service_ha28bpn", "template_kn5f88l", {
        "from_name": contactform.name.value,
        "from_email": contactform.email.value,
        "project_request": contactform.projectsummary.value
    }).then(
        function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, 
        function (error) {
            console.log('FAILED...', error);
        });
    return false;
}