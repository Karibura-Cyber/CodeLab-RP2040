from machine import Pin, PWM

def getSwitch(button, isInvert=False):
    pin_map = {
        'b0': 2,
        'b1': 3
    }
        
    if button not in pin_map:
        raise ValueError("Invalid button identifier")
    pin = Pin(pin_map[button], Pin.IN)
    value = pin.value()
    return int(not value if isInvert else value)
    
def waitSW(button):
    while getSwitch(button): continue