Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "motor_control",
            "tooltip": "Drive motor with speed",
            "helpUrl": "",
            "message0": "Drive motor %1 speed to %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "motor_channel",
                    "options":[
                        [
                            "M0",
                            "0"
                        ],
                        [
                            "M1",
                            "1"
                        ],
                        [
                            "M2",
                            "2"
                        ],
                        [
                            "M3",
                            "3"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "speed",
                    "value": 0,
                    "min": -100,
                    "max": 100
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#eb0034"
        },
        {
            "type": "spin",
            "tooltip": "Spin robot by motor 0 and 1",
            "helpUrl": "",
            "message0": "Spin %1 with speed %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "direction",
                    "options":[
                        [
                            "Left",
                            "l"
                        ],
                        [
                            "Right",
                            "r"
                        ]
                    ]
                },
                {
                    "type": "field_number",
                    "name": "speed",
                    "value": 0,
                    "min": -100,
                    "max": 100
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#eb0034"
        }
    ]
);