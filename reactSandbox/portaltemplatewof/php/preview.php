<?php
	require('./connection.php');

	if(isset($_POST['contentId'])){
        $previewQuery = "SELECT id, title, description, file_name, sub_category_id, category_id FROM cms.contents WHERE id=?";

        $contentId = $_POST['contentId'];

        $stmt = mysqli_stmt_init($conn);
        mysqli_stmt_prepare($stmt, $previewQuery);
        mysqli_stmt_bind_param($stmt, "i", $contentId);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        $result =  mysqli_stmt_num_rows($stmt);

        if($result > 0){
            mysqli_stmt_bind_result($stmt, $id, $title, $description, $filename, $subCategoryId, $categoryId);

            $data = [];

            while(mysqli_stmt_fetch($stmt)){

                $ext = pathinfo($filename, PATHINFO_EXTENSION);

                $dataAssoc = [
                    "contentId" => $id,
                    "title" => $title,
                    "description" => $description,
                    "filename" => pathinfo($filename, PATHINFO_FILENAME),
                    "fileExtension" => pathinfo($filename, PATHINFO_EXTENSION),
                    "subCategoryId" => $subCategoryId,
                    "categoryId" => $categoryId
                ];

                if($ext == "apk" || $ext == "xapk"){
                    $getScreens = "SELECT file_name FROM cms.preview WHERE content_id =?";
                    mysqli_stmt_prepare($stmt, $getScreens);
                    mysqli_stmt_bind_param($stmt, "i", $contentId);
                    mysqli_stmt_execute($stmt);
                    $resultScreens = mysqli_stmt_get_result($stmt);
                    $imageContainer = [];

                    while($dataScreens = mysqli_fetch_assoc($resultScreens)){
                        array_push($imageContainer, $dataScreens['file_name']);
                    }
                    $imageArr = ["screenshots" => $imageContainer];
                }

                if(!empty($imageArr)){
                    $merged = array_merge($dataAssoc, $imageArr);
                    array_push($data, $merged);
                }else{
                    array_push($data, $dataAssoc);
                }
            }

            echo json_encode($data);
            mysqli_stmt_close($stmt);
        }
    }

    mysqli_close($conn);
?>