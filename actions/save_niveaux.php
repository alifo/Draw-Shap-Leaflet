<?php
        $geojson  = json_decode(file_get_contents("php://input"));
        
        
        file_put_contents('../data/niveaux.json', json_encode($geojson));
        
        print_r($geojson) ;
        print_r(count($_POST)) ;
        

        
?> 
