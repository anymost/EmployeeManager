<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 13:27
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$year = $_POST['year'];
$month = $_POST['month'];

function getSelectEvaluation($year, $month)
{
    $conn = tools::connectDatabase();
    $data = array();
    $result = mysqli_query($conn, "SELECT * FROM Evaluations");
    while ($row = mysqli_fetch_array($result)) {
        $temp = explode('-', $row['Date']);
        if ($year == $temp[0] && $month == $temp[1])
            array_push($data, $row);
    }

    $data1 = array();
    $result1 = mysqli_query($conn, "SELECT * FROM EvaluationProjects");
    while ($row1 = mysqli_fetch_array($result1)) {
        array_push($data1, $row1);
    }

    $data2 = array();
    $result2 = mysqli_query($conn, "SELECT * FROM Employees");
    while ($row2 = mysqli_fetch_array($result2)) {
        array_push($data2, $row2);
    }

    for ($i = 0; $i < count($data); $i++) {
        for ($x = 0; $x < count($data1); $x++) {
            $temp1 = $data[$i]['EvaluationProjectID'];
            $temp2 = $data1[$x]['EP_ID'];
            if ($temp1 == $temp2) {
                $data[$i]['projectName'] = $data1[$x]['ProjectName'];
            }
        }
    }
    for ($i = 0; $i < count($data); $i++) {
        for ($x = 0; $x < count($data2); $x++) {
            $temp1 = $data[$i]['EmployeeID'];
            $temp2 = $data2[$x]['EmployeeID'];
            if ($temp1 == $temp2) {
                $data[$i]['employeeName'] = $data2[$x]['EmployeeName'];
            }
        }
    }
    echo json_encode($data);
}

getSelectEvaluation($year, $month);