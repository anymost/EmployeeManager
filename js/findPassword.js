/**
 * Created by lenovo on 2015/11/26.
 */
$(function(){
    var submitSubmit=$('#submitSubmit');
    var submitContent=$('.submitContent');
    var modifyContent=$('.modifyContent');
    var submitModify=$('#submitModify');
    var employeeID=0;
    submitSubmit.click(function(){
        employeeID=$('#employeeID').val();
        var phone=$('#phone').val();
        if(!employeeID||filterSqlStr(employeeID)){
            alert("用户ID为空或包含非法字符，请重新输入！");
            return;
        }
        if(!phone||filterSqlStr(phone)){
            alert("手机号为空或包含非法字符，请重试！");
            return;
        }
        var data={
            employeeID:employeeID,
            phone:phone
        }
        jQuery.post('../php/findPassword.php',data,function(returnData,status){
           if(status=="success"){
               if (returnData== 'best match') {
                submitContent.css('display','none');
                modifyContent.css('display','block');
               } else if (returnData == 'phone not match') {
                   alert("手机号不匹配，请重试！");
               } else if (returnData == 'not exist the employeeID') {
                   alert("用户ID不存在，请重试！");
               }
           } else{
               alert("重置密码出现问题，请重试！");
           }
        });
    });
    submitModify.click(function(){
       var newPassword=$('#newPassword').val();
        var submitPassword=$('#submitPassword').val();
        if(!newPassword||filterSqlStr(newPassword)){
            alert("新密码为空或包含非法字符，请重新输入！");
            return;
        }
        if(!submitPassword||filterSqlStr(submitPassword)){
            alert("确认密码为空或包含非法字符，请重新输入！");
            return;
        }
        if(newPassword!==submitPassword){
            alert("两次输入的密码不匹配，请重新输入！");
            return;
        }
        var data={
            employeeID:employeeID,
            newPassword:newPassword,
        };
        jQuery.post('../php/resetPassword.php',data,function(returnData,status){
           if(status=='success'){
               if(returnData=='success'){
                   alert("修改密码成功，返回登录界面！");
                   location.assign('login.html');
               }else{
                   alert("修改密码时出现错误，请重试！");
               }
           }else{
               alert("重置密码时出现错误，请重试！");
           }

        });
    });
});