function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$('#submit-button').click(function() {
    var errorMessage = '';   //variable for error message
    var fieldsMissing = '';  //variable for field missing
    var successMessage = 'You have been successfully signed up!'; //variable for successful sign up message

/*----check field missing in any of the input----*/
    if ($('#email').val() == '') {
        fieldsMissing += 'Email';
    }
    if ($('#phone').val() == '') {
        fieldsMissing += '<br />Telephone';
    }
    if ($('#password').val() == '') {
        fieldsMissing += '<br />Password';
    }
    if ($('#confirm-password').val() == '') {
        fieldsMissing += '<br />Confirm Password';
    }
/*----function to convey message tht field(s) is missing----*/
    if (fieldsMissing !== '') {
        $('#fieldMissing').html('The following filed(s) are missing:<br />'+ fieldsMissing);
        event.preventDefault();
    }

/*----check validity of input, i.e. email address entered correctly, phone number is numerical, etc.----*/
    if (isEmail($('#email').val()) == false) {
        errorMessage += '<p>Your email address is incorrect</p>';
    }
    if ($.isNumeric($('#phone').val()) == false) {
        errorMessage += '<p>Your phone number is invalid</p>';
    }
    if ($('#password').val() !== $('#confirm-password').val()) {
        errorMessage += '<p>Your password do not match</p>';
    }

    /*----display error message when there is an error in form----*/
    if (errorMessage !== '') {
        $('#errorMessage').html(errorMessage);
        event.preventDefault();
    }
    else {
        $('#successMessage').html(successMessage);
        $('#errorMessage').hide();
        $('#fieldMissing').hide();
        event.preventDefault();
    }
});