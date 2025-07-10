Blockly.Python['motor_control'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const motor_channel = block.getFieldValue('motor_channel');
    const speed = block.getFieldValue('speed');
    const code = `mtr.drive(${motor_channel}, ${speed})\n`;
    return code;
};

Blockly.Python['spin'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const direction = block.getFieldValue('direction');
    const speed = block.getFieldValue('speed');
    const code = `mtr.spin('${direction}', ${speed})\n`;
    return code;
};
