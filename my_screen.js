var road_tips = [{
        tipValue: "Alcohol",
        tip: 'Alcohol and Drugs'
    },
    {
        tipValue: "Speed",
        tip: 'Safer speeds'
    },
    {
        tipValue: "Phones",
        tip: 'Mobile phones'
    },
    {
        tipValue: "Behavour",
        tip: 'Dangerous Behaviours'
    },
    {
        tipValue: "road Sharing",
        tip: 'Sharing The Road'
    }
]

var radioTamplate = document.querySelector('.RadioTamplate');
var complideRadios = Handlebars.compile(radioTamplate.innerHTML);

var display = document.getElementById('display');
var displayInfo = document.getElementById('displayInfo');
var options = document.querySelector('.options');
var container = document.querySelector('.hide_content');
console.log(container);

(function() {
    var results = complideRadios({
        options: road_tips
    })
    console.log(road_tips);
    options.innerHTML = results
})
();

var tips = document.getElementsByName('tips');

options.addEventListener('click', function() {
    if (tips[0].checked) {
        displayInfo.innerHTML = 'Dont mix driving with alcohol or drugs (including medicine). To avoid the risks plan ahead.';
    } else if (tips[1].checked) {
        displayInfo.innerHTML = 'Speed is a key factor in crashes and road trauma. Exceeding the speed limit increases the likelihood of a crash.';
    } else if (tips[2].checked) {
        displayInfo.innerHTML = 'Using a mobile phone while driving impairs your driving performance through distraction and increases the risk of crashing by at least four times.';
    } else if (tips[3].checked) {
        displayInfo.innerHTML = 'Inattention and driving with attitude are just two dangerous driving behaviours that place the safety of you and other road users at risk.';
    } else if (tips[4].checked) {
        displayInfo.innerHTML = 'All road users should know their responsibilities and respect the rights to safety of all who share our roads. This includes pedestrians, scooters and skaters, cyclists, horses and heavy vehicles.';
    }
    document.getElementById("displayInfo").style.display = "show";
    document.getElementById("displayInfo").style.display = "block"
});

var images = document.querySelector('.image')
// console.log(images);



images.addEventListener('click',  function(){
  console.log(images.dataset.pictureId);
  if (images.dataset.pictureId == 'overTake') {
    container.classList.remove('hide_content');
  }
})
