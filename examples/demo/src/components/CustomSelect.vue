<template>
  <div 
    class="custom-select" 
    :class="{ 
      'custom-select-active': isOpen, 
      'custom-select-light': theme === 'light', 
      'custom-select-blue': theme === 'blue',
      'custom-select-hover': isHovered
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="select-trigger" @click="toggleDropdown">
      <div class="select-icon">
        <slot name="icon">
          <div class="default-icon"></div>
        </slot>
      </div>
      <div class="select-divider"></div>
      <div class="select-content">
        <div class="select-placeholder" v-if="!selected">{{ placeholder }}</div>
        <div class="select-value" v-else>{{ selected.label }}</div>
      </div>
      <div class="select-arrow">
        <span class="arrow-icon"></span>
      </div>
    </div>
    <div class="select-dropdown" v-show="isOpen">
      <div 
        v-for="option in options" 
        :key="option.value" 
        class="select-option"
        :class="{ 'select-option-selected': selected && selected.value === option.value }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '请选择系统名称'
    },
    theme: {
      type: String,
      default: 'light', // 'light' 或 'blue'
      validator: value => ['light', 'blue'].includes(value)
    }
  },
  data() {
    return {
      isOpen: false,
      selected: null,
      isHovered: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.selected = this.options.find(option => option.value === newVal) || null;
        } else {
          this.selected = null;
        }
      }
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selected = option;
      this.$emit('input', option.value);
      this.$emit('change', option.value);
      this.isOpen = false;
    },
    clickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.clickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  transition: all 0.3s ease;
  height: 56px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #DCE8F0;
  backdrop-filter: blur(24px);
}

.custom-select-light {
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #DCE8F0;
}

.custom-select-blue {
  background-color: rgba(154, 192, 255, 0.3);
  border: 1px solid rgba(225, 233, 255, 0.8);
}

.custom-select-hover {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.4) 0%, rgba(0, 56, 255, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.custom-select-active {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.5) 0%, rgba(0, 56, 255, 0.5) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.custom-select-hover .select-placeholder,
.custom-select-hover .select-value,
.custom-select-hover .arrow-icon:after,
.custom-select-active .select-placeholder,
.custom-select-active .select-value,
.custom-select-active .arrow-icon:after {
  color: #ffffff;
  border-color: #ffffff;
}

/* 确保图标在悬停和激活时变为白色 */
.custom-select-hover :deep(.system-icon),
.custom-select-active :deep(.system-icon) {
  color: #ffffff !important;
}

/* 兼容不使用插槽的默认图标 */
.custom-select-hover .default-icon,
.custom-select-active .default-icon {
  background-color: #ffffff !important;
}

.select-trigger {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  cursor: pointer;
  height: 100%;
  border-radius: 12px;
}

.select-icon {
  display: flex;
  align-items: center;
}

.default-icon {
  width: 20px;
  height: 20px;
  background-color: #e8e8e8;
  border-radius: 4px;
}

.select-divider {
  width: 1px;
  height: 18px;
  background-color: #28526B;
  margin: 0 16px;
  opacity: 1;
  transition: opacity 0.3s ease, background-color 0.3s ease;
}

.custom-select-hover .select-divider,
.custom-select-active .select-divider {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.75);
}

.select-content {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 0;
}

.custom-select-hover .select-content {
  margin-left: 0;
}

.select-placeholder {
  color: #28526B;
  transition: color 0.3s ease;
}

.select-value {
  color: #28526B;
  transition: color 0.3s ease;
}

.select-arrow {
  margin-left: 8px;
}

.arrow-icon {
  display: inline-block;
  transition: transform 0.3s;
  line-height: 1;
  transform: rotate(0deg);
}

.arrow-icon:after {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid #28526B;
  border-bottom: 2px solid #28526B;
  transform: rotate(-45deg);
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.custom-select-active .arrow-icon:after {
  transform: rotate(45deg);
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #DCE8F0;
  backdrop-filter: blur(24px);
  background-color: rgba(255, 255, 255, 1);
}

.select-option {
  padding: 16px 24px;
  cursor: pointer;
  color: #28526B;
  height: 56px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DCE8F0;
  padding-left: 76px;
}

.select-option:last-child {
  border-bottom: none;
}

.select-option:hover {
  background-color: rgba(220, 232, 240, 0.5);
}

.select-option-selected {
  background-color: rgba(220, 232, 240, 0.8);
  color: #28526B;
}
</style> 