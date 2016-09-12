'use strict';

/**
 * Time Input Plugin
 *
 *
 * Simple Time Input Type
 */
const validation = require('./lib/validation.js');

/**
 * Single Time Input Plugin
 * @module timeInputPlugin
 */
module.exports = {
  name: 'Time',
  description: 'Simple Time Input Type',
  validation: {
    timeValidation: validation,
  },
  inputs: {
    time: {
      validation: {
        function: 'timeValidation',
        on: 'change',
      },
      label: 'Choose a Time',
      type: 'time',
    },
  },
  html: '<label for="{{time.id}}">{{time.label}}</label><input type="{{time.type}}" id="{{time.id}}" name="{{time.name}}" value="{{time.value}}" type="time"/>',
};
