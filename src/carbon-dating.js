const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sAct) {
  const checkValidation = s => typeof s === "string" && (/^\d*\.?\d+/.test(sAct));
  return checkValidation(sAct) && (sAct.match(/\d*\.?\d+/)[0] > 0 && sAct.match(/\d*\.?\d+/)[0] < 15) ? Math.ceil(Math.log(MODERN_ACTIVITY / sAct.match(/\d*\.?\d+/)[0]) / (0.693 / HALF_LIFE_PERIOD)) : false;
};
