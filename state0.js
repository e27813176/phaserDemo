var demo = {}, centerX = 1500/2, centerY = 1000/2,speed=10,bus;

demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.image('bus','assets/sprites/bus.png');
        
    },
    create: function(){
        game.stage.backgroundColor = "#bf4f5f";
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        changestateAddEventlistener();
        
        bus = game.add.sprite(centerX ,centerY ,'bus');
        
        bus.anchor.x=0.5;
        
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            bus.x += speed;
        }
         else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            bus.x -= speed;
        }
    }
};

function changestate(i,statenum){
    game.state.start('state'+statenum);
}


function addkeyCallback(key,args){
    game.input.keyboard.addKey(key).onDown.add(changestate,null,null,args);
}

function changestateAddEventlistener(){
    addkeyCallback(Phaser.Keyboard.ZERO,0);
    addkeyCallback(Phaser.Keyboard.ONE,1);
    addkeyCallback(Phaser.Keyboard.TWO,2);
    addkeyCallback(Phaser.Keyboard.THREE,3);
    addkeyCallback(Phaser.Keyboard.FOUR,4);
    addkeyCallback(Phaser.Keyboard.FIVE,5);
    addkeyCallback(Phaser.Keyboard.SIX,6);
    addkeyCallback(Phaser.Keyboard.SEVEN,7);
    addkeyCallback(Phaser.Keyboard.EIGHT,8);
    addkeyCallback(Phaser.Keyboard.NINE,9);
}