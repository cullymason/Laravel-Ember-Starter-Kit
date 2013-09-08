App.BadgesIndexRoute = Ember.Route.extend({

  model: function(params) {
      return this.store.find('BadgesIndex',params.BadgesIndex_id); 
  }
  
});
