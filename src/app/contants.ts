export const expertJsonObj=[{
    "expertDebug": {
        "expertDebugTitle": "No Power",
        "expertDebugID": "EDID0001",
        "expertDebugVersion": "v1.1221",
        "expertDebugNodes": [
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_01",
                "nodeText": "Physical/liquid damage?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_01_01",
                        "answerActions": "newDebugflow",
                        "answerNewdebugflow":"Audio Failure",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "Liquid",
                                "answerParts": [
                                    {
                                        "part": " Result CID"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_02",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Unit power on after connecting reference ACAD?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_02",
                "nodeText": "Unit power on after connecting reference ACAD?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_03",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Customer ACAD available?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_05",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Any disconected cables?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_03",
                "nodeText": "Customer ACAD available?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_03_02",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "AC Adaptor Issue",
                                "answerParts": [
                                    {
                                        "part": "AC ADAPTER"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_03_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "AC ADAPTER ADDED",
                                "answerParts": [
                                    {
                                        "part": "AC ADAPTER"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_05",
                "nodeText": "Any disconected cables?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_06",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Reconnecting cables fixes issue?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_07",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Is charging port integrated with MB?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_06",
                "nodeText": "Reconnecting cables fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_06_01",
                        "answerActions": "REFFITED",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "CABLE"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_07",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Is charging port integrated with MB?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_07",
                "nodeText": "Is charging port integrated with MB?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_09",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting RTC battery fixes issue?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_08",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Unit turns on with reference dc-in?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_08",
                "nodeText": "Unit turns on with reference dc-in?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_08_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "DC In cable",
                                "answerParts": [
                                    {
                                        "part": "CABLE DC IN"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_09",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting RTC battery fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_09",
                "nodeText": "Disconnecting RTC battery fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_09_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "MB"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_10",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting battery fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_10",
                "nodeText": "Disconnecting battery fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_10_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "BATTERY"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_11",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting RAM memory fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_11",
                "nodeText": "Disconnecting RAM memory fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_12",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Unit works with reference RAM memory?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_14",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting WLAN fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_12",
                "nodeText": "Unit works with reference RAM memory?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_12_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "MB"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_13",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Is memory module orginal?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_13",
                "nodeText": "Is memory module orginal?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_13_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "MEMORY",
                                "answerParts": [
                                    {
                                        "part": "RAM"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_13_02",
                        "answerActions": "Result CID",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": " Result CID"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_14",
                "nodeText": "Disconnecting WLAN fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_14_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "WiFi card Issue",
                                "answerParts": [
                                    {
                                        "part": "WLAN"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_15",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting WWAN fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_15",
                "nodeText": "Disconnecting WWAN fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_16",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Is WWAN orginal?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_17",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting drive (HDD/SSD) fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_16",
                "nodeText": "Is WWAN orginal?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_16_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "WWAN"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_16_02",
                        "answerActions": "Result CID",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": " Result CID"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_17",
                "nodeText": "Disconnecting drive (HDD/SSD) fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_18",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Is drive orginal?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_19",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting extension boards fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_18",
                "nodeText": "Is drive orginal?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_18_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "HDD/SSD"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_18_02",
                        "answerActions": "Result CID",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": " Result CID"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_19",
                "nodeText": "Disconnecting extension boards fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_19_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "EXTENSION BOARD"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_20",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting eDP cable fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_20",
                "nodeText": "Disconnecting eDP cable fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_21",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Reconnecting eDP cable fixes issue?"
                    },
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_26",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnectig keyboard and keyboard backlight cable fixes issue?"
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_21",
                "nodeText": "Reconnecting eDP cable fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_22",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Unit with LCD HUD?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_21_01",
                        "answerActions": "OSR",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "CABLE"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_22",
                "nodeText": "Unit with LCD HUD?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_23",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Reconnecting eDP cable alongside disconnecting LCD from it fixes issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_22_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "LCD HUD issue",
                                "answerParts": [
                                    {
                                        "part": "LCD"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_23",
                "nodeText": "Reconnecting eDP cable alongside disconnecting LCD from it fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_24",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting webcam fixes issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_23_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "LCD",
                                "answerParts": [
                                    {
                                        "part": "LCD"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_24",
                "nodeText": "Disconnecting webcam fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_24_02",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "CABLE LCD"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_24_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "WEBCAM"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_25",
                "nodeText": "Disconnecting touchpad fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_26",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnectig keyboard and keyboard backlight cable fixes issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_25_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "EXTENSION BOARD"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_26",
                "nodeText": "Disconnectig keyboard and keyboard backlight cable fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_27",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Did removing heatsink fixed issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_26_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "KEYBOARD"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_27",
                "nodeText": "Did removing heatsink fixed issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_28",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting FAN fixes issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_27_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "HEATSINK"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_28",
                "nodeText": "Disconnecting FAN fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_29",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Disconnecting speakers fixes issue?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_28_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "FAN"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_29",
                "nodeText": "Disconnecting speakers fixes issue?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_30",
                        "answerActions": "",
                        "finalNode": false,
                        "answerValue": "Does MB turns on after taking it out of unit?"
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_29_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "SPEAKERS"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "nodeType": "Manual",
                "nodeID": "ID_NO_POWER_30",
                "nodeText": "Does MB turns on after taking it out of unit?",
                "nodeWIRef": "",
                "answers": [
                    {
                        "answerText": "No",
                        "answerRef": "ID_NO_POWER_30_02",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "No power Other problem",
                                "answerParts": [
                                    {
                                        "part": "MB"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "answerText": "Yes",
                        "answerRef": "ID_NO_POWER_30_01",
                        "answerActions": "RPL",
                        "finalNode": true,
                        "answerDefect": [
                            {
                                "code": "Palmrest",
                                "answerParts": [
                                    {
                                        "part": "COVER PALMREST"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}]

export const platform = ["Loki N3 WHL", "Loki N3 WHL", "Loki N3 WHL", "Loki N3 WHL"];
export const defect = ["No Power", "No Boot", "No Charging"];