<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/25
 * Time: 21:29
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

$authorityID=$_POST['authorityID'];
$presentAuthority=$_POST['presentAuthority'];

function setSelectAuthority($authorityID,$presentAuthority){
    $conn=tools::connectDatabase();
    mysqli_query($conn,"UPDATE Roles SET $presentAuthority='0' WHERE RoleID=$authorityID");
}
setSelectAuthority($authorityID,$presentAuthority);