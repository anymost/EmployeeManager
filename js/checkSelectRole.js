/**
 * Created by lenovo on 2015/11/21.
 */
$(function () {
    var selectRoleName = $('#selectRoleName');
    var selectRoleInfo = $('#selectRoleInfo');
    var getAuthority = selectRoleInfo.children(".getAuthority");
    var subInformationContent = selectRoleInfo.children(".subInformationContent");
    var arrays = new Array(11);
    for (var i = 1; i < 10; i++) {
        arrays[i] = getAuthority.children(".index" + i);
    }
    selectRoleName.submit(function (event) {
        event.preventDefault();
        var roleName = selectRoleName.children('.roleName').val();
        var data = {
            roleName: roleName
        };
        jQuery.post('../php/checkSelectRole.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData && returnData != '[]') {
                    returnData = JSON.parse(returnData);
                    var authority = returnData[0];
                    var role = returnData[1];
                    for (var i = 2; i < 11; i++) {
                        if (authority[i] == 1) {
                            arrays[i - 1].text('yes');
                        } else {
                            arrays[i - 1].text('no');
                        }
                    }
                    subInformationContent.html("");
                    for (var x in role) {
                        subInformationContent.append("<div class='row-fluid'>" +
                            "<div class='span2 barColor handleRoleID'>" + role[x]['EmployeeID']
                            + "</div><div class='span2 barColor'>" + role[x]['EmployeeName']
                            + "</div><div class='span3 barColor'>" + IDTransferName('department', role[x]['DepartmentID'])
                            + "</div><div class='span2 barColor'>" + role[x]['Title']
                            + "</div></div>")
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