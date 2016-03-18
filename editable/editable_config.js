$(function(){
    //ajax mocks
    $.mockjaxSettings.responseTime = 200; 
    
    $.mockjax({
        url: '/post',
        response: function(settings) {
            log(settings, this);
        }
    });

    $.mockjax({
        url: '/error',
        status: 400,
        statusText: 'Bad Request',
        response: function(settings) {
            this.responseText = 'Please input correct value'; 
            log(settings, this);
        }        
    });
    
    $.mockjax({
        url: '/status',
        status: 500,
        response: function(settings) {
            this.responseText = 'Internal Server Error';
            log(settings, this);
        }        
    });
  
    $.mockjax({
        url: '/groups',
        response: function(settings) {
            this.responseText = [ 
             {value: 1, text: '1'},
             {value: 2, text: '2'},
             {value: 3, text: '3'},
             {value: 4, text: '4'},
             {value: 5, text: '5'}
           ];
           log(settings, this);
        }        
    });
    
    function log(settings, response) {
            var s = [], str;
            s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
            for(var a in settings.data) {
                if(settings.data[a] && typeof settings.data[a] === 'object') {
                    str = [];
                    for(var j in settings.data[a]) {str.push(j+': "'+settings.data[a][j]+'"');}
                    str = '{ '+str.join(', ')+' }';
                } else {
                    str = '"'+settings.data[a]+'"';
                }
                s.push(a + ' = ' + str);
            }
            s.push('RESPONSE: status = ' + response.status);

            if(response.responseText) {
                if($.isArray(response.responseText)) {
                    s.push('[');
                    $.each(response.responseText, function(i, v){
                       s.push('{value: ' + v.value+', text: "'+v.text+'"}');
                    }); 
                    s.push(']');
                } else {
                   s.push($.trim(response.responseText));
                }
            }
            s.push('--------------------------------------\n');
            $('#console').val(s.join('\n') + $('#console').val());
    }                 
    
});
 //~ ===============================================================================
 
 $(function(){
  
   //defaults
   $.fn.editable.defaults.url = '/post'; 

    //enable / disable
   $('#enable').click(function() {
       $('#zones .editable').editable('toggleDisabled');
   });    
    
    //editables 
    $('.rayon').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'rayon',
           title: ''
    });
    
    $('.intensite').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'intensite',
           title: ''
    });
    
    $('.probabilite').editable({
           url: '/post',
           type: 'text',
           pk: 1,
           name: 'probabilite',
           title: ''
    });
    
    
    $('.niveau').editable({
        //~ prepend: "choisissez",
        source: [
            {value: 1, text: ' 1'},
            {value: 2, text: ' 2'},
            {value: 3, text: ' 3'},
            {value: 4, text: ' 4'},
            {value: 5, text: ' 5'},
           
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "red", 2: "green",3: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });    
    
    
  
   
});
