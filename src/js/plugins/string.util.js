/**
 * replaceText - Replaces all occurrences of the strings in `replaceArray` with
 *    their corrispondence in the array
 * 
 * @param {Array} replaceList L'array di stringhe da sostituire, del formato
 *    [['replace me', 'with me', global RegExp? true:false],
 *    [..., ...]]
 *    Es. [['{{to replace}}', 'foo'], ['some', 'bar', true]]
 * @returns the string taken as input, where {{text}} is replaced with its corrispondence
 *    in the `replaceArray`.
 */
String.prototype.replaceList = function(replaceArray) {
  let target = this;

  for (const item of replaceArray) {
    if (item.length == 3 && item[2] == true)
      item[0] = new RegExp(item[0], "g");

    target = target.replace(item[0], item[1]);
  }

  return target;
}

/**
 * replaceAll - Replaces all occurrences of the string taken as input with the 
 *    replacement string.
 * @param {string} search string to search for
 * @param {string} replacement string that will replace the string taken as input
 * 
 * @returns {string} Il testo con le stringhe sostituite
 */
String.prototype.replaceAll = function(search, replacement){
  const target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
}


/**
 * replaceJson - Returns the string given as input, replacing all occurrences of
 *    text wrapped in double curly brackets (used as a placeholder) with the value
 *    of the json where the key matches said text.
 * 
 * Example:
 * 
 * HTML:
 * <div id="text">
 *   Please {{contact_method}} {{name}} and tell her {{action}} {{time}}, Thanks!
 * </div>
 * 
 * JS:
 * var json = {
 *   contact_method: 'call',
 *   name: 'Anna',
 *   action: 'to be on time',
 *   time: 'tonight'
 * };
 * var $t = $('#text');
 * $t.html($t.html().replaceJson(json));
 * 
 * @param {JSON} json Json containing:
 *    - keys: attributes matching {{text}} in the HTML
 *    - values: text that will replace the matches in HTML
 * 
 * @returns the string given as input, where {{text}} is replaced with the value
 *    of the json where the key matches said text.
 */
String.prototype.replaceJson = function(json) {
  let target = this;
  const reList = target.match(/{{[^\s]*?}}/g);

  for (const item of reList) {
    const jsonIndex = item.slice(2, item.length - 2);
    if (typeof json[jsonIndex] === "undefined") {
      console.warn(`${jsonIndex} was not found in the json.`);
      json[jsonIndex] = "";
    }
    target = target.replace(new RegExp(item, 'g'), json[jsonIndex]);
  }

  return target;
}


/**
 * IE11 official Polyfill to implement String.prototype.includes
 */
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}