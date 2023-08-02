controller.player4.onEvent(ControllerEvent.Connected, function () {
    mySprite4 = sprites.create(assets.image`myImage5`, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite4, sprites.swamp.swampTile0)
    pixels_to_meters = 40
    gravity = pixels_to_meters * 9.8
    mySprite4.ay = gravity
    controller.player4.moveSprite(mySprite4, 100, 0)
})
controller.player4.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite2.vy += -175
        scene.cameraShake(2, 500)
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    mySprite3 = sprites.create(assets.image`myImage4`, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite3, sprites.swamp.swampTile0)
    pixels_to_meters = 40
    gravity = pixels_to_meters * 9.8
    mySprite3.ay = gravity
    controller.player3.moveSprite(mySprite3, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile0)
    tiles.setCurrentTilemap(tilemap`level4`)
})
controller.player3.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite4.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite4.vy += -175
        scene.cameraShake(2, 500)
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (mySprite3.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite3.vy += -175
        scene.cameraShake(2, 500)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(assets.image`myImage3`, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite2, sprites.swamp.swampTile0)
    pixels_to_meters = 40
    gravity = pixels_to_meters * 9.8
    mySprite2.ay = gravity
    controller.player2.moveSprite(mySprite2, 100, 0)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        mySprite.vy += -175
        scene.cameraShake(2, 500)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile0)
    tiles.setCurrentTilemap(tilemap`level1`)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, sprites.swamp.swampTile0)
    tiles.setCurrentTilemap(tilemap`level2`)
})
let mySprite: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let gravity = 0
let pixels_to_meters = 0
let mySprite4: Sprite = null
break;
forever(function () {
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
})
