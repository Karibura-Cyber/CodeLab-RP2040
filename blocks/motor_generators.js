Blockly.Python['motor_control'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    Blockly.Python.definitions_['import_motor'] = 'from motor import *'

    const motor_channel = block.getFieldValue('motor_channel');
    const speed = block.getFieldValue('speed');
    const code = `motor(${motor_channel}, ${speed})\n`;
    return code;
};

Blockly.Python['spin'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    Blockly.Python.definitions_['import_motor'] = 'from motor import *'
    
    const direction = block.getFieldValue('direction');
    const speed = block.getFieldValue('speed');
    const code = `spin('${direction}', ${speed})\n`;
    return code;
};
