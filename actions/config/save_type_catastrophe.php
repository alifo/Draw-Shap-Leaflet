<?php
        $geojson  = json_decode(file_get_contents("php://input"));
        
        
        file_put_contents('../../data/config/type_catastrophe.json', json_encode($geojson));
        
        print_r(json_encode($geojson)) ;
        //~ print_r(count($_POST)) ;
        

        
?> 