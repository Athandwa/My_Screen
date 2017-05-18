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
var secondContent = document.getElementById('secondContent');

// console.log(container);

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

var images = document.querySelector('.image');
var secImage = document.querySelector('.image2');
var thirdImage = document.querySelector('.image3');
var forthImage = document.querySelector('.image4');
var fifthImage = document.querySelector('.image5');
var sixthImage = document.querySelector('.image6');
var seventhImage = document.querySelector('.image7');
var eighthImage = document.querySelector('.image8');
// console.log(images);

images.addEventListener('click',  function(){
  console.log(images.dataset.pictureId);

  if (images.dataset.pictureId == 'overTake') {
    // container.classList.remove('hide_content');
  $( "#firstContent").dialog({
  width: 1000,
  height: 700
});
}
})

secImage.addEventListener('click',  function(){
console.log(secImage.dataset.pictureId);

 if(secImage.dataset.pictureId == 'breakDown') {
    $( "#secondContent").dialog({
    width: 1000,
    height: 700
  });
}
})

thirdImage.addEventListener('click',  function(){
console.log(thirdImage.dataset.pictureId);

 if(thirdImage.dataset.pictureId == 'seatBelt') {
    $( "#thirdContent").dialog({
    width: 1000,
    height: 700
  });
}
})

forthImage.addEventListener('click',  function(){
console.log(forthImage.dataset.pictureId);

 if(forthImage.dataset.pictureId == 'trafficLight') {
    $( "#fourthContent").dialog({
    width: 1000,
    height: 700
  });
}
})

fifthImage.addEventListener('click',  function(){
console.log(fifthImage.dataset.pictureId);

 if(fifthImage.dataset.pictureId == 'slippery') {
    $( "#fifthContent").dialog({
    width: 1000,
    height: 700
  });
}
})

sixthImage.addEventListener('click',  function(){
console.log(sixthImage.dataset.pictureId);

 if(sixthImage.dataset.pictureId == 'roadWork') {
    $( "#sixthContent").dialog({
    width: 1000,
    height: 700
  });
}
})













// var secondContent = document.querySelector('.secondContent');
// var seatBeltContent = document.querySelector('.seatBeltContent');
// var robotsContent = document.querySelector('.robotsContent');
//console.log(container);

// container.classList.add('hide_content');
// secondContent.classList.add('hide_content');
// seatBeltContent.classList.add('hide_content');
// robotsContent.classList.add('hide_content');
// if (images.dataset.pictureId == 'overTake') {
//   container.classList.remove('overTaking');
// }
// else if (images.dataset.pictureId == 'breakDown') {
//     secondContent.classList.remove('secondContent');
// }
//   else if (images.dataset.pictureId == 'seatBelt') {
//     seatBeltContent.classList.remove('seatBeltContent');
//   }
//   else if (images.dataset.pictureId == 'trafficLight') {
//     robotsContent.classList.remove('robotsContent');
//   }
//   // else if (images.dataset.pictureId == 'seatBelt') {
//   //   robotsContent.classList.remove('robotsContent');
//   // }





// if (images.dataset.pictureId == 'overTake') {
//   container.classList.add('show_content');
//   secondContent.classList.add('hide_content');
//   seatBeltContent.classList.add('hide_content');
//   robotsContent.classList.add('hide_content');
// }
// else if (images.dataset.pictureId == 'breakDown') {
//
//   container.classList.add('hide_content');
//   secondContent.classList.add('show_content');
//   seatBeltContent.classList.add('hide_content');
//   robotsContent.classList.add('hide_content');
//
// }
