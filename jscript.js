$(document).ready(function(){

    $(document).on('submit', function(){
        var firstName = $('.fName').val();
        var lastName = $('.lName').val();
        var desc = $('textarea').val();
        

        if(firstName.length == 0 || lastName.length == 0 || desc.length == 0){
            alert('Please Fill Out All Required Fields');
            return false;            
        } else {
            var fields = $(':input').serializeArray();
            var formData = '';            
            $.each(fields, function(i, prop){
                formData += ' '+prop.value;    
            })
            $('#deck').append('<div class="flip-container"><div class="flipper"><div class="front"><div class="card"><h2>'+formData+'</h2></div></div><div class="back"><h3>'+desc+'</h3></div></div></div>');
            return false;
        }
    })

    
});

//MAAAAAN I LOVE THIS. You think about it, and think about it, and think about it only to not get it, until you take a break for 30 minutes come back and SMASH THE SHIT OUT OF IT. FEELSGOODMAN.