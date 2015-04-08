"use strict";

var Marionette = require('../shim/backbone.marionette'),
    views = require('./views'),
    models = require('./models');

var App = new Marionette.Application({
    initialize: function() {
        this.map = new models.MapModel();

        // This view is intentionally not attached to any region.
        new views.MapView({
            model: this.map
        });

        this.rootView = new views.RootView();
    },

    load: function(data) {
        this.map.load(data);
    },

    // Return Leaflet map instance.
    getMap: function() {
        return this.map._leafletMap;
    }
});

module.exports = App;
