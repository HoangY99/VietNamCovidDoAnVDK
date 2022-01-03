$.getJSON('https://api.covid19api.com/summary',function(data){
  //console.log(data);
  //console.log('caccc');
  var Name = data['Countries'][2].Country;
  //$.each(data,function(index, value){
 //   console.log(Name);
  var Countries = data['Countries'][2].Country;
  console.log(Countries);



});