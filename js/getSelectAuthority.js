/**
 * Created by lenovo on 2015/11/18.
 */
$(function () {
    var selectAuthorityForm = $('#selectAuthorityForm');
    var selectAuthorityContent = $('#selectAuthorityContent');
    var employeeAuthority = selectAuthorityContent.children(".employeeAuthority");
    var roleAuthority = selectAuthorityContent.children(".roleAuthority");
    selectAuthorityForm.submit(function (event) {
        event.preventDefault();
        var authority = selectAuthorityForm.children(".authority").val();
        var data = {
            authority: authority
        };
        setCookie('presentAuthority',authority);
        jQuery.post("../php/getSelectAuthority.php", data, function (returnData, status) {
            if (status == 'success') {
                returnData = JSON.parse(returnData);
                var allInfo = [];
                var subInfo = {};
                var employees=returnData[returnData.length-1];
                for (var i = 0; i < employees.length; i++) {
                    for (var x in employees[i]) {
                        if (x == 'EmployeeID')
                            subInfo['EmployeeID'] = employees[i][x];
                        if (x == 'EmployeeName')
                            subInfo['EmployeeName'] = employees[i][x];
                        if (x == 'DepartmentID')
                            subInfo['DepartmentID'] = IDTransferName('department', employees[i][x]);
                        if (x == 'Title')
                            subInfo['Title'] = employees[i][x];
                    }
                    allInfo.push(subInfo);
                    subInfo = {};
                }
                employeeAuthority.empty();
                for (var z = 0; z < allInfo.length; z++) {
                    employeeAuthority.append("<div class='row-fluid'><div class='span2 barColor'>" + allInfo[z]['EmployeeID']
                        + "</div><div class='span2 barColor'>" + allInfo[z]['EmployeeName'] +
                        "</div><div class='span3 barColor'>" + allInfo[z]['DepartmentID'] +
                        "</div><div class='span2 barColor'>" + allInfo[z]['Title'] +
                        "</div></div>");
                }
                roleAuthority.empty();
                for (var i=0;i<returnData.length-1;i++) {

                    roleAuthority.append("<div class='row-fluid'><div class='span6 barColor'>" + returnData[i]['roleName'] + "</div>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' class='handleAuthority btn btn-info span6' value='删除权限' text="+returnData[i]['roleID']+"></div>");

            }
            } else {
                alert("获取权限信息！");
            }
        });
    });

});