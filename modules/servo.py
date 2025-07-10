from machine import PWM, Pin

servo_pin_map = [17, 16, 15, 14, 13, 12]
servo_pwms = [PWM(Pin(pin)) for pin in servo_pin_map]

for pwm in servo_pwms:
    pwm.freq(50)

def servo(channel, angle):
    min_duty = int(65535 * 0.025)  # ~0.5ms
    max_duty = int(65535 * 0.125)  # ~2.5ms
    duty = min_duty + (angle / 180) * (max_duty - min_duty)
    servo_pwms[channel].duty_u16(int(duty))