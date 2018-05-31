/**
 * [currentUrl]
 * @return {String}
 */
const currentURL = () => return window.location.href

/**
 * [isCurrentPage check if pathname equal to passed string]
 * @param  {String}  url
 * @return {Boolean}
 */
const isCurrentPage = (url) => return window.location.pathname === url


/**
 * [isEven description]
 * @param  {Integer} num [required]
 * @return {Boolean}
 */
const isEven = num => num % 2 === 0


