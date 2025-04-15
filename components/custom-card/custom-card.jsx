import { getListeners, getComponentFromProp } from '../_util/props-util';
import { ConfigConsumerProps } from '../config-provider';
import Icon from '../icon';

export default {
  name: 'ACustomCard',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    prefixCls: String,
  },
  inject: {
    configProvider: { default: () => ConfigConsumerProps },
  },
  computed: {
    classes() {
      const { prefixCls: customizePrefixCls, bordered, hoverable, loading } = this;
      const getPrefixCls = this.configProvider.getPrefixCls;
      const prefixCls = getPrefixCls('custom-card', customizePrefixCls);

      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-bordered`]: bordered,
        [`${prefixCls}-hoverable`]: hoverable,
        [`${prefixCls}-loading`]: loading,
      };
    },
  },
  methods: {
    renderTitle() {
      const { prefixCls: customizePrefixCls, title } = this;
      const getPrefixCls = this.configProvider.getPrefixCls;
      const prefixCls = getPrefixCls('custom-card', customizePrefixCls);
      const icon = getComponentFromProp(this, 'icon');
      
      if (!title && !icon) return null;
      
      const iconNode = icon ? <Icon type={icon} /> : null;
      
      return (
        <div class={`${prefixCls}-header`}>
          {iconNode}
          {title && <div class={`${prefixCls}-title`}>{title}</div>}
        </div>
      );
    },
    renderContent() {
      const { prefixCls: customizePrefixCls, $slots } = this;
      const getPrefixCls = this.configProvider.getPrefixCls;
      const prefixCls = getPrefixCls('custom-card', customizePrefixCls);
      
      return (
        <div class={`${prefixCls}-content`}>
          {$slots.default}
        </div>
      );
    },
    renderFooter() {
      const { prefixCls: customizePrefixCls, $slots } = this;
      const getPrefixCls = this.configProvider.getPrefixCls;
      const prefixCls = getPrefixCls('custom-card', customizePrefixCls);
      
      if (!$slots.footer) return null;
      
      return (
        <div class={`${prefixCls}-footer`}>
          {$slots.footer}
        </div>
      );
    },
  },
  render() {
    const { classes, $attrs } = this;
    
    const cardProps = {
      attrs: {
        ...$attrs,
      },
      class: classes,
      on: {
        ...getListeners(this),
      },
    };
    
    return (
      <div {...cardProps}>
        {this.renderTitle()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  },
}; 