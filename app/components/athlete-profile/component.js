import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  newWorkout: {
    date: null,
    title: null,
    type: null,
    distance: null,
    duration: null,
    notes: null
  },
  actions:{
    createWorkout: function(){
      var athleteID = this.get('athlete.id');
      this.sendAction('routeCreateWorkout', this.get('newWorkout'), athleteID);
    }
  }
});
