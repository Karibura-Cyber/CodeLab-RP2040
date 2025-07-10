Blockly.Python['wait_ultil_button_pressed'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    const button = block.getFieldValue('button');
    const code = `waitSwitch('${button}')\n`;
    return code;
};

Blockly.Python['getButton_value'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    const dropdown_button = block.getFieldValue('button');
    const isInvert = block.getFieldValue('isInvert');
    const code = `getSwitch('${dropdown_button}', ${isInvert})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};