input.onButtonPressed(Button.A, function () {
    choice += -1
    if (choice < 0) {
        choice = 2
    }
})
input.onButtonPressed(Button.B, function () {
    choice += 1
    if (choice > 2) {
        choice = 0
    }
})
function select () {
    if (choice == 0) {
        basic.showString("R")
        npix.showColor(red)
    } else if (choice == 1) {
        basic.showString("G")
        npix.showColor(green)
    } else {
    	
    }
}
let choice = 0
let npix: neopixel.Strip = null
npix = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
let red = NeoPixelColors.Red;
let green = NeoPixelColors.Green;
let blue = NeoPixelColors.Blue;
basic.forever(select);
