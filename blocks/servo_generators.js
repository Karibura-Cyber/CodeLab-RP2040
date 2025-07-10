Blockly.Python['servo'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'

    const channel = block.getFieldValue('channel');
    const angle = block.getFieldValue('angle');
    const code = `servo(${channel}, ${angle})\n`
    return code;
}