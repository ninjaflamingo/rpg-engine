 /*

  ┌—―—―—―—―—―—―─┐
  │             │
  ├—―—―—―—―—―—―—┤
  │             │
  │             │
  └—―—―—―—―—―——―┘

  ┌—————————————┐
  │             │
  └—―—―—―—―—―—―—┘

  ╔═════════════╗
  ║             ║
  ╚═════════════╝

  ╔═════════════╗
  ║             ║
  ╠═════════════╣
  ║             ║
  ║             ║
  ╚═════════════╝

  ┌—―┬—―┬—―┬—―┬—―┐
  │0 │0 │0 │0 │0 │
  └—―┴―—┴—―┴―—┴——┘

  ┌—―┬—―┬—―┬—―┬—―┐
  │0 │0 │0 │0 │0 │
  ├――┼――┼――┼――┼――┤
  │0 │0 │0 │0 │0 │
  ├――┼――┼――┼――┼――┤
  │0 │0 │0 │0 │0 │
  ├――┼――┼――┼――┼――┤
  │0 │0 │0 │0 │0 │
  └—―┴―—┴—―┴―—┴——┘

            y
            │
            │
            │
            │
            │
—―—―—―—―—―—―┼—―—―—―—―—―—―—―x
            │
            │
            │
            │
            │


○   M A P   D A T A

    ┌—―┬—―┬—―┬—―┬—―┐
    │1 │2 │3 │4 │5 │
    ├――┼――┼――┼――┼――┤
    │6 │7 │8 │9 │10│
    ├――┼――┼――┼――┼――┤
    │11│12│13│14│15│
    ├――┼――┼――┼――┼――┤
    │16│17│18│19│20│
    └—―┴―—┴—―┴―—┴——┘

    The map data by default is a data array with the following structure:

        0   1   2   3
        4   5   6   7
        8   9   10  11
        12  13  14  15

    What you can notice is that this square box has also a zero index
    based coordinate system:

          y
          │ 0   1   2   3
        —―┼—┬—―—┬—―—┬—―—┬―― x
        0 ├ 0   1   2   3
        1 ├ 4   5   6   7
        2 ├ 8   9   10  11
        3 ├ 12  13  14  15
          │


    Hence, tile 0 is at coordinate [0, 0] and 1 is at [0, 1] and 5 at [1, 1]

    The mouse coordinate system has the following properties:

          y
          │ 0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18... (pixels)
        —―┼—┬—―—┬—―—┬—―—┬――—┬—―—┬—―—┬—―—┬――—┬—―—┬—―—┬—―—┬――—┬—―—┬—―—┬—―—┬――—┬—―—┬—―—┬—―—┬―― x
        0 ├                                     │
        1 ├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        2 ├                                     │
        3 ├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        4 ├                                     │
        5 ├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        6 ├                                     │
        7 ├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒│▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        8 ├―――――――――――――――――――――――――――――――――――――┘ y = 8, x = 9
        9 ├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        11├
        12├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        13├
        14├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        15├
        16├▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
        17├
        18├

     If our tile is 16x16, our first tile's border will be at 0 will be at:
        x = 16px, y = 16px


    Let's say we hover with the mouse at x = 8px and y = 9px
    That would hover the tile over index 1 and in order to calculate this
    we are using coordinate system translations.

○   B A S I C   P L A T F O R M E R   C A L C U L A T I O N S

        (i2xy index mapWidth) - takes an index from the spritemap, and return an x,y coordinate
        (xy2i x y mapWidth)   - takes x, y coordinates and returns spritemap index

    I. Switching mouse coordinates to the tilespace on our map:

        tilemap_x = mouse_x/16     tilemap_x = (/ mouse_x tilemap_width)
        tilemap_y = mouse_y/16     tilemap_y = (/ mouse_y tilemap_width)

    Where 16 is the tilemap width.

    Example:

        tilemap_x = 9/16 = 0.52
        tilemap_y = 8/16 = 0.5

        Math.floor(0.52) = 0;
        Math.floor(0.5)  = 0;

        result = tilemap x y: [0, 0]

    II. Switching tilespace coordinates to linear array index number:

        index = (tilemap_y * tilemap_width) + tilemap_x

    Example:

        index = (0 * 16) + 0 = 0;


    III.Tilemap coordinates from linear array index number (reversal of no. 2):

        tilemap_x = index % tilemap_width
        tilemap_y = index / tilemap_width

    Example:

        tilemap_x = 7 % tilemap_width                  where 7 is the index
                  = 7 % 4
                  = 3

        tilemap_y = Math.floor(7 / tilemap_width)
                  = 7 / 4
                  = 1

         mouse[mouse_x, mouse_y] → tilemap[0, 0] → map[0]

         Eventually, the map data is converted to a 1 dimensional linear array: map = [ 0, 1, 2, 3...15 ]

         ┌—―┬—―┬—―┬—―┬—―┐
         │1 │2 │3 │..│15│
         └—―┴―—┴—―┴―—┴——┘

○     D R A W   M E T H O D

      Canvas offers 4 different ways of drawing the sprite:

          normal:       sprite.draw(x, y);
          stretched:    sprite.draw(x, y, width, height);
          tiled:        sprite.draw(x, y);
          rotated:      sprite.rotate(x, y, angle);

○     R O T A T I O N

      Consider a 4x4 sprite in a coordinate system:

                y
                │
                │ x, y = [0, 0]
                │ │
                │ │   1   2   3
          —————―┼—┼—―—┬—―—┬—―—┬―― x
              0 ├ 0   1   2   3
              1 ├ 4   5   6   7
              2 ├ 8   9   10  11
              3 ├ 12  13  14  15
                │

      If you rotate by the default point of origin [0,0] it's not
      going to rotate around it's center or "own axis", it' going
      to rotate against the [0,0] x and y coordinates in the top
      left corner. So to we'll want to get the center point of this
      sprite and translate the sprite into the middle of the middle
      of the coordinate system of it's local state as such:

                x = - 2 = -(/ width 2)   = -(4 / 2)
                y = - 2 = -(/ height 2)  = -(4 / 2)

                y
                ┼
                ┼
          1   2 ┼ 3   4
          4   5 ┼ 6   7
          ┼———┼―┼—┼—―—┼—―—┼—―—┼―― x
          5   6 ┼ 10  11
          7   8 ┼ 14  15
                ┼
                ┼
                │

○     S P R I T E S H E E T

      An 8x8 .png spritesheet can be translated into an array a such:

      [
        0,  1,  2,  3,  4,  5,  6,  7,
        8,  9,  10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 29, 30, 31,
        32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59, 60, 61, 62, 63
      ]

      Run to right animation sequence: [ 1, 2, 3, 4 ]

○     A N I M A T I O N

      [ 1, 2, 3, 4 ]
        |
        current_frame = seq[frame_index]

      Our animation will contain 4 frames and from the standpoint of
      JavaScrip we'll have 3 variables:

      seq             = [ 1, 2, 3, 4 ]
      frame_index     = 1 or 2 or 3 or...63
      current_frame   = seq[frame_index] value

      frame_index is a simple counter, if it's 0, we're gonna get frame 1

○     M U L T I P L E   S P R I T E S H E E T S

      Handling:
      - Pre-created animation counters
      - Resetting global animation counter on every frame
      - Increasing global animation counter on Sprite.draw method

○     F L E X I B L E   D R A W   F U N C T I O N

      - Using global animation counters will allow us to avoid animation collisions

      We'll attach our Spritesheet Object to our Sprite Object and the Sprite
      Object will choose which image to use

      Sprite Object:
      ╔═══════════════════════════════════════╗
      ║                                       ║
      ║  ┌—―—―—―—―—―—―─┐     ┌—————————————┐  ║
      ║  │ Spritesheet │     │    Image    │  ║
      ║  ├—―—―—―—―—―—―—┤     └—―—―—―—―—―—―—┘  ║
      ║  │  ┌———————┐  │         │            ║
      ║  │  │ Image │  │         │            ║
      ║  │  └———————┘  │         │            ║
      ║  └—―—―—―—―—―——―┘        ∕             ║
      ║             ┌—┴————————┴—┐            ║
      ║             │   draw()   │            ║
      ║             └————————————┘            ║
      ╚═══════════════════╬═══════════════════╝
                          Regular Single Image Sprite
                          or
                          Single Frame from Spritesheet

          32 000 Global Animation Counters, array = [ 0, 1, 2 ... 32 000 ];

          Increment Global Counter Index everytime draw() is called,
          this way it will move to the next index once it get's to
          draw the next sprite, then it gets incremented again.

          ┌―――┬—――┬—――┬—――┬—――┐
          │ 1 │ 2 │ 3 │...│32k│ ―― ―― ╔═════════════════════╗
          └—――┴―――┴—――┴―—―┴——―┘       ║      Animation      ║
            │                         ╠═════════════════════╣
            │                         ║animationDelay       ║
            ╔═════════════════════╗   ║animationIndexCounter║
            ║      Animation      ║   ║animationCurrentFrame║
            ╠═════════════════════╣   ╚═════════════════════╝
            ║animationDelay       ║
            ║animationIndexCounter║
            ║animationCurrentFrame║
            ╚═════════════════════╝

          animationDelay              will delay the animation
          animationIndexCounter       index within the array
          animationCurrentFrame       determine the final current frame

          On each frame in our loop we reset the animation counter globally.
          This will allow us to start from zero everytime we start a new frame
          animation.

○     A N I M A T I N G   M O V E M E N T   I N   A L L   D I R E C T I O N S

          We have our directions similar to a compass, North, East, South, etc.

          ┬—――┬—――┬—――┐
          │N W│ N │N E│
          ┼―――┼―――┼―――┤
          │ W │ p │ E │
          ├―――┼―――┼―――┤
          │S W│ S │S E│
          └—――┴――—┴—――┘

○     B I T W I S E   O P E R A T O R S

          Store multiple states in a single variable.

          &     Bitwise AND
          |     Bitwise inclusive OR
          ^     Bitwise XOR
          <<    Left shift
          >>    Right shift
          ¬     Bitwise NOT (unary)

          Bitwise OR "|"- as long as there is one bit that's equal to 1,
          the result will be 1.

          ┬—――――┬—―——―┬—―—————————―┐
          │BIT a│BIT b│a|b ; a OR b│
          ┼―――――┼――——―┼―——――┬————――┘
          │  0  │  0  │  0  │
          ├―――――┼——―――┼―――――┤
          │  0  │  1  │  1  │
          ├―――――┼——―――┼―――――┤
          │  1  │  0  │  1  │
          ├―――――┼——―――┼―――――┤
          │  1  │  1  │  1  │
          └—――――┴――———┴—――――┘

          Let's suppose:

          n1 = 0001
          n2 = 0010

          Apply the OR operator to both of them:

          0001      Let's abstract this to contain our angle:   0001 S
        | 0010                                                | 0010 W
        = 0011                                                = 0011 SW

        So instead of using different variables for South and one for West
        we can do all of these calculations within one variable.

        We are using the OR operator to store multiple states into a single
        variable and we are using the AND operator to read those values back.

        Bitwise AND "&"- will be 1 if all bits are 1

        ┬—――――┬—―——―┬—―—————————―┐
        │BIT a│BIT b│a|b ; a OR b│
        ┼―――――┼――——―┼―——――┬————――┘
        │  0  │  0  │  0  │
        ├―――――┼——―――┼―――――┤
        │  0  │  1  │  0  │
        ├―――――┼——―――┼―――――┤
        │  1  │  0  │  0  │
        ├―――――┼——―――┼―――――┤
        │  1  │  1  │  1  │
        └—――――┴――———┴—――――┘

        0011 = SW                                         W
                                                          │
        In this example West is set by the second bit  00[1]1

        And so in order to check if it's present:

          0011        In this example we are checking if the value of W is
        & 0010        present. W = 0010
        = 0010

        In a nutshell we are checking for the presence of this one bit
        in the original value by AND-ing it with the value that represents
        that bit.

        Binary Format - Each binary number has an equivalent of itself in the
        decimal format.
                                                  Decimal
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 │  - 0
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 1 │  - 1
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 1 ││ 0 │  - 2
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 1 ││ 0 ││ 0 │  - 4
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 0 ││ 1 ││ 0 ││ 0 ││ 0 │  - 8
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 0 ││ 1 ││ 0 ││ 0 ││ 0 ││ 0 │ - 16
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 0 ││ 1 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 │ - 32
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 0 ││ 1 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 │ - 64
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴
        ┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬┬—――┬
        │ 1 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 ││ 0 │ - 128
        ┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴┴――—┴

        We're only looking at binary numbers only containing 1 digit within
        an entire set.

        In order to use our bitwise operators we'll need to use all these
        { 0 - 1 - 2 - 4 - 8 .. 64 } values in decimal format and these
        will be the variables we assign to our variables for different states.

        In this case if the keyboard movement in 8 different directions.

        1   = EAST          →
        2   = NORTH EAST    ↑ →
        4   = NORTH         ↑
        8   = NORTH WEST    ↑ ←
        16  = WEST          ←
        32  = SOUTH WEST    ↓ ←
        64  = SOUTH         ↓
        129 = SOUTH EAST    ↓ →

        We are not using 0 because Bitwise operations on 0 always result in 0.





*/
