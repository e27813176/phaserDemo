demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#afaf5f";
        
        changestateAddEventlistener();
    },
    update: function(){}
};