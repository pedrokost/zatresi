import Ember from 'ember';

export default Ember.View.extend({
  showImages: function() {
    this.$(".clanek-image").each(function() {
      var attr = $(this).attr('data-image-src');

      if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'url('+attr+')');
      }
    });
  }.on('didInsertElement'),

  showImagesOnFilterChange: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.showImages();
    });
  }.observes('controller.category')
});