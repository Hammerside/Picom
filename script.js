function checkFields() {
    let email = $('#email').val();
    let password = $('#password').val();


    if (email.length != 0 && password.length != 0) {
        $('#btn').removeAttr('disabled');
    } else {
        $('#btn').attr('disabled', 'disabled');
    }
}