<template>
  <div 
    class="username-input" 
    :class="{ 
      'username-input-active': isFocused, 
      'username-input-hover': isHovered 
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="input-container">
      <div class="input-icon">
        <user-icon />
      </div>
      <div class="input-divider"></div>
      <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        class="input-field"
        @input="$emit('input', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
    </div>
  </div>
</template>

<script>
import UserIcon from './UserIcon.vue';

export default {
  name: 'UsernameInput',
  components: {
    UserIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入账号名称'
    }
  },
  data() {
    return {
      isFocused: false,
      isHovered: false
    };
  }
};
</script>

<style scoped>
.username-input {
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

.username-input-hover {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.4) 0%, rgba(0, 56, 255, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.username-input-hover .input-field::placeholder,
.username-input-hover .input-field {
  color: #ffffff;
}

/* 确保图标在悬停时变为白色 */
.username-input-hover :deep(.user-icon) {
  color: #ffffff !important;
}

.input-container {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 100%;
  border-radius: 12px;
}

.input-icon {
  display: flex;
  align-items: center;
}

.input-divider {
  width: 1px;
  height: 18px;
  background-color: #28526B;
  margin: 0 16px;
  opacity: 1;
  transition: opacity 0.3s ease, background-color 0.3s ease;
}

.username-input-hover .input-divider {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.75);
}

.input-field {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #28526B;
  font-size: 14px;
  transition: color 0.3s ease;
}

.input-field::placeholder {
  color: #28526B;
  transition: color 0.3s ease;
}
</style> 