const isNum = function(number){
    return typeof(number) != "boolean" && !isNaN(number);
};

const randomNum = function(){
    return Math.floor(Math.random() * 2);
};

const randomNumInRange = function(min, max){
    return Math.floor(Math.random() * max) + min;
};

const i2xy = function(index, map_width){
    return [ index % map_width, Math.floor(index/map_width) ];
};

const xy2i = function(x, y, map_width){
    return y * map_width + x;
};

const deg2rad = Math.PI/180;

var angle = 0;
var animationCounterIndex = 0;
var animationCounter = new Array();



function initAnimationCounters(){
    for(var i = 0; i < 16000; i++){
        AnimationCounter[i] = new Animation(0, 0, 0);
    };
};

function resetAnimationCounter(){
    AnimationCounterIndex = 0;
};
