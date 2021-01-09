window.onload = function(){
	document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
	// document.getElementById('myDropdown').hidden = true;
}

document.getElementById("p")
        .addEventListener("click", function() {
  document.getElementById("Presentation").hidden = false;

  document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);

document.getElementById("f")
        .addEventListener("click", function() {
  document.getElementById("Formation").hidden = false;

  document.getElementById('Presentation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);

document.getElementById("e")
        .addEventListener("click", function() {
  document.getElementById("Experience").hidden = false;

  document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);

document.getElementById("c")
        .addEventListener("click", function() {
  document.getElementById("Competence").hidden = false;
  document.getElementById('cmp').hidden = false;
  document.getElementById('cmpt').hidden = false;
  document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);


document.getElementById("d")
        .addEventListener("click", function() {
  document.getElementById("Divers").hidden = false;

  document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);

document.getElementById("cont")
        .addEventListener("click", function() {
  document.getElementById("Contact").hidden = false;

  document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
}, false);

document.getElementById("im")
        .addEventListener("click", function() {
  document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Competence').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
}, false);

a = {
        show: function (elem) {
            document.getElementById(elem).style.display = 'block';
        },
        hide: function (elem) {
        	// setTimeout(function () {
		// body...
			document.getElementById(elem).style.display = 'none';
	// },10000);
            
        },
    }


document.getElementById("ss")
        .addEventListener("click", function() {
  	document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
	document.getElementById('Competence').hidden = false;
	document.getElementById('cmp').hidden = false;
	document.getElementById('cmpt').hidden = true;
}, false);

document.getElementById("s")
        .addEventListener("click", function() {
  	document.getElementById('Presentation').hidden = true;
	document.getElementById('Formation').hidden = true;
	document.getElementById('Experience').hidden = true;
	document.getElementById('Divers').hidden = true;
	document.getElementById('Contact').hidden = true;
	document.getElementById('Competence').hidden = false;
	document.getElementById('cmp').hidden = true;
	document.getElementById('cmpt').hidden = false;
}, false);

function testCaps(texte){
  if(texte.toUpperCase()!=texte)
  {
    alert('Le Nom et le Prenom doivent etre en Majuscule')
  }
  }
// let test = document.getElementById('c');
// test.addEventListener("mouseenter",function (event) {
// 	// body...
// 	event.target.style.color = purple;
// 	setTimeout(function () {
// 		// body...
// 		event.target.style.color = "";
// 	},500);
// },false);
// $(document).ready(function(){
//     $("#myDropdown").mouseover(function(){
//         console.log("hovering");
//         $(".hover_info").css({
//             "display": "none",
//             "opacity": "0",
//             "transition" : "all 0.3s !important"
//         });
//     });
//     $("#myDropdown").mouseout(function(){
//         console.log("hovering");
//         $(".hover_info").css({
//             "display": "block",
//             "opacity": "1",
//             "transition" : "all 0.3s !important"
//         });
//     });
// }
