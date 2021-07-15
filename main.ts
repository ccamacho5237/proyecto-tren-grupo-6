basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Skull)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
