/**
 * Created by lenovo on 2015/11/20.
 */
$(function () {
    var addAttendanceForm = $('#addAttendanceForm');
    addAttendanceForm.submit(function (event) {
        event.preventDefault();
        var userID = addAttendanceForm.children('.employeeName').val();
        var date = addAttendanceForm.children('.date').val();
        var status = addAttendanceForm.children('.status').val();
        if (!date) {
            alert("日期不能为空，请重新输入！");
            return;
        }
        var data = {
            userID: userID,
            date: date,
            status: status
        }
        jQuery.post('../php/setAddAttendance.php', data, function (returnData, status) {
            if (status == 'success') {
                if (returnData == 'success') {
                    alert("添加考勤成功！");
                }
                else {
                    alert("添加重复的考勤信息，请重新添加！");
                }
            } else {
                alert("添加信息失败，请重试！");

            }
        });
    });
})