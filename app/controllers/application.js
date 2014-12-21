import Ember from 'ember';

export default Ember.ArrayController.extend(
  Ember.GoogleAnalyticsTrackingMixin, {

  itemController: 'klub',
  zoom: 8,
  center: L.latLng(46.122636,14.81546), // Slivna, Slovenia,

  queryParams: ['category'],
  category: 'fitnes',

  filteredKlubs: function() {
    var category = this.get('category');

    return this.filter(function(item) {
      return item.get('categories').indexOf(category) >= 0;
    });

  }.property('category', 'model'),


  isShowPage: function() {
    return this.get('currentPath') === 'klub';
  }.property('currentPath'),

  actions: {
    showKlub: function (klubId) {
      this.transitionToRoute('klub', klubId);
    },
    zoomToMarker: function(klub) {
      this.set('zoom', 12);

      Ember.run.later(function() {
        this.set('center', klub.get('location'));
      }.bind(this), 500);

      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1);

    }
  }
});

