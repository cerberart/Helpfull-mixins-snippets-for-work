// TODO:
// Categorized snippets and add others

this.scrollTo = function(top) {
  return $('html, body').animate({
    scrollTop: top
  }, 100);
};

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.serializeObject = function() {
  var a, o;
  o = {};
  a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== void 0) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

$.fn.alterClass = function(removals, additions) {
  var patt, self;
  self = this;
  if (removals.indexOf('*') === -1) {
    self.removeClass(removals);
    if (!additions) {
      return self;
    } else {
      return self.addClass(additions);
    }
  }
  patt = new RegExp('\\s' + removals.replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') + '\\s', 'g');
  self.each(function(i, it) {
    var cn;
    cn = ' ' + it.className + ' ';
    while (patt.test(cn)) {
      cn = cn.replace(patt, ' ');
    }
    it.className = $.trim(cn);
  });
  if (!additions) {
    return self;
  } else {
    return self.addClass(additions);
  }
};

