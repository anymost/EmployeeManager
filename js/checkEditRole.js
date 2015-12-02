/**
 * Created by lenovo on 2015/11/22.
 */
/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var submitEditRole=$('#submitEditRole');
    var editRoleContent=$('#editRoleContent');
    var roleName=editRoleContent.children(".roleName");
    var editRoleForm=$('#editRoleForm');


    submitEditRole.click(function (event) {
        event.preventDefault();
        var editRoleItem=$('.editRoleItem');

        for(var i=0;i<10;i++){
            editRoleItem[i]=$(editRoleItem[i]);
        }
        var data = {
            roleName: roleName.val()
        };

        jQuery.post('../php/checkSelectRole.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    var authority = returnData[0];
                    editRoleItem[0].val(authority[1]);
                    for (var i = 2; i < 11; i++) {
                       if (authority[i] == "1") {
                            editRoleItem[i-1].val('yes');
                        } else {
                            editRoleItem[i-1].val('no');
                        }
                    }



                } else {
                    alert("未获取到相关信息！");
                }

            } else {
                alert("获取信息失败！");
            }


        });
    });

});