Document.prototype.ready = function(callback) {
  if(callback && typeof callback === 'function') {
    document.addEventListener("DOMContentLoaded", function() {
      if(document.readyState === "interactive" || document.readyState === "complete") {
        return callback();
      }
    });
  } 
};

/**
 * debounce - Limits the rate at which a function can fire.
 * 
 * Example:
 * 
 * $(window).resize(debounce(function(e) {
 *   function();
 * }, 300));
 * 
 * @param {function} func The function you want to limit
 * @param {ms} timeout Optional: timeout of the debouncer. Defaults at 200ms.
 */
const debounce = function (func, timeout) {
  let timeoutID;
  timeout = timeout || 200;
  return () => {
    const scope = this;
    const args = arguments;
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      func.apply(scope, Array.prototype.slice.call(args));
    }, timeout);
  }
}

/**
 * switchAttr - Switches an attribute with a data attribute
 * 
 * Example:
 * 
 * switchAttr(img, "src", "darkThemeSrc");
 * 
 * @param {HTMLNode} node The node on which to switch (:D) the attribute
 * @param {string} attr The attribute to switch
 * @param {string} dataAttr The data attribute to swtich
 * @returns void
 */
const switchAttr = function(node, attr, dataAttr) {
  const nodeAttr = node.getAttribute(attr);
  node.setAttribute(attr, node.dataset[dataAttr]);
  node.dataset[dataAttr] = nodeAttr;
}