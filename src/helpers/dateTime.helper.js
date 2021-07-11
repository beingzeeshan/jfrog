const moment = require('moment')

export const toDisplayDateTime = () => moment().format('MMMM Do YYYY, h:mm:ss a');
export const weekDay = () => moment().format('dddd');
