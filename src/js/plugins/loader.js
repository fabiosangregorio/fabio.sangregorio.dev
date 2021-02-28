/**
 * Loader - Permette di inserire e rimuovere con facilita' un elemento loader in
 *      qualsiasi punto del codice.
 */
class Loader {
  constructor() {
    this.$loader = $('<span class="loader-container"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></span>');
  }

  /**
   * insertLoader - Crea e inserisce un nuovo loader all'interno di $element.
   *
   * @param {$Object} $element L'elemento jQuery dentro il quale inserire il loader
   * @param {bool} fadeIn   Se presente il loader avra' un effetto di fadein al
   *    momento dell'inseimento
   */
  static insertLoader($element, fadein) {
    const $l = new Loader().$loader;
    if (fadein) $l.addClass('fadein');
    $element.append($l);
    $element.addClass('loader-active');
  }

  /**
   * removeLoader - Rimuove il loader all'interno di $element
   *
   * @param {$Object} $element L'elemento padre del loader.
   */
  static removeLoader($element) {
    const $l = $element.children('.loader-container');
    $l.addClass('fadeout');
    setTimeout(() => {
      $element.removeClass('loader-active');
      $l.remove();
    }, 300);
  }
}