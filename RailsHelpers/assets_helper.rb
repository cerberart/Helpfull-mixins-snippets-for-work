module AssetsHelper
  # In case you need to get information of asset (image dimensions, size and etc.)
  require 'fastimage'

  def fast_image name, action
    if action == "dimension"
      return FastImage.size(asset_url(name))
    elsif action == "size"
      return FastImage.size(asset_url(name)).content_length
    elsif action == "orientation"
      return FastImage.size(asset_url(name)).orientation
    else
      return FastImage.type(asset_url(name))
  end

  def icon_svg name, style={}
    style[:size] ||= '26x26'
    style[:size] = '100%' if style[:size] == 'inner'
    style[:size] = style[:size].split("x")

    style[:size][1] = style[:size][0] if style[:size].length == 1

    style[:width] ||= style[:size][0]
    style[:height] ||= style[:size][1]

    style[:stroke] ||= nil # Обводка
    style[:border] ||= nil

    style[:fill] ||= '#ffffff' # Заливка

    options = ''
    options = options + " width='#{style[:width]}'" if style[:width].present?
    options = options + " height='#{style[:height]}'" if style[:height].present?
    options = options + " stroke-width='#{style[:border]}'" if style[:border].present?
    options = options + " stroke='#{style[:stroke]}'" if style[:stroke].present?
    options = options + " fill='#{style[:fill]}'" if style[:fill].present?

    raw "<span class='i-svg -icon--#{name}'><svg #{options} ><use xlink:href='#icons-svg-sprite-#{name}'/></svg></span>"
  end

  def inline_icon_svg name
    icon = Rails.application.assets.find_asset("svg-inline/#{name}.svg")
    raw "<span class='i-svg svg--#{name}'>#{icon}</span>"
  end

  def include_sprite_svg
    name = 'icons-svg-sprite.svg'
    assets = asset_url(name)
    digest = assets.split("/").last
    raw "<script>SVG_SPRITE_URL='#{assets}',SVG_SPRITE_REVISION='#{digest}',function(e,t){'use strict';var n=SVG_SPRITE_URL,o=SVG_SPRITE_REVISION;if(!t.createElementNS||!t.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect)return!0;var a,r,S='localStorage'in e&&null!==e.localStorage,l=function(){t.getElementById('turbo-rootSvg').insertAdjacentHTML('afterbegin',r)},i=function(){t.getElementById('turbo-rootSvg')?l():t.addEventListener('DOMContentLoaded',l)};if(S&&localStorage.getItem('inlineSVGrev')==o&&(r=localStorage.getItem('inlineSVGdata')))return i(),!0;try{a=new XMLHttpRequest,a.open('GET',n,!0),a.onload=function(){a.status>=200&&a.status<400&&(r=a.responseText,r=r,i(),S&&(localStorage.setItem('inlineSVGdata',r),localStorage.setItem('inlineSVGrev',o)))},a.send()}catch(s){}}(window,document);</script>"
  end

  def stylesheet_link_tag_inline name
    raw "<style>#{Rails.application.assets_manifest.find_sources(name).first.to_s.html_safe}</style>"
  end

  # *
  # * @params: string (filename and path with extension)
  # * @return: string (humanized number of bytes)
  # *
  def file_size name
    return number_to_human_size(File.size("#{name}"))
  end

end
