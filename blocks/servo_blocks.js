Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "servo",
            "tooltip": "Set servo to angle",
            "helpUrl": "",
            "message0": "Set servo %1 to %2 degree",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "channel",
                    "options":[
                        [
                            "SV0",
                            "0"
                        ],
                        [
                            "SV1",
                            "1"
                        ],
                        [
                            "SV2",
                            "2"
                        ],
                        [
                            "SV3",
                            "3"
                        ],
                        [
                            "SV4",
                            "4"
                        ],
                        [
                            "SV5",
                            "5"
                        ]
                    ]
                },
                {
                    "type": "field_angle",
                    "name": "angle",
                    "value": 0,
                    "min": 0,
                    "max": 360
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#eb0034"
        },
        {
            "type": "beep_duration",
            "tooltip": "Play buzzer with duration",
            "helpUrl": "",
            "message0": "Beep duration %1 second(s)",
            "args0": [
                {
                    "type": "field_number",
                    "name": "duration",
                    "value": 0.1,
                    "min": -Infinity,
                    "max": Infinity
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#fe00fe"
        },
        {
            "type": "sound_freq",
            "tooltip": "Play sound with frequency",
            "helpUrl": "",
            "message0": "Play sound at %1 Hz",
            "args0": [
                {
                    "type": "field_number",
                    "name": "frequency",
                    "value": 10,
                    "min": -Infinity,
                    "max": Infinity
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#fe00fe"
        },
        {
            "type": "noSound",
            "tooltip": "Stop all sound",
            "helpUrl": "",
            "message0": "Stop sound",
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#fe00fe"
        },
    ]
);