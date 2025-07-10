from machine import Pin, PWM

# ====================== MOTOR =====================

motor_pins = {
    0: (25, 24),
    1: (23, 22),
    2: (21, 20),
    3: (19, 18),
}
pwm_freq = 1000
motors = {}

# Initialize motors
try:
    for ch, (in1_pin, in2_pin) in motor_pins.items():
        in1_pwm = PWM(Pin(in1_pin, Pin.OUT))
        in2_pwm = PWM(Pin(in2_pin, Pin.OUT))
        in1_pwm.freq(pwm_freq)
        in2_pwm.freq(pwm_freq)
        motors[ch] = (in1_pwm, in2_pwm)
except Exception as e:
    raise RuntimeError(f"Failed to initialize motor pins: {e}")

# Map function
def map_value(x, in_min, in_max, out_min, out_max):
    return int((x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)

# Convert speed to PWM
def speed_to_pwm(speed):
    if speed < 0:
        return map_value(speed, -100, 0, 65535, 0)
    elif speed > 0:
        return map_value(speed, 0, 100, 0, 65535)
    else:
        return 0

# Drive motor
def motor(channel, speed):
    if channel not in motors:
        raise ValueError("Invalid motor channel")

    in1_pwm, in2_pwm = motors[channel]
    pwm_val = speed_to_pwm(speed)

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

# Spin robot (left or right)
def spin(direction, speed):
    if direction == "l":
        drive(0, -speed)
        drive(1, speed)
    elif direction == "r":
        drive(0, speed)
        drive(1, -speed)
