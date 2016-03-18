<?php
        $geojson  = json_decode(file_get_contents("php://input"));
        
        
        file_put_contents('../data/zones_impact_reel.json', json_encode($geojson));
        
        print_r($geojson) ;
        print_r(count($_POST)) ;
        

        
?> 
