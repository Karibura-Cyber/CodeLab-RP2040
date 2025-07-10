Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "wait_ultil_button_pressed",
            "tooltip": "Wait until button pressed",
            "helpUrl": "",
            "message0": "Wait until %1 pressed",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "button",
                    "options":[
                        [
                            "B0",
                            "b0"
                        ],
                        [
                            "B1",
                            "b1"
                        ]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#eb8f34"
        },
        {
            "type": "getButton_value",
            "tooltip": "Get digital value from button",
            "helpUrl": "",
            "message0": "Get button %1 value with invert %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "button",
                    "options": [
                        [
                            "B0",
                            "b0"
                        ],
                        [
                            "B1",
                            "b1"
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "isInvert",
                    "options": [
                    [
                        "true",
                        "True"
                    ],
                    [
                        "false",
                        "False"
                    ]
                    ]
                }
            ],
            "output": null,
            "colour": "#eb8f34"
        }
    ]
);