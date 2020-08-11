<?php
	require('./connection.php');

	if(isset($_POST['subCatId'])){
		$catId = $_POST['catId'];
		$subCatId = $_POST['subCatId'];

		$contentQuery = "SELECT id, title, file_name, original_file_name, mime, sub_category_id FROM cms.contents WHERE id!=1 and category_id=? and sub_category_id=? order by id desc limit 30";

		$stmt = mysqli_stmt_init($conn);
       	mysqli_stmt_prepare($stmt, $contentQuery);
       	mysqli_stmt_bind_param($stmt, "ii", $catId, $subCatId);
       	mysqli_stmt_execute($stmt);
       	mysqli_stmt_store_result($stmt);

       	$result = mysqli_stmt_num_rows($stmt);
       	if($result > 0){
            mysqli_stmt_bind_result($stmt, $id, $title, $filename, $originalFilename, $mime, $subCategoryId);
            $data = [];
            while(mysqli_stmt_fetch($stmt)){
                $dataAssoc = [
                    "contentId" => $id,
                    "title" => $title,
                    "filename" => pathinfo($filename, PATHINFO_FILENAME),
                    "fileExtension" => pathinfo($filename, PATHINFO_EXTENSION),
                    "originalFilename" => pathinfo($originalFilename, PATHINFO_FILENAME)
                ];
                array_push($data, $dataAssoc);
            }
            echo json_encode($data);
            mysqli_stmt_close($stmt);
       	}
    }
    mysqli_close($conn);
?>