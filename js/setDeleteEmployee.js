/**
 * Created by lenovo on 2015/11/17.
 */

$(function () {
    var deleteEmployeeForm = $("#deleteEmployeeForm");
    var employeeName = deleteEmployeeForm.children('.employeeName');
    deleteEmployeeForm.submit(function (event) {
        var result = confirm("您确定要删除员工信息?");
        if (result) {
            event.preventDefault();
            var userID = employeeName.val();
            var data = {
                userID: userID
            }

            jQuery.post("../php/setDeleteEmployee.php", data, function (returnData, status) {
                if (status == 'success') {
                    if (returnData == 'success') {
                        alert("修改信息成功");
                    } else {
                        console.log(returnData);

                    }

                } else {
                    alert("修改信息失败");
                }
            });
        }
    })
})