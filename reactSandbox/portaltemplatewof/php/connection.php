<?php
	$hostname	= "qnetdbreplica.cmftoqajaxu1.ap-southeast-1.rds.amazonaws.com";
	$username	= "qnet2018"; 
	$password	= 'dOgV$&8S'; 
	$db			= "cms";

	$conn = mysqli_connect($hostname,$username,$password);
	if(!$conn){
		die('Connection failed: ' . mysqli_error($conn));
	}

	header("Access-Control-Allow-Origin: *");
?>