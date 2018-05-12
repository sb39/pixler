// Select color input
$('#submitButton').click(function(e){
    e.preventDefault(); 
   removetable();
    var height = $('#inputHeight').val();
    var width = $('#inputWeight').val();
    if((height || width) >100) {
       alert('I fear your browser might crash !!');
	   location.reload();
    }
    else if((height || width )==0) {
        alert('empty fields');
    }
    else{
    for(var  i =0 ; i< height ;i++) {
        $('#pixelCanvas').append("<tr></tr>");
        for(var j = 0 ; j<width ;j++){
            $("#pixelCanvas").children().last().append("<td></td>");
        }
    }}
    
});

$('#pixelCanvas').on("click","td",function(){
    var color = $('#colorPicker').val();
    $(this).css('background-color',color);
});

$('#pixelCanvas').on("dblclick","td",function(){
    var color = $('#colorPicker').parent().val();
    $(this).css('background-color',color);
});

$('#emptyTable').on("click",function(){
    $('#pixelCanvas').remove();
    location.reload();
});

$('#emptycolor').on("click",function(){
    $("td").css("background-color","");
});
// reset color picker not working
$('#rstcolor').click(function(){
    $('#colorPicker').val(null);
    console.log("you clicked!");
});

function removetable(){
    $('#pixelCanvas').empty();
}

$('#submitButton').css({
    "background": "darkgreen",
    "border": "0px",
    "color": "white",
    "font-weight": "bold",
    "padding": "10px",
    "border-radius": "10px",
    /* background-color: white; */
    "box-shadow": "1px 3px 3px 0px black"
});
$('#emptyTable,#emptycolor,#rstcolor').css({
    "background": "darkred",
    "border": "0px",
    "color": "white",
    "font-weight": "bold",
    "padding": "10px",
    "border-radius": "10px",
    /* background-color: white; */
    "box-shadow": "1px 3px 3px 0px black"
});
$('#inputHeight, #inputWeight').css({
    "padding": "4px",
    "box-shadow": "0px 0px 5px black",
    "border": "0px"
});
