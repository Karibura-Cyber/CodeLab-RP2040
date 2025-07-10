Blockly.Python['beep_duration'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const duration = block.getFieldValue('duration')
    const code = `snd.beep(${duration})\n`
    return code;
}

Blockly.Python['sound_freq'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const frequency = block.getFieldValue('frequency')
    const code = `snd.sound(${frequency})\n`
    return code;
}

Blockly.Python['noSound'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const code = `snd.noSound()\n`
    return code;
}