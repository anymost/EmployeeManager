/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var selectRoleName = $('#selectRoleName');
    var selectRole = $('#selectRole');
    var roleName = selectRoleName.children('.roleName');
    selectRole.click(function () {
        jQuery.get('../php/getSelectRole.php', function (returnData, status) {
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    roleName.html("");
                    for (var i = 0; i < returnData.length; i++) {
                        roleName.append("<option value=" + returnData[i]['RoleID'] + ">" + returnData[i]['RoleName'] + "</option>");
                    }

                } else {

                }

            } else {
                alert("获取角色信息失败！");
            }

        });
    });
})