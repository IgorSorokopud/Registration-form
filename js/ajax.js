
var AjaxSend = {
    send: function (url, formData) {
        $.ajax({
        type: "GET",
        url: url,
        data: formData.serialize(),
        success: function (response) {
            var returnedData = JSON.parse(response);
            if (returnedData.status == 1) {
                alert('Customer was created');
            } else {
                var errors = returnedData.errors;
                jQuery.each(errors, function (key, value) {
                    alert(value);
                    alert(key);
                })
            }
        },
        error: function () {
            alert('Sorry');
        }
    })
    }
}
