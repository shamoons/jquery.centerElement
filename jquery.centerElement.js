/**
 * centerElement - A plugin for jQuery that will center any element that it's called on relative to the parent
 *
 * http://neoalchemy.org/tablePagination.html
 *
 * Copyright (c) 2011 Shamoon Siddiqui (shamoon.me)
 * licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @name centerElement
 * @type jQuery
 * @param Object settings;
 *      transition - Number - Optional. If the element should fadeIn after being moved, set the number of seconds
 *
 * @author Shamoon Siddiqui (shamoon.me)
 * @version 0.4
 * @requires jQuery v1.2.3 or above
 */


jQuery.fn.centerElement = function ( transition ) {
  this.css("position","absolute");
  this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
  this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
  if( typeof transition !== 'undefined' )
    this.fadeIn(transition);
  return;
}