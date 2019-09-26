$(document).ready(function() {
    var max_fields = 100;
    var wrapper = $(".main_calculator");
    var add_button = $(".add_input");

    var x = 1;
    $(add_button).click(function(e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append('<div><input type="text" class="input_field" placeholder="Watts (V x A)"/> <br> <input type="text" class="input_field" placeholder="Hours on (per day)"/><br><a href="#" class="delete">Remove appliance <i class="fas fa-minus-circle"></i></a></div>');
        } else {
            alert('You Reached the limits')
        }
    });

    $(wrapper).on("click", ".delete", function(e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});