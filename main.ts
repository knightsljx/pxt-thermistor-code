basic.forever(function on_forever() {
    let adcValue = pins.analogReadPin(AnalogPin.P0)
    let V = adcValue * 3.3 / 1023.0
    let Rt = V / ((3.3 - V) / 10)
    let tempC = 1 / (1 / (273.15 + 25) + Math.log(Rt / 10) / 3950) - 273.15
    basic.showNumber(tempC)
    
})
serial.writeNumber(0)
