import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  created_at: attr(),
  stock_items: hasMany('stock_items')
});
