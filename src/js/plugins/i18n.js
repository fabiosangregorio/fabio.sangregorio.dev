/**
 * String internationalization based on a key-traductions dictionary.
 *
 * Usage:
 *  - In the HTML define a `data-i18n="dict_key"` on the element you want to translate, where `dict_key` is a non-spaced string representing a key in the `traductions` dictionary.
 *  - In the `languages` variable define al the languages on which the strings are going to be internationalized.
 *  - In the `traductions` variable define a dictionary as follows:
 *    * The key of the dictionary must match the `dict_key` defined previously.
 *    * The value is an array containing all the traductions for that key, listed IN THE SAME ORDER of the `languages` variable.
 *
 * Example:
 *
 *  - HTML
 *    <span data-i18n="helloWorld"></span>
 *
 *  - i18n CONFIG
 *    i18n.languages = ['it', 'en', 'es'];
 *    i18n.traductions = {
 *      "helloWorld": ["ciao mondo", "hello world", "hola mundo"]
 *    }
 *
 *  - JS
 *    $(document).ready(function() {
 *      i18n.translate('#body', 'it');
 *    });
 *
 * Tip:
 *  - Write all traductions lowercase and use CSS to capitalize the first letter
 *    if needed, as the traductions could be inserted in the middle of a sentence.
 */
class i18n {

  constructor(settings) {
    this.languages = settings.languages;
    this.traductions = settings.traductions;
  }



  /**
   * Given a selector, searches for elements with an attribute `data-i18n="dict_key"`
   * and replaces its text with the string of the corresponding language found in `traductions`.
   *
   * @param {string} selector       CSS selector within which strings to be translated will be searched.
   * @param {string} lang   Initals of the language to which the strings
   *    will be translated. It MUST match one of the languages defined in `languages`.
   */
  translate(lang = location.hash.split("/")[1], selector) {
    if (!lang) return;
    const elements = document.querySelectorAll(selector || "" + " [data-i18n]");
    const langIndex = _.languages.indexOf(lang);

    for (let i = 0; i < elements.length; i++) {
      elements[i].innerHTML = _.getTraduction(
        elements[i].getAttribute("data-i18n"),
        langIndex
      );
    }

    this.translateLinks(lang, selector);
  }

  /**
   * Adds a leading /lang to all frontend-router-based links when using Navigo.js
   *
   * @param {string} selector       CSS selector within which links to be translated will be searched.
   * @param {string} langInitials   Initals of the language to which the links
   *    will be translated. It MUST match one of the languages defined in `languages`.
   */
  translateLinks(lang, selector) {
    const links = document.querySelectorAll(selector || "" + " [data-i18n-link]");
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute(
        "href",
        `#/${lang}${links[i].getAttribute("href")}`
      );
    }
  }

  getTraduction(id, lang) {
    this.traductions[id][lang] || "";
  }
};