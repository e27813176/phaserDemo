var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#bf4f5f";
        
        changestateAddEventlistener();
        
    },
    update: function(){}
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