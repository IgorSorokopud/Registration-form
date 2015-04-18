var Register = {
    registerCustomer: function (idForm) {
        Validator.validate(idForm);
        var idFormInputs = idForm + " input";
        $(idFormInputs).removeClass('formInputError');
        if (Validator.errors.length) {
            var nameErrors = Validator.errors;
            for (var i = 0; i < nameErrors.length; ++i) {
                $('input[name=' + nameErrors[i] + ']').addClass('formInputError');
            }
            Validator.errors = [];
        } else {
            $(idFormInputs).removeClass('formInputError');
            var url = $(idForm).attr('action');
            AjaxSend.send(url, $(idForm));
        }
    }
}

//effect-form
$('.button').hover(function () {
    $(this).animate({
            'width': '280px',
            'height': '60px'
        }
        , 300)
}, function () {
    $(this).animate({
        'width': '225px',
        'height': '50px'
    }, 300)
});









