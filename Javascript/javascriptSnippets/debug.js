/**
 * [cssPropertySupported check browser for CSS property]
 * @param  {String} prop  [CSS property name]
 * @param  {String} value [CSS property value]
 * @return {Boolean}
 */
const cssPropertySupported = (prop, value) => {
  const d = document.createElement('div')
  d.style[prop] = value
  return d.style[prop] === value
}

/**
 * [cssPropertySupported check browser for CSS property using Support method]
 * @param  {String} prop  [CSS property name]
 * @param  {String} value [CSS property value]
 * @return {Boolean}
 * EX: CSS.supports('mask-image','url()')
 */
const cssSupports = (prop, value) => {
  return CSS.supports(prop, value)
}

/**
 * [log description]
 * @param  {Any} data   [required]
 * @param  {String} action [non required. used to identify how console should print]
 * @return {--}        [will print into your console]
 */
const log = (data, action="") => {
  switch(action) {
    case 'tbl':
      console.table(data);
      break;
    case 'dir':
      console.dir(data);
      break;
    case 'clr':
      return console.clear();
      break;
    default:
      return console.log(data);
      break;
  }
}

