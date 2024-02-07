import Math

def on_forever():
    adcValue = pins.analog_read_pin(AnalogPin.P0)
    V = adcValue*3.3/1023.0
    Rt = V/((3.3-V)/10)
    tempC = (1/(1/(273.15+25) + Math.log(Rt/10)/3950))-273.15
    basic.show_number(tempC)
    pass
basic.forever(on_forever)

serial.write_number(tempC)