<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/9
 * Time: 22:19
 */
include_once('tools.php');

include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$ID = $_POST["userID"];
//将用户登陆时输入的密码使用sha1
//函数进行加密后与数据库中的密码进行比对
$password = sha1($_POST["userPassword"]);
$newYear=$_POST['year'];

if (!isset($ID) || !isset($password)) {
    die("用户名或者密码为空");
}
tools::addSalary($ID,$newYear);

function checkLogin($userID, $userPassword)
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT Password from Users WHERE EmployeeID='$userID'");
    $row=mysqli_fetch_array($result);
    if($row){
        if ($userPassword == $row['Password']) {
            return 'login success';
        } else {
            return "password not match";
        }

    }else{
        return "not exist the userName";
    }

}


$loginInfo = checkLogin($ID, $password);


$data=array();

if ($loginInfo == 'login success') {
    $data['info'] = 'login success';
    $data['userName'] = tools::getUserName($ID);
    $data['userAuthority'] = tools::getUserAuthority($ID);
    echo json_encode($data);
}
if ($loginInfo == 'password not match') {
    $data['info'] = 'password not match';
    echo json_encode($data);
}
if ($loginInfo == 'not exist the userName') {
    $data['info'] = 'not exist the userName';
    echo json_encode($data);
}
