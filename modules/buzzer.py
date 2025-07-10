from machine import Pin, PWM
from time import sleep

def pwmWrite(pin, duty, freq=1000):
    pwm = PWM(Pin(pin))
    pwm.freq(freq)
    duty_16bit = int(duty / 1023 * 65535)
    pwm.duty_u16(duty_16bit)

def beep(self, duration):
    pwmWrite(11, 512)
    sleep(duration)
    Pin(11, Pin.OUT).value(1)
    
def sound(self, frequency):
    pwmWrite(11, 512, frequency)
    
def noSound(self):
    Pin(11, Pin.OUT).value(1)