import CustomCard from './custom-card';
import Base from '../base';

/* istanbul ignore next */
CustomCard.install = function(Vue) {
  Vue.use(Base);
  Vue.component(CustomCard.name, CustomCard);
};

export default CustomCard; 