
var valuesForParam = {
  'thermostatTemperatureAmbient': {
    "type": "d2i"
  },
  'thermostatTemperatureSetpoint': {
    "type": "d2i"
  },
  'thermostatHumidityAmbient': {
    "type": "d2i"
  },
  'thermostatMode': {
    "type": "d2l",
    "select": ["cool","heat","off"]
  },
  'on': {
    "type": "d2b",
    "select": ["true","false"]
  },
  'brightness': {
    "type": "d2i"
  },
  'online': {
    "type": "d2b",
    "select": ["true","false"]
  }
}

function getValuesByParam(param){
  return Object.keys(valuesForParam).includes(param) ? valuesForParam[param] : param
}