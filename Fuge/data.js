var APP_DATA = {
  "scenes": [
    {
      "id": "0-grne-fuge",
      "name": "Grüne Fuge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2439899056359387,
        "pitch": -0.14554103348080005,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -1.4904537293324598,
          "pitch": 0.0017592866584301703,
          "rotation": 0,
          "target": "2-bergang-steg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-innenraum-wohngemeinschaft",
      "name": "Innenraum Wohngemeinschaft",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.0080166572826084,
        "pitch": 0.12798823909128032,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.15855410856010188,
          "pitch": 0.1362732686093917,
          "rotation": 0,
          "target": "0-grne-fuge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bergang-steg",
      "name": "Übergang Steg",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.14432628952447324,
        "pitch": 0.02726240426467541,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.722016795318435,
          "pitch": -0.15650389803994535,
          "rotation": 0,
          "target": "1-innenraum-wohngemeinschaft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
