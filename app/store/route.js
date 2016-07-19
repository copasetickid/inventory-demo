import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var stores = this.get('store').findAll('store');
    return stores;
  }
});
