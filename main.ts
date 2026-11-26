namespace SpriteKind {
    export const Yaoya = SpriteKind.create()
    export const Box = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const BossBeam = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
namespace MapConnectionKind {
    export const Door5 = MapConnectionKind.create()
    export const Door6 = MapConnectionKind.create()
    export const Door7 = MapConnectionKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (controller.up.isPressed()) {
        if (tileUtil.currentTilemap() == map02) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        } else if (tileUtil.currentTilemap() == map04) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door4)
        }
        for (let 値 of tiles.getTilesByType(sprites.dungeon.floorDarkDiamond)) {
            tiles.placeOnTile(sprite, 値)
        }
    }
})
function initNPC () {
    for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
        myNPC = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.NPC)
        characterAnimations.loopFrames(
        myNPC,
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f 3 3 5 3 3 5 3 d f f . . 
            . . . f d f 3 5 5 3 f f d f . . 
            . . . f d f 3 3 3 3 3 f f . . . 
            . . . f f 3 5 3 3 5 3 3 f . . . 
            . . . . f f f f f f f f f . . . 
            . . . . . . . . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 3 f f . . 
            . . f d f f 3 5 5 3 f d f . . . 
            . . . f f 3 3 3 3 3 f d f . . . 
            . . . f 3 3 5 3 3 5 3 f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . f f . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.FacingDown)
        )
        characterAnimations.setCharacterState(myNPC, characterAnimations.rule(Predicate.FacingDown))
        tiles.placeOnTile(myNPC, value)
    }
    tileUtil.coverAllTiles(assets.tile`tile4`, sprites.dungeon.floorDark0)
}
sprites.onOverlap(SpriteKind.Sword, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDarkDiamond, function (sprite, location) {
    if (controller.down.isPressed()) {
        if (tileUtil.currentTilemap() == map03) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door2)
            for (let 値2 of tiles.getTilesByType(sprites.dungeon.doorClosedNorth)) {
                tiles.placeOnTile(sprite, 値2)
            }
        } else if (tileUtil.currentTilemap() == map06) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door5)
            for (let 値3 of tiles.getTilesByType(sprites.dungeon.doorClosedNorth)) {
                tiles.placeOnTile(sprite, 値3)
            }
        } else {
            if (tileUtil.currentTilemap() == map01) {
                tileUtil.loadConnectedMap(MapConnectionKind.Door1)
            } else if (tileUtil.currentTilemap() == map05) {
                tileUtil.loadConnectedMap(MapConnectionKind.Door4)
            }
            for (let 値4 of tiles.getTilesByType(sprites.dungeon.doorOpenNorth)) {
                tiles.placeOnTile(sprite, 値4)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy()
})
tileUtil.onMapUnloaded(function (tilemap2) {
    destroySprites()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordFlag == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sword)
        swordFlag = 0
    }
    playerDirection = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
function initPlayer () {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    tiles.placeOnTile(mySprite, tiles.getTilesByType(assets.tile`myTile`)[0])
    tileUtil.replaceAllTiles(assets.tile`myTile`, sprites.dungeon.floorDark0)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordFlag == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sword)
        swordFlag = 0
    }
    playerDirection = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fire, function (sprite, otherSprite) {
    fireFlag = 1
    sprites.destroy(otherSprite, effects.fire, 100)
    music.powerUp.play()
    tileUtil.replaceAllTiles(assets.tile`tile3`, sprites.dungeon.floorDark0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    controller.moveSprite(mySprite, 0, 0)
    if (door == 0) {
        story.setSoundEnabled(true)
        story.printCharacterText("トビラを開けますか")
        story.showPlayerChoices("はい", "いいえ")
        if (story.checkLastAnswer("はい")) {
            door = 1
            for (let value2 of tiles.getTilesByType(assets.tile`transparency16`)) {
                music.bigCrash.play()
                scene.cameraShake(4, 200)
                tileUtil.replaceAllTiles(assets.tile`transparency16`, sprites.dungeon.doorOpenWest)
                tiles.setWallAt(value2, false)
            }
        } else {
            story.printCharacterText("あっそ")
        }
    }
    controller.moveSprite(mySprite, 100, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordFlag == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sword)
        swordFlag = 0
    }
    playerDirection = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(otherSprite, effects.hearts, 100)
    music.powerUp.play()
    tileUtil.replaceAllTiles(assets.tile`tile5`, sprites.dungeon.floorDark0)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss, effects.disintegrate, 1000)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(4, 2000)
    bossFlag = 1
    for (let value3 of tiles.getTilesByType(assets.tile`transparency16`)) {
        tiles.setWallAt(value3, false)
        tiles.setTileAt(value3, sprites.dungeon.doorOpenWest)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`tile1`)) {
        music.bigCrash.play()
        tiles.setTileAt(location, sprites.dungeon.floorDark0)
        tiles.setWallAt(location, false)
        myBlock = sprites.create(img`
            . . . . . c c b b b . . . . . . 
            . . . . c b d d d d b . . . . . 
            . . . . c d d d d d d b b . . . 
            . . . . c d d d d d d d d b . . 
            . . . c b b d d d d d d d b . . 
            . . . c b b d d d d d d d b . . 
            . c c c c b b b b d d d b b b . 
            . c d d b c b b b b b b b b d b 
            c b b d d d b b b b b d d b d b 
            c c b b d d d d d d d b b b d c 
            c b c c c b b b b b b b d d c c 
            c c b b c c c c b d d d b c c b 
            . c c c c c c c c c c c b b b b 
            . . c c c c c b b b b b b b c . 
            . . . . . . c c b b b b c c . . 
            . . . . . . . . c c c c . . . . 
            `, SpriteKind.Block)
        tiles.placeOnTile(myBlock, location)
        myBlock.destroy(effects.fire, 500)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (swordFlag == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Sword)
        swordFlag = 0
    }
    playerDirection = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    music.powerUp.play()
    info.changeLifeBy(1)
    tileUtil.replaceAllTiles(assets.tile`transparency16`, sprites.dungeon.floorDark0)
})
tileUtil.onMapLoaded(function (tilemap2) {
    destroySprites()
    initNPC()
    initNPC2()
    initNPC3()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (controller.right.isPressed()) {
        if (tileUtil.currentTilemap() == map04) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door3)
        } else if (tileUtil.currentTilemap() == map7) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door6)
        } else if (tileUtil.currentTilemap() == map02) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door7)
        }
        for (let 値5 of tiles.getTilesByType(sprites.dungeon.doorOpenWest)) {
            tiles.placeOnTile(sprite, 値5)
        }
    }
})
function initNPC2 () {
    for (let value4 of tiles.getTilesByType(assets.tile`myTile8`)) {
        myYaoya = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Yaoya)
        characterAnimations.loopFrames(
        myYaoya,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d 4 e f e . 
            . f e f f b b b e d d 4 e . 
            . e 4 f b 3 3 3 e d d e . . 
            . . . f 6 6 6 6 f e e . . . 
            . . . f f f f f f f . . . . 
            . . . f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . 
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . e f e 4 d d d d d f f . . 
            . e 4 d d e b b b f f e f . 
            . . e d d e 3 3 b e f 4 e . 
            . . . e e f 6 6 6 6 f . . . 
            . . . . f f f f f f f . . . 
            . . . . . . . . f f f . . . 
            `],
        500,
        characterAnimations.rule(Predicate.FacingDown)
        )
        characterAnimations.setCharacterState(myYaoya, characterAnimations.rule(Predicate.FacingDown))
        tiles.placeOnTile(myYaoya, value4)
    }
    tileUtil.coverAllTiles(assets.tile`myTile8`, assets.tile`myTile9`)
}
function destroySprites () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Yaoya)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Box)
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Fire)
    sprites.destroyAllSpritesOfKind(SpriteKind.Heart)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    if (controller.up.isPressed()) {
        if (tileUtil.currentTilemap() == map02) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door2)
        } else if (tileUtil.currentTilemap() == map04) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door5)
        }
        for (let 値6 of tiles.getTilesByType(sprites.dungeon.floorDarkDiamond)) {
            tiles.placeOnTile(sprite, 値6)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    music.powerUp.play()
    keyFlag = 1
    tileUtil.replaceAllTiles(assets.tile`tile8`, sprites.dungeon.floorDark0)
})
function initNPC3 () {
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        myNPC = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.NPC)
        characterAnimations.loopFrames(
        myNPC,
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f 3 3 5 3 3 5 3 d f f . . 
            . . . f d f 3 5 5 3 f f d f . . 
            . . . f d f 3 3 3 3 3 f f . . . 
            . . . f f 3 5 3 3 5 3 3 f . . . 
            . . . . f f f f f f f f f . . . 
            . . . . . . . . . f f . . . . . 
            `,img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 3 f f . . 
            . . f d f f 3 5 5 3 f d f . . . 
            . . . f f 3 3 3 3 3 f d f . . . 
            . . . f 3 3 5 3 3 5 3 f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . f f . . . . . . . . . 
            `],
        500,
        characterAnimations.rule(Predicate.FacingDown)
        )
        characterAnimations.setCharacterState(myNPC, characterAnimations.rule(Predicate.FacingDown))
        tiles.placeOnTile(myNPC, value5)
    }
    tileUtil.coverAllTiles(assets.tile`tile4`, sprites.dungeon.floorDark0)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.powerUp.play()
    fireFlag = 1
    tileUtil.replaceAllTiles(assets.tile`myTile1`, sprites.dungeon.floorDark0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    if (controller.left.isPressed()) {
        if (tileUtil.currentTilemap() == map02) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door3)
        } else if (tileUtil.currentTilemap() == map04) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door6)
        } else if (tileUtil.currentTilemap() == map8) {
            tileUtil.loadConnectedMap(MapConnectionKind.Door7)
        }
        for (let 値7 of tiles.getTilesByType(sprites.dungeon.doorOpenEast)) {
            tiles.placeOnTile(sprite, 値7)
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile9`)) {
            controller.moveSprite(mySprite, 0, 0)
            story.setSoundEnabled(true)
            story.printCharacterText("トマトを\\n落としちゃってね")
            story.printCharacterText("拾うのを\\n手伝ってくれないかな")
            story.showPlayerChoices("はい", "いいえ")
            if (story.checkLastAnswer("はい")) {
                story.printCharacterText("ありがとうね")
            } else {
                story.printCharacterText("；；")
            }
            controller.moveSprite(mySprite, 100, 100)
        }
    }
})
let myYaoya: Sprite = null
let myBlock: Sprite = null
let door = 0
let mySprite: Sprite = null
let myNPC: Sprite = null
let map8: tiles.TileMapData = null
let map7: tiles.TileMapData = null
let map06: tiles.TileMapData = null
let map05: tiles.TileMapData = null
let map04: tiles.TileMapData = null
let map03: tiles.TileMapData = null
let map02: tiles.TileMapData = null
let map01: tiles.TileMapData = null
let keyFlag = 0
let bossFlag = 0
let fireFlag = 0
let swordFlag = 0
let playerDirection = 0
let stairsFlag = 0
info.setLife(3)
playerDirection = 0
swordFlag = 0
fireFlag = 0
bossFlag = 0
keyFlag = 0
map01 = tilemap`レベル3`
map02 = tilemap`レベル2`
map03 = tilemap`レベル4`
map04 = tilemap`レベル1`
map05 = tilemap`レベル5`
map06 = tilemap`レベル6`
map7 = tilemap`レベル8`
map8 = tilemap`レベル9`
let mapSouko = tilemap`レベル9`
tileUtil.connectMaps(map01, map02, MapConnectionKind.Door1)
tileUtil.connectMaps(map02, map03, MapConnectionKind.Door2)
tileUtil.connectMaps(map02, map04, MapConnectionKind.Door3)
tileUtil.connectMaps(map04, map05, MapConnectionKind.Door4)
tileUtil.connectMaps(map04, map06, MapConnectionKind.Door5)
tileUtil.connectMaps(map04, map7, MapConnectionKind.Door6)
tileUtil.connectMaps(map02, map8, MapConnectionKind.Door7)
tiles.setCurrentTilemap(map01)
initPlayer()
