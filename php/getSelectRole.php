<?php

include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

function getSelectRole()
{
    $conn = tools::connectDatabase();
    $data = array();
    $result = mysqli_query($conn, "SELECT RoleID,RoleName FROM Roles");
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);


}

getSelectRole();