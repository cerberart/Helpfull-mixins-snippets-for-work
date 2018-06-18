/**
 * Detect active tab / window
 * @return {function} alert time user wasn't on page
 */
const pageVisible = () => {
  timer = 0;
  document.addEventListener("visibilitychange",stateChanged);
  document.addEventListener("webkitvisibilitychange", stateChanged);
  document.addEventListener("msvisibilitychange", stateChanged);

  function stateChanged(){
    console.log(document.webkitVisibilityState);
    if(document.hidden || document.webkitHidden || document.msHidden){
      //new tab or window minimized
      timer = new Date().getTime();
    } else {
      alert('You were away for ' + (new Date().getTime()-timer)/1000+ ' seconds.');
    }
  }
}