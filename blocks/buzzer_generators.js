Blockly.Python['beep_duration'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    const duration = block.getFieldValue('duration')
    const code = `snd.beep(${duration})\n`
    return code;
}

Blockly.Python['sound_freq'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    const frequency = block.getFieldValue('frequency')
    const code = `snd.sound(${frequency})\n`
    return code;
}

Blockly.Python['noSound'] = function (block) {
    Blockly.Python.definitions_['import'] = 'from codelab import *'
    const code = `snd.noSound()\n`
    return code;
}