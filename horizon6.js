var InitGame = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function InitGame ()
    {
        Phaser.Scene.call(this, { key: 'init_game' });
    },

    init: function (data)
    {
        
        
    },

    preload: function ()
    {

        this.load.image('Gradius', 'assets/Gradius.png');

        this.load.audioSprite('sfx', 'assets/horizon6_sounds.json', [
        'assets/horizon6_sounds.ogg',
        'assets/horizon6_sounds.mp3'
        ]);

        this.load.audioSprite('loops', 'assets/horizon6_loops.json', [
        'assets/horizon6_loops.ogg',
        'assets/horizon6_loops.mp3'
        ]);

        this.load.json('animation_data', 'animation_saves.json');
        this.load.json('high_scores', 'high_scores.json');


        this.load.image('Last Duel', 'assets/Last Duel (Capcom).png');
        
        this.load.image('Wonder Boy', 'assets/Wonder Boy (Sega).png');
        this.load.image('phaser jam logo', 'assets/phaserjam-retro2.png');



        var progress = this.add.graphics();

        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(40, 200, 560 * value, 60);

        });

        this.load.on('complete', function () {

            progress.destroy();

        });

        this.load.on('filecomplete', this.showFile, this);


        

        
    },

    create: function ()
    {

        var safariSoundHack = (()=>{

        let safariAudiotag = document.createElement('audio');
        document.body.appendChild(safariAudiotag);
        safariAudiotag.src = 'data:audio/x-wav;base64,UklGRooWAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YWYWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

        return (callback,thisarg)=>{
            safariAudiotag.onended = ()=>{
                thisarg ? callback.call(thisarg) : callback();
            };
            safariAudiotag.play();
        };
        })();


        this.getHighScores();

        


        var config2 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:16}
        };

        this.cache.bitmapFont.add('Wonder Boy', Phaser.GameObjects.RetroFont.Parse(this, config2));

        var text1 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', "^ PLAY (keyboard/mouse) ^\nW,A,S,D,E,C - mouse to shoot").setOrigin(0.5).setScale(2).setCenterAlign().setPosition(320,160);
        var text2 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', "^ PLAY (touchscreen) ^\nthumb overlays - touch to shoot").setOrigin(0.5).setScale(2).setCenterAlign().setPosition(320,260);
        var text3 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', "toggle sound off/on to change the beat!").setOrigin(0.5).setScale(2).setCenterAlign().setPosition(320,335);
        

        
        var hitarea1 = this.add.rectangle(text1.x, text1.y, text1.width + 20, text1.height + 20, 0x00ff00, 0.5).setInteractive();
        var hitarea2 = this.add.rectangle(text2.x, text2.y, text2.width + 20, text2.height + 20, 0xff00ff, 0.5).setInteractive();


        hitarea1.on('pointerup', function () {

            sound_enabled = true;

            this.scale.startFullscreen();

            screen.orientation.lock('landscape');
            
            touchActivated = false;

            loop = this.sound.addAudioSprite('loops');
            loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});

            safariSoundHack( this.scene.start('welcome') );
            

        }, this);

        hitarea2.on('pointerup', function () {

            sound_enabled = true;

            this.scale.startFullscreen();

            screen.orientation.lock('landscape');
            
            touchActivated = true;

            loop = this.sound.addAudioSprite('loops');
            loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});

            safariSoundHack( this.scene.start('welcome') );
            

        }, this);

        
    },

    getHighScores: function(data) {

        var myurl = 'http://patricko.byethost9.com/horizon6/get_high_scores.php';
        

        $.ajax({
          url: myurl,
          type: 'GET',
          data: { savedata:data },
          contentType: "application/json",
          dataType: 'json',
          success: function (data) { 
            highScoreData = data;
            high_scores_loaded = true;
             
          },
          error: function (data) {
            /// error       
          }

        });

    
 
    },

    textCallback: function (data) 
    {


        data.tint.topLeft = hsv[Math.floor(i)].color;
        

        i += 0.5;

        if (i >= hsv.length)
        {
            i = 0;
        }

        return data;
    },

    showFile: function (key, type, texture)
    {
        if (key=='Gradius')
        {
            var config3 = {
            image: 'Gradius',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            offset: {y:0}
            };

            this.cache.bitmapFont.add('Gradius', Phaser.GameObjects.RetroFont.Parse(this, config3));

            hsv = Phaser.Display.Color.HSVColorWheel();

            var text = this.add.dynamicBitmapText(0, 0, 'Gradius', 'Horizon 6').setOrigin(0.5).setScale(6).setCenterAlign().setPosition(320,80);

            text.setDisplayCallback(this.textCallback);
        }        
    }

});

var Welcome = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Welcome ()
    {
        Phaser.Scene.call(this, { key: 'welcome' });
    },


    preload: function ()
    {

        

    },

    create: function ()
    {

        if (!high_scores_loaded) 
        {
            highScoreData = this.cache.json.get('high_scores');
        }
        
        

        


        if (!art_loaded)
        {
            this.loadArt();
        }
        
        demo = false;
        
        play = this.scene.get('play');

        

        // for (var i =0 ; i< texturePool.length ; i++)
        // {
        //     play.createExploderTexture(texturePool[i], this);
        // }

        
        


        var tileSize = 32;

        var randomKey1 = Math.random().toString();
        var canvasFrame = this.textures.createCanvas(randomKey1, 2*tileSize, tileSize);


        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_off, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,0,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(0, 0, 0, 0, tileSize, tileSize);

        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_on, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,32,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(1, 0, 32, 0, tileSize, tileSize);

        var sound_button = this.add.image(20, 20, randomKey1, 0).setOrigin(0.5).setScale(1).setDepth(100).setInteractive();

        if (sound_enabled) 
        {
            sound_button.setFrame(1)            
        } 
        else 
        {
            sound_button.setFrame(0)
        }

        

        sound_button.on('pointerup', function () {

            if (sound_enabled)
            {
                sound_button.setFrame(0);
                sound_enabled=false;

                
                
                loop.stop();
                
            }
            else
            {
                sound_button.setFrame(1);
                sound_enabled=true;

                loop = this.sound.addAudioSprite('loops');
                loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});
            }

        }, this);




        this.textures.generate('zoomer', { data: zoomer, pixelWidth: 2, palette: palette_cga});
        this.textures.generate('shooter', { data: shooter, pixelWidth: 2, palette: palette_cga });
        this.textures.generate('winger', { data: winger, pixelWidth: 2, palette: palette_c64 });
        this.textures.generate('waif', { data: waif, pixelWidth: 2 });
        this.textures.generate('nemesis', { data: nemesis, pixelWidth: 2 });
        this.textures.generate('carrier', { data: carrier, pixelWidth: 2 });

        
       
        this.textures.generate('pad', { data: ['A'], pixelWidth: 20, palette: palette_cga  });
        this.textures.generate('rover', { data: rover, pixelWidth: 2, palette: palette_cga  });
        this.textures.generate('lem', { data: lem, pixelWidth: 2, palette: palette_c64  });
        this.textures.generate('kitty', { data: kitty, pixelWidth: 2, palette: palette_cga  });
        
        this.textures.generate('goldwing', { data: goldwing, pixelWidth: 2, palette: palette_gold  });



        current_altitude=70;
        v_iAnimate=-1;
        h_iAnimate=-1;
        h_iAnimate_speed=1;

        play.init_lines(this,0x440044);

        play.init_mountains(this);

        //hide mountain bottoms/demarcate horizon;
        this.add.rectangle(0, horizonOffset-2, 640, 2, 0x000000).setOrigin(0,0);

        play.init_sprites(this);

        Phaser.Actions.SetAlpha(mountainsArray, 0);
        Phaser.Actions.SetAlpha(surfaceSpritesArray, 0);




        
        var config1 = {
            image: 'Last Duel',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:24}
        };

        var config2 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:16}
        };

        var config3 = {
            image: 'Gradius',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            offset: {y:0}
        };

        var config4 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            offset: {y:8}
        };

        var config5 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 96,
            spacing: { x: 0, y: 0 },
            offset: {y:40}
        };

        this.cache.bitmapFont.add('Last Duel', Phaser.GameObjects.RetroFont.Parse(this, config1));
        this.cache.bitmapFont.add('Wonder Boy', Phaser.GameObjects.RetroFont.Parse(this, config2));
        this.cache.bitmapFont.add('Gradius', Phaser.GameObjects.RetroFont.Parse(this, config3));
        this.cache.bitmapFont.add('Wonder Boy dir', Phaser.GameObjects.RetroFont.Parse(this, config4));
        this.cache.bitmapFont.add('Wonder Boy scores', Phaser.GameObjects.RetroFont.Parse(this, config5));


        

        











        hsv = Phaser.Display.Color.HSVColorWheel();

        var text = this.add.dynamicBitmapText(0, 0, 'Gradius', 'Horizon 6').setOrigin(0.5).setScale(6).setCenterAlign().setPosition(320,80).setDepth(100).setInteractive();

        text.setDisplayCallback(this.textCallback);

        
        


        
        

        
        
        

        

        var creditText = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', "2020 pat o^reilly").setOrigin(0.5).setScale(0.0).setCenterAlign().setDepth(100).setPosition(320,350);

        this.tweenThingScale (creditText, 2, 3000, this);



        text.on('pointerup', function () {

            var getReadyText = this.add.dynamicBitmapText(0, 0, 'Last Duel', 'Get Ready!').setOrigin(0.5).setScale(2).setCenterAlign().setDepth(100).setPosition(320,30);

            this.time.addEvent({ delay: 3000, callback: this.goto_level_init, callbackScope: this, repeat: 0 });

        }, this);


        this.infoTweens();
        this.time.addEvent({ delay: 80000, callback: this.infoTweens, callbackScope: this, repeat: -1 });



    },

    

    toggleDemo: function ()
    {
        demo = !demo;
        if (demo)
        {
            numtween_a = this.tweens.addCounter({
            from: .2,
            to: -.2,
            duration: 20000,
            yoyo: true,
            repeat:1.5
            });

            numtween_h = this.tweens.addCounter({
            from: .4,
            to: -.4,
            duration: 20000,
            yoyo: true,
            repeat:1.5
            });

            this.tweens.add({
            targets: mountainsArray,
            // x: destX,
            // y: destY,
            // scaleX: 2,
            // scaleY: 2,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            delay: 0

            } );

            this.tweens.add({
            targets: surfaceSpritesArray,
            // x: destX,
            // y: destY,
            // scaleX: 2,
            // scaleY: 2,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            delay: 0

            } );
        }
        else
        {

            this.tweens.add({
            targets: mountainsArray,
            // x: destX,
            // y: destY,
            // scaleX: 2,
            // scaleY: 2,
            alpha: 0,
            ease: 'Power1',
            duration: 1000

            } );

            this.tweens.add({
            targets: surfaceSpritesArray,
            // x: destX,
            // y: destY,
            // scaleX: 2,
            // scaleY: 2,
            alpha: 0,
            ease: 'Power1',
            duration: 1000

            } );

            play.init_mountains(this);

            //hide mountain bottoms/demarcate horizon;
            this.add.rectangle(0, horizonOffset-2, 640, 2, 0x000000).setOrigin(0,0);

            Phaser.Actions.SetAlpha(mountainsArray, 0);
        }
        

        
    },

    infoTweens: function ()
    {
        
        this.time.addEvent({ delay: 40000, callback: this.toggleDemo, callbackScope: this, repeat: 0 });
        this.time.addEvent({ delay: 80000, callback: this.toggleDemo, callbackScope: this, repeat: 0 });

        var baddieSprite1 = this.add.image(100, 20, 'zoomer').setScale(0.0);        
        var baddieSprite2 = this.add.image(200, 20, 'shooter').setScale(0.0);        
        var baddieSprite3 = this.add.image(300, 20, 'winger').setScale(0.0);        
        var baddieSprite4 = this.add.image(400, 20, 'waif').setScale(0.0);       
        var baddieSprite5 = this.add.image(500, 20, 'nemesis').setScale(0.0);        
        var baddieSprite6 = this.add.image(600, 20, 'carrier').setScale(0.0);

        var helperSprite1 = this.add.image(160, 240, 'pad').setOrigin(.5,1.0).setScale(0.0);
        var helperSprite2 = this.add.sprite(320, 240, 'rover ss').play('rover animation').setOrigin(.5,1.0).setScale(0.0);
        var helperSprite3 = this.add.sprite(460, 240, 'lem ss').play('lem animation').setOrigin(.5,1.0).setScale(0.0);
        var helperSprite4 = this.add.sprite(500, 240, 'kitty ss').play('kitty animation').setOrigin(.5,1.0).setScale(0.0);

        this.textures.generate('dh_arrow', { data: guideInputHorizontalData, pixelWidth: 2});
        this.textures.generate('dv_arrow', { data: guideInputVerticalData, pixelWidth: 2});

        var dguide_left = this.add.image(520,216,'dh_arrow').setAlpha(0);
        var dguide_right = this.add.image(600,216,'dh_arrow').toggleFlipX().setAlpha(0);

        var dguide_up = this.add.image(560,176,'dv_arrow').setAlpha(0);
        var dguide_down = this.add.image(560,256,'dv_arrow').toggleFlipY().setAlpha(0);

        var dguide_forward = this.add.image(80,176,'dv_arrow').setAlpha(0);
        var dguide_back = this.add.image(80,256,'dv_arrow').toggleFlipY().setAlpha(0);


        var zoomerText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '100').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(160,170);
        var shooterText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '200').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,170);
        var wingerText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '300').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(480,170);
        var waifText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '400').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(160,285);
        var nemesisText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '500').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,285);
        var carrierText = this.add.dynamicBitmapText(0, 0, 'Last Duel', '600').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(480,285);

        var directionsText1 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'zap baddies to get points').setOrigin(0.5,1.0).setScale(0).setCenterAlign().setPosition(320,155);
        var directionsText2 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'fly at low elevation over\nthese items to make contact').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);
        var directionsText3 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'fly at high elevation in one\ndirection to help locate them').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);
        if (touchActivated)
        {
            var directionsText4 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'lateral movement and descend/climb\ntouch: right thumb').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);
            var directionsText5 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'change direction between forward/back\ntouch: left thumb').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);
        
        }
        else
        {
            var directionsText4 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'lateral movement and descend/climb\nkeyboard: W,A,S,D').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);
            var directionsText5 = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'change direction between forward/back\nkeyboard: E,C').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155);        
        }
        
        var d1Text = this.add.dynamicBitmapText(0, 0, 'Wonder Boy dir', 'clear level').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(160,260);
        var d2Text = this.add.dynamicBitmapText(0, 0, 'Wonder Boy dir', 'fuel/ammo').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,260);
        var d3Text = this.add.dynamicBitmapText(0, 0, 'Wonder Boy dir', 'rescue bonus').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(480,260);


        var hs_slot = [];
        
        var u=-1;

        for (var y in highScoreData)
        {
            u++;
            var info = y + ': ' + highScoreData[y];
            hs_slot[u] = this.add.dynamicBitmapText(0, 0, 'Wonder Boy scores', info).setOrigin(0.5).setScale(0).setCenterAlign().setDepth(100).setPosition(320,130+(20*u));

            thresholdScore = highScoreData[y];
        }

        //get display width of top scorer
        hs_slot[0].setScale(1);
        var xadj = hs_slot[0].width*1.25;
        hs_slot[0].setScale(0);

        var goldwing_left = this.add.image(320-xadj,128, 'goldwing').setScale(0).setDepth(100).toggleFlipX();
        var goldwing_right = this.add.image(320+xadj,128, 'goldwing').setScale(0).setDepth(100);


        var phaserjam = this.add.image(320,165, 'phaser jam logo').setOrigin(0.5, 0).setScale(0).setDepth(100);
        var phaserText = this.add.dynamicBitmapText(0, 0, 'Wonder Boy', 'made with PHASER\nfor NEWGROUNDS #phaserjam').setOrigin(0.5).setScale(0).setCenterAlign().setPosition(320,155).setDepth(100);

        var thickness = 2;
        var color = 0x00ff00;
        var alpha = 1;

        var demo_rect = this.add.rectangle(320, 200, 120, 50).setStrokeStyle(thickness, color, alpha).setOrigin(0.5,0).setScale(0).setDepth(100);

        var demo_hud_a = this.add.line();

            demo_hud_a.setOrigin(0);
            demo_hud_a.setStrokeStyle( 1, 0xff0000);
            
            demo_hud_a.setLineWidth(6,1);
            demo_hud_a.setDepth(100);
            demo_hud_a.setTo(320,225,380,225);
            demo_hud_a.setAlpha(0);
            //demo_hud_a.setScale(0);

        var demo_hud_b = this.add.line();

            demo_hud_b.setOrigin(0);
            demo_hud_b.setStrokeStyle( 1, 0x0000ff);
            
            demo_hud_b.setLineWidth(1,6);
            demo_hud_b.setDepth(100);
            demo_hud_b.setTo(320,200,320,225);
            demo_hud_b.setAlpha(0);
            //demo_hud_b.setScale(0);

        var demo_hud_c1 = this.add.line(320,200);

            //hud_c.setOrigin(0);
            demo_hud_c1.setStrokeStyle( 1, 0xff00ff);
            
            demo_hud_c1.setLineWidth(4,4);
            demo_hud_c1.setDepth(100);
            demo_hud_c1.setAlpha(0);
            //demo_hud_c1.setScale(0);

        var demo_hud_c2 = this.add.line(320,250);

            //hud_c.setOrigin(0);
            demo_hud_c2.setStrokeStyle( 1, 0xff00ff);
            
            demo_hud_c2.setLineWidth(4,4);
            demo_hud_c2.setDepth(100);
            demo_hud_c2.setAlpha(0);
            //demo_hud_c2.setScale(0);    



        this.tweenThingScale (directionsText1, 2, 4500, this);
        this.tweenThing (baddieSprite1, 160, 190, 1000, this);
        this.tweenThing (baddieSprite2, 320, 190, 1100, this);
        this.tweenThing (baddieSprite3, 480, 190, 1200, this);
        this.tweenThing (baddieSprite4, 160, 250, 1300, this);
        this.tweenThing (baddieSprite5, 320, 250, 1400, this);
        this.tweenThing (baddieSprite6, 480, 240, 1500, this);

        this.tweenThingScale (zoomerText, 2, 5150, this);
        this.tweenThingScale (shooterText, 2, 5250, this);
        this.tweenThingScale (wingerText, 2, 5350, this);
        this.tweenThingScale (waifText, 2, 5450, this);
        this.tweenThingScale (nemesisText, 2, 5550, this);
        this.tweenThingScale (carrierText, 2, 5650, this);

        this.tweenThingScale (baddieSprite1, 0, 10000, this);
        this.tweenThingScale (baddieSprite2, 0, 10000, this);
        this.tweenThingScale (baddieSprite3, 0, 10000, this);
        this.tweenThingScale (baddieSprite4, 0, 10000, this);
        this.tweenThingScale (baddieSprite5, 0, 10000, this);
        this.tweenThingScale (baddieSprite6, 0, 10000, this);
        this.tweenThingScale (zoomerText, 0, 10000, this);
        this.tweenThingScale (shooterText, 0, 10000, this);
        this.tweenThingScale (wingerText, 0, 10000, this);
        this.tweenThingScale (waifText, 0, 10000, this);
        this.tweenThingScale (nemesisText, 0, 10000, this);
        this.tweenThingScale (carrierText, 0, 10000, this);
        this.tweenThingScale (directionsText1, 0, 10000, this);

        this.tweenThingScale (directionsText2, 2, 12000, this);

        this.tweenThingScale (helperSprite1, 2, 12500, this);
        this.tweenThingScale (helperSprite2, 2, 13000, this);
        this.tweenThingScale (helperSprite3, 2, 13500, this);
        this.tweenThingScale (helperSprite4, 2, 13500, this);

        this.tweenThingScale (d1Text, 1.5, 12500, this);
        this.tweenThingScale (d2Text, 1.5, 13000, this);
        this.tweenThingScale (d3Text, 1.5, 13500, this);

        this.tweenThingScale (directionsText2, 0, 18000, this);
        this.tweenThingScale (directionsText3, 2, 18500, this);

        this.tweenThingScale (directionsText3, 0, 23500, this);
        this.tweenThingScale (helperSprite1, 0, 23000, this);
        this.tweenThingScale (helperSprite2, 0, 23000, this);
        this.tweenThingScale (helperSprite3, 0, 23000, this);
        this.tweenThingScale (helperSprite4, 0, 23000, this);
        this.tweenThingScale (d1Text, 0, 23000, this);
        this.tweenThingScale (d2Text, 0, 23000, this);
        this.tweenThingScale (d3Text, 0, 23000, this);

        this.tweenThingScale (directionsText4, 2, 25000, this);
        this.tweenThingScale (demo_rect, 1, 25500, this);
        this.tweenThingAlpha (demo_hud_a, 1, 25500, this);
        this.tweenThingAlpha (demo_hud_b, 1, 25500, this);
        if (touchActivated)
        {
            this.tweenThingAlpha (dguide_left, 1, 25500, this);
            this.tweenThingAlpha (dguide_right, 1, 25500, this);
            this.tweenThingAlpha (dguide_up, 1, 25500, this);
            this.tweenThingAlpha (dguide_down, 1, 25500, this);
        }
        

        this.tweenThingScale (directionsText4, 0, 31000, this);
        //this.tweenThingAlpha (demo_hud_a, 0, 31000, this);
        //this.tweenThingAlpha (demo_hud_b, 0, 31000, this);


        this.tweenThingScale (directionsText5, 2, 31500, this);
        this.tweenThingAlpha (demo_hud_c1, 1, 32000, this);
        this.tweenThingAlpha (demo_hud_c2, 1, 32000, this);
        if (touchActivated)
        {
            this.tweenThingAlpha (dguide_forward, 1, 32000, this);
            this.tweenThingAlpha (dguide_back, 1, 32000, this);
        }
        

        this.tweenThingScale (directionsText5, 0, 37500, this);
        //this.tweenThingAlpha (demo_hud_c1, 0, 37500, this);
        //this.tweenThingAlpha (demo_hud_c2, 0, 37500, this);
        this.tweenThingScale (demo_rect, 0, 37500, this);

        this.tweenThingScale (goldwing_left, 1, 39500, this);
        this.tweenThingScale (goldwing_right, 1, 39500, this);
        for (var y=0; y<=u; y++)
        {
             this.tweenThingScale (hs_slot[y], 2, 39500, this);
        }

        this.tweenThingScale (goldwing_left, 0, 70000, this);
        this.tweenThingScale (goldwing_right, 0, 70000, this);
        for (var y=0; y<=u; y++)
        {
             this.tweenThingScale (hs_slot[y], 0, 70000, this);
        }

        this.tweenThingScale (phaserjam, .6, 70500, this);
        this.tweenThingScale (phaserText, 2, 70500, this);
        this.tweenThingScale (phaserjam, 0, 79500, this);
        this.tweenThingScale (phaserText, 0, 79500, this);

        
    },


    goto_level_init: function ()
    {
        //loop.stop();
        this.scene.start('init_level', { level_num: 1})

    },

    update: function (time)
    {
        if (demo)
        {
            var h_iAnimate_speed=3.0;
            horizonDelta = numtween_h.getValue();
            altitudeDelta = numtween_a.getValue();
        
            v_iAnimate+=4*horizonDelta;


            current_altitude+= Math.pow( ((100-current_altitude)/100 + (100-current_altitude)/100),2 ) * altitudeDelta;
            if(current_altitude<25) {current_altitude=25}
            if(current_altitude>85) {current_altitude=85}
        }
        else
        {
            var h_iAnimate_speed=1;
            v_iAnimate++;
        }

        
       

        
        if (v_iAnimate >0 && v_iAnimate>=v_animation_steps) 
        {
            v_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.x_dim==99) {_sprite.x_dim = 0}
                    else {_sprite.x_dim+=1}

                } );            
        }
        if (v_iAnimate <0 && -v_iAnimate>=v_animation_steps) 
        {
            v_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.x_dim==0) {_sprite.x_dim = 99}
                    else {_sprite.x_dim-=1}

                } );     
        }
        h_iAnimate+=h_iAnimate_speed;

        if (h_iAnimate >0 && h_iAnimate>=h_animation_steps) 
        {
            h_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.z_dim==99) {_sprite.z_dim = 0}
                    else {_sprite.z_dim+=1}

                    _sprite.depth = _sprite.z_dim;
                } );
        }
        if (h_iAnimate <0 && -h_iAnimate>=h_animation_steps)
        {
            h_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.z_dim==0) {_sprite.z_dim = 99}
                    else {_sprite.z_dim-=1}

                    _sprite.depth = _sprite.z_dim;
                } );
        }

            play.updateHorizontal();
            play.updateVerticle();

            play.updateMountains();

            if (demo)
            {
                play.updateSurfaceSprites();
            }
            
        
            


            // if (v_iAnimate >0 && v_iAnimate>=v_animation_steps) 
            // {
            //     v_iAnimate = 0;
            // }
            // if (v_iAnimate <0 && -v_iAnimate>=v_animation_steps) 
            // {
            //     v_iAnimate = 0;
            // }

            // h_iAnimate+=2;
            // if (h_iAnimate >0 && h_iAnimate>=h_animation_steps) 
            // {
            //     h_iAnimate = 0;
            // }
            // if (h_iAnimate <0 && -h_iAnimate>=h_animation_steps)
            // {
            //     h_iAnimate = 0;
            // }
        



        hexdigit1 += hex1increment;
        hexdigit2 += hex2increment;
        hexdigit3 += hex3increment;


        if (hexdigit1 <40 || hexdigit1 >240) {hex1increment*=-1};

        if (hexdigit2 <40 || hexdigit2 >240) {hex2increment*=-1};

        if (hexdigit3 <40 || hexdigit3 >240) {hex3increment*=-1};



        var newtint = ( (hexdigit1 * 65536) + (hexdigit2 * 256) + (hexdigit3) );

        for (var i=0; i<100; i++)
        {
            hlinesArray[i].setStrokeStyle(1,newtint);
            vlinesArray[i].setStrokeStyle(1,newtint);
        }

    },
    tweenThing: function (thing, destX, destY, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: thing,
            x: destX,
            y: destY,
            scaleX: 2,
            scaleY: 2,
            //angle: 720,
            ease: 'Power1',
            duration: 1500,
            delay: _delay
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            // onComplete: function () { console.log('onComplete'); console.log(arguments); },
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    tweenThingAlpha: function (thing, _alpha, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: thing,
            // x: destX,
            // y: destY,
            // scaleX: 2,
            // scaleY: 2,
            alpha: _alpha,
            ease: 'Power1',
            duration: 500,
            delay: _delay,
            yoyo: true,
            repeat: 4,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            // onComplete: function () { console.log('onComplete'); console.log(arguments); },
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    tweenThingScale: function (thing, _scale, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: thing,
            scale: _scale,
            //ease: 'Power1',
            duration: 200,
            delay: _delay
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            //onComplete: function () { _text.destroy(); }
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    textCallback: function (data) 
    {


        data.tint.topLeft = hsv[Math.floor(i)].color;
        

        i += 0.5;

        if (i >= hsv.length)
        {
            i = 0;
        }

        return data;
    },

    loadArt: function () 
    {
    
        var data2 = this.cache.json.get('animation_data'); 
        var palettesArray = [palette_cga,palette_c64,palette_arne16,palette_jmp];

        var frames = data2[1].frames;
        var tileSize = 20;
        //var randomKey1 = Math.random().toString();

        var canvasFrame = this.textures.createCanvas('lem ss', tileSize*frames.length, tileSize);
        
        var thisPalette = palettesArray[data2[1].palette];

        for (var f = 0; f< frames.length; f++)
        {
            var frameArray = [];
            bData = frames[f];

            for (var y = 0; y < bData.length; y++)
            {           
                frameArray.push(bData[y].join(''));
            }

            var randomKey2 = Math.random().toString();
            var test = this.textures.generate(randomKey2, { data: frameArray, pixelWidth: 2, palette: thisPalette});

            //draw the texture data for this frame into the sprite sheet
            canvasFrame.drawFrame(randomKey2,0,f*tileSize,0);
            //add the frame data for this frame into the sprite sheet
            canvasFrame.add(f+1, 0, f*tileSize, 0, tileSize, tileSize);
        }
        
        //  Let's create an animation from the new frames
        //var randomKey3 = Math.random().toString();

        this.anims.create({
            key: 'lem animation',
            frames: this.anims.generateFrameNumbers('lem ss', { start: 1, end: frames.length }),
            frameRate: 14,
            repeat: -1
            //yoyo: true
        });

        //this.add.sprite(20, 250, 'lem ss').play('lem animation').setOrigin(.5,1.0);


        frames = data2[0].frames;
        tileSize = 32;
        //var randomKey1 = Math.random().toString();

        canvasFrame = this.textures.createCanvas('rover ss', tileSize*frames.length, tileSize);
        
        thisPalette = palettesArray[data2[0].palette];

        for (var f = 0; f< frames.length; f++)
        {
            var frameArray = [];
            bData = frames[f];

            for (var y = 0; y < bData.length; y++)
            {           
                frameArray.push(bData[y].join(''));
            }

            var randomKey2 = Math.random().toString();
            var test = this.textures.generate(randomKey2, { data: frameArray, pixelWidth: 2, palette: thisPalette});

            //draw the texture data for this frame into the sprite sheet
            canvasFrame.drawFrame(randomKey2,0,f*tileSize,0);
            //add the frame data for this frame into the sprite sheet
            canvasFrame.add(f+1, 0, f*tileSize, 0, tileSize, tileSize);
        }
        
        //  Let's create an animation from the new frames
        //var randomKey3 = Math.random().toString();

        this.anims.create({
            key: 'rover animation',
            frames: this.anims.generateFrameNumbers('rover ss', { start: 1, end: frames.length }),
            frameRate: 14,
            repeat: -1
            //yoyo: true
        });



        frames = data2[2].frames;
        tileSize = 32;
        //var randomKey1 = Math.random().toString();

        canvasFrame = this.textures.createCanvas('kitty ss', tileSize*frames.length, tileSize);
        
        thisPalette = palettesArray[data2[2].palette];

        for (var f = 0; f< frames.length; f++)
        {
            var frameArray = [];
            bData = frames[f];

            for (var y = 0; y < bData.length; y++)
            {           
                frameArray.push(bData[y].join(''));
            }

            var randomKey2 = Math.random().toString();
            var test = this.textures.generate(randomKey2, { data: frameArray, pixelWidth: 2, palette: thisPalette});

            //draw the texture data for this frame into the sprite sheet
            canvasFrame.drawFrame(randomKey2,0,f*tileSize,0);
            //add the frame data for this frame into the sprite sheet
            canvasFrame.add(f+1, 0, f*tileSize, 0, tileSize, tileSize);
        }
        
        //  Let's create an animation from the new frames
        //var randomKey3 = Math.random().toString();

        this.anims.create({
            key: 'kitty animation',
            frames: this.anims.generateFrameNumbers('kitty ss', { start: 1, end: frames.length }),
            frameRate: 7,
            repeat: -1
            //yoyo: true
        });



        art_loaded = true;

        //this.add.sprite(20, 280, 'rover ss').play('rover animation').setOrigin(.5,1.0);

    }




});


var InitLevel = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function InitLevel ()
    {
        Phaser.Scene.call(this, { key: 'init_level' });
    },

    init: function (data)
    {
        // console.log('init', data);

        this.level_num = data.level_num;
        
    },

    preload: function ()
    {
        





    },

    create: function ()
    {

        var tileSize = 32;

        var randomKey1 = Math.random().toString();
        var canvasFrame = this.textures.createCanvas(randomKey1, 2*tileSize, tileSize);


        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_off, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,0,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(0, 0, 0, 0, tileSize, tileSize);

        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_on, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,32,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(1, 0, 32, 0, tileSize, tileSize);

        var sound_button = this.add.image(20, 20, randomKey1, 0).setOrigin(0.5).setScale(1).setDepth(100).setInteractive();

        if (sound_enabled) 
        {
            sound_button.setFrame(1)            
        } 
        else 
        {
            sound_button.setFrame(0)
        }

        

        sound_button.on('pointerup', function () {

            if (sound_enabled)
            {
                sound_button.setFrame(0);
                sound_enabled=false;

                
                
                loop.stop();
                
            }
            else
            {
                sound_button.setFrame(1);
                sound_enabled=true;

                loop = this.sound.addAudioSprite('loops');
                loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});
            }

        }, this);


        var config = {
            image: 'Last Duel',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:32}
        };

        this.cache.bitmapFont.add('Last Duel', Phaser.GameObjects.RetroFont.Parse(this, config));

        var config2 = {
            image: 'Last Duel',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 91,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:16}
        };

        this.cache.bitmapFont.add('Last Duel_2', Phaser.GameObjects.RetroFont.Parse(this, config2));

        var d_base=0;

        var ls = this.add.sprite(0, 0, 'lem ss').play('lem animation').setOrigin(.5,1.0).setScale(2).setAlpha(0);
        var lt = this.add.dynamicBitmapText(0, 0, 'Last Duel', '1000').setOrigin(0.5).setScale(2).setAlpha(0).setCenterAlign();

        var ks = this.add.sprite(0, 0, 'kitty ss').play('kitty animation').setOrigin(.5,1.0).setScale(2).setAlpha(0);
        var kt = this.add.dynamicBitmapText(0, 0, 'Last Duel', '1000').setOrigin(0.5).setScale(2).setAlpha(0).setCenterAlign();



        if (rescueBonus>0)
        {
            var bonusText = this.add.dynamicBitmapText(0, 0, 'Last Duel', 'Rescue Bonus!').setOrigin(0.5).setScale(2).setCenterAlign().setPosition(320,100);

            var v_base = 160;
            d_base = 4000;

            if (lemRescued) 
            {
                ls.setPosition(280,v_base);
                lt.setPosition(360,v_base);
                
                this.tweenThingAlpha(ls, 1, 100, this);
                this.tweenThingAlpha(lt, 1, 100, this);
                this.tweenThingAlpha(ls, 0, 4000, this);
                this.tweenThingAlpha(lt, 0, 4000, this);

                v_base = 220;
            }

            if (kittyRescued)
            {
                ks.setPosition(280,v_base);
                kt.setPosition(360,v_base);

                this.tweenThingAlpha(ks, 1, 100, this);
                this.tweenThingAlpha(kt, 1, 100, this);
                this.tweenThingAlpha(ks, 0, 4000, this);
                this.tweenThingAlpha(kt, 0, 4000, this);
            }

            score+=rescueBonus;
            this.tweenThingAlpha(bonusText, 0, 4000, this);

            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'bonus') }
            

        }

        

        
        var getReadyText = this.add.dynamicBitmapText(0, 0, 'Last Duel', 'Loading Level').setOrigin(0.5).setScale(2).setAlpha(0).setCenterAlign().setPosition(320,100);
        var getReadyText2 = this.add.dynamicBitmapText(0, 0, 'Last Duel_2', this.level_num).setOrigin(0.5,0.0).setScale(0).setCenterAlign().setPosition(320,120);

        this.tweenThingAlpha(getReadyText, 10, d_base, this);
        this.tweenThingScale(getReadyText2, 10, d_base+100, this);

        

        if (sound_enabled) 
        {
            this.time.addEvent({ delay: d_base, callback: this.beginLevelSound, callbackScope: this, repeat: 0 });
        }

        this.time.addEvent({ delay: d_base+1000, callback: this.beginLevel, callbackScope: this, repeat: 0 });
    },

    beginLevelSound: function ()
    {
        this.sound.playAudioSprite('sfx', 'level init')
    },

    beginLevel: function ()
    {
        var hexdigit1 = Phaser.Math.Between(0, 255);
        var hexdigit2 = Phaser.Math.Between(0, 255);
        var hexdigit3 = Phaser.Math.Between(0, 255);

        var rndcolor1 = ( (hexdigit1 * 65536) + (hexdigit2 * 256) + (hexdigit3) );

        this.scene.start('play', { level_num: this.level_num, color_scheme: rndcolor1 })
    },

    tweenThingScale: function (_thing, _scale, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: _thing,
            scale: _scale,
            ease: 'Power1',
            duration: 1000,
            delay: _delay
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            //onComplete: function () { _text.destroy(); }
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    tweenThingAlpha: function (_thing, _alpha, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: _thing,
            alpha: _alpha,
            ease: 'Power1',
            duration: 100,
            delay: _delay
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            //onComplete: function () { _text.destroy(); }
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    }


});

var Play = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Play ()
    {
        Phaser.Scene.call(this, { key: 'play' });
    },

    init: function (data)
    {
        // console.log('init', data);

        this.level_num = data.level_num;
        this.color_scheme = data.color_scheme;
        
        
    },

    preload: function ()
    {
        
        
    },

    create: function ()
    {

    var tileSize = 32;

        var randomKey1 = Math.random().toString();
        var canvasFrame = this.textures.createCanvas(randomKey1, 2*tileSize, tileSize);


        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_off, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,0,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(0, 0, 0, 0, tileSize, tileSize);

        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_on, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,32,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(1, 0, 32, 0, tileSize, tileSize);

        var sound_button = this.add.image(20, 20, randomKey1, 0).setOrigin(0.5).setScale(1).setDepth(100).setInteractive();

        if (sound_enabled) 
        {
            sound_button.setFrame(1)            
        } 
        else 
        {
            sound_button.setFrame(0)
        }

        

        sound_button.on('pointerup', function () {

            if (sound_enabled)
            {
                sound_button.setFrame(0);
                sound_enabled=false;

                
                
                loop.stop();
                
            }
            else
            {
                sound_button.setFrame(1);
                sound_enabled=true;

                loop = this.sound.addAudioSprite('loops');
                loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});
            }

        }, this);



    fuel=50;
    ammo=50;

    if (this.level_num<10)
    {
        numPads=this.level_num;
    }
    else
    {
        numPads=10;
    }
    
    supplied = false;
    rescueBonus = 0;
    kittyRescued = false;
    lemRescued = false;
    levelComplete = false;
    roverKilled = false;
    lemKilled = false;
    kittyKilled = false;    
        
    this.textures.generate('laser', { data: laser, pixelWidth: 1, palette: palette_arne16});

    currentExplosions = [];
    current_altitude=70;
    v_iAnimate=-1;
    h_iAnimate=-1;
    h_iAnimate_speed=5;

    this.init_lines(this,this.color_scheme);
    this.init_mountains(this);

    //hide mountain bottoms/demarcate horizon;
    this.add.rectangle(0, horizonOffset-2, 640, 2, 0x000000).setOrigin(0,0);

    this.init_pads(this);
    this.init_sprites(this);

///music
    if (this.level_num>1)
    {
        var loop_key = 'loop'+Phaser.Math.Between(0, 15);//(this.level_num-1)%3;
        loop = this.sound.addAudioSprite('loops');
        if (sound_enabled) {loop.play(loop_key, {loop: true});}
    }
    


////hud

    var config = {
        image: 'Last Duel',
        width: 8,
        height: 8,
        chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
        charsPerRow: 91,
        spacing: { x: 0, y: 0 },
        lineSpacing: 8,
        offset: {y:32}
    };

    var config2 = {
        image: 'Last Duel',
        width: 8,
        height: 8,
        chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
        charsPerRow: 91,
        spacing: { x: 0, y: 0 },
        lineSpacing: 8,
        offset: {y:8}
    };

    var config3 = {
        image: 'Last Duel',
        width: 8,
        height: 8,
        chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
        charsPerRow: 91,
        spacing: { x: 0, y: 0 },
        lineSpacing: 8,
        offset: {y:16}
    };

    var config4 = {
        image: 'Last Duel',
        width: 8,
        height: 8,
        chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
        charsPerRow: 91,
        spacing: { x: 0, y: 0 },
        lineSpacing: 8,
        offset: {y:0}
    };

    var config5 = {
        image: 'Last Duel',
        width: 8,
        height: 8,
        chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
        charsPerRow: 91,
        spacing: { x: 0, y: 0 },
        lineSpacing: 8,
        offset: {y:24}
    };

    this.cache.bitmapFont.add('Last Duel', Phaser.GameObjects.RetroFont.Parse(this, config));
    this.cache.bitmapFont.add('Last Duel_2', Phaser.GameObjects.RetroFont.Parse(this, config2));
    this.cache.bitmapFont.add('Last Duel_3', Phaser.GameObjects.RetroFont.Parse(this, config3));
    this.cache.bitmapFont.add('Last Duel_4', Phaser.GameObjects.RetroFont.Parse(this, config4));
    this.cache.bitmapFont.add('Last Duel_5', Phaser.GameObjects.RetroFont.Parse(this, config5));

    //fuelText = this.add.dynamicBitmapText(30, 300, 'Last Duel', 'fuel:').setScale(1.5).setDepth(100);

    fuelnumText = this.add.dynamicBitmapText(55, 300, 'Last Duel_2', '50').setScale(4).setAlpha(0.6).setDepth(100);

    //ammoText = this.add.dynamicBitmapText(30, 320, 'Last Duel', 'ammo:').setScale(1.5).setDepth(100);

    ammonumText = this.add.dynamicBitmapText(180, 300, 'Last Duel_3', '50').setScale(4).setAlpha(0.6).setDepth(100);


    //altText = this.add.dynamicBitmapText(30, 340, 'Last Duel', 'altitude:').setScale(1.5).setDepth(100);
    altnumText = this.add.dynamicBitmapText(256, 285, 'Last Duel_3').setScale(1).setDepth(100);

    //scoreText = this.add.dynamicBitmapText(440, 340, 'Last Duel', 'score:').setScale(1.5).setDepth(100);
    scorenumText = this.add.dynamicBitmapText(440, 330, 'Last Duel_4', score).setScale(3).setDepth(100);

    for (var i=0; i<6; i++)
    {
        ztext[i] = this.add.dynamicBitmapText(440, 300, 'Last Duel_5', (i+1)*100).setScale(0).setDepth(100);
    }
    

    saveFuelTime = game.loop.time;


    contactAlert = this.add.dynamicBitmapText(0, 0, 'Last Duel_4', '---').setOrigin(.5).setScale(1).setCenterAlign().setPosition(319, 179).setDepth(100);
    
    //xtext = this.add.dynamicBitmapText(440, 320, 'Last Duel', 'xdim:').setScale(1.5).setDepth(100);
    // padz = this.add.dynamicBitmapText(350, 300, 'Last Duel', 'padz:').setScale(1.5).setDepth(100);
    // padx = this.add.dynamicBitmapText(350, 320, 'Last Duel', 'padx:').setScale(1.5).setDepth(100);

    this.textures.generate('fuel_icon', { data: fuel_icon, pixelWidth: 2 });
    this.textures.generate('ammo_icon', { data: ammo_icon, pixelWidth: 2 });
        
    this.add.image(30, 300, 'fuel_icon').setOrigin(.5,0).setAlpha(0.6).setDepth(100);
    this.add.image(150, 300, 'ammo_icon').setOrigin(.5,0).setAlpha(0.6).setDepth(100);
        
        
    
    var thickness = 1;
    var color = 0x00ff00;
    var alpha = 1;

    this.add.rectangle(320, 300, 120, 50).setStrokeStyle(thickness, color, alpha).setOrigin(0.5,0).setDepth(100);

    hud_a = this.add.line();

        hud_a.setOrigin(0);
        hud_a.setStrokeStyle( 1, 0xff0000);
        hud_a.setAlpha(0.6);
        hud_a.setLineWidth(6,1);
        hud_a.setDepth(100);
        hud_a.setTo(320,325,320,325);

    hud_b = this.add.line();

        hud_b.setOrigin(0);
        hud_b.setStrokeStyle( 1, 0x0000ff);
        hud_b.setAlpha(0.6);
        hud_b.setLineWidth(1,6);
        hud_b.setDepth(100);
        hud_b.setTo(320,325,320,325);

    hud_c = this.add.line(320,300);

        //hud_c.setOrigin(0);
        hud_c.setStrokeStyle( 1, 0xff00ff);
        hud_c.setAlpha(0.6);
        hud_c.setLineWidth(4,4);
        hud_c.setDepth(100);

    hud_d1 = this.add.line();

        hud_d1.setOrigin(0);
        hud_d1.setStrokeStyle( 1, 0xddff00);
        hud_d1.setAlpha(0.6);
        hud_d1.setLineWidth(4,4);
        hud_d1.setDepth(100);
        hud_d1.setTo(260,350,260,300);

    hud_d2 = this.add.line();

        hud_d2.setOrigin(0);
        hud_d2.setStrokeStyle( 1, 0xddff00);
        hud_d2.setAlpha(0.6);
        hud_d2.setLineWidth(4,4);
        hud_d2.setDepth(100);
        hud_d2.setTo(380,350,380,300);

        //hud_c.setTo(560,300);    
        
    

    var randomKey = Math.random().toString();
    this.textures.generate(randomKey, { data: ['A'], pixelWidth: 2, palette: palette_cga});
        

    for (var i=0;i<numPads;i++)
    {

        hudPads[i] = this.add.image(24+23*i, 346, randomKey).setScale(6).setAlpha(.6);

    }    
        

/////////////////////////////////////////////

    // texturePool = [{name: 'zoomer', t:zoomer, p:palette_cga}, {name: 'shooter', t:shooter, p:palette_cga}, 
    //                 {name: 'winger', t:winger, p:palette_c64}, {name: 'waif', t:waif, p:palette_arne16}, 
    //                 {name: 'nemesis', t:nemesis, p:palette_arne16}, {name: 'carrier', t:carrier, p:palette_arne16}];

    for (var i =0 ; i< texturePool.length ; i++)
    {
        this.createExploderTexture(texturePool[i], this);
    }

    
    if (touchActivated)
    {
        ////////////////// touch gui 
        this.input.addPointer(2);

        this.textures.generate('chunk', { data: ['A'], pixelWidth: 1});

        guide_multi = this.add.image(560,216,'chunk').setDisplaySize(128, 128).setAlpha(.1).setInteractive().setDepth(200);
        guide_multi.name = "guide";
        guide_multi.on('pointermove', function () {
            altitudeDelta = -guide_multi.input.localY+.5;
            horizonDelta = guide_multi.input.localX-.5;
        }, this);
        //guide_multi.on('pointerout', function () {guide_multi_activeY = .5}, this);

        guide_zspeed = this.add.image(80,216,'chunk').setDisplaySize(64, 128).setAlpha(.1).setInteractive().setDepth(200);
        guide_zspeed.name = "guide";
        guide_zspeed.on('pointermove', function () {
            forwardbackDelta = guide_zspeed.input.localY-.5;
        }, this);
        guide_zspeed.on('pointerout', function () {
            forwardbackDelta = 0;
        }, this);

        this.textures.generate('h_arrow', { data: guideInputHorizontalData, pixelWidth: 2});
        this.textures.generate('v_arrow', { data: guideInputVerticalData, pixelWidth: 2});

        guide_left = this.add.image(520,216,'h_arrow').setAlpha(.1).setDepth(200);
        guide_right = this.add.image(600,216,'h_arrow').toggleFlipX().setAlpha(.1).setDepth(200);

        guide_up = this.add.image(560,176,'v_arrow').setAlpha(.1).setDepth(200);
        guide_down = this.add.image(560,256,'v_arrow').toggleFlipY().setAlpha(.1).setDepth(200);

        guide_forward = this.add.image(80,176,'v_arrow').setAlpha(.1).setDepth(200);
        guide_back = this.add.image(80,256,'v_arrow').toggleFlipY().setAlpha(.1).setDepth(200);
    }
    else
    {
        keys = this.input.keyboard.addKeys('W,A,S,D,E,C');
    }



    



    this.input.on('pointerdown', function (pointer, gameObject)
            {   

                if (gameObject[0] == null || gameObject[0].type == "Sprite")
                {
                    if (!levelComplete && ammo>0)
                    {
                    this.shoot(this, pointer);
                    this.explosionInitiate(this,gameObject);
                    }
                    else if (!levelComplete && ammo==0)
                    {
                        if (sound_enabled) { this.sound.playAudioSprite('sfx', 'no ammo') }
                    }
                }

            }, this);

    
    //this.input.on('pointermove', function (pointer) {this.steerDirection(pointer);}, this );

    

        
    },

    tweenThing: function (thing, destX, destY, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: thing,
            x: destX,
            y: destY,
            //scaleX: 2,
            //scaleY: 2,
            //angle: 720,
            ease: 'Power1',
            duration: 500,
            delay: _delay
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            // onComplete: function () { console.log('onComplete'); console.log(arguments); },
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    tweenTextScale: function (_text, _scale, _delay, thisContext) 
    {

        var tween = thisContext.tweens.add({
            targets: _text,
            scale: _scale,
            //ease: 'Power1',
            duration: 200,
            delay: _delay,
            alpha: 1.0
            // yoyo: true,
            // repeat: 1,
            // onStart: function () { console.log('onStart'); console.log(arguments); },
            //onComplete: function () { _text.destroy(); }
            // onYoyo: function () { console.log('onYoyo'); console.log(arguments); },
            // onRepeat: function () { console.log('onRepeat'); console.log(arguments); },
        });
    },

    shoot: function (thisContext, pointer)
    {
        
        // if (ammo>0)
        // {
                
            ammo--;
            ammonumText.setText(ammo);
            

            x_vec_left = pointer.x;
            y_vec_left = -(260-pointer.y);

            x_vec_right = -(640-pointer.x);
            y_vec_right = -(260-pointer.y);

            leftang = -Math.atan(x_vec_left/y_vec_left)*(180/Math.PI);
            rightang = -Math.atan(x_vec_right/y_vec_right)*(180/Math.PI);

            var laserLeft = thisContext.add.image(pointer.x, pointer.y, 'laser').setOrigin(.5,0).setAngle(leftang).setScale(1,50);
            var laserRight = thisContext.add.image(pointer.x, pointer.y, 'laser').setOrigin(.5,0).setAngle(rightang).setScale(1,50);

            var tween = thisContext.tweens.add({
                targets: [laserLeft,laserRight],
                //x: destX,
                //y: destY,
                scaleX: 0,
                scaleY: 0,
                //angle: 720,
                //ease: 'Power1',
                duration: 100,        
            });

            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'laser fire') }
        //}
        
    },

    updateHorizontal: function ()
{    
    var line;
    var line_prime;
    var perspective_delta;
    var total_perspective_delta=0;

    for (var i=0; i<100; i++)
    {
        line = hlinesArray[i];

        if (i==0) 
        {
            perspective_delta = 0;
        }
        else
        {
            perspective_delta = Math.sqrt(current_altitude*current_altitude + (line.z_dim)*(line.z_dim));

            perspective_delta = Math.pow(perspective_delta,100-current_altitude);
        }
        
        total_perspective_delta += perspective_delta;
        
        line.cumulative_pd = total_perspective_delta;
    }



    /////////////////line_prime[99] needs to be init-ed
    for (var i=1; i<101; i++)
    {
        if (i!=100) {line = hlinesArray[i];}
        
        line_prime = hlinesArray[i-1];

        var cum_pd_delta = line.cumulative_pd-line_prime.cumulative_pd;
        var animate_delta = (h_iAnimate/h_animation_steps)*cum_pd_delta;

        if (animate_delta<0)
        {
            line.y = ((line.cumulative_pd+animate_delta)/total_perspective_delta)*1000+horizonOffset;
        }
        else
        {
            line_prime.y = ((line_prime.cumulative_pd+animate_delta)/total_perspective_delta)*1000+horizonOffset;
        }        
    }
}, 

updateVerticle: function ()
{
    var scaleFactor = (100-current_altitude);
    var iDisplay;    
    var line;

    for (var i=0; i<100; i++)
    {

        iDisplay = (i-50) +(v_iAnimate/v_animation_steps);
        line = vlinesArray[i];

        line.setTo(320-(iDisplay*scaleFactor),horizonOffset,320-((iDisplay*scaleFactor)*(scaleFactor/6)),359+horizonOffset);

        // rise over run (see above line)
        line.slope = -359/((iDisplay*scaleFactor)-((iDisplay*scaleFactor)*(scaleFactor/6)));
        line.yIntercept = -line.slope*(iDisplay*scaleFactor)+horizonOffset;
    }
},

updateMountains: function ()
{
    var scaleFactor = 10; // /heightFactor;
    var iDisplay;    
    var mountain;

    for (var i=0; i<100; i++)
    {
        mountain = mountainsArray[i];
        iDisplay = mountain.m_position +(m_iAnimate/20);
        mountain.x = 320-(iDisplay*scaleFactor);
    }
},

updatePads: function ()
{

    var pad;
    var slope;
    var yIntercept;

    var thisPadY1;    
    var thisPadY2;

    var thisPadX1a;
    var thisPadX1b;
    var thisPadX2a;
    var thisPadX2b;

    for (var i=0; i<padsArray.length; i++)
    {
        pad = padsArray[i];

        if(pad.z_dim>0 && pad.z_dim<99 && pad.x_dim>0 && pad.x_dim<99)
        {
            thisPadY1 = hlinesArray[pad.z_dim-1].y;
            thisPadY2 = hlinesArray[pad.z_dim+1].y;

            slope = vlinesArray[pad.x_dim-1].slope;
            yIntercept = vlinesArray[pad.x_dim-1].yIntercept;
            thisPadX1a = 320-(hlinesArray[pad.z_dim-1].y-yIntercept)/slope;
            thisPadX1b = 320-(hlinesArray[pad.z_dim+1].y-yIntercept)/slope;

            slope = vlinesArray[pad.x_dim+1].slope;
            yIntercept = vlinesArray[pad.x_dim+1].yIntercept;
            thisPadX2a = 320-(hlinesArray[pad.z_dim-1].y-yIntercept)/slope;
            thisPadX2b = 320-(hlinesArray[pad.z_dim+1].y-yIntercept)/slope;

            if (thisPadY1 && thisPadY2 && thisPadX1a && thisPadX1b && thisPadX2a && thisPadX2b)
            {
                pad.setTopLeft(thisPadX1a, thisPadY1);
                pad.setTopRight(thisPadX2a, thisPadY1);
                pad.setBottomLeft(thisPadX1b, thisPadY2);
                pad.setBottomRight(thisPadX2b, thisPadY2);
            }        
        }
    }
},

updateSurfaceSprites: function ()
{
    var scaleDif;
    var scaleFactor = (100-current_altitude);
    var iDisplay;
    var slope;
    var yIntercept;
    var sprite;

    var slopeRef;
    var yInterceptRef;
    var spriteXRef;
    var scaleAdj;

    for (var j=0;j<surfaceSpritesArray.length;j++)
    {
        sprite = surfaceSpritesArray[j];
        slope = vlinesArray[sprite.x_dim].slope;//-359/((iDisplay*scaleFactor)-((iDisplay*scaleFactor)*(scaleFactor/5)));
        yIntercept = vlinesArray[sprite.x_dim].yIntercept;//-slope*(iDisplay*scaleFactor);
        sprite.y = hlinesArray[sprite.z_dim].y;

        if (sprite.y<2000)
        {
            sprite.x = 320-(hlinesArray[sprite.z_dim].y-yIntercept)/slope;
            
            if (sprite.x_dim == 0)
            {
                slopeRef = vlinesArray[sprite.x_dim+1].slope;
                yInterceptRef = vlinesArray[sprite.x_dim+1].yIntercept;                
            }
            else
            {
                slopeRef = vlinesArray[sprite.x_dim-1].slope;
                yInterceptRef = vlinesArray[sprite.x_dim-1].yIntercept;
            }
            
            spriteXRef = 320-(sprite.y-yInterceptRef)/slopeRef;
            scaleAdj = Math.abs(spriteXRef - sprite.x);

            var sprite_currentZ = 100-sprite.z_dim;
            var sprite_distance = Math.sqrt((.16*current_altitude*current_altitude) + (sprite_currentZ*sprite_currentZ));

            sprite.setScale(scaleAdj*((40+.5*current_altitude)/85)/(sprite_distance));
            var savescale = sprite.scale;

            ///calc and adjust for elevated sprites

            if (sprite.y_dim)
            {

                var theta1 = Math.atan((.4*current_altitude)/sprite_currentZ);

                var theta2 = 1.571-theta1;

                var elev_sprite_distance = Math.sqrt((.16*sprite.y_dim*sprite.y_dim)+(sprite_distance*sprite_distance) - (2*.4*sprite.y_dim*sprite_distance*Math.cos(theta2)));

                sprite.setScale( scaleAdj*((40+.5*current_altitude)/85)/(elev_sprite_distance) );

                var y_adjust = sprite.y_dim*savescale;
                //var alt_y_adj = sprite.y_dim*scaleAdj*((40+.5*current_altitude)/85)/(sprite_distance);

                sprite.y-=y_adjust;

            }
            // if (sprite.motion)
            // {
            //     sprite.x_offset+=sprite.motion.x;
            //     sprite.x+=sprite.x_offset;
            // }
        }        
    }
},

steerDirection: function (pointer)
{
    horizonDelta = (((pointer.x - 320) / 640));
    altitudeDelta = (((pointer.y - 180) / 360));
},

update: function  (time)
{
    
    
    if (!touchActivated)
    {
        if (keys.A.isDown)
        { 
            horizonDelta-=.05; 
            if (horizonDelta<-.5) {horizonDelta = -.5} 
        }
        else if (keys.D.isDown)
        {            
            horizonDelta+=.05;
            if (horizonDelta>.5) {horizonDelta = .5}            
        }

        if (keys.W.isDown)
        {            
            altitudeDelta+=.05;
            if (altitudeDelta>.5) {altitudeDelta = .5}           
        }        
        else if (keys.S.isDown)
        {            
            altitudeDelta-=.05;
            if (altitudeDelta<-.5) {altitudeDelta = -.5}            
        }

        if (keys.E.isDown)
        {            
            forwardbackDelta=-1;            
        }        
        else if (keys.C.isDown)
        {            
            forwardbackDelta=1;            
        }
        else
        {
            forwardbackDelta=0;
        }
    }
    



    
    hud_a.setTo(320,325,320+120*horizonDelta,325);
    

    v_iAnimate+=4*horizonDelta;
    //use data for mountains
    m_iAnimate+=horizonDelta;
    //
    
        
    
    

    if (v_iAnimate >0 && v_iAnimate>=v_animation_steps) 
        {
            v_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.x_dim==99) {_sprite.x_dim = 0}
                    else {_sprite.x_dim+=1}

                } );

            pads.children.iterate( 
                function(pad)
                { 
                    if (pad.x_dim==99) {pad.x_dim = 0}
                    else {pad.x_dim+=1}

                } );
        }
    if (v_iAnimate <0 && -v_iAnimate>=v_animation_steps) 
        {
            v_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.x_dim==0) {_sprite.x_dim = 99}
                    else {_sprite.x_dim-=1}

                } );

            pads.children.iterate( 
                function(pad)
                { 
                    if (pad.x_dim==0) {pad.x_dim = 99}
                    else {pad.x_dim-=1}

                } );            
        }


    if (forwardbackDelta>0)
    {
        h_iAnimate_speed-= .1;
        if (h_iAnimate_speed<-5) {h_iAnimate_speed=-5}

        //hud_b.setTo(320,325,320,325);
    }
    else if (forwardbackDelta<0)
    {
        h_iAnimate_speed+= .1;
        if (h_iAnimate_speed>5) {h_iAnimate_speed=5}
        //hud_b.setTo(320,325,320,325);
    }


    
    hud_b.setTo(320,325+50*-altitudeDelta,320,325);
    current_altitude+= Math.pow( ((100-current_altitude)/100 + (100-current_altitude)/100),2 ) * altitudeDelta;
    if(current_altitude<5) {current_altitude=5}
    if(current_altitude>85) {current_altitude=85}
    

    if(h_iAnimate_speed<0){hud_c.setPosition(320,350)}
    else{hud_c.setPosition(320,300)}
    hud_c.scaleX = h_iAnimate_speed/5;
    
    h_iAnimate+=h_iAnimate_speed;

    if (h_iAnimate >0 && h_iAnimate>=h_animation_steps) 
        {
            h_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.z_dim==99) {_sprite.z_dim = 0}
                    else {_sprite.z_dim+=1}

                    _sprite.depth = _sprite.z_dim;
                } );

            pads.children.iterate( 
                function(pad)
                { 
                    if (pad.z_dim==99) {pad.z_dim = 0}
                    else {pad.z_dim+=1}
                } );
        }
    if (h_iAnimate <0 && -h_iAnimate>=h_animation_steps)
        {
            h_iAnimate = 0;
            surfaceSprites.children.iterate( 
                function(_sprite)
                { 
                    if (_sprite.z_dim==0) {_sprite.z_dim = 99}
                    else {_sprite.z_dim-=1}

                    _sprite.depth = _sprite.z_dim;
                } );

            pads.children.iterate( 
                function(pad)
                { 
                    if (pad.z_dim==0) {pad.z_dim = 99}
                    else {pad.z_dim-=1}
                } );
        }

    this.updateHorizontal();
    this.updateVerticle();
    this.updateMountains();
    this.updateSurfaceSprites();
    this.updatePads();

    this.padContactTracking();
    this.lemRoverContactTracking();

    altnumText.setText('elevation: '+Math.round((current_altitude-5)*100)/100);
    hud_d1.setTo(260,350, 260, 350-(current_altitude-5)/80*50);
    hud_d2.setTo(380,350, 380, 350-(current_altitude-5)/80*50);





    if (time > saveFuelTime + 2500)
    {  
        fuel--;
        if (fuel > -1) { fuelnumText.setText(fuel) }

        if (fuel==0)
        {
            contactAlert.setText("Out of Fuel!");

            this.time.addEvent({ delay: 2400, callback: this.gameOver, callbackScope: this, repeat: 0 });
        }
        else if (fuel==5)
        {
            contactAlert.setText("Low Fuel!");
            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'low fuel') }

            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });

        }
        

        saveFuelTime = game.loop.now;
    }  

//////////////explosion tracking
    for (var e=0; e<currentExplosions.length; e++)
    {

        if (time > currentExplosions[e].time + 2000)
        {            
            currentExplosions[e].group.children.iterate( function(pixelBlock){

                pixelBlock.setPosition(-100,-100).setVelocity(0, 0).setAlpha(0);

            } );

            currentExplosions[e].target.destroy();
            currentExplosions.splice(e,1); 
        }
        else
        {
            var timeDelta;
            timeDelta = time-currentExplosions[e].time;
            
            currentExplosions[e].group.children.iterate( function(pixelBlock)
            { 
                var targetObj = currentExplosions[e].target;
                var tx_delta = currentExplosions[e].initX - targetObj.x;
                var ty_delta = currentExplosions[e].initY - targetObj.y;
                
                pixelBlock.setScale(targetObj.scale).setAlpha(1.0-(timeDelta)*.0005);
                pixelBlock.x -= tx_delta/20;
                pixelBlock.y -= ty_delta/20;                    
            } );
        }
    }
    
},

padContactTracking: function ()
{
    // padz.setText('pad 0 z: '+padsArray[0].z_dim);
    // padx.setText('pad 0 x: '+padsArray[0].x_dim);

    for (var i=0;i<padsArray.length;i++)
    {
        if (Phaser.Math.Fuzzy.Equal(my_zdim,padsArray[i].z_dim,3) && Phaser.Math.Fuzzy.Equal(my_xdim,padsArray[i].x_dim,3) && current_altitude<55)
        {            
            pads.remove(padsArray[i],true,true);
            hudPads.pop().destroy();


            if (padsArray.length==1) {contactAlert.setText("pad contacted\n"+(padsArray.length)+" pad left")}
            else {contactAlert.setText("pad contacted\n"+(padsArray.length)+" pads left")}

            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'pad contact') }

            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });

            if (padsArray.length == 0)
            {   

                contactAlert.setText("all pads contacted");
                levelComplete=true;

                this.time.addEvent({ delay: 2500, callback: this.goto_next_level, callbackScope: this, repeat: 0 });


                
            }
            break;
        }        
    }
},

resetContactAlert: function ()
{
    contactAlert.setText('---')
},

lemRoverContactTracking: function ()
{

    // Lem is the last element in surfaceSpritesArray 
    // Rover is second to last

    if (!supplied && !roverKilled)
    {
        
        if (Phaser.Math.Fuzzy.Equal(my_zdim,roverSprite.z_dim,3) && Phaser.Math.Fuzzy.Equal(my_xdim,roverSprite.x_dim,3) && current_altitude<55)
        {
            contactAlert.setText("Rover has resupplied you!");
            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'refuel') }

            fuel = 50;
            ammo = 50;
            supplied = true;

            fuelnumText.setText(fuel);
            ammonumText.setText(ammo);

            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
        }
    }
    


    if (!lemRescued && !lemKilled)
    {
        if (Phaser.Math.Fuzzy.Equal(my_zdim,lemSprite.z_dim,3) && Phaser.Math.Fuzzy.Equal(my_xdim,lemSprite.x_dim,3) && current_altitude<55)
        {
            contactAlert.setText("You picked up Lem!");
            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'rescue') }

            lemRescued = true;
            rescueBonus+= 1000;
            lemSprite.destroy();

            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
        }
    }

    if (!kittyRescued && !kittyKilled)
    {
        if (Phaser.Math.Fuzzy.Equal(my_zdim,kittySprite.z_dim,3) && Phaser.Math.Fuzzy.Equal(my_xdim,kittySprite.x_dim,3) && current_altitude<55)
        {
            contactAlert.setText("You picked up Kitty!");
            if (sound_enabled) { this.sound.playAudioSprite('sfx', 'rescue') }

            kittyRescued = true;
            rescueBonus+= 1000;
            kittySprite.destroy();

            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
        }
    }
    
},

createExploderTexture: function ( textureData, thisContext ) 
{
    if (textureData != null)
    {
        var exploders = thisContext.physics.add.group();

        // textureData is formatted as an object {name: 'name', t: texture map, p: palette}. ie texture map is in textureData.t, palette is in textureData.p
        for (var y=0; y<textureData.t.length;y++ )
        {
            for (var x=0; x<10; x++)
            {
                thisChar = textureData.t[y].charAt(x);

                if (thisChar != '.')
                {
                    var block = [thisChar];

                    var randomKey = Math.random().toString();

                    thisContext.textures.generate(randomKey, { data: block, pixelWidth: 2, palette: textureData.p});
                    
                    exploders.create(-100,-100,randomKey).setGravityY(0);
                }                
            }
        }

        exploderPool[textureData.name] = exploders;        
    }
},


explosionInitiate: function (thisContext, _sprite) 
{
    if (_sprite[0] != null)
    {
        var exploders = exploderPool[_sprite[0].name];

        currentExplosions.forEach(function (explosion, e){
            if(explosion.group == exploders)
            {
                currentExplosions[e].group.children.iterate( function(pixelBlock){

                pixelBlock.setPosition(-100,-100).setVelocity(0, 0).setAlpha(0);

                } );

                currentExplosions[e].target.destroy();
                currentExplosions.splice(e,1); 
            }
        });

        var data = {};
        data.group = exploders;
        data.time = game.loop.time;
        data.target = _sprite[0];
        data.initX = _sprite[0].x;
        data.initY = _sprite[0].y;

        currentExplosions.push(data);

        exploders.children.iterate( function(pixelBlock){

            var q =_sprite[0].scale;
            pixelBlock.setPosition(_sprite[0].x,_sprite[0].y-(_sprite[0].displayHeight/2)).setVelocity(q*Phaser.Math.Between(-40, 40), q*Phaser.Math.Between(-40, 40) );

        } );

        _sprite[0].visible=false;

        if (sound_enabled) { this.sound.playAudioSprite('sfx', 'explosion') }

        if (_sprite[0].name != 'lem' && _sprite[0].name != 'rover' && _sprite[0].name != 'kitty')
        {
            var h = ztext[(_sprite[0].point_value/100)-1];
            h.setScale(0).setPosition(440, 300).setAlpha(0).setDepth(100);
            
            this.tweenTextScale (h, 3, 0, this);
            this.tweenThing (h, 700, 300, 500, this);

        
            


            score+=_sprite[0].point_value;
            scorenumText.setText(score);
        }
        else if (_sprite[0].name == 'rover')
        {
            contactAlert.setText("You killed the Rover!");
            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
            roverKilled=true;

            // this.time.addEvent({ delay: 3000, callback: this.gameOver, callbackScope: this, repeat: 0 });
        }
        else if (_sprite[0].name == 'lem')
        {
            contactAlert.setText("You killed Lem!");
            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
            lemKilled=true;

            // this.time.addEvent({ delay: 3000, callback: this.gameOver, callbackScope: this, repeat: 0 });
        }
        else if (_sprite[0].name == 'kitty')
        {
            contactAlert.setText("You killed Kitty!");
            this.time.addEvent({ delay: 3000, callback: this.resetContactAlert, callbackScope: this, repeat: 0 });
            kittyKilled=true;

            // this.time.addEvent({ delay: 3000, callback: this.gameOver, callbackScope: this, repeat: 0 });
        }
        
    }
},

gameOver: function()
{

    if (!levelComplete)
    {
        rescueBonus = 0;

        //loop.stop();

        if (score>thresholdScore) 
        {

            this.scene.start('high');
            
        }
        else
        {
            score=0;
            this.scene.start('welcome');
        }
    }
    
    
},

init_lines: function (thisContext,_color)
{
    // horizontal lines
    hlines = thisContext.add.group();

    for (var i=0;i<100;i++)
    {
        var startPoint = new Phaser.Math.Vector2(0, horizonOffset);
        var endPoint = new Phaser.Math.Vector2(640, horizonOffset);
        var curve = new Phaser.Curves.Line(startPoint,endPoint);

        var r = thisContext.add.curve(320, 0, curve);

        r.setStrokeStyle(1, _color);
        r.setAlpha(0.4);

        r.z_dim = i;
               
        hlines.add(r)
    }

    hlinesArray = hlines.getChildren();

    
    //vertical lines
    vlines = thisContext.add.group();

    for (var i=0;i<100;i++)
    {
        var r = thisContext.add.line();

        r.setOrigin(0);
        r.setStrokeStyle( 1, _color);
        r.setAlpha(0.4);

        vlines.add(r)
    }

    vlinesArray = vlines.getChildren();
},

init_mountains: function (thisContext)
{
    //mountains
    
    mountains = thisContext.add.group();
    var rand0 = Phaser.Math.Between(1, 12);

    for (var i=0;i<100;i++)
    {
        
        var rand1 = Phaser.Math.Between(-10, 10);
        var rand2 = Phaser.Math.Between(-40, 40);
        var rand3 = Phaser.Math.Between(-4, 4);

        var hexdigit_med_dark1 = Phaser.Math.Between(50, 120);
        var hexdigit_low_dark1 = Phaser.Math.Between(0, 40);
        var hexdigit_high_dark1 = Phaser.Math.Between(170, 200);

        var hexdigit_med_dark2 = Phaser.Math.Between(50, 120);
        var hexdigit_low_dark2 = Phaser.Math.Between(0, 40);
        var hexdigit_high_dark2 = Phaser.Math.Between(170, 200);
        

        var hexdigit_med_light1 = Phaser.Math.Between(44, 80);
        var hexdigit_low_light1 = Phaser.Math.Between(30, 55);
        var hexdigit_high_light1 = Phaser.Math.Between(220, 255);

        var hexdigit_med_light2 = Phaser.Math.Between(44, 80);
        var hexdigit_low_light2 = Phaser.Math.Between(30, 55);
        var hexdigit_high_light2 = Phaser.Math.Between(220, 255);

        if (rand0==1)
        {
            var rndcolor_dark = ( (hexdigit_med_dark1 * 65536) + (hexdigit_low_dark1 * 256) + (hexdigit_high_dark1) );
            var rndcolor_light = ( (hexdigit_med_light1 * 65536) + (hexdigit_low_light1 * 256) + (hexdigit_high_light1) );
        }
        if (rand0==2)
        {
            var rndcolor_dark = ( (hexdigit_high_dark1 * 65536) + (hexdigit_low_dark1 * 256) + (hexdigit_med_dark1) );
            var rndcolor_light = ( (hexdigit_high_light1 * 65536) + (hexdigit_low_light1 * 256) + (hexdigit_med_light1) );
        }
        if (rand0==3)
        {
            var rndcolor_dark = ( (hexdigit_med_dark1 * 65536) + (hexdigit_med_dark2 * 256) + (hexdigit_low_dark1) );
            var rndcolor_light = ( (hexdigit_med_light1 * 65536) + (hexdigit_med_light1 * 256) + (hexdigit_low_light1) );
        }
        if (rand0==4)
        {
            var rndcolor_dark = ( (hexdigit_low_dark1 * 65536) + (hexdigit_high_dark1 * 256) + (hexdigit_high_dark2) );
            var rndcolor_light = ( (hexdigit_low_light1 * 65536) + (hexdigit_high_light1 * 256) + (hexdigit_high_light2) );
        }
        if (rand0==5)
        {
            var rndcolor_dark = ( (hexdigit_high_dark1 * 65536) + (hexdigit_low_dark1 * 256) + (hexdigit_high_dark2) );
            var rndcolor_light = ( (hexdigit_high_light1 * 65536) + (hexdigit_low_light1 * 256) + (hexdigit_high_light2) );
        }
        if (rand0==6)
        {
            var rndcolor_dark = ( (hexdigit_high_dark1 * 65536) + (hexdigit_high_dark2 * 256) + (hexdigit_low_dark1) );
            var rndcolor_light = ( (hexdigit_high_light1 * 65536) + (hexdigit_high_light2 * 256) + (hexdigit_low_light1) );
        }
        if (rand0==7)
        {
            var rndcolor_dark = ( (hexdigit_high_dark1 * 65536) + (hexdigit_high_dark2 * 256) + (hexdigit_high_dark1) );
            var rndcolor_light = ( (hexdigit_high_light1 * 65536) + (hexdigit_high_light2 * 256) + (hexdigit_high_light1) );
        }
        if (rand0==8)
        {
            var rndcolor_dark = ( (hexdigit_low_dark1 * 65536) + (hexdigit_low_dark2 * 256) + (hexdigit_med_dark1) );
            var rndcolor_light = ( (hexdigit_low_light1 * 65536) + (hexdigit_low_light2 * 256) + (hexdigit_med_light1) );
        }
        if (rand0==9)
        {
            var rndcolor_dark = ( (hexdigit_med_dark1 * 65536) + (hexdigit_low_dark2 * 256) + (hexdigit_low_dark1) );
            var rndcolor_light = ( (hexdigit_med_light1 * 65536) + (hexdigit_low_light2 * 256) + (hexdigit_low_light1) );
        }
        if (rand0==10)
        {
            var rndcolor_dark = ( (hexdigit_low_dark1 * 65536) + (hexdigit_low_dark2 * 256) + (hexdigit_low_dark1) );
            var rndcolor_light = ( (hexdigit_low_light1 * 65536) + (hexdigit_low_light2 * 256) + (hexdigit_low_light1) );
        }
        if (rand0==11)
        {
            var rndcolor_dark = ( (hexdigit_med_dark1 * 65536) + (hexdigit_med_dark2 * 256) + (hexdigit_med_dark1) );
            var rndcolor_light = ( (hexdigit_med_light1 * 65536) + (hexdigit_med_light2 * 256) + (hexdigit_med_light1) );
        }
        if (rand0==12)
        {
            var rndcolor_dark = ( (hexdigit_low_dark1 * 65536) + (hexdigit_med_dark2 * 256) + (hexdigit_med_dark1) );
            var rndcolor_light = ( (hexdigit_low_light1 * 65536) + (hexdigit_med_light2 * 256) + (hexdigit_med_light1) );
        }
        

        var m = thisContext.add.isotriangle(200, horizonOffset-2, 180+rand2, 30+rand1, false, 0x000000, rndcolor_dark, rndcolor_light);//0x3f8403, 0x63a505);

        m.projection = 100;
        m.m_position = i*(5+rand3)-250;

        mountains.add(m)
    }

    mountainsArray = mountains.getChildren();
},

init_pads: function (thisContext)
{
    pads = thisContext.add.group();

    

    var randomKey = Math.random().toString();
    thisContext.textures.generate(randomKey, { data: ['A'], pixelWidth: 2, palette: palette_cga});
        

    for (var i=0;i<numPads;i++)
    {
        var p = thisContext.add.quad(200, 200, randomKey);

        p.x_dim = Phaser.Math.Between(10, 90);
        p.z_dim = Phaser.Math.Between(10, 90);

        pads.add(p)
    }

    padsArray = pads.getChildren();
},

init_sprites: function (thisContext)
{
    surfaceSprites = thisContext.add.group();

    
    
    var bList = ['zoomer','shooter','winger','waif','nemesis','carrier'];
    var sName;
    var s;

    for (var i=0;i<80;i++)
    {
        sName = bList[Phaser.Math.Between(0, 5)];
        s = thisContext.add.sprite(0, 0, sName).setOrigin(.5,1.0).setInteractive();//+Math.random()*2);
        s.x_dim = Phaser.Math.Between(0, 99);
        s.z_dim = Phaser.Math.Between(0, 99);
        s.depth = s.z_dim;
        s.name = sName;
        s.point_value = (bList.indexOf(sName)+1)*100;

        if (i>39) {s.y_dim = Phaser.Math.Between(10, 70);}

        surfaceSprites.add(s);    
    }

    //animated sprites
    kittySprite = thisContext.add.sprite(-100, -100, 'kitty ss').play('kitty animation').setOrigin(.5,1.0).setInteractive();
    kittySprite.x_dim = Phaser.Math.Between(0, 99);
    kittySprite.z_dim = Phaser.Math.Between(0, 99);
    kittySprite.depth = kittySprite.z_dim;
    kittySprite.name = 'kitty';

    surfaceSprites.add(kittySprite);

    roverSprite = thisContext.add.sprite(-100, -100, 'rover ss').play('rover animation').setOrigin(.5,1.0).setInteractive();
    roverSprite.x_dim = Phaser.Math.Between(0, 99);
    roverSprite.z_dim = Phaser.Math.Between(0, 99);
    roverSprite.depth = roverSprite.z_dim;
    roverSprite.name = 'rover';

    surfaceSprites.add(roverSprite);

    lemSprite = thisContext.add.sprite(-100, -100, 'lem ss').play('lem animation').setOrigin(.5,1.0).setInteractive();
    lemSprite.x_dim = Phaser.Math.Between(0, 99);
    lemSprite.z_dim = Phaser.Math.Between(0, 99);
    lemSprite.depth = lemSprite.z_dim;
    lemSprite.name = 'lem';

    surfaceSprites.add(lemSprite);


    surfaceSpritesArray = surfaceSprites.getChildren();
},

goto_next_level: function ()
{

    loop.stop();
    this.scene.start('init_level', { level_num: this.level_num+1 })
    
}

});

var High = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function High ()
    {
        Phaser.Scene.call(this, { key: 'high' });
    },

    init: function (data)
    {
        // console.log('init', data);

        this.score = data.score;
        
        
        
    },

    preload: function ()
    {
        
        
    },

    create: function ()
    {

        var tileSize = 32;

        var randomKey1 = Math.random().toString();
        var canvasFrame = this.textures.createCanvas(randomKey1, 2*tileSize, tileSize);


        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_off, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,0,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(0, 0, 0, 0, tileSize, tileSize);

        var randomKey = Math.random().toString();
        this.textures.generate(randomKey, { data: sound_on, pixelWidth: 2 });
        

        //draw the texture data for this frame into the sprite sheet
        canvasFrame.drawFrame(randomKey,0,32,0);
        //add the frame data for this frame into the sprite sheet
        canvasFrame.add(1, 0, 32, 0, tileSize, tileSize);

        var sound_button = this.add.image(20, 20, randomKey1, 0).setOrigin(0.5).setScale(1).setDepth(100).setInteractive();

        if (sound_enabled) 
        {
            sound_button.setFrame(1)            
        } 
        else 
        {
            sound_button.setFrame(0)
        }

        

        sound_button.on('pointerup', function () {

            if (sound_enabled)
            {
                sound_button.setFrame(0);
                sound_enabled=false;

                
                
                loop.stop();
                
            }
            else
            {
                sound_button.setFrame(1);
                sound_enabled=true;

                loop = this.sound.addAudioSprite('loops');
                loop.play('loop'+Phaser.Math.Between(0,15), {loop: true});
            }

        }, this);




        var config1 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 96,
            spacing: { x: 0, y: 0 },
            lineSpacing: 0,
            offset: {y:40}
        };

        var config2 = {
            image: 'Wonder Boy',
            width: 8,
            height: 8,
            chars: Phaser.GameObjects.RetroFont.TEXT_SET1,
            charsPerRow: 96,
            spacing: { x: 0, y: 0 },
            lineSpacing: 8,
            offset: {y:8}
        };

        this.cache.bitmapFont.add('Wonder Boy', Phaser.GameObjects.RetroFont.Parse(this, config1));
        this.cache.bitmapFont.add('Wonder Boy2', Phaser.GameObjects.RetroFont.Parse(this, config2));

        var msgTextSprite = this.add.dynamicBitmapText(320, 10, 'Wonder Boy2', 
            'Great Score! You are in the top 10. Select up to 10 characters\nbelow to include your designation in the High Flyerz:').setOrigin(.5,0).setScale(1.2).setCenterAlign();

        var all_characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

        var selectTextSprite = this.add.dynamicBitmapText(10, 96, 'Wonder Boy', 
            '!"#$%&\'()*+,-./0123456789:\n;<=>?@ABCDEFGHIJKLMNOPQRST\nUVWXYZ[\\]^_`abcdefghijklmn\nopqrstuvwxyz{|}~').setScale(3).setInteractive();

        
        
        var thickness = 1;
        var color = 0x00ff00;
        var alpha = 1;

        var tileSize = 24;
        var currentTile;
        var player_choice_string='';
        var marker = this.add.rectangle(10, 96, tileSize, tileSize).setStrokeStyle(thickness, color, alpha).setOrigin(0);
        var st = this.add.dynamicBitmapText(200, 240, 'Wonder Boy', '').setScale(3).setOrigin(0);



        if (sound_enabled) { this.sound.playAudioSprite('sfx', 'high score') }



        selectTextSprite.on('pointermove', function (pointer) {

            var tileSize = 24;

            var x = Phaser.Math.FloorTo((pointer.x-10)/tileSize,0,24);
            var y = Phaser.Math.FloorTo((pointer.y)/tileSize,0,24);

            currentTile = x + ((y-4) * 26);

            if (currentTile<94 && pointer.x<624)
            {
                marker.x = x*tileSize+10;
                marker.y = y*tileSize;
            }
            

            if (player_choice_string.length<10 && pointer.x<624)
            {
                st.setText(player_choice_string+all_characters.charAt(currentTile));
            }
            //x /= tileSize;
            //y /= tileSize;

            

            // posx.setText(x);
            // posy.setText(y-4);
            // ct.setText(currentTile);

            
        

        }, this);

        selectTextSprite.on('pointerup', function (pointer) {

            if (player_choice_string.length<10 && pointer.x<624)
            {
                player_choice_string+=all_characters.charAt(currentTile);
                st.setText(player_choice_string);

                if (sound_enabled) { this.sound.playAudioSprite('sfx', 'char select') }
            }

        }, this);


        var del_button_data =
        [
        ".FFF..FFFF.F....",
        ".F..F.F....F....",
        ".F..F.FFF..F....",
        ".F..F.F....F....",
        ".F..F.F....F....",
        ".FFF..FFFF.FFFF."
        ];

        var end_button_data =
        [
        "FFFF.F...F.FFF..",
        "F....FF..F.F..F.",
        "FFF..F.F.F.F..F.",
        "F....F..FF.F..F.",
        "F....F...F.F..F.",
        "FFFF.F...F.FFF.."
        ];


        this.textures.generate('del', { data: del_button_data, pixelWidth: 2 });
        this.textures.generate('end', { data: end_button_data, pixelWidth: 2 });

        var del_button = this.add.image(270, 300, 'del').setScale(2).setInteractive();
        var end_button = this.add.image(370, 300, 'end').setScale(2).setInteractive();

        del_button.on('pointerdown', function (pointer) {

                player_choice_string = player_choice_string.substr(0, player_choice_string.length - 1);

                st.setText(player_choice_string);

        }, this);

        end_button.on('pointerup', function (pointer) {

                var myData={};
                myData[player_choice_string] = score;

                if (player_choice_string != '')
                {
                    this.saveHighScore(myData);
                }
                

                score=0;

                this.scene.start('welcome');

        }, this);

    },
    saveHighScore: function(data) {

    var myurl = 'http://patricko.byethost9.com/horizon6/save_high_scores.php';

    $.ajax({
      url: myurl,
      type: 'POST',
      data: { savedata:data }
    });

    }

});

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 640,
    height: 360,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 360
    },
    scene: [InitGame, Welcome, InitLevel, Play, High]
};
var game = new Phaser.Game(config);

var i = 0; //for textcallback
var hsv = [];

var hexdigit1 = 50;
var hexdigit2 = 67;
var hexdigit3 = 155;

var hex1increment = -2;
var hex2increment = 3;
var hex3increment = -6;



var palette_cga = {
    0: '#000',
    1: '#2234d1',
    2: '#0c7e45',
    3: '#44aacc',
    4: '#8a3622',
    5: '#5c2e78',
    6: '#aa5c3d',
    7: '#b5b5b5',
    8: '#5e606e',
    9: '#4c81fb',
    A: '#6cd947',
    B: '#7be2f9',
    C: '#eb8a60',
    D: '#e23d69',
    E: '#ffd93f',
    F: '#fff'
};

var palette_c64 = {
    0: '#000',
    1: '#fff',
    2: '#8b4131',
    3: '#7bbdc5',
    4: '#8b41ac',
    5: '#6aac41',
    6: '#3931a4',
    7: '#d5de73',
    8: '#945a20',
    9: '#5a4100',
    A: '#bd736a',
    B: '#525252',
    C: '#838383',
    D: '#acee8b',
    E: '#7b73de',
    F: '#acacac'
};

var palette_arne16 = {
    0: '#000',
    1: '#9D9D9D',
    2: '#FFF',
    3: '#BE2633',
    4: '#E06F8B',
    5: '#493C2B',
    6: '#A46422',
    7: '#EB8931',
    8: '#F7E26B',
    9: '#2F484E',
    A: '#44891A',
    B: '#A3CE27',
    C: '#1B2632',
    D: '#005784',
    E: '#31A2F2',
    F: '#B2DCEF'
};

var palette_jmp = {
    0: '#000',
    1: '#191028',
    2: '#46af45',
    3: '#a1d685',
    4: '#453e78',
    5: '#7664fe',
    6: '#833129',
    7: '#9ec2e8',
    8: '#dc534b',
    9: '#e18d79',
    A: '#d6b97b',
    B: '#e9d8a1',
    C: '#216c4b',
    D: '#d365c8',
    E: '#afaab9',
    F: '#f5f4eb'
};
var palette_gold = {
    2: '#ffffff',
    F: '#ffffaa',
    E: '#ffdbaa',
    D: '#ffb6aa',
    9: '#db9200',
    C: '#926d00',
};

var goldwing = ["..22222222222222",".FFFFFFFFFFFFF..","FFFFFFFFFFFF....","EEEEEEEEEE......","DDDDDDDDD.......","99999999........","CCCCCC..........","CCCC............"];


var laser = ["...4...", "...4..", "..444..", "..333..", ".33333.", ".77777.", "7777777"];

var kitty = ["9..9......","9999......","E9E9..99..","9999...9..",".9999..9..","..9999.9..","..999999..","..999999..","..999999..","..999999.."];

var rover = ["..2....EE.......", ".22....EF.......", "222..CEEEEE55...", "...2.CEEE...5...", "...2.CEEE...5...", "00000CEEEEC00000", ".1110CCCEEC0111.", "112115CCEE511211", "1929155555519291", "11911......11911", ".111........111."];
var lem = ["..........","....55....","...5515...","...5111...","....16....","....16....","...166....","....66....","..16666...","..1..11..."];

var zoomer = ["......AAA.......", "....AAAAAAA.....", "...FFAAAAAFF....", "...FFA111AFF....", "..AEAAAEAAAEA...", "...C...E...C....", "...C..EEE..C...."];
var shooter = [".....E...E......", "......111.......", "....9999999.....", "...AAAA1AAAA....", ".11DCC111CCD11..", "111222212222111.","11....222....11.", ".......E........"];
var winger = [".....D...D......", "......444.......", "....4444444.....", "..44111411144...", ".4444444444444..", "EEE...474...EEE.",".......7........"];
var waif = ["......777.......", ".E..7777777..E..", "..77DDD7DDD77...", "....7777777.....", "....23...32....."];
var nemesis = ["...B........B...", "....888..888....", "...8EDE88EDE8...", "2888888888888882", ".888778..877888.", "..AA..2..2..AA.."];
var carrier = ["...3333.........", "..322333........", "..323333........", "..333333........", "..333333..DDDD..", "...33331.D22DDD.", "........1D2DDDD.", "..AAAA.1.DDDDDD.", ".A22AAA..DDDDDD.", ".A2AAAA...DDDD..", ".AAAAAA.........", ".AAAAAA.........", "..AAAA.........."];




var surfaceSprites;
var surfaceSpritesArray = [];

var pads;
var padsArray = [];


var vlines;
var vlinesArray = [];

var hlines;
var hlinesArray = [];

var horizonDelta=-.5;
var altitudeDelta=-.5;
var forwardbackDelta=0;

var current_altitude;

var horizonOffset=40;

var v_iAnimate=-1;
var v_animation_steps = 20; //lower values increase speed

var h_iAnimate=-1;
var h_animation_steps = 50; //lower values increase speed
var h_iAnimate_speed=5; //user speed control

var mountains;
var mountainsArray = [];
var m_iAnimate=-1;

var hud_a;
var hud_b;
var hud_c;
var hud_d1;
var hud_d2;

var altnumText;
var ztext = [];
var xtext;
var padz;
var padx;
var fuelnumText;
var ammonumText;
var scorenumText;
var hudPads = [];

var score=0;
var saveFuelTime;
var fuel;
var ammo;
var numPads;
var contactAlert;
var rescueBonus;
var kittyRescued;
var lemRescued;
var supplied;
var roverSprite;
var lemSprite;
var kittySprite;
var roverKilled;
var lemKilled;
var kittyKilled;

var my_zdim=98;
var my_xdim=50;

var levelComplete;


var exploders;
var currentExplosions = [];
var palettePool = [];
var exploderPool = [];
var texturePool = [{name: 'zoomer', t:zoomer, p:palette_cga}, {name: 'shooter', t:shooter, p:palette_cga}, 
                    {name: 'winger', t:winger, p:palette_c64}, {name: 'waif', t:waif, p:palette_arne16}, 
                    {name: 'nemesis', t:nemesis, p:palette_arne16}, {name: 'carrier', t:carrier, p:palette_arne16},
                    {name: 'kitty', t:kitty, p:palette_cga}, {name: 'rover', t:rover, p:palette_cga}, {name: 'lem', t:lem, p:palette_c64}];



var sound_off = [
"................",
".......2........",
"......22........",
".....2.2........",
"....2..2........",
".222...2.2....2.",
".2.....2..2..2..",
".2.....2...22...",
".2.....2...22...",
".2.....2..2..2..",
".222...2.2....2.",
"....2..2........",
".....2.2........",
"......22........",
".......2........",
"................"]

var sound_on = [
"................",
".......2........",
"......22........",
".....2.2...2....",
"....2..2....2...",
".222...2.2...2..",
".2.....2..2..2..",
".2.....2..2..2..",
".2.....2..2..2..",
".2.....2..2..2..",
".222...2.2...2..",
"....2..2....2...",
".....2.2...2....",
"......22........",
".......2........",
"................"]

var ammo_icon = [
".333333337......",
"..333333337.....",
"...333333337....",
"....333333337...",
".....333333337..",
"......33337.....",
".......33337....",
"........33337...",
".........33337..",
"..........33337.",
"........33337...",
".........3337...",
"..........337...",
"...........37...",
"............7...",
"................"]

var fuel_icon = [
".......2........",
"......222.......",
"......EEE.......",
"......EEE.......",
"......EEE.......",
"......EEE.......",
".....EEEEE......",
".....EEEEE......",
"....EEEEEEE.....",
"...EEEEEEEEE....",
"..EEEEEEEEEEE...",
"..EEEEEEEEE2E...",
"..EEEEEEEE22E...",
"..EEEEEEE22EE...",
"...EEEEEEEEE....",
"................"]

guideInputHorizontalData =[
".........22.....",
"........222.....",
".......2222.....",
"......22222.....",
".....222222.....",
"....2222222.....",
"...22222222.....",
"..222222222.....",
"..222222222.....",
"...22222222.....",
"....2222222.....",
".....222222.....",
"......22222.....",
".......2222.....",
"........222.....",
".........22....."
]


guideInputVerticalData =[
"................",
"................",
".......22.......",
"......2222......",
".....222222.....",
"....22222222....",
"...2222222222...",
"..222222222222..",
".22222222222222.",
"2222222222222222",
"2222222222222222",
"................",
"................",
"................",
"................",
"................"
]

var sound_enabled = false;
var loop;
var art_loaded = false;
var thresholdScore;
var demo;
var numtween;
var highScoreData;
var high_scores_loaded = false;
var touchActivated;
var keys;




