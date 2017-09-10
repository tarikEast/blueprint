import Ember from 'ember';

export default Ember.Service.extend({
  desktopBreakpoint: 960,
  tabletBreakpoint: 700,
  isDesktop: false,
  isTablet: false,
  isMobile: true,
  init: function () {
    var self = this;
    self.environmentCheck();
    Ember.$(window).resize(function () {
      Ember.run.debounce(self, self.environmentCheck, 300);
    });
  },
  environmentCheck: function () {
    var self = this;
    var desktopSize = self.get('desktopBreakpoint');
    var tabletSize = self.get('tabletBreakpoint');
    if (window.matchMedia("(min-width: " + desktopSize + "px").matches) {
      self.set('isDesktop', true);
      self.set('isTablet', false);
      self.set('isMobile', false);
    }
    else if (window.matchMedia("(min-width: " + tabletSize + "px) and (max-width: " + desktopSize + "px)").matches) {
      self.set('isDesktop', false);
      self.set('isTablet', true);
      self.set('isMobile', false);
    }
    else {
      self.set('isDesktop', false);
      self.set('isTablet', false);
      self.set('isMobile', true);
    }
  }
});