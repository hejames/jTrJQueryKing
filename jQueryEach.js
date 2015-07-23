//DOM ELEMENTS
//outputs the ids of every div on the web page
$("div").each(function(index, value) {
    console.log('div' + index + ':' + $(this).attr('data-sr'));
});


//ARRAYS
//outputs: one two three
// var dataArray = [ "bootstrap", "uikit", "foundation", "pure", "960grid" ];
// jQuery.each(dataArray, function(index, value) {
//   console.log(value);
//   //  return (this != "foundation"); // will stop running after "foundation"
// });



//OBJECTS
//outputs: 1 2 3 4 5
// var obj = { one:1, two:2, three:3, four:4, five:5 };
// jQuery.each(obj, function(i, val) {
//   console.log(val);
// });

// var arrayNew = ["firstname", "Kwesi","lastname", "Osei","Address","Mensah Wood Street"];
// var dataset =
// {
//   "person" : [
//           {"userLabels": ["Name","Role"]},
//           {"tagNames": ["lName","role"]},
//           {"tableClass": "width530"},
//           {"colWidths": ["50%","50%"]}
//          ]
// };

// $.each(dataset['person'][0]['userLabels'],function(key,value){
//   console.log('Values : '+ value);
// });
