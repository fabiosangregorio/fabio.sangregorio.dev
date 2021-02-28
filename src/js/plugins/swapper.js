/**
 * Swapper - swaps tag contents between html nodes.
 * @param Data data-swapper-desktop="swapperId": attribute of the node in which 
 *  resides the content that is going to be swapped. swapperId is a custom unique
 *  key which must match the key in the relative mobile tag
 * @param Data data-swapper-mobile="swapperId": attribute of the node in which 
 *  the content is going to be swapped. NOTE: must be an EMPTY tag. 
 * @param Data data-swapper-breakpoint: represents the largest width of the 
 *  mobile view, defaults to 767px if not provided
 * @requires debouncer()
 * 
 * Usage:
 * <div data-swapper-desktop="myId" data-swapper-breakpoint="767">
 *    content to swap
 * </div>
 * <div data-swapper-mobile="myId">
 *    must be an empty tag
 * </div>
 */
class Swapper {
  constructor() {
    this.first = true;
    this.previousWidth = window.innerWidth;
    this.currentWidth = window.innerWidth;
  }

  swapElements() {
    this.currentWidth = window.innerWidth;
    if (!this.first && this.currentWidth === this.previousWidth) return;
    for (let item of document.querySelectorAll('[data-swapper-desktop]')) {
      const id = item.getAttribute('data-swapper-desktop');
      const breakpoint = item.getAttribute('data-swapper-breakpoint') || 767;
      const mobile = document.querySelector(`[data-swapper-mobile="${id}"]`);
      const desktop = item;
      if (this.currentWidth <= breakpoint && (this.previousWidth > breakpoint || this.first)) {
        // swap desktop to mobile
        mobile.innerHTML = desktop.innerHTML;
        desktop.innerHTML = "";
      } else if (this.currentWidth > breakpoint && this.previousWidth <= breakpoint) {
        // swap mobile to desktop
        desktop.innerHTML = mobile.innerHTML;
        mobile.innerHTML = "";
      }
    }
    this.first = false;
    this.previousWidth = this.currentWidth;
  }
}

const initSwap = () => {
  const swapper = new Swapper();
  swapper.swapElements();

  window.addEventListener('resize',
    debouncer(() => swapper.swapElements(), 150)
  );
}