import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  navigationOpen: false,
  smallDevice: computed.or("Resolution.isMobile", "Resolution.isTablet"),
  showNavigation: computed("smallDevice", "navigationOpen", function() {
    if (this.get("smallDevice")) {
      return this.get("navigationOpen");
    } else {
      return true;
    }
  })
});
