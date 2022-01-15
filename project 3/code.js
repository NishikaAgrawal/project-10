var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia = createSprite(25, 335,20,20);
sofia.shapeColor="red"
var wall1 = createSprite(15, 160,15,300);
wall1.shapeColor=("green")
var wall2 = createSprite(35, 313,55,15);
wall2.shapeColor=("green")
var wall3 = createSprite(15, 377,15,50);
wall3.shapeColor=("green")
var wall4= createSprite(35, 357,55,15);
wall4.shapeColor=("green")
var wall5= createSprite(200, 393,380,15);
wall5.shapeColor=("green")
var wall6= createSprite(383, 379,15,550);
wall6.shapeColor=("green")
var wall7= createSprite(205, 17,373,15);
wall7.shapeColor=("green")
var wall8= createSprite(384,33,15,45);
wall8.shapeColor=("green")
var wall9= createSprite(356,48,45,15);
wall9.shapeColor=("green")
var wall10= createSprite(265,108,250,15);
wall10.shapeColor=("green")
  var wall11= createSprite(55,112,15,110);
wall11.shapeColor=("green")
 var wall12= createSprite(73,173,50,15);
wall12.shapeColor=("green")
var wall13= createSprite(95,123,15,115);
wall13.shapeColor=("green")
var wall14= createSprite(122,60,70,15);
wall14.shapeColor=("green")
var wall15= createSprite(235,165,15,190);
wall15.shapeColor=("green")
var wall16= createSprite(95,210,170,15);
wall16.shapeColor=("green")
var wall17= createSprite(180,230,15,55);
wall17.shapeColor=("green")
var wall18= createSprite(110,250,125,15);
wall18.shapeColor=("green")
var wall19= createSprite(109,300,15,100);
wall19.shapeColor=("green")
var wall20= createSprite(177,296,150,15);
wall20.shapeColor=("green")
var wall21= createSprite(280,350,70,15);
wall21.shapeColor=("green")
var wall22= createSprite(250,155,150,15);
wall22.shapeColor=("green")
var wall23= createSprite(307,282,15,140);
wall23.shapeColor=("green")
var wall23= createSprite(267,255,80,15);
wall23.shapeColor=("green")
var wall24= createSprite(150,33,15,47);
wall24.shapeColor=("green")

var cup = createSprite(383, 78,15,40);
cup.shapeColor=("yellow")




function draw() {
createEdgeSprites();
     background("rgb(177,253,145)");
     sofia.bounceOff(edges)
sofia.bounceOff(wall1) 
sofia.bounceOff(wall2)
sofia.bounceOff(wall3)
sofia.bounceOff(wall4)
sofia.bounceOff(wall5)
sofia.bounceOff(wall6)
 sofia.bounceOff(wall7)
 sofia.bounceOff(wall8)
sofia.bounceOff(wall9)
sofia.bounceOff(wall10)
sofia.bounceOff(wall11)
sofia.bounceOff(wall12)
sofia.bounceOff(wall13)
sofia.bounceOff(wall14)
sofia.bounceOff(wall15)
sofia.bounceOff(wall16)
sofia.bounceOff(wall17)
sofia.bounceOff(wall18)
sofia.bounceOff(wall19)
sofia.bounceOff(wall20)
sofia.bounceOff(wall21)
sofia.bounceOff(wall22)
sofia.bounceOff(wall23)
sofia.bounceOff(wall24)


if (sofia.collide(cup)) {
  background(rgb(244, 177, 66))
}

if (keyDown("up")) {
  sofia.y-=5
}
if (keyDown("down")) {
  sofia.y+=6
}
if (keyDown("left")) {
  sofia.x-=2
}
if (keyDown("right")) {
  sofia.x+=2
}
  
 drawSprites();
   
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
