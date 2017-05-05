var road_tips =[
  {tip1: 'Alcohol and Drugs'},
  {tip2: 'Safer speeds'},
  {tip3: 'Mobile phones'},
  {tip4: 'Dangerous Behaviours'},
  {tip5: 'Sharing The Road'}
]
var radioTamplate = document.querySelector('.RadioTamplate');
var complideRadios = Handlebars.compile(radioTamplate.innerHTML);

var display = document.getElementById('display');

(function () {
  var results = complideRadios({
    options: road_tips
  })
  display.innerHTML = results;
})
();



// var options = document.querySelector('.options');
//  console.log(options);
//
// options.addEventListener('change', function (evt) {
//   console.log(evt.target.value);
//
// for (var i = 0; i < options.length; i++) {
//   options[i]
// }
//
// })
