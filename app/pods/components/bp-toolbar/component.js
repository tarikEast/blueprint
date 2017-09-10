import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  navigationOpen: false,
  smallDevice: computed.alias("Resolution.isMobile"),
  showNavigation: computed("smallDevice", "navigationOpen", function() {
    if (this.get("smallDevice")) {
      return this.get("navigationOpen");
    } else {
      return true;
    }
  })
});
