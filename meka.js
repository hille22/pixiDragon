class Mekas {
    constructor(x, y) {
        console.log("Meka loaded")
        this.x =x;
        this.y = y;
       // this.data = data;
        this.scale = 0.5 ;
        this.app = app;

        PIXI.Loader.shared
        .add('skeleton', 'mecha_1002_101d_show_ske.json')
        .add('texture_json', 'mecha_1002_101d_show_tex.json')
        .add('texture_png', 'mecha_1002_101d_show_tex.png')
        .load(this.onAssetsLoaded.bind(this))
        .reset() // test de reset load issue https://github.com/pixijs/pixijs/issues/4100
        ;

    }

    onAssetsLoaded(loader, res) {
        
        const factory = dragonBones.PixiFactory.factory;

        factory.parseDragonBonesData(res.skeleton.data);
        factory.parseTextureAtlasData(res.texture_json.data, res.texture_png.texture);

        this.armatureDisplay = factory.buildArmatureDisplay('mecha_1002_101d', 'mecha_1002_101d_show');
        this.armatureDisplay.animation.play('idle');
        this.armatureDisplay.x = this.x;
        this.armatureDisplay.y = this.y;
        this.armatureDisplay.scale.set(this.scale, this.scale);;
        this.app.stage.addChild(this.armatureDisplay);

    }

}

