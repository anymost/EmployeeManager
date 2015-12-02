/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var deleteRoleForm = $('#deleteRoleForm');
    var submitDeleteRole = $('#submitDeleteRole');
    submitDeleteRole.click(function (event) {
        event.preventDefault();
        var check = confirm("您确认要删除该角色！");
        if (check) {
            var roleName = deleteRoleForm.children('.roleName').val();
            var data = {
                roleName: roleName
            };
            jQuery.post('../setDeleteRole.php', data, function (returnData, status) {
                if (status == 'success') {
                    if (returnData == 'success') {
                        alert("删除信息成功！");
                    } else {
                        console.log(returnData);
                    }
                }
                else {
                    alert("删除信息失败，请重试！");

                }

            });
        }
    });
})