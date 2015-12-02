<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/18
 * Time: 15:18
 */
include_once('tools.php');
include_once('SQLSafe.php');
$SQLSafe=new SQLSafe();

function getEditEvaluation()
{
    $conn = tools::connectDatabase();
    $result = mysqli_query($conn, "SELECT * FROM EvaluationProjects");
    $data = array();
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, $row);
    }
    echo json_encode($data);
}

getEditEvaluation();