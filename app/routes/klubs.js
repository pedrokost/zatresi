import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    if (!!tokens.length) {
      return tokens.reverse().join(' - ');
    }
    return 'Športni Klubi';
  },
  queryParams: {
    category: {
      refreshModel: true
    }
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
    }, {
    type: 'meta',
    tagId: 'meta-og-url',
    attrs: {
      property: 'og:url',
      content: `http://www.zatresi.si/?category=${category}`
    }
  }];
  },
  beforeModel() {
    // To show the user a category change is in progress, remove the currently shown data, so I can display a spinner
    this.controllerFor('klubs').set('model', Ember.A());
  },
  model(params) {
    return this.store.query('klub', params);
  }
});
