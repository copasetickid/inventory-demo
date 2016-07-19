import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin,{
  authorizer: 'authorizer:devise',
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});

