jQuery.noConflict();

(function($, config) {
    $.ajax({
        url: config.template,
        dataType: 'text',
        success: function(contents) {
            $(config.div).append(contents);
        }
    });
})(jQuery, ssInjectorConfig);
