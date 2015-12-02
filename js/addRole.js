/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var addRoleForm = $('#addRoleForm');
    var submitAddRole = $('#submitAddRole');
    submitAddRole.click(function () {
        var addRoleItem = $('.addRoleItem');
        var roleName = $(addRoleItem[0]).val();
        if (!roleName || filterSqlStr(roleName)) {
            alert("角色名为空或包含非法字符，请重试！");
            return;
        }
        var roleAuthority = new Array(9);
        for (var i = 0; i < 9; i++) {
            if (addRoleItem[i + 1]['checked'] == true) {
                roleAuthority[i] = 1;
            } else {
                roleAuthority[i] = 0;
            }
        }
        var data = {
            roleName: roleName,
            roleAuthority: roleAuthority
        };

        jQuery.post("../php/addRole.php", data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("添加角色成功！");
                } else {
                    alert("添加角色失败！");
                }
            } else {
                alert("添加角色失败，请重试！");
            }

        });
    });
})