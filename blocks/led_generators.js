Blockly.Python['led_control'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'

    const led = block.getFieldValue('led');
    const status = block.getFieldValue('status');
    const code = `ctl.led(${led}, ${status})\n`
    return code;
}