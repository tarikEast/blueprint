import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({
  smallDevice: computed.or("Resolution.isMobile", "Resolution.isTablet"),
  lockedOpen: computed.not("smallDevice")
});
