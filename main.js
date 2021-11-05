var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
 background_image = "BirthdayImage.jpg";

 function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;    
}

function uploadBackground() {
		ctx.drawImage(background_imgTag , 0,0,canvas.width,canvas.height)
	}

function playSound(){
	x.play();
}
