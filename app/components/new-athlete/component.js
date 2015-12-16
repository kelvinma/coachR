import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  newAthlete: {
    firstName: null,
    lastName: null,
    gender: null
  },
  actions: {
    createAthlete: function(){
      console.log('createAthlete sent');
      this.sendAction('routeCreateAthlete', this.get('newAthlete'));
    }
  }
});
