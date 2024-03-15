let greenIntensity = 0
let yellowIntensity = 0
let redIntensity = 0
let status = 0
let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB_RGB)
let stopper = strip.range(0, 1)
let waiter = strip.range(1, 1)
let goer = strip.range(2, 1)
// strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    redIntensity = Math.round(Math.map(input.acceleration(Dimension.X), -900, 900, 0, 50) * 100)
    yellowIntensity = Math.round(Math.map(input.acceleration(Dimension.Y), -900, 900, 0, 50) * 100) / 100
    greenIntensity = Math.round(Math.map(input.acceleration(Dimension.Z), -900, 900, 0, 50) * 100) / 100
    goer.showColor(neopixel.hsl(100, 255, (input.acceleration(Dimension.X) - -900) / 1800 * 100))
    waiter.showColor(neopixel.hsl(50, 255, (input.acceleration(Dimension.Y) - -900) / 1800 * 100))
    stopper.showColor(neopixel.hsl(0, 255, (input.acceleration(Dimension.Z) - -900) / 1800 * 100))
    basic.pause(50)
})
