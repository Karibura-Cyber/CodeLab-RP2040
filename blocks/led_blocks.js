Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "led_control",
            "tooltip": "Control on board LED",
            "helpUrl": "",
            "message0": "Set LED %1 status %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "led",
                    "options":[
                        [
                            "B0",
                            "0"
                        ],
                        [
                            "B1",
                            "1"
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "status",
                    "options":[
                        [
                            "off",
                            "0"
                        ],
                        [
                            "on",
                            "1"
                        ]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#eb8f34"
        }
    ]
);