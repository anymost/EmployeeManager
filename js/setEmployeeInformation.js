$(function () {
    var employeeInformationForm = $("#employeeInformationForm");
    employeeInformationForm.submit(function (event) {
        event.preventDefault();
        var phone = employeeInformationForm.children("#phone").val();
        var birthDay = employeeInformationForm.children("#birthDay").val();

        if (!matchPhone(phone)) {
            alert("手机格式有误,请重新输入！");
            return;
        }

        var data = {
            userID: getCookie("userID"),
            phone: phone,
            birthDay: birthDay
        }
        jQuery.post("../php/setEmployeeInformation.php", data, function (data, status) {
            if (status == 'success') {
                alert("修改个人信息成功！");
            } else {
                alert("修改个人信息失败！");
            }
        });
    });

});