<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2015/11/29
 * Time: 17:18
 */

/*
 * 用于过滤非法字符，防止SQL注入的php类
 */
class SQLSafe {

    private $getFilter = "'|(and|or)\\b.+?(>|<|=|in|like)|\\/\\*.+?\\*\\/|<\\s*script\\b|\\bEXEC\\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\\s+(TABLE|DATABASE)";

    private $postFilter = "\\b(and|or)\\b.{1,6}?(=|>|<|\\bin\\b|\\blike\\b)|\\/\\*.+?\\*\\/|<\\s*script\\b|\\bEXEC\\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\\s+(TABLE|DATABASE)";

    private $cookieFilter = "\\b(and|or)\\b.{1,6}?(=|>|<|\\bin\\b|\\blike\\b)|\\/\\*.+?\\*\\/|<\\s*script\\b|\\bEXEC\\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\\s+(TABLE|DATABASE)";

    /**

     * 构造函数

     */

    public function __construct() {

        foreach($_GET as $key=>$value){$this->stopAttack($key,$value,$this->getFilter);}

        foreach($_POST as $key=>$value){$this->stopAttack($key,$value,$this->postFilter);}

        foreach($_COOKIE as $key=>$value){$this->stopAttack($key,$value,$this->cookieFilter);}

    }

    /**

     * 参数检查并写日志

     */

    public function stopAttack($StrFiltKey, $StrFiltValue, $ArrFiltReq){

        if(is_array($StrFiltValue))$StrFiltValue = implode($StrFiltValue);

        if (preg_match("/".$ArrFiltReq."/is",$StrFiltValue) == 1){

            $this->writesLog($_SERVER["REMOTE_ADDR"]."    ".strftime("%Y-%m-%d %H:%M:%S")."    ".$_SERVER["PHP_SELF"]."    ".$_SERVER["REQUEST_METHOD"]."    ".$StrFiltKey."    ".$StrFiltValue);

            showmsg('您提交的参数非法,系统已记录您的本次操作！','',0,1);

        }

    }

    /**

     * SQL注入日志

     */

    public function writesLog($log){

        $log_path = CACHE_PATH.'logs'.DIRECTORY_SEPARATOR.'sql_log.txt';

        $ts = fopen($log_path,"a+");

        fputs($ts,$log."\r\n");

        fclose($ts);

    }

}

?>