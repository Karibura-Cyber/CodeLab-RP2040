from machine import Pin, PWM
from time import sleep

servo_pin_map = [17, 16, 15, 14, 13, 12]
servo_pwms = [PWM(Pin(pin)) for pin in servo_pin_map]

for pwm in servo_pwms:
    pwm.freq(50)

def pwmWrite(pin, duty, freq=1000):
    pwm = PWM(Pin(pin))
    pwm.freq(freq)
    duty_16bit = int(duty / 1023 * 65535)
    pwm.duty_u16(duty_16bit)

# ====================== SWITCH =====================

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
    
def waitSwitch(button):
    while getSwitch(button): continue

# ====================== BUZZER =====================

def beep(self, duration):
    pwmWrite(11, 512)
    sleep(duration)
    Pin(11, Pin.OUT).value(1)
    
def sound(self, frequency):
    pwmWrite(11, 512, frequency)
    
def noSound(self):
    Pin(11, Pin.OUT).value(1)

# ====================== SERVO =====================
    
def servo(channel, angle):
    min_duty = int(65535 * 0.025)  # ~0.5ms
    max_duty = int(65535 * 0.125)  # ~2.5ms
    duty = min_duty + (angle / 180) * (max_duty - min_duty)
    servo_pwms[channel].duty_u16(int(duty))