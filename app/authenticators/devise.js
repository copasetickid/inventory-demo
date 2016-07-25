import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint: 'https://red-fox.herokuapp.com/users/sign_in'
});
