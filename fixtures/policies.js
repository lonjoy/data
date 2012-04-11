var policies_fixture = {
  "/type/state": {
    "_id": "/type/state",
    "type": "/type/type",
    "name": "State",
    "properties": {
      "name": {
        "name": "State Name",
        "type": "string"
      },
      "lat": {
        "name": "Latitude",
        "type": "number"
      },
      "long": {
        "name": "Longitude",
        "type": "number"
      },
      "zoom": {
        "name": "Zoom",
        "type": "number"
      },
      "code": {
        "name": "State Code",
        "type": "string"
      }
    },
    "indexes": {
      "by_name_and_code": ["name", "code"]
    }
  },
  "/type/grade_level": {
    "_id": "/type/grade_level",
    "type": "/type/type",
    "name": "Grade Level",
    "properties": {
      "name": {
        "name": "Name",
        "type": "string"
      },
      "color": {
        "name": "Color",
        "type": "string"
      }
    }
  },
  "/type/factoid": {
    "_id": "/type/factoid",
    "type": "/type/type",
    "name": "Factoid",
    "properties": {
      "text": {
        "name": "Text",
        "type": "string"
      },
      "year": {
        "name": "Text",
        "type": "number"
      },
      "indicator": {
        "name": "Indicator",
        "type": "/type/indicator"
      },
      "grade_level": {
        "name": "Grade Level",
        "type": "/type/grade_level"
      }
    }
  },
  "/type/value": {
    "_id": "/type/value",
    "type": "/type/type",
    "name": "Grade Level",
    "properties": {
      "name": {
        "name": "Name",
        "type": "string"
      },
      "descr": {
        "name": "Description",
        "type": "string"
      }
    }
  },
  "/type/indicator": {
    "_id": "/type/indicator",
    "type": "/type/type",
    "name": "Indicator",
    "properties": {
      "name": {
        "name": "Name",
        "type": "string",
        "required": true
      },
      "description": {
        "name": "Name",
        "type": "string",
        "required": true
      },
      "groups": {
        "name": "Group memberships",
        "type": "/type/group",
        "unique": false,
        "required": true
      },
      "parent": {
        "name": "Parent Indicator",
        "type": "/type/indicator"
      },
      "value_mappings": {
        "name": "Value mappings",
        "type": "object"
      }
    },
    "indexes": {
      "by_group": ["groups"]
    }
  },
  "/type/record": {
    "_id": "/type/record",
    "type": "/type/type",
    "name": "Indicator Value",
    "properties": {
      "ng1s": {
        "name": "ng1s",
        "type": "object"
      },
      "ng2s": {
        "name": "ng2s",
        "type": "object"
      },
      "ng3s": {
        "name": "ng3s",
        "type": "object"
      },
      "ng4s": {
        "name": "ng4s",
        "type": "object"
      },
      "ng5s": {
        "name": "ng5s",
        "type": "object"
      },
      "ng6s": {
        "name": "ng6s",
        "type": "object"
      },
      "ng7s": {
        "name": "ng7s",
        "type": "object"
      },
      "ng8s": {
        "name": "ng8s",
        "type": "object"
      },
      "ng9s": {
        "name": "ng9s",
        "type": "object"
      },
      "ng10s": {
        "name": "ng1s",
        "type": "object"
      },
      "ng16vms": {
        "name": "ng16vms",
        "type": "object"
      },
      "ng17vms": {
        "type": "object"
      },
      "ng18vms": {
        "type": "object"
      },
      "ng19vms": {
        "type": "object"
      },
      "ng20vms": {
        "type": "object"
      },
      "ng21vms": {
        "type": "object"
      },
      "ng22vms": {
        "type": "object"
      },
      "ng23vms": {
        "type": "object"
      },
      "ng24vms": {
        "type": "object"
      },
      "ng25vms": {
        "type": "object"
      },
      "ng26vms": {
        "type": "object"
      },
      "ng27vms": {
        "type": "object"
      },
      "ng28vms": {
        "type": "object"
      },
      "ng29vms": {
        "type": "object"
      },
      "ng11s": {
        "type": "object"
      },
      "ng16sss": {
        "type": "object"
      },
      "ng17sss": {
        "type": "object"
      },
      "ng18sss": {
        "type": "object"
      },
      "ng19sss": {
        "type": "object"
      },
      "ng20sss": {
        "type": "object"
      },
      "ng21sss": {
        "type": "object"
      },
      "ng22sss": {
        "type": "object"
      },
      "ng23sss": {
        "type": "object"
      },
      "ng24sss": {
        "type": "object"
      },
      "ng25sss": {
        "type": "object"
      },
      "ng26sss": {
        "type": "object"
      },
      "ng27sss": {
        "type": "object"
      },
      "ng28sss": {
        "type": "object"
      },
      "ng29sss": {
        "type": "object"
      },
      "ng12s": {
        "type": "object"
      },
      "ng16als": {
        "type": "object"
      },
      "ng17als": {
        "type": "object"
      },
      "ng18als": {
        "type": "object"
      },
      "ng19als": {
        "type": "object"
      },
      "ng20als": {
        "type": "object"
      },
      "ng21als": {
        "type": "object"
      },
      "ng22als": {
        "type": "object"
      },
      "ng23als": {
        "type": "object"
      },
      "ng24als": {
        "type": "object"
      },
      "ng25als": {
        "type": "object"
      },
      "ng26als": {
        "type": "object"
      },
      "ng27als": {
        "type": "object"
      },
      "ng28als": {
        "type": "object"
      },
      "ng29als": {
        "type": "object"
      },
      "ng13s": {
        "type": "object"
      },
      "ng16cps": {
        "type": "object"
      },
      "ng17cps": {
        "type": "object"
      },
      "ng18cps": {
        "type": "object"
      },
      "ng19cps": {
        "type": "object"
      },
      "ng20cps": {
        "type": "object"
      },
      "ng21cps": {
        "type": "object"
      },
      "ng22cps": {
        "type": "object"
      },
      "ng23cps": {
        "type": "object"
      },
      "ng24cps": {
        "type": "object"
      },
      "ng29cps": {
        "type": "object"
      },
      "ng14s": {
        "type": "object"
      },
      "ng16evs": {
        "type": "object"
      },
      "ng17evs": {
        "type": "object"
      },
      "ng18evs": {
        "type": "object"
      },
      "ng19evs": {
        "type": "object"
      },
      "ng20evs": {
        "type": "object"
      },
      "ng21evs": {
        "type": "object"
      },
      "ng22evs": {
        "type": "object"
      },
      "ng23evs": {
        "type": "object"
      },
      "ng24evs": {
        "type": "object"
      },
      "ng25evs": {
        "type": "object"
      },
      "ng26evs": {
        "type": "object"
      },
      "ng27evs": {
        "type": "object"
      },
      "ng28evs": {
        "type": "object"
      },
      "ng29evs": {
        "type": "object"
      },
      "ng15s": {
        "type": "object"
      },
      "ng16frs": {
        "type": "object"
      },
      "ng17frs": {
        "type": "object"
      },
      "ng18frs": {
        "type": "object"
      },
      "ng19frs": {
        "type": "object"
      },
      "ng20frs": {
        "type": "object"
      },
      "ng21frs": {
        "type": "object"
      },
      "ng22frs": {
        "type": "object"
      },
      "ng23frs": {
        "type": "object"
      },
      "ng24frs": {
        "type": "object"
      },
      "ng25frs": {
        "type": "object"
      },
      "ng26frs": {
        "type": "object"
      },
      "ng27frs": {
        "type": "object"
      },
      "ng28frs": {
        "type": "object"
      },
      "ng29frs": {
        "type": "object"
      },
      "state": {
        "name": "State",
        "type": "/type/state",
        "required": true
      },
      "grade_level": {
        "name": "Grade Level",
        "type": "/type/grade_level",
        "required": true
      }
    }
  },
  "/indicator/ng1s": {
    "type": "/type/indicator",
    "name": "General Regulations",
    "groups": [
      "/group/general_regulations"
    ],
    "parent": null,
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy"
    }
  },
  "/indicator/ng2s": {
    "type": "/type/indicator",
    "name": "Competitive food ban/cannot be sold",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng3s": {
    "type": "/type/indicator",
    "name": "Contract compliance with NG",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng4s": {
    "type": "/type/indicator",
    "name": "Fast food restrictions",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng5s": {
    "type": "/type/indicator",
    "name": "Meets IO F&V and/or whole grain std",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng6s": {
    "type": "/type/indicator",
    "name": "Whole, unprocessed & fresh food availability",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng7s": {
    "type": "/type/indicator",
    "name": "Food rewards",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng8s": {
    "type": "/type/indicator",
    "name": "Nutrition information access",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng9s": {
    "type": "/type/indicator",
    "name": "Free drinking water",
    "parent": "/indicator/ng1s",
    "groups": [
      "/group/general_regulations"
    ]
  },
  "/indicator/ng10s": {
    "type": "/type/indicator",
    "name": "Vending machines",
    "parent": null,
    "groups": [
      "/group/vending_machines"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/strong_policy"
    }
  },
  "/indicator/ng16vms": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng17vms": {
    "type": "/type/indicator",
    "name": "candy limits",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng18vms": {
    "type": "/type/indicator",
    "name": "Fat contents of foods",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng19vms": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng20vms": {
    "type": "/type/indicator",
    "name": "Sodium contents of foods",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng21vms": {
    "type": "/type/indicator",
    "name": "Calorie content / serving size",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng22vms": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng23vms": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng24vms": {
    "type": "/type/indicator",
    "name": "Regular sugar-sweetened soda",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng25vms": {
    "type": "/type/indicator",
    "name": "Beverages other than regular soda",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng26vms": {
    "type": "/type/indicator",
    "name": "Sugar/calorie content of milk",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng27vms": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng28vms": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng29vms": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng10s",
    "groups": [
      "/group/vending_machines"
    ]
  },
  "/indicator/ng11s": {
    "type": "/type/indicator",
    "name": "School Stores",
    "parent": null,
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng16sss": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng17sss": {
    "type": "/type/indicator",
    "name": "Candy limits",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng18sss": {
    "type": "/type/indicator",
    "name": "Fat content of foods",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng19sss": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng20sss": {
    "type": "/type/indicator",
    "name": "Sodium content of foods",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng21sss": {
    "type": "/type/indicator",
    "name": "Calorie content / serving size",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng22sss": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng23sss": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng24sss": {
    "type": "/type/indicator",
    "name": "Regular sugar-sweetened soda",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng25sss": {
    "type": "/type/indicator",
    "name": "Beverages other than regular soda",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng26sss": {
    "type": "/type/indicator",
    "name": "Sugar / caalorie content of milk",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng27sss": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng28sss": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng29sss": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng11s",
    "groups": [
      "/group/school_stores"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng12s": {
    "type": "/type/indicator",
    "name": "A la carte",
    "parent": null,
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng16als": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng17als": {
    "type": "/type/indicator",
    "name": "Candy limits",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng18als": {
    "type": "/type/indicator",
    "name": "Fat contents of foods",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng19als": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng20als": {
    "type": "/type/indicator",
    "name": "Sodium content of foods",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng21als": {
    "type": "/type/indicator",
    "name": "Calorie content / serving size",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng22als": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng23als": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng24als": {
    "type": "/type/indicator",
    "name": "Regular sugar-sweetened soda",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng25als": {
    "type": "/type/indicator",
    "name": "Beverages other than regular milk",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng26als": {
    "type": "/type/indicator",
    "name": "Sugar/calorie content of milk",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng27als": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng28als": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng29als": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng12s",
    "groups": [
      "/group/a_la_carte"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng13s": {
    "type": "/type/indicator",
    "name": "Class parties",
    "parent": null,
    "group_label": "Class parties",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng16cps": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/banned"
    }
  },
  "/indicator/ng17cps": {
    "type": "/type/indicator",
    "name": "Candy limits",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng18cps": {
    "type": "/type/indicator",
    "name": "Fat content of foods",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng19cps": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng20cps": {
    "type": "/type/indicator",
    "name": "Sodium content of foods",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng21cps": {
    "type": "/type/indicator",
    "name": "Calorie content / serving size",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng22cps": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng23cps": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng24cps": {
    "type": "/type/indicator",
    "name": "Regular, sugar sugar-sweetened soda",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng25cps": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng26cps": {
    "type": "/type/indicator",
    "name": "Sugar/calorie content of milk",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng27cps": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng28cps": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng29cps": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng13s",
    "groups": [
      "/group/class_parties"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/strong_policy",
      "4": "/value/banned"
    }
  },
  "/indicator/ng14s": {
    "type": "/type/indicator",
    "name": "Evening / Community Events",
    "parent": null,
    "group_label": "Evening / Community Events",
    "groups": [
      "/group/evening_events"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/strong_policy"
    }
  },
  "/indicator/ng16evs": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng17evs": {
    "type": "/type/indicator",
    "name": "Candy limits",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng18evs": {
    "type": "/type/indicator",
    "name": "Fat content of foods",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng19evs": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng20evs": {
    "type": "/type/indicator",
    "name": "Sodium content of foods",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng21evs": {
    "type": "/type/indicator",
    "name": "Calorie content / serving size",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng22evs": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng23evs": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng24evs": {
    "type": "/type/indicator",
    "name": "Regular, sugar-sweetened soda",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng25evs": {
    "type": "/type/indicator",
    "name": "Beverages other than regular soda",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng26evs": {
    "type": "/type/indicator",
    "name": "Sugar calorie content of milk",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng27evs": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng28evs": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng29evs": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng14s",
    "groups": [
      "/group/evening_events"
    ]
  },
  "/indicator/ng15s": {
    "type": "/type/indicator",
    "name": "Fundraisers",
    "parent": null,
    "group_label": "Fundraisers",
    "groups": [
      "/group/fundraisers"
    ],
    "value_mappings": {
      "0": "/value/no_policy",
      "1": "/value/soft_policy",
      "2": "/value/medium_policy",
      "3": "/value/meets_standards",
      "4": "/value/strong_policy"
    }
  },
  "/indicator/ng16frs": {
    "type": "/type/indicator",
    "name": "Sugar content of foods",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng17frs": {
    "type": "/type/indicator",
    "name": "Candy limits",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng18frs": {
    "type": "/type/indicator",
    "name": "Fat content of foods",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng19frs": {
    "type": "/type/indicator",
    "name": "Trans fat limits",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng20frs": {
    "type": "/type/indicator",
    "name": "Sodium content of foods",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng21frs": {
    "type": "/type/indicator",
    "name": "Calorie content/serving size",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng22frs": {
    "type": "/type/indicator",
    "name": "Sugar content of beverages",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng23frs": {
    "type": "/type/indicator",
    "name": "Calorie content of beverages",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng24frs": {
    "type": "/type/indicator",
    "name": "Regular, sugar-sweetened soda",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng25frs": {
    "type": "/type/indicator",
    "name": "Beverages other than regular soda",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng26frs": {
    "type": "/type/indicator",
    "name": "Sugar/calorie content of milk",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng27frs": {
    "type": "/type/indicator",
    "name": "Fat content of milk",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng28frs": {
    "type": "/type/indicator",
    "name": "Serving size limit for beverages",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/indicator/ng29frs": {
    "type": "/type/indicator",
    "name": "Caffeine content of beverages",
    "parent": "/indicator/ng15s",
    "groups": [
      "/group/fundraisers"
    ]
  },
  "/grade_level/1": {
    "type": "/type/grade_level",
    "name": "Elementary",
    "color": "#7A62C2"
  },
  "/grade_level/2": {
    "type": "/type/grade_level",
    "name": "Middle",
    "color": "#7BA499"
  },
  "/grade_level/3": {
    "type": "/type/grade_level",
    "name": "High",
    "color": "#BFD979"
  },
  "/factoid/2006/ng1s/1": {
    "type": "/type/factoid",
    "text": "57% of public elementary school students could buy foods or drinks outside of school meals",
    "year": 2006,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2006/ng1s/2": {
    "type": "/type/factoid",
    "text": "17% of public elementary school students could buy sugary drinks on campus",
    "year": 2006,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2007/ng1s/1": {
    "type": "/type/factoid",
    "text": "22% of public elementary school students could buy foods at a school store or snack bar",
    "year": 2007,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2007/ng1s/2": {
    "type": "/type/factoid",
    "text": "11% of public elementary school students could buy sports drinks on campus",
    "year": 2007,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2008/ng1s/1": {
    "type": "/type/factoid",
    "text": "42% of public elementary school students could buy candy, ice cream, cookies or other sugary snacks on campus",
    "year": 2008,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2008/ng1s/2": {
    "type": "/type/factoid",
    "text": "15% of public elementary school students could buy bottled water at a school store or snack bar",
    "year": 2008,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2009/ng1s/1": {
    "type": "/type/factoid",
    "text": "13% of public elementary school students could buy drinks in vending machines on campus",
    "year": 2009,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2009/ng1s/2": {
    "type": "/type/factoid",
    "text": "22% of public elementary school students could buy foods or drinks from a store or snack bar on campus",
    "year": 2009,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2009/ng1s/3": {
    "type": "/type/factoid",
    "text": "50% of public elementary school students could buy drinks from a cafeteria á la carte during lunchtime",
    "year": 2009,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2009/ng1s/4": {
    "type": "/type/factoid",
    "text": "41% of public elementary school students attended a school that had nutritional guidelines for fundraising activities",
    "year": 2009,
    "indicator": "/indicator/ng2s"
  },
  "/factoid/2009/ng1s/5": {
    "type": "/type/factoid",
    "text": "10% of public elementary school students attended a school that restricted sugary snacks from being served at birthday parties",
    "year": 2009,
    "indicator": "/indicator/ng2s"
  },
  "/value/no_policy": {
    "type": "/type/value",
    "name": "No policy",
    "descr": "The no policy description."
  },
  "/value/soft_policy": {
    "type": "/type/value",
    "name": "Soft policy",
    "descr": "The soft policy description."
  },
  "/value/medium_policy": {
    "type": "/type/value",
    "name": "Medium policy",
    "descr": "The medium policy description."
  },
  "/value/meets_standards": {
    "type": "/type/value",
    "name": "Meets standards",
    "descr": "The meets standards description"
  },
  "/value/strong_policy": {
    "type": "/type/value",
    "name": "Strong policy",
    "descr": "The strong policy description"
  },
  "/value/banned": {
    "type": "/type/value",
    "name": "Banned",
    "descr": "The banned policy description"
  },
  "/state/1": {
    "type": "/type/state",
    "name": "Alabama",
    "long": -86.8295337,
    "lat": 33.2588817,
    "zoom": 5,
    "code": "AL"
  },
  "/state/2": {
    "type": "/type/state",
    "name": "Alaska",
    "long": -149.6809091,
    "lat": 64.4459613,
    "zoom": 4,
    "code": "AK"
  },
  "/state/4": {
    "type": "/type/state",
    "name": "Arizona",
    "long": -111.664248920118,
    "lat": 34.2935590031495,
    "zoom": 5,
    "code": "AZ"
  },
  "/state/5": {
    "type": "/type/state",
    "name": "Arkansas",
    "long": -92.4479108,
    "lat": 35.2048883,
    "zoom": 5,
    "code": "AR"
  },
  "/state/6": {
    "type": "/type/state",
    "name": "California",
    "long": -118.7559974,
    "lat": 36.7014631,
    "zoom": 4,
    "code": "CA"
  },
  "/state/8": {
    "type": "/type/state",
    "name": "Colorado",
    "long": -105.6077167,
    "lat": 38.7251776,
    "zoom": 5,
    "code": "CO"
  },
  "/state/9": {
    "type": "/type/state",
    "name": "Conneticut",
    "long": -72.5982114,
    "lat": 41.493929,
    "zoom": 6,
    "code": "CT"
  },
  "/state/10": {
    "type": "/type/state",
    "name": "Delaware",
    "long": -75.4013315,
    "lat": 38.6920451,
    "zoom": 7,
    "code": "DE"
  },
  "/state/11": {
    "type": "/type/state",
    "name": "District of Columbia",
    "long": -77.0163186154262,
    "lat": 38.9048072439128,
    "zoom": 7,
    "code": "DC"
  },
  "/state/12": {
    "type": "/type/state",
    "name": "Florida",
    "long": -81.412029,
    "lat": 27.5446808,
    "zoom": 5,
    "code": "FL"
  },
  "/state/13": {
    "type": "/type/state",
    "name": "Georgia",
    "long": 43.3079197395307,
    "lat": 42.2111479354976,
    "zoom": 5,
    "code": "GA"
  },
  "/state/15": {
    "type": "/type/state",
    "name": "Hawaii",
    "long": -157.9752032,
    "lat": 21.2160439,
    "zoom": 5,
    "code": "HI"
  },
  "/state/16": {
    "type": "/type/state",
    "name": "Idaho",
    "long": -114.659317703598,
    "lat": 44.389027069148,
    "zoom": 5,
    "code": "ID"
  },
  "/state/17": {
    "type": "/type/state",
    "name": "Illinois",
    "long": -89.4339809,
    "lat": 40.0796319,
    "zoom": 5,
    "code": "IL"
  },
  "/state/18": {
    "type": "/type/state",
    "name": "Indiana",
    "long": -86.1746933,
    "lat": 40.3270127,
    "zoom": 5,
    "code": "IN"
  },
  "/state/19": {
    "type": "/type/state",
    "name": "Iowa",
    "long": -93.3122705,
    "lat": 41.9216734,
    "zoom": 5,
    "code": "IA"
  },
  "/state/20": {
    "type": "/type/state",
    "name": "Kansas",
    "long": -98.5821872,
    "lat": 38.27312,
    "zoom": 5,
    "code": "KS"
  },
  "/state/21": {
    "type": "/type/state",
    "name": "Kentucky",
    "long": -85.1551411,
    "lat": 37.5726028,
    "zoom": 5,
    "code": "KY"
  },
  "/state/22": {
    "type": "/type/state",
    "name": "Louisiana",
    "long": -92.007126,
    "lat": 30.8703881,
    "zoom": 5,
    "code": "LA"
  },
  "/state/23": {
    "type": "/type/state",
    "name": "Maine",
    "long": -69.2363593096339,
    "lat": 45.3617146399904,
    "zoom": 5,
    "code": "ME"
  },
  "/state/24": {
    "type": "/type/state",
    "name": "Maryland",
    "long": -76.9382069,
    "lat": 39.5162234,
    "zoom": 6,
    "code": "MD"
  },
  "/state/25": {
    "type": "/type/state",
    "name": "Massachusetts",
    "long": -71.7969922290038,
    "lat": 42.2530185781864,
    "zoom": 6,
    "code": "MA"
  },
  "/state/26": {
    "type": "/type/state",
    "name": "Michigan",
    "long": -84.6824346,
    "lat": 43.6211955,
    "zoom": 5,
    "code": "MI"
  },
  "/state/27": {
    "type": "/type/state",
    "name": "Minnesota",
    "long": -94.6113288,
    "lat": 45.9896587,
    "zoom": 5,
    "code": "MN"
  },
  "/state/28": {
    "type": "/type/state",
    "name": "Mississippi",
    "long": -89.7348497,
    "lat": 32.9715645,
    "zoom": 5,
    "code": "MS"
  },
  "/state/29": {
    "type": "/type/state",
    "name": "Missouri",
    "long": -92.5617875,
    "lat": 38.7604815,
    "zoom": 5,
    "code": "MO"
  },
  "/state/30": {
    "type": "/type/state",
    "name": "Montana",
    "long": -109.6387579,
    "lat": 47.3752671,
    "zoom": 5,
    "code": "MT"
  },
  "/state/31": {
    "type": "/type/state",
    "name": "Nebraska",
    "long": -99.5873816,
    "lat": 41.7370229,
    "zoom": 5,
    "code": "NE"
  },
  "/state/32": {
    "type": "/type/state",
    "name": "Nevada",
    "long": -116.655382684067,
    "lat": 39.3564842607059,
    "zoom": 5,
    "code": "NV"
  },
  "/state/33": {
    "type": "/type/state",
    "name": "New Hampshire",
    "long": -71.6553992,
    "lat": 43.4849133,
    "zoom": 5,
    "code": "NH"
  },
  "/state/34": {
    "type": "/type/state",
    "name": "New Jersey",
    "long": -74.4041622,
    "lat": 40.0757384,
    "zoom": 6,
    "code": "NJ"
  },
  "/state/35": {
    "type": "/type/state",
    "name": "New Mexico",
    "long": -106.108384686406,
    "lat": 34.4213617353,
    "zoom": 5,
    "code": "NM"
  },
  "/state/36": {
    "type": "/type/state",
    "name": "New York",
    "long": -75.8449946,
    "lat": 43.1561681,
    "zoom": 5,
    "code": "NY"
  },
  "/state/37": {
    "type": "/type/state",
    "name": "North Carolina",
    "long": -79.1308213179471,
    "lat": 35.5260111958116,
    "zoom": 5,
    "code": "NC"
  },
  "/state/38": {
    "type": "/type/state",
    "name": "North Dakota",
    "long": -100.5407371,
    "lat": 47.6201462,
    "zoom": 5,
    "code": "ND"
  },
  "/state/39": {
    "type": "/type/state",
    "name": "Ohio",
    "long": -82.7103297812836,
    "lat": 40.4143751605274,
    "zoom": 5,
    "code": "OH"
  },
  "/state/40": {
    "type": "/type/state",
    "name": "Oklahoma",
    "long": -97.2684063,
    "lat": 34.9550817,
    "zoom": 5,
    "code": "OK"
  },
  "/state/41": {
    "type": "/type/state",
    "name": "Oregon",
    "long": -120.562646837357,
    "lat": 43.9389023976645,
    "zoom": 5,
    "code": "OR"
  },
  "/state/42": {
    "type": "/type/state",
    "name": "Pennsylvania",
    "long": -77.7278831,
    "lat": 40.9699889,
    "zoom": 5,
    "code": "PA"
  },
  "/state/44": {
    "type": "/type/state",
    "name": "Rhode Island",
    "long": -71.5104417313874,
    "lat": 41.5300370492686,
    "zoom": 6,
    "code": "RI"
  },
  "/state/45": {
    "type": "/type/state",
    "name": "South Carolina",
    "long": -80.8952485732179,
    "lat": 33.9057436634852,
    "zoom": 5,
    "code": "SC"
  },
  "/state/46": {
    "type": "/type/state",
    "name": "South Dakota",
    "long": -100.3487611,
    "lat": 44.6471762,
    "zoom": 5,
    "code": "SD"
  },
  "/state/47": {
    "type": "/type/state",
    "name": "Tennessee",
    "long": -86.2820081,
    "lat": 35.7730076,
    "zoom": 5,
    "code": "TN"
  },
  "/state/48": {
    "type": "/type/state",
    "name": "Texas",
    "long": -99.5120986,
    "lat": 31.8160381,
    "zoom": 5,
    "code": "TX"
  },
  "/state/49": {
    "type": "/type/state",
    "name": "Utah",
    "long": -111.678210194473,
    "lat": 39.3237351354152,
    "zoom": 5,
    "code": "UT"
  },
  "/state/50": {
    "type": "/type/state",
    "name": "Vermont",
    "long": -72.5002608,
    "lat": 44.5990718,
    "zoom": 5,
    "code": "VT"
  },
  "/state/51": {
    "type": "/type/state",
    "name": "Virginia",
    "long": -78.4927721,
    "lat": 37.1232245,
    "zoom": 5,
    "code": "VA"
  },
  "/state/53": {
    "type": "/type/state",
    "name": "Washington",
    "long": -120.586460104716,
    "lat": 47.4113802075398,
    "zoom": 5,
    "code": "WA"
  },
  "/state/54": {
    "type": "/type/state",
    "name": "West Virginia",
    "long": -80.8408416,
    "lat": 38.4758407,
    "zoom": 5,
    "code": "WV"
  },
  "/state/55": {
    "type": "/type/state",
    "name": "Wisconsin",
    "long": -89.6884637,
    "lat": 44.4308975,
    "zoom": 5,
    "code": "WI"
  },
  "/state/56": {
    "type": "/type/state",
    "name": "Wyoming",
    "long": -107.5685348,
    "lat": 43.1700264,
    "zoom": 5,
    "code": "WY"
  },
  "/state/60": {
    "type": "/type/state",
    "name": "American Samoa",
    "long": -14.27097,
    "lat": -170.13222,
    "zoom": 5,
    "code": "AS"
  },
  "/state/66": {
    "type": "/type/state",
    "name": "Guam",
    "long": 13.44439,
    "lat": 144.79062,
    "zoom": 5,
    "code": "GU"
  },
  "/state/69": {
    "type": "/type/state",
    "name": "Northern Mariana Islands",
    "long": 17.33083,
    "lat": 145.38469,
    "zoom": 5,
    "code": "MP"
  },
  "/state/72": {
    "type": "/type/state",
    "name": "Puerto Rico",
    "long": 18.22083,
    "lat": -66.59015,
    "zoom": 5,
    "code": "PR"
  },
  "/state/78": {
    "type": "/type/state",
    "name": "Virgin Islands",
    "long": 18.33576,
    "lat": -64.89633,
    "zoom": 5,
    "code": "VI"
  },
  "/state/64": {
    "type": "/type/state",
    "name": "Federated States of Micronesia",
    "long": 7.42555,
    "lat": 150.55081,
    "zoom": 5,
    "code": "FM"
  },
  "/state/68": {
    "type": "/type/state",
    "name": "Marshall Islands",
    "long": 7.13147,
    "lat": 171.18448,
    "zoom": 5,
    "code": "MH"
  },
  "/state/70": {
    "type": "/type/state",
    "name": "Palau",
    "long": 7.51498,
    "lat": 134.58252,
    "zoom": 5,
    "code": "PW"
  },
  "/record/1/1": {
    "type": "/type/record",
    "state": "/state/1",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/1/2": {
    "type": "/type/record",
    "state": "/state/1",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/1/3": {
    "type": "/type/record",
    "state": "/state/1",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/2/1": {
    "type": "/type/record",
    "state": "/state/2",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/2/2": {
    "type": "/type/record",
    "state": "/state/2",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/2/3": {
    "type": "/type/record",
    "state": "/state/2",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/4/1": {
    "type": "/type/record",
    "state": "/state/4",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/4/2": {
    "type": "/type/record",
    "state": "/state/4",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/4/3": {
    "type": "/type/record",
    "state": "/state/4",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/5/1": {
    "type": "/type/record",
    "state": "/state/5",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng7s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng8s": {
      "2006": 2,
      "2007": 2,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    }
  },
  "/record/5/2": {
    "type": "/type/record",
    "state": "/state/5",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/5/3": {
    "type": "/type/record",
    "state": "/state/5",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/6/1": {
    "type": "/type/record",
    "state": "/state/6",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/6/2": {
    "type": "/type/record",
    "state": "/state/6",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/6/3": {
    "type": "/type/record",
    "state": "/state/6",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/8/1": {
    "type": "/type/record",
    "state": "/state/8",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/8/2": {
    "type": "/type/record",
    "state": "/state/8",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24frs": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/8/3": {
    "type": "/type/record",
    "state": "/state/8",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng9s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24frs": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/9/1": {
    "type": "/type/record",
    "state": "/state/9",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/9/2": {
    "type": "/type/record",
    "state": "/state/9",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/9/3": {
    "type": "/type/record",
    "state": "/state/9",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/10/1": {
    "type": "/type/record",
    "state": "/state/10",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/10/2": {
    "type": "/type/record",
    "state": "/state/10",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/10/3": {
    "type": "/type/record",
    "state": "/state/10",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/11/1": {
    "type": "/type/record",
    "state": "/state/11",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20als": {
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/11/2": {
    "type": "/type/record",
    "state": "/state/11",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20als": {
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/11/3": {
    "type": "/type/record",
    "state": "/state/11",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20als": {
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 2,
      "2009": 2,
      "2010": 3
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/12/1": {
    "type": "/type/record",
    "state": "/state/12",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 2,
      "2007": 2,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29sss": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29als": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/12/2": {
    "type": "/type/record",
    "state": "/state/12",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/12/3": {
    "type": "/type/record",
    "state": "/state/12",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/13/1": {
    "type": "/type/record",
    "state": "/state/13",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/13/2": {
    "type": "/type/record",
    "state": "/state/13",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/13/3": {
    "type": "/type/record",
    "state": "/state/13",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/15/1": {
    "type": "/type/record",
    "state": "/state/15",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/15/2": {
    "type": "/type/record",
    "state": "/state/15",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/15/3": {
    "type": "/type/record",
    "state": "/state/15",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/16/1": {
    "type": "/type/record",
    "state": "/state/16",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/16/2": {
    "type": "/type/record",
    "state": "/state/16",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/16/3": {
    "type": "/type/record",
    "state": "/state/16",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/17/1": {
    "type": "/type/record",
    "state": "/state/17",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/17/2": {
    "type": "/type/record",
    "state": "/state/17",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/17/3": {
    "type": "/type/record",
    "state": "/state/17",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/18/1": {
    "type": "/type/record",
    "state": "/state/18",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng23vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng24vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng25vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng26vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng27vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng28vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng29vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/18/2": {
    "type": "/type/record",
    "state": "/state/18",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/18/3": {
    "type": "/type/record",
    "state": "/state/18",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/19/1": {
    "type": "/type/record",
    "state": "/state/19",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    }
  },
  "/record/19/2": {
    "type": "/type/record",
    "state": "/state/19",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/19/3": {
    "type": "/type/record",
    "state": "/state/19",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 2
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 3
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/20/1": {
    "type": "/type/record",
    "state": "/state/20",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/20/2": {
    "type": "/type/record",
    "state": "/state/20",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/20/3": {
    "type": "/type/record",
    "state": "/state/20",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/21/1": {
    "type": "/type/record",
    "state": "/state/21",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/21/2": {
    "type": "/type/record",
    "state": "/state/21",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/21/3": {
    "type": "/type/record",
    "state": "/state/21",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/22/1": {
    "type": "/type/record",
    "state": "/state/22",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/22/2": {
    "type": "/type/record",
    "state": "/state/22",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/22/3": {
    "type": "/type/record",
    "state": "/state/22",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 1,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/23/1": {
    "type": "/type/record",
    "state": "/state/23",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/23/2": {
    "type": "/type/record",
    "state": "/state/23",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/23/3": {
    "type": "/type/record",
    "state": "/state/23",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/24/1": {
    "type": "/type/record",
    "state": "/state/24",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/24/2": {
    "type": "/type/record",
    "state": "/state/24",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/24/3": {
    "type": "/type/record",
    "state": "/state/24",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/25/1": {
    "type": "/type/record",
    "state": "/state/25",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/25/2": {
    "type": "/type/record",
    "state": "/state/25",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/25/3": {
    "type": "/type/record",
    "state": "/state/25",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/26/1": {
    "type": "/type/record",
    "state": "/state/26",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/26/2": {
    "type": "/type/record",
    "state": "/state/26",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/26/3": {
    "type": "/type/record",
    "state": "/state/26",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/27/1": {
    "type": "/type/record",
    "state": "/state/27",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/27/2": {
    "type": "/type/record",
    "state": "/state/27",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/27/3": {
    "type": "/type/record",
    "state": "/state/27",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/28/1": {
    "type": "/type/record",
    "state": "/state/28",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/28/2": {
    "type": "/type/record",
    "state": "/state/28",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/28/3": {
    "type": "/type/record",
    "state": "/state/28",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/29/1": {
    "type": "/type/record",
    "state": "/state/29",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/29/2": {
    "type": "/type/record",
    "state": "/state/29",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/29/3": {
    "type": "/type/record",
    "state": "/state/29",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/30/1": {
    "type": "/type/record",
    "state": "/state/30",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/30/2": {
    "type": "/type/record",
    "state": "/state/30",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/30/3": {
    "type": "/type/record",
    "state": "/state/30",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/31/1": {
    "type": "/type/record",
    "state": "/state/31",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/31/2": {
    "type": "/type/record",
    "state": "/state/31",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/31/3": {
    "type": "/type/record",
    "state": "/state/31",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/32/1": {
    "type": "/type/record",
    "state": "/state/32",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/32/2": {
    "type": "/type/record",
    "state": "/state/32",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/32/3": {
    "type": "/type/record",
    "state": "/state/32",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/33/1": {
    "type": "/type/record",
    "state": "/state/33",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/33/2": {
    "type": "/type/record",
    "state": "/state/33",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/33/3": {
    "type": "/type/record",
    "state": "/state/33",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/34/1": {
    "type": "/type/record",
    "state": "/state/34",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/34/2": {
    "type": "/type/record",
    "state": "/state/34",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/34/3": {
    "type": "/type/record",
    "state": "/state/34",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 2,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng17frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng18frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng19frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    }
  },
  "/record/35/1": {
    "type": "/type/record",
    "state": "/state/35",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21frs": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/35/2": {
    "type": "/type/record",
    "state": "/state/35",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/35/3": {
    "type": "/type/record",
    "state": "/state/35",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/36/1": {
    "type": "/type/record",
    "state": "/state/36",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/36/2": {
    "type": "/type/record",
    "state": "/state/36",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/36/3": {
    "type": "/type/record",
    "state": "/state/36",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/37/1": {
    "type": "/type/record",
    "state": "/state/37",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng17vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng18vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng19vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng20vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng21vms": {
      "2008": 4,
      "2009": 4,
      "2010": 4
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng19als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/37/2": {
    "type": "/type/record",
    "state": "/state/37",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/37/3": {
    "type": "/type/record",
    "state": "/state/37",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/38/1": {
    "type": "/type/record",
    "state": "/state/38",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/38/2": {
    "type": "/type/record",
    "state": "/state/38",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/38/3": {
    "type": "/type/record",
    "state": "/state/38",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/39/1": {
    "type": "/type/record",
    "state": "/state/39",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/39/2": {
    "type": "/type/record",
    "state": "/state/39",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/39/3": {
    "type": "/type/record",
    "state": "/state/39",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 1,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 1
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 2,
      "2007": 2,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/40/1": {
    "type": "/type/record",
    "state": "/state/40",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/40/2": {
    "type": "/type/record",
    "state": "/state/40",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/40/3": {
    "type": "/type/record",
    "state": "/state/40",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/41/1": {
    "type": "/type/record",
    "state": "/state/41",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/41/2": {
    "type": "/type/record",
    "state": "/state/41",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/41/3": {
    "type": "/type/record",
    "state": "/state/41",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 1,
      "2009": 2,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng22als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng24als": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/42/1": {
    "type": "/type/record",
    "state": "/state/42",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/42/2": {
    "type": "/type/record",
    "state": "/state/42",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/42/3": {
    "type": "/type/record",
    "state": "/state/42",
    "grade_level": "/grade_level/3",
    "ng1s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng11s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng12s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng13s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    }
  },
  "/record/44/1": {
    "type": "/type/record",
    "state": "/state/44",
    "grade_level": "/grade_level/1",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 4,
      "2010": 4
    },
    "ng13s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 2,
      "2009": 4,
      "2010": 4
    },
    "ng17als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng18als": {
      "2008": 2,
      "2009": 4,
      "2010": 4
    },
    "ng19als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng20als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng21als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng22als": {
      "2008": 1,
      "2009": 4,
      "2010": 4
    },
    "ng23als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng24als": {
      "2008": 2,
      "2009": 4,
      "2010": 4
    },
    "ng25als": {
      "2008": 1,
      "2009": 4,
      "2010": 4
    },
    "ng26als": {
      "2008": 2,
      "2009": 4,
      "2010": 4
    },
    "ng27als": {
      "2008": 1,
      "2009": 4,
      "2010": 4
    },
    "ng28als": {
      "2008": 0,
      "2009": 4,
      "2010": 4
    },
    "ng29als": {
      "2008": 3,
      "2009": 4,
      "2010": 4
    },
    "ng16cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng22evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng23evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng25evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng26evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng27evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng28evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng29evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23frs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26frs": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27frs": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28frs": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29frs": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    }
  },
  "/record/44/2": {
    "type": "/type/record",
    "state": "/state/44",
    "grade_level": "/grade_level/2",
    "ng1s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng2s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng3s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng4s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng6s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng7s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng8s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng9s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng10s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng11s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng12s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 0,
      "2010": 2
    },
    "ng13s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng14s": {
      "2006": 0,
      "2007": 0,
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng15s": {
      "2006": 0,
      "2007": 1,
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng5s": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng16vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23vms": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26vms": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27vms": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28vms": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29vms": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23sss": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26sss": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27sss": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28sss": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29sss": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16als": {
      "2008": 2,
      "2009": 0,
      "2010": 2
    },
    "ng17als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18als": {
      "2008": 2,
      "2009": 0,
      "2010": 2
    },
    "ng19als": {
      "2008": 0,
      "2009": 3,
      "2010": 3
    },
    "ng20als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21als": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22als": {
      "2008": 1,
      "2009": 3,
      "2010": 3
    },
    "ng23als": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24als": {
      "2008": 2,
      "2009": 3,
      "2010": 3
    },
    "ng25als": {
      "2008": 1,
      "2009": 3,
      "2010": 3
    },
    "ng26als": {
      "2008": 2,
      "2009": 0,
      "2010": 2
    },
    "ng27als": {
      "2008": 1,
      "2009": 3,
      "2010": 3
    },
    "ng28als": {
      "2008": 0,
      "2009": 2,
      "2010": 2
    },
    "ng29als": {
      "2008": 3,
      "2009": 0,
      "2010": 3
    },
    "ng16cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng17cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng19cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng20cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng22cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng23cps": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng24cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng25cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng26cps": {
      "2008": 2,
      "2009": 2,
      "2010": 2
    },
    "ng27cps": {
      "2008": 1,
      "2009": 1,
      "2010": 1
    },
    "ng28cps": {
      "2008": 0,
      "2009": 1,
      "2010": 1
    },
    "ng29cps": {
      "2008": 3,
      "2009": 3,
      "2010": 3
    },
    "ng16evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng17evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng18evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng19evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng20evs": {
      "2008": 0,
      "2009": 0,
      "2010": 0
    },
    "ng21evs": {
    },
    },