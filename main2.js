$(document).ready(init);

function init(){
  $('.create').click(createBoard);
}

function createBoard(){
  var n = $('.inputNum').val();
  var row = [];
    for(var j=0;j<n;j++){
      var td = [];
      for(var i=0;i<n;i++){
        if(j%2==1 && i%2==0){
          td.push($('<td class="white">'));
        }else if (j%2==1 && i%2==1) {
          if(j<2 || j>n-3 ) {
            console.log("j",j);
            td.push($('<td class="black">').addClass('pic'));
          }else{
            td.push($('<td class="black">'));
          }
        }else if(j%2==0 && i%2==1){
          td.push($('<td class="white">'));
        }else{
          if(j<2 || j > n-3){
            console.log("j",j);
            td.push($('<td class="black">').addClass('pic'));
          }else{
            td.push($('<td class="black">'));
          }
        }
      }

      row.push($('<tr>').append(td));
    }
  $('tbody').empty().append(row);


}
