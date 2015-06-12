/*
 * Author: jan
 * Date: 25-jun-2014
 *
 * _opener_ toggles (shows/hides) the target element
 * attributes:
 * target (optional): selector
 * - if ommitted, the target is the next element
 * initial (optional): target initial state open/closed
 * - if ommitted the target initially is closed (hidden)
 * dependencies:
 * angular
 */
'use strict';

angular.module('jcDirectives').
  directive('jcOpener', function() {
    return {
      restrict: 'E',
      link: function(scope, elm, attr) {
        var obj = angular.element(attr['target']);

        if (!attr['target'] || !obj.length) {
            obj = elm.next();
        }
        
        elm.addClass('opener');
        if (!attr['initial'] || attr['initial'] === 'closed') {
            obj.hide();
            elm.addClass('closed');
        }
        elm.on('click', function(){
            obj.toggle();
            if (obj.is(':visible')) {
                elm.removeClass('closed');
            }
            else {
                elm.addClass('closed');
            }
        });
      }
  };
});


