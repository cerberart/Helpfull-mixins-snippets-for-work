/**
 * [hasClass description]
 * @param  {HTMLElement Object} el  [required]
 * @param  {String} className [required]
 * @return {Boolean}
 */
const hasClass = (el, className) => el.classList.contains(className)


/*
 * [scrollTo vanilla JS implementation of animated scrollTo]
 * @param  {String} to       [identifier for HTMLElement (ex: className or ID)]
 * @param  {Integer} duration [duration of scroll animation]
 */
const scrollTo = (to, duration) => {
  let browser = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) || /Edge/.test(navigator.userAgent);
  let element = browser ? document.body : document.documentElement,
      start = element.scrollTop,
      duration = duration || 800,
      to = document.querySelector(to).getBoundingClientRect().top - element.getBoundingClientRect().top,
      change = to - start - 80,
      currentTime = 0,
      increment = 20;

  let easeInOutQuad = (t, b, c, d) => {
    t /= d/2
    if (t < 1) return c/2*t*t + b
    t--
    return -c/2 * (t*(t-2) - 1) + b
  };

  let animateScroll = () => {
      currentTime += increment
      let val = easeInOutQuad(currentTime, start, change, duration)
      element.scrollTop = val
      if (currentTime < duration)
        setTimeout(animateScroll, increment)
  };

  animateScroll();
}