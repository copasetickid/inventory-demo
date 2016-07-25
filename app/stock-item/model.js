import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  description: attr(),
  price: attr(),
  available_date: attr(),
  taxable: attr(),
  created_at: attr(),
  stores: belongsTo('store')

});
