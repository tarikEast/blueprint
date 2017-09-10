import Resolution from '../services/resolution'
export function initialize(application) {
  application.register('resolution:main', Resolution, { singleton: true });
  application.inject('component', 'Resolution', 'service:resolution');
  application.inject('controller', 'Resolution', 'service:resolution');
}
export default {
  name: 'resolution-service',
  initialize: initialize
};