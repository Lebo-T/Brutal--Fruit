/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

;
;
/**
 * @file
 * Masonry script.
 *
 * Sponsored by: www.freelance-drupal.com
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.masonry = {
    attach: function (context) {

      /**
       * (internal) Sub-function for code factoring: actually build masonry.
       */
      function _buildMasonry($container, options) {
        // If no masonry find in container: init it...
        if ($container.findOnce('masonry').length === 0) {
          $container.once('masonry').addClass('masonry').masonry(options);
          $(window).resize(function () {
            $container.findOnce('masonry').masonry('bindResize');
          });
        } else {
          // ...otherwise, simply rebuild the layout.
          $container.masonry('reloadItems').masonry('layout');
        }

        // Hack to support lazysizes lazy loading.
        if (options.imagesLazyLoad) {
          let lastClassState = false;
          const observer = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(options.lazyloadedSelector);

                if (lastClassState !== currentClassState) {
                  lastClassState = currentClassState;

                  if (currentClassState) {
                    if (options.imagesFirst) {
                      $container.imagesLoaded(function () {
                        $container.masonry('reloadItems').masonry('layout');
                      });
                    } else {
                      $container.masonry('reloadItems').masonry('layout');
                    }
                  }
                }
              }
            });
          });

          $('img.' + options.lazyloadSelector, $container).once('imgloaded').each(function() {
            observer.observe(this, { attributes: true });
          });
        }
      }

      /**
       * Apply Masonry.
       */
      function applyMasonry() {

        // Iterate through all Masonry instances.
        $.each(drupalSettings.masonry, function (container, settings) {

          // Set container.
          const $container = $(container);

          // Set options.
          const options = {};

          // Sets the item selector.
          if (settings.item_selector) {
            options.itemSelector = settings.item_selector;
            // Add custom class to all items.
            $(settings.item_selector, $container).addClass('masonry-item');
          }

          // Apply column width units accordingly.
          if (settings.column_width) {
            if (settings.column_width_units === 'px') {
              options.columnWidth = parseInt(settings.column_width);
            }
            else if (settings.column_width_units === '%') {
              options.columnWidth = ($container.width() * (settings.column_width / 100)) - settings.gutter_width;
            }
            else {
              options.columnWidth = settings.column_width;
            }
          }

          // Add stamped selector.
          if (settings.stamp) {
            options.stamp = settings.stamp;
          }

          // Add the various options.
          options.gutter = settings.gutter_width;
          options.isResizeBound = settings.resizable;
          options.isFitWidth = settings.fit_width;
          options.imagesFirst = settings.images_first;
          options.imagesLazyLoad = settings.images_lazyload;
          options.lazyloadSelector = settings.lazyload_selector;
          options.lazyloadedSelector = settings.lazyloaded_selector;
          if (settings.rtl) {
            options.isOriginLeft = false;
          }
          if (settings.animated) {
            options.transitionDuration = settings.animation_duration + 'ms';
          }
          else {
            options.transitionDuration = 0;
          }
          if (settings.percent_position) {
            options.percentPosition = true;
          }

          // Include the extra options.
          $.each(settings.extra_options, function (option, value) {
            options[option] = value;
          });

          /**
           * Apply Masonry to container.
           */

          // Load images first if necessary.
          if (settings.images_first) {
            $container.imagesLoaded(function () {
              _buildMasonry($container, options);
            });
          }

          // Apply without loading images first otherwise.
          else {
            _buildMasonry($container, options);
          }
        });
      }

      // Apply Masonry on the page.
      applyMasonry();

      // Hack for tabs: when the tab is open, it takes to reload Masonry.
      $('a[data-toggle="tab"]', context).on('shown.bs.tab', function () {
        applyMasonry();
      });

    }
  };
})(jQuery, Drupal, drupalSettings);
;
