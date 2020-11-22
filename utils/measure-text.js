import TextMetrics from '../text-metrics.class'
/**
 * Measure the dimensions of a word, when it is rendered with a specific font
 *
 * @param {string} word - the specific word that we are 
 *                        getting the rendered dimensions for
 * @param {string} font - a font string, like '30px Arial'. See 
 *                        https://www.w3schools.com/tags/canvas_font.asp
 * @returns {TextMetrics} the measured metrics object
 */
function measureText(word, font) {
    let context = document.createElement('canvas').getContext('2d');
    return new TextMetrics(word, font, context);
}

export default measureText;
