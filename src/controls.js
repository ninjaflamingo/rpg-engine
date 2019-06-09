// KEY = ASCII code
const KEY_LEFT  = 37;
const KEY_RIGHT = 39;
const KEY_UP    = 38;
const KEY_DOWN  = 40;
const KEY_D     = 68;
const KEY_A     = 65;
const KEY_W     = 87;
const KEY_S     = 83;
const KEY_SHIFT = 16;

const DIRECTION_E   = 1;
const DIRECTION_NE  = 2;
const DIRECTION_N   = 4;
const DIRECTION_NW  = 8;
const DIRECTION_W   = 16;
const DIRECTION_SW  = 32;
const DIRECTION_S   = 64;
const DIRECTION_SE  = 128;

// KEY STATES
const IS_SHIFT = false;
const KEYSTATE = {
    pressing_left: false,
    pressing_right: false,
    pressing_up: false,
    pressing_down: false,
    pressing_d: false,
    pressing_a: false,
    pressing_w: false,
    pressing_s: false
};

window.key = null;
window.key = new Keyboard();

document.onkeydown = function(event){
    key = getKey(event.keyCode, 'down');
};

document.onkeyup = function(event){
    key = getKey(event.keyCode, 'up');
};

function getKey(key, direction) {
    return  key == KEY_LEFT   && direction == 'down'  ? KEYSTATE.pressing_left  = true :
            key == KEY_RIGHT  && direction == 'down'  ? KEYSTATE.pressing_right = true :
            key == KEY_UP     && direction == 'down'  ? KEYSTATE.pressing_up    = true :
            key == KEY_DOWN   && direction == 'down'  ? KEYSTATE.pressing_down  = true :
            key == KEY_D      && direction == 'down'  ? KEYSTATE.pressing_d     = true :
            key == KEY_A      && direction == 'down'  ? KEYSTATE.pressing_a     = true :
            key == KEY_W      && direction == 'down'  ? KEYSTATE.pressing_w     = true :
            key == KEY_S      && direction == 'down'  ? KEYSTATE.pressing_s     = true :
            key == KEY_LEFT   && direction == 'up'    ? KEYSTATE.pressing_left  = false :
            key == KEY_RIGHT  && direction == 'up'    ? KEYSTATE.pressing_right = false :
            key == KEY_UP     && direction == 'up'    ? KEYSTATE.pressing_up    = false :
            key == KEY_DOWN   && direction == 'up'    ? KEYSTATE.pressing_down  = false :
            key == KEY_D      && direction == 'up'    ? KEYSTATE.pressing_d     = false :
            key == KEY_A      && direction == 'up'    ? KEYSTATE.pressing_a     = false :
            key == KEY_W      && direction == 'up'    ? KEYSTATE.pressing_w     = false :
            key == KEY_S      && direction == 'up'    ? KEYSTATE.pressing_s     = false :
            'err';
};
