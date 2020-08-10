<?php
    require('./connection.php');
    
    if(isset($_POST['cat'])){
        $cat = $_POST['cat'];
        if($cat == "Games-apk"){
            $catCondition = "and(b.sub_category='Action' or b.sub_category='Adventure' or b.sub_category='Arcade' or b.sub_category='Puzzle' or b.sub_category='Simulation' or b.sub_category='Strategy')";
        }else if($cat == "VIDEOS"){
            $catCondition = "and(b.sub_category='Car racing' or b.sub_category='Cartoons' or b.sub_category='Football' or b.sub_category='Funny' or b.sub_category='Horror')";
        }else if($cat == "Tones"){
            $catCondition = "and(b.sub_category='Tones-Portal')";
        }else if($cat == "Apps"){
            $catCondition = "and(b.sub_category='Antivirus' or b.sub_category='Productivity' or b.sub_category='Utility')";
        }else{
            $cat = "Games-apk";
            $catCondition = "and(b.sub_category='Action' or b.sub_category='Adventure' or b.sub_category='Arcade' or b.sub_category='Puzzle' or b.sub_category='Simulation' or b.sub_category='Strategy')";
        }

        $querySubMenu = "SELECT a.id, a.category, b.id as sc_id, b.sub_category FROM cms.categories a,cms.sub_categories b WHERE a.id = b.category_id $catCondition and category like ?";
        $bindCat = "{$_POST['cat']}%";
        $stmt = mysqli_stmt_init($conn);
        mysqli_stmt_prepare($stmt, $querySubMenu);
        $bindParam = mysqli_stmt_bind_param($stmt, "s", $bindCat);

        if($bindParam){
            mysqli_stmt_execute($stmt);
            $subCat = [];
            $result = mysqli_stmt_get_result($stmt);
            while($data = mysqli_fetch_assoc($result)){
                $catId = $data['id'];
                $category = $data['category'];
                $subCatId = $data['sc_id'];
                $subCategory = $data['sub_category'];

                $newSubCategory = str_replace(" ", "", $subCategory);

                $dataAssoc = ["catId" => $catId, "category" => $category, "subId" => $subCatId, "subCategory" => ucwords($subCategory), "subCategoryAttr" => $newSubCategory];

                array_push($subCat, $dataAssoc);
            }
            echo json_encode($subCat);
            mysqli_stmt_close($stmt);
        }

        mysqli_close($conn);

    }
?>