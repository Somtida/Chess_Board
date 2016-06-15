var inputNum = 0;
$(document).ready(function(){
  $('.create').on('click', function(){
    $('tbody').empty();
    inputNum = $('.inputNum').val();
 // Javascript for generating HTML board elements
    var colSize, rowSize;
    var colArray = [];
    var rowArray = [];
    colSize = inputNum;
    rowSize = inputNum;
    for(var i = 0; i < colSize; i++)
      {
        colArray[i] = "<td id='col"+(i+1)+"'></td>";
        rowArray[i] = "<tr id='row"+(i+1)+"'></tr>";
      };
      //console.log(colArray);
      //console.log(rowArray);

 // Create rows w/Loop
    for(var j = 0; j<rowArray.length; j++)
    {
      $('tbody').append(rowArray[j]);
    }
// Create col's w/for,each loop
    $('tr').each(function(){
      $(this).append(colArray);
    });

    $('td').filter(function(){
      return this.id.match(/^col[0-9]*[2468]$|col10+/);
    }).addClass('evenCol'); //even Columns

    $('td').filter(function(){
      return this.id.match(/^col[0-9]*[13579]$/);
    }).addClass('oddCol'); //odd Columns

    $('tr').filter(function(){
      return this.id.match(/^row[0-9]*[2468]$|row10+/);
    }).addClass('evenRow'); //even rows

    $('tr').filter(function(){
      return this.id.match(/^row[0-9]*[13579]$/);
    }).addClass('oddRow'); //even rows

    $('.oddRow .evenCol').addClass('black');
    $('.evenRow .oddCol').addClass('black');

  });   //end of GO button event handler.

  $('.showPieces').on('click', function(){

    var rowsForPieces = Math.ceil((inputNum * .3)); //input of 8 = 3
    var sliceSize = inputNum - rowsForPieces //5

    var topRows = rowsForPieces;
    var bottomRows = sliceSize;
    console.log(topRows);

    $('tr').filter(":lt("+topRows+")").find('.black').append("<img width='50px' height='50px' src='https://i.imgur.com/wUtYf9N.png'>");
    //insert bottom red pieces
     $('tr').slice(bottomRows).find('.black').append("<img width='50px' height='50px' src='https://i.imgur.com/GVfioRj.png'>");
    //insert top white pieces



  }); //end of ShowPieces button;








});  //end of jQuery .ready()
