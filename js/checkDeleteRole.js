/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var deleteRoleForm = $('#deleteRoleForm');
    var deleteRoleContent = $('#deleteRoleContent');
    var getAuthority = deleteRoleContent.children(".getAuthority");
    var arrays = new Array(11);
    for (var i = 1; i < 10; i++) {
        arrays[i] = getAuthority.children(".index" + i);
    }
    deleteRoleForm.submit(function (event) {
        event.preventDefault();
        var roleName = deleteRoleForm.children('.roleName').val();
        var data = {
            roleName: roleName
        };
        jQuery.post('../php/checkSelectRole.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    var authority = returnData[0];
                    for (var i = 2; i < 11; i++) {
                        if (authority[i] == 1) {
                            arrays[i - 1].text('yes');
                        } else {
                            arrays[i - 1].text('no');
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