Blockly.Python['wait_ultil_button_pressed'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const button = block.getFieldValue('button');
    const code = `ctl.waitBTN('${button}')\n`;
    return code;
};

Blockly.Python['getButton_value'] = function (block) {
    Blockly.Python.definitions_['import_codelab'] = 'from codelab import control, motor, sound\nfrom servo import *\nctl = control()\nmtr = motor()\nsnd = sound()';
    const dropdown_button = block.getFieldValue('button');
    const isInvert = block.getFieldValue('isInvert');
    const code = `ctl.getButton('${dropdown_button}', ${isInvert})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};