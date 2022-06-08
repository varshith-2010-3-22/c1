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

b1= createSprite(350,400,22,287)
b1.shapeColor="white"
b2= createSprite(20,400,20,300)
b2.shapeColor="white"
b3= createSprite(45,400,15,250)
b3.shapeColor="white"
b4= createSprite(70,400,20,400)
b4.shapeColor="white"
b5= createSprite(100,400,22,350)
b5.shapeColor="white"
b6= createSprite(397,400,30,550)
b6.shapeColor="white"
b7= createSprite(132,400,23,335)
b7.shapeColor="white"
b8= createSprite(161,400,22,302)
b8.shapeColor="white"
b9= createSprite(185,400,21,289)
b9.shapeColor="white"
b10= createSprite(225,400,20,480)
b10.shapeColor="white"
b11= createSprite(250,400,21,380)
b11.shapeColor="white"
b12= createSprite(300,400,23,280)
b12.shapeColor="white"
function draw() {
  background("black");
  drawSprites()
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
