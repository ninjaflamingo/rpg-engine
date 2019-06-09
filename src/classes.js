class Context {

    constructor(canvas_tag_id){
        this.canvas = null;
        this.ctx    = null;
        this.create(canvas_tag_id);
        this.width = document.getElementById(canvas_tag_id).getBoundingClientRect().width;
        this.height = document.getElementById(canvas_tag_id).getBoundingClientRect().height;
    }

    create(canvas_tag_id){
        this.canvas = document.getElementById(canvas_tag_id);
        this.ctx    = this.canvas.getContext('2d');
        return this.ctx;
    }

    changeBgColor(color){
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
};

class Map {

    constructor(tile1, tile2){
      this.map = [
        0, 1, 1, 1, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 0, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 1, 0, 0,
        0, 1, 1, 1, 1, 0, 1, 0, 1, 0,
        0, 1, 1, 1, 1, 0, 1, 0, 0, 1,
        0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0 ];

      this.tile1 = tile1;
      this.tile2 = tile2;

    }

    draw(){
      let map_index = 0;
      for(var y = 0; y < 10; y++){
          for(var x = 0; x < 10; x++, map_index++){
              let tile_x = x * BLOCK_WIDTH;
              let tile_y = y * BLOCK_HEIGHT;
              let tile_type = this.map[map_index];
              if(tile_type == 0)
                  this.tile1.draw(tile_x, tile_y);
              else
                  this.tile2.draw(tile_x, tile_y);
              };
          };
    }

};


class Sprite {

    constructor(filename, is_pattern){
        this.image = null;
        this.spritesheet = null;
        this.pattern = null;
        this.deg2rad = Math.PI/180;
        this.loaded = false;


        // decide to render spritesheet or single image
        if(filename instanceof Spritesheet)
        {
            //console.log(filename)
            this.spritesheet = filename;
            this.image = this.spritesheet.image;
        }else{
            if(!!filename)
                this.load(filename, is_pattern);
            else
                console.log('could not load sprite');
        };


    }

    load(filename, is_pattern){
        this.image = new Image();
        this.image.src = filename;
        if(is_pattern)
            this.pattern = canvas.ctx.createPattern(this.image, 'repeat');
        return
    }

    draw(pos_x, pos_y, width, height){
        if(!!this.pattern){
            canvas.ctx.fillStyle = this.pattern;
            canvas.ctx.fillRect(pos_x, pos_y, width, height);
        }else{
            if(width === undefined || height === undefined)
                canvas.ctx.drawImage(this.image, pos_x, pos_y,
                                     this.image.width,
                                     this.image.height);
            else
                canvas.ctx.drawImage(this.image, pos_x, pos_y, width, height);
        };
    }


    drawMultiAnimated(pos_x, pos_y, seq, frame_px_width){
    // if any of the parameter's aren't pass it will equal undefined

        // draw regular sprite
        if(seq == undefined)
        {
            canvas.ctx.drawImage(this.image, pos_x, pos_y, frame_px_width, frame_px_width);
        }
        else // if seq is a single numeric frame id - integer
        {
            if(isNum(seq) && seq >= 0)
            {
                let xy = i2xy(seq, 8); // 8 is the number of rows and columns in the spritesheet
                canvas.ctx.drawImage(this.image,
                                     xy[0] * frame_px_width, xy[1] * frame_px_width,
                                     frame_px_width, frame_px_width, pos_x, pos_y,
                                     frame_px_width, frame_px_width);
            }
            else // if an animation sequence is passed as the seq variable, [ 1, 2, 3, 4 ]
            {
                if(seq.length != undefined && seq.length > 0)
                {
                    if(AnimationCounter[AnimationCounterIndex].animationDelay++ >= 3)
                    {
                        AnimationCounter[AnimationCounterIndex].animationDelay = 0;
                        AnimationCounter[AnimationCounterIndex].animationIndexCounter++;

                        if(AnimationCounter[AnimationCounterIndex].animationIndexCounter >= seq.length)
                        {
                            AnimationCounter[AnimationCounterIndex].animationIndexCounter = 0;
                        }

                        AnimationCounter[AnimationCounterIndex].animationCurrentFrame = seq[AnimationCounter[AnimationCounterIndex].animationIndexCounter];

                    };

                    let xy = i2xy(AnimationCounter[AnimationCounterIndex].animationCurrentFrame, 8);
                    canvas.ctx.drawImage(this.image,
                                         xy[0] * frame_px_width, xy[1] * frame_px_width,
                                         frame_px_width, frame_px_width, pos_x, pos_y,
                                         frame_px_width, frame_px_width);
                    AnimationCounterIndex++;

                };
            };
        };
    }
};

class Spritesheet {

    constructor(filename){
        this.image       = new Image();
        this.image.src   = filename;
    }

};

class Animation {

    constructor(animationDelay, animationIndexCounter,  animationCurrentFrame){
        this.animationDelay        = animationDelay;
        this.animationIndexCounter = animationIndexCounter;
        this.animationCurrentFrame = animationCurrentFrame;
    }

};

class GlobalAnimationCounter {

      constructor(){
          this.animations = new Array();
          this.setCounters();
      }

      setCounters(){
          for(var i = 0; i < 32000; i++){
              this.animations[i] = new Animation(0, 0, 0);
          };
      }

}

class Keyboard {

    constructor(){
        this.pressing_left = false;
        this.pressing_right = false;
        this.pressing_up = false;
        this.pressing_down = false;
        this.pressing_d = false;
        this.pressing_a = false;
        this.pressing_w = false;
        this.pressing_d = false;
    }

};

class Loot{
    constructor(filename){
        this.image = null;
        this.spritesheet = null;
        this.gold = randomNumInRange(1, 15);
        this.rarity = null;

        if(filename instanceof Spritesheet)
        {
            this.spritesheet = filename;
            this.image = this.spritesheet.image;
        }else{
            if(!!filename)
                this.load(filename, is_pattern);
            else
                console.log('could not load sprite');
        };

        this.setRarity();
    }

    setRarity(){
        this.rarity = ITEM_GRADES[randomNumInRange(0, ITEM_GRADES.length)];
    }

    draw(pos_x, pos_y, seq, frame_px_width, frame_px_height, scale_factor){

        canvas.ctx.beginPath();
        canvas.ctx.font="bold 10px Arial";
        canvas.ctx.fillStyle='white';
        canvas.ctx.fillText(this.gold + ' Gold', pos_x-1.25, pos_y-2);

        if(seq.length != undefined && seq.length > 0)
        {
            if(AnimationCounter[AnimationCounterIndex].animationDelay++ >= 5)
            {
                AnimationCounter[AnimationCounterIndex].animationDelay = 0;
                AnimationCounter[AnimationCounterIndex].animationIndexCounter++;

                if(AnimationCounter[AnimationCounterIndex].animationIndexCounter >= seq.length)
                {
                    AnimationCounter[AnimationCounterIndex].animationIndexCounter = 0;
                }

                AnimationCounter[AnimationCounterIndex].animationCurrentFrame = seq[AnimationCounter[AnimationCounterIndex].animationIndexCounter];

            };

            let xy = i2xy(AnimationCounter[AnimationCounterIndex].animationCurrentFrame, 8);
            canvas.ctx.drawImage(this.image,
                                 AnimationCounter[AnimationCounterIndex].animationCurrentFrame * frame_px_width,
                                 0,
                                 frame_px_width, frame_px_height, pos_x, pos_y,
                                 frame_px_width*scale_factor, frame_px_height*scale_factor);
            AnimationCounterIndex++;

        };
    }
};
