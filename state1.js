demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ff5f5f";
        
        changestateAddEventlistener();
    },
    update: function(){}
};