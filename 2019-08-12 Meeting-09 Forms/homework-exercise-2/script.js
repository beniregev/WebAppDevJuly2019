/*
    Function takes the selected file from the 
    <input> tag and gets the full URL/URI.
 */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img-profile')
                .attr('src', e.target.result)
                .width(300);
                /*.height(200);*/
        };

        reader.readAsDataURL(input.files[0]);
    }
}