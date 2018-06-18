/**
 * [truncate return truncated string]
 * @param  {HTMLElement Object} elem
 * @param  {Integer} limit
 * @param  {String} after
 * @return {String}
 */
const truncate = (elem, limit, after) => {
  if (!elem || !limit) return
  var content = elem.textContent.trim()
  content = content.split(' ').slice(0, limit)
  content = content.join(' ') + (after ? after : '')
  return content
}

/**
 * [helper_pluralize return pluralized string for defined number]
 * @param  {Integer} number [description]
 * @param  {String} one
 * @param  {String} two
 * @param  {String} five
 * @return {String}
 *
 * Example:
 * Input: helper_pluralize(5, "очко", "очка", "очков")
 * Output: "очков"
 */
const helper_pluralize = (number, one, two, five) => {
  number = Math.abs(number)
  number %= 100
  if (number >= 5 && number <= 20)
    return five
  number %= 10
  if (number === 1)
    return one
  if (number >= 2 && number <= 4)
    return two
  return five
}

/**
 * Get Youtube video ID from the link
 * @param  {String} link [ex: https://www.youtube.com/watch?v=FcQ9Tqu0040]
 * @return {String}      [ex: FcQ9Tqu0040]
 */
const youtubeID = (link) => {
  return link.substr(youtubeLink.lastIndexOf("v=") + 2, 11)
}
