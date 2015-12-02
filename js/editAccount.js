/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var editAccountForm = $('#editAccountForm');
    editAccountForm.submit(function (event) {
        event.preventDefault();
        var oldPassword = editAccountForm.children('.oldPassword').val();
        var newPassword = editAccountForm.children('.newPassword').val();
        var submitPassword = editAccountForm.children('.submitPassword').val();
        var userID = getCookie('userID');
        if (!oldPassword || filterSqlStr(oldPassword)) {
            alert("原密码格式错误，请重新输入！");
            return;
        }
        if (!newPassword || filterSqlStr(newPassword)) {
            alert("新密码格式错误，请重试！");
            return;
        }
        if (!submitPassword || filterSqlStr(submitPassword)) {
            alert("确认密码格式错误，请重试！");
            return;
        }
        if (newPassword !== submitPassword) {
            alert("两次输入的密码不一致，请重新输入！");
            return;
        }
        var data = {
            userID: userID,
            oldPassword: oldPassword,
            newPassword: newPassword
        };
        jQuery.post('../php/editAccount.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("修改密码成功，请重新登陆！");
                    deleteCookie("userAuthority");
                    deleteCookie('userName');
                    deleteCookie('userID');
                    location.assign('login.html');
                } else {
                    alert("密码错误，请重试！");
                }

            } else {
                alert("修改密码失败！");
            }

        });
    });

});