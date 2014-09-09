$(document).ready(function(){
    //this file is almost entirely for manipulating the left menu
    //everything operates based on clicks
    
    $("#MSli").click(function(){
        $('#pInfo, #skills, #wExp, #edu, #ref, #rest, #uop, #bsit').hide(true);
        $('#myMS').show();
     });
    
    $("#pIli").click(function(){
        $('#myMS, #skills, #wExp, #edu, #ref, #rest, #uop, #bsit').hide(true);
        $('#pInfo').show();
     });
    
    $("#sli").click(function(){
        $('#myMS, #pInfo, #wExp, #edu, #ref, #bsit, #uop, #rest').hide(true);
        $('#skills').show();
     })
    
    $("#wEli").click(function(){
        $('#myMS, #pInfo, #skills, #edu, #ref, #rest, #uop, #bsit').hide(true);
        $('#wExp').show();
     })
    
    $("#eDli").click(function(){
        $('#myMS, #pInfo, #skills, #wExp, #ref, #rest, #uop, #bsit').hide(true);
        $('#edu').show();
     })
    
    $("#rli").click(function(){
        $('#myMS, #pInfo, #skills, #wExp, #edu, #rest, #uop, #bsit').hide(true);
        $('#ref').show();
     })
    
    $("#nuop").click(function(){
        $('#wExp').hide(true);
        $('#uop').show();
    })
    
    $('#sap').click(function(){
        $('#uop').hide(true);
        $('#wExp').show();
    })

    $('#nrest').click(function(){
        $('#uop').hide(true);
        $('#rest').show();
    })
    
    $('#back').click(function(){
        $('#rest').hide(true);
        $('#uop').show();
    })
    
    $('#nbsit').click(function(){
        $('#edu').hide(true);
        $('#bsit').show();
    })

})
