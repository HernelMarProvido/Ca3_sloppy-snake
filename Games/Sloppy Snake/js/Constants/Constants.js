
class GameData {
    static AUDIO_CUE_ARRAY = [
      new AudioCue("background_sound", AudioType.Background, 1, 1, 0, true),
      new AudioCue("jump", AudioType.Move, 1, 1, 0, false),
      new AudioCue("Collect", AudioType.Collect, 1, 1, 0, false),
      new AudioCue("game_over", AudioType.WinLose, 1, 1, 0, false),
    ];
  
    static BACKGROUND_DIMENSIONS = new Vector2(384, 216);
  
  
    static PLATFORM_DATA = {
      id: "Platform",
      spriteSheet: document.getElementById("snailbait_jungle_tileset"),
      sourcePosition: new Vector2(0, 112),
      sourceDimensions: new Vector2(48, 48),
      rotation: 0,
      scale: Vector2.One,
      origin: Vector2.Zero,
      actorType: ActorType.Platform,
      collisionType: CollisionType.Collidable,
      layerDepth: 0,
      explodeBoundingBoxInPixels: -6,
  
      // We have just one platform sprite, so it makes sense to
      // store a list of positions at which we want to place that
      // sprite in our game world. Mess around with these values
      // by either adding or removing positions from our array, or
      // by editing the x, y values of each position. Check out the 
      // results by refreshing the web page!
      translationArray: [
  
        /****************** Screen 1 *******************/
  
        
        new Vector2(100, 100),
        new Vector2(150, 100),
        new Vector2(200, 100),
        new Vector2(250, 100),
  
        
        new Vector2(300, 250),
        new Vector2(300, 200),
  
        
        new Vector2(450, 325),
        new Vector2(450, 375),
        new Vector2(450, 100),
        new Vector2(450, 150),
        new Vector2(450, 50),
        
  
        // Floor
        new Vector2(0, 420),
        new Vector2(50, 420),
        new Vector2(100, 420),
        new Vector2(150, 420),
        new Vector2(200, 420),
        new Vector2(250, 420),
        new Vector2(300, 420),
        new Vector2(350, 420),
        new Vector2(400, 420),
        new Vector2(450, 420),
        new Vector2(500, 420),
        new Vector2(550, 420),
        new Vector2(600, 420),
        new Vector2(650, 420),
        new Vector2(700, 420),
        new Vector2(750, 420),
        new Vector2(800, 420),

          // Floor UP
          new Vector2(0, 0),
          new Vector2(50, 0),
          new Vector2(100, 0),
          new Vector2(150, 0),
          new Vector2(200, 0),
          new Vector2(250, 0),
          new Vector2(300, 0),
          new Vector2(350, 0),
          new Vector2(400, 0),
          new Vector2(450, 0),
          new Vector2(500, 0),
          new Vector2(550, 0),
          new Vector2(600, 0),
          new Vector2(650, 0),
          new Vector2(700, 0),
          new Vector2(750, 0),
          new Vector2(800, 0),
  
        /****************** Screen 2 *******************/
  
        // Floor
        new Vector2(850, 420),
        new Vector2(900, 420),
        new Vector2(950, 420),
        new Vector2(1000, 420),
        new Vector2(1050, 420),
        new Vector2(1100, 420),
        new Vector2(1150, 420),
        new Vector2(1200, 420),
  
        // GAP!
  
        new Vector2(1400, 420),
        new Vector2(1450, 420),
        new Vector2(1500, 420),
        new Vector2(1550, 420),
        new Vector2(1600, 420),
        new Vector2(1650, 420),
        new Vector2(1700, 420),
        new Vector2(1750, 420),
      ]
    };
  
    static COLLECTIBLES_ANIMATION_DATA = {
      id: "Collectibles Animation Data",
      spriteSheet: document.getElementById("sloppy-snake-sprite"),
  
      // List of animations
      takes: {
  
        // Animation 1
        "mouse": {
  
          frameRatePerSec: 6,
  
          // -1 = Loop forever
          //  0 = Run once (no loop)
          //  N = Loop N times
          maxLoopCount: -1,
  
          startFrameIndex: 0,
          endFrameIndex: 1,
  
          boundingBoxDimensions: new Vector2(30, 35),
  
          frames: [
            new Rect(20, 130, 45, 25), // Frame 1
            new Rect(65, 130, 45, 25), // Frame 2
          ]
        }
      }
        
    };
  
  
    static RUNNER_START_POSITION = new Vector2(80, 250);
    static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.Space];
    static RUNNER_RUN_VELOCITY = 0.05;
    static RUNNER_JUMP_VELOCITY = 0.5;
  
    static RUNNER_ANIMATION_DATA = {
  
      id: "Runner Animation Data",
      spriteSheet: document.getElementById("sloppy-snake-sprite_char"),
  
      // Animations
      takes: {
  
        // Animation 1
        "snake": {
  
          frameRatePerSec: 2,
  
          // -1 = Loop forever
          //  0 = Run once (no loop)
          //  N = Loop N times
          maxLoopCount: -1,
  
          startFrameIndex: 0,
          endFrameIndex: 0,
  
          // Notice that I chose the largest of all the widths taken from the frames
          // array below
          boundingBoxDimensions: new Vector2(40, 40),
  
          frames: [
  
            // This list of rects just represent the positions
            // and dimension of each individual animation frame
            // on the sprite sheet
            new Rect(13, 13, 100, 50),    // Animation frame 2
          ]
        },
  
        // Animation 2
        "Run Right": {
  
          frameRatePerSec: 12,
  
          // -1 = Loop forever
          //  0 = Run once (no loop)
          //  N = Loop N times
          maxLoopCount: -1,
  
          startFrameIndex: 0,
          endFrameIndex: 1,
  
          // Notice that I chose the largest of all the widths taken from the frames
          // array below
          boundingBoxDimensions: new Vector2(40, 40),
  
          frames: [
            new Rect(13, 13, 100, 50),      // Animation frame 1
            new Rect(15, 66, 100, 45),    // Animation frame 2
          ]
        },
  
        // Animation 3
        "Run Left": {
  
          frameRatePerSec: 12,
  
          // -1 = Loop forever
          //  0 = Run once (no loop)
          //  N = Loop N times
          maxLoopCount: -1,
  
          startFrameIndex: 0,
          endFrameIndex: 1,
  
          // Notice that I chose the largest of all the widths taken from the frames
          // array below
          boundingBoxDimensions: new Vector2(40, 40),
  
          frames: [
  
            // This list of rects just represent the positions
            // and dimension of each individual animation frame
            // on the sprite sheet
  
            new Rect(130, 30, 95, 40),   // Animation frame 1
            new Rect(135, 63, 100, 50),   // Animation frame 2

            
          ]
        },
      }
    };
  
    static ENEMY_ANIMATION_DATA = {
  
      id: "Enemy Animation Data",
      spriteSheet: document.getElementById("snailbait_sprite_sheet"),
      
      // Animations
      takes: {
  
        // Animation 1
        "Wasp Fly": {
  
          frameRatePerSec: 10,
          
          // -1 = Loop forever
          //  0 = Run once (no loop)
          //  N = Loop N times
          maxLoopCount: -1,
  
          startFrameIndex: 0,
          endFrameIndex: 2,
  
          boundingBoxDimensions: new Vector2(35, 50),
  
          frames: [
            new Rect(20, 234, 35, 50),
            new Rect(90, 234, 35, 50),
            new Rect(160, 234, 35, 50)
          ]
        }
      }
    };
  }
  
  const FontType = {
    InformationSmall: "12px Arial",
    InformationMedium: "18px Arial",
    InformationLarge: "24px Arial"
  };