function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msg: document.getElementById("msg").value,
    };
    const serviceID = "service_xw76k29"; 
    const templateID = "template_3th2bs6"; 
    emailjs.send(serviceID, templateID, params) 
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("تم الارسال")
    }, function(error) {
        console.log('FAILED...', error);
    });
}
