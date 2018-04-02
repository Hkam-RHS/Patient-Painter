 //Created by Howard Kam. 2018.//

 var vw = window.innerWidth;
 var vh = window.innerHeight;
 var value = 'black';
 var Brush = [
     1, 3, 5, 10, 20, 25, 30, 50, 75, 100, 200
 ];
 var Mode = ["Paint", "Clear all"];

 var Color = '#000000';
 var gui;
 function setup() {
     createCanvas(vw, vh);
     background('white');
     stroke(0, 50);
     gui = createGui('Patient Painer Menu', 0, 0);
     gui.addGlobals('Color', 'Mode', 'Brush');
 }

 function touchMoved() {
     //var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
     strokeWeight(Brush);
     stroke(color(Color));
     line(mouseX, mouseY, pmouseX, pmouseY);

 }
 switch (Mode) {

     case 'Clear all':
         clear();
         break;
 }

  function keyTyped() {
        if (key === 's') {
            save('myDrawing.jpg');
        }
    }
 function draw() {
     if (mouseIsPressed) {
         //var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
         strokeWeight(Brush);
         stroke(color(Color));
         line(mouseX, mouseY, pmouseX, pmouseY);
     } else {
         noFill();
     }
     switch (Mode) {

         case 'Clear all':
             clear();
             break;
     }

 }