import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.controllerFor('application').send('hideMenus');
  },
  model(params) {
    return this.store.query('klub', params);
  },
  headTags: function() {
    var category = this.controllerFor(this.routeName).get('category');
    return [{
      type: 'meta',
      tagId: 'meta-description',
      attrs: {
        name: 'description',
        content: `Najdi najboljši ${category} klub v svoji bližini. Smo največja Slovenska baza ${category} in drugih športnih klubov!`
      }
    }, {
      type: 'link',
      tagId: 'link-canonical',
      attrs: {
        rel: 'canonical',
        content: `http://www.zatresi.si/?category=${category}`
      }
    }];
  },
});
