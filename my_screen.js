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
  display.innerHTML = results
})
();

var tips = document.getElementsByName('tips');
var display = document.getElementById('display');

addEventListener('click', function() {
if (tips[0].checked) {
  alert('Dont mix driving with alcohol or drugs (including medicine). To avoid the risks plan ahead.');
}
else if (tips[1].checked) {
  alert('Speed is a key factor in crashes and road trauma. Exceeding the speed limit increases the likelihood of a crash.');
}
else if (tips[2].checked) {
  alert('Using a mobile phone while driving impairs your driving performance through distraction and increases the risk of crashing by at least four times.');
}
else if (tips[3].checked) {
  alert('Inattention and driving with attitude are just two dangerous driving behaviours that place the safety of you and other road users at risk.');
}
else if (tips[4].checked) {
  alert('All road users should know their responsibilities and respect the rights to safety of all who share our roads. This includes pedestrians, scooters and skaters, cyclists, horses and heavy vehicles.');
}
})



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
