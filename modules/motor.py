from machine import Pin, PWM
from time import sleep

def pwmWrite(pin, duty, freq=1000):
    pwm = PWM(Pin(pin))
    pwm.freq(freq)
    duty_16bit = int(duty / 1023 * 65535)
    pwm.duty_u16(duty_16bit)

class motor:
    def __init__(self):
        self.motor_pins = {
            0: (25, 24),
            1: (23, 22),
            2: (21, 20),
            3: (19, 18),
        }
        self.pwm_freq = 1000

        self.motors = {}
        try:
            for ch, (in1_pin, in2_pin) in self.motor_pins.items():
                in1_pwm = PWM(Pin(in1_pin, Pin.OUT))
                in2_pwm = PWM(Pin(in2_pin, Pin.OUT))
                in1_pwm.freq(self.pwm_freq)
                in2_pwm.freq(self.pwm_freq)
                self.motors[ch] = (in1_pwm, in2_pwm)
        except Exception as e:
            raise RuntimeError(f"Failed to initialize motor pins: {e}")

    def map_value(self, x, in_min, in_max, out_min, out_max):
        return int((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

    def speed_to_pwm(self, speed):
        if speed < 0:
            return self.map_value(speed, -100, 0, 65535, 0)
        elif speed > 0:
            return self.map_value(speed, 0, 100, 0, 65535)
        else:
            return 0

    def drive(self, channel, speed):
        if channel not in self.motors:
            raise ValueError("Invalid motor channel")

        in1_pwm, in2_pwm = self.motors[channel]
        pwm_val = self.speed_to_pwm(speed)

        try:
            if speed > 0:
                in1_pwm.duty_u16(pwm_val)
                in2_pwm.duty_u16(0)
            elif speed < 0:
                in1_pwm.duty_u16(0)
                in2_pwm.duty_u16(pwm_val)
            else:
                in1_pwm.duty_u16(0)
                in2_pwm.duty_u16(0)
        except Exception as e:
            raise RuntimeError(f"Failed to drive motor on channel {channel}: {e}")
        
    def spin(self, direction, speed):
        if direction == "l":
            self.drive(0, -speed)
            self.drive(1, speed)
        elif direction == "r":
            self.drive(0, speed)
            self.drive(1, -speed)