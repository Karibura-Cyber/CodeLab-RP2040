Blockly.Python['servo'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const channel = block.getFieldValue('channel');
    const angle = block.getFieldValue('angle');
    const code = `servo(${channel}, ${angle})\n`
    return code;
}