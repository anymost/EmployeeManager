/**
 * Created by lenovo on 2015/11/9.
 */
$(function () {
    var loginForm = $('#loginForm');
    var findPassword=$('#findPassword');
    findPassword.click(function(){
       location.replace("findPassword.html");
    });
    loginForm.submit(function (event) {
        event.preventDefault();

        var ID = $('#ID').val();
        var password = $('#password').val();
        if (!ID) {
            alert('用户ID不能为空，请重新输入！');
        }
        if (!password) {
            alert('密码不能为空，请重新输入！');
        }
        if (filterSqlStr(ID) || filterSqlStr(password)) {
            $('#ID').val('');
            $('#password').val('');
            alert('您输入的信息包含非法字符，请重新输入！');
        } else {
            var data = {
                userID: ID,
                userPassword: password,
                year:getYear()
            };

            jQuery.post('../php/login.php', data, function (returnData, status) {

                if (status == "success") {
                   returnData = JSON.parse(returnData);
                   if (returnData['info'] == 'login success') {
                       setCookie('userID', data.userID);
                       setCookie('userName', returnData['userName']);
                       var employeeAuthority=setAuthority(returnData['userAuthority']);

                       //将从后台获取的数据存储到coolie中
                       setCookie('userAuthority', employeeAuthority);
                       location.replace('index.html');

                    } else if (returnData['info'] == 'password not match') {
                        $('#password').val('');
                        alert('密码不正确，请重试!');
                    } else if (returnData['info'] == 'not exist the userName') {
                        $('#ID').val('');
                        $('#password').val('');
                        alert('不存在此用户，请重试！');
                    }
                } else {
                    alert("登陆失败，请重试！");
                }
            });
        }
    });
});


