var Validator = {
    errors: [],
    validate: function (formId) {
        var $inputs = $(formId + ' :input');
        var self = this;
        this.validateEmail()
        $inputs.each(function () {
            var ValidateClass;
            if (ValidateClass = ($(this).attr("class").match(/(validate-.*?)(?:\s+|$)/))) {
                var validateFunctionName = self.getFunctionName(ValidateClass[1]);
                if (typeof self[validateFunctionName] == 'function') {
                    if (!self[validateFunctionName]($(this).val())) {
                        self.errors.push($(this).attr('name'));
                    }
                }

            }
        });
    },

    validateEmail: function (value) {
        var regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regEmail.test(value);
    },

    validatePhone: function (value) {
        var regNumber = /^\+380[0-9]*$/;
        return regNumber.test(value);
    },
    validateName: function (value) {
        var regName = /^[a-zA-Z]+$/;
        return regName.test(value);
    },

    getFunctionName: function (className) {
        var prefix = 'validate';
        var classParts = className.split('-');
        var suffix = classParts[classParts.length - 1];
        suffix = suffix.substr(0, 1).toUpperCase() + suffix.substr(1);

        return prefix + suffix;
    }
}




