<?php

/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/14
 * Time: 21:02
 */
class tools
{
    public static $EmployeeID = 53130309;
    public static $TrainingID = 5;
    public static $RewardID = 7;

    public static function connectDatabase()
    {
        $conn = mysqli_connect('localhost', 'root', '');

        if (!$conn) {
            die("不能连接数据库" . mysqli_error());
        }
        mysqli_query($conn, "set names 'utf8'");
        mysqli_select_db($conn, "EmployeeManage");
        return $conn;
    }


    public static function getUserName($userID)
    {
        $conn = tools::connectDatabase();
        $result = mysqli_query($conn, "SELECT EmployeeName from Employees WHERE EmployeeID='$userID'");
        $row = mysqli_fetch_array($result);
        return $row['EmployeeName'];

    }


    public static function getUserAuthority($userID)
    {
        $conn = tools::connectDatabase();
        $authorityID = array();
        $authority = array();
        $result = mysqli_query($conn, "SELECT RoleID from UserRole WHERE EmployeeID='$userID'");
        while ($row = mysqli_fetch_array($result)) {
            array_push($authorityID, $row['RoleID']);
        }
        for ($i = 0; $i < count($authorityID); $i++) {
            $ID = $authorityID[$i];
            $result = mysqli_query($conn, "SELECT * FROM Roles WHERE RoleID='$ID'");
            $row = mysqli_fetch_array($result);
            array_push($authority, $row);
        }
        return $authority;
    }


    public static function getMaxEmployeeID()
    {
        $conn = tools::connectDatabase();
        $id = 0;
        $result = mysqli_query($conn, "SELECT MAX(EmployeeID) FROM Employees");
        while ($row = mysqli_fetch_array($result)) {
            $id = $row['MAX(EmployeeID)'];
        }
        return intval($id);

    }

    public static function getMaxEvaluationID()
    {
        $conn = tools::connectDatabase();
        $result = mysqli_query($conn, "SELECT MAX(EvaluationID) FROM Evaluations");
        $row = mysqli_fetch_array($result);
        return $row['MAX(EvaluationID)'];
    }

    public static function  getMaxRPID()
    {
        $conn = tools::connectDatabase();
        $result = mysqli_query($conn, "SELECT MAX(RP_ID) FROM RewardsAndPunishments");
        $row = mysqli_fetch_array($result);
        return $row['MAX(RP_ID)'];
    }

    public static function getMaxRoleID()
    {
        $conn = tools::connectDatabase();
        $result = mysqli_query($conn, "SELECT MAX(RoleID) FROM Roles");
        $row = mysqli_fetch_array($result);
        return $row['MAX(RoleID)'];
    }

    public static function addSalary($employeeID, $newYear)
    {
        $conn = tools::connectDatabase();

        $result = mysqli_query($conn, "SELECT oldYear FROM YEAR WHERE EmployeeID='$employeeID' ");
        $row = mysqli_fetch_array($result);
        $oldYear = $row['oldYear'];   //获取上一次修改工资的时间
        if ($newYear >= $oldYear + 2) {    //当前时间与上一次比较，如果大于等于2则进行相应的操作
            $interval = floor(($newYear - $oldYear) / 2);
            $addYear = $oldYear + $interval * 2;

            //更新数据库中的上次修改工资的时间
            mysqli_query($conn, "UPDATE YEAR SET oldYear='$addYear' WHERE EmployeeID='$employeeID'");
            //获取以前的工资
            $result = mysqli_query($conn, "SELECT Salary FROM Employees WHERE EmployeeID='$employeeID'");
            $row = mysqli_fetch_array($result);
            $oldSalary = $row["Salary"];
            $newSalary = $oldSalary * 1.1;
            //将工资增加后插入数据库中
            mysqli_query($conn, "UPDATE Employees SET Salary='$newSalary' WHERE EmployeeID='$employeeID'");
        }
    }

}


