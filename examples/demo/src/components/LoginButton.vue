<template>
  <button 
    class="login-button" 
    :class="[`theme-${theme}`]" 
    @click="$emit('click')"
    :disabled="disabled"
  >
    <span class="login-text">{{ text || '登录' }}</span>
  </button>
</template>

<script>
export default {
  name: 'LoginButton',
  props: {
    theme: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'gradient'].includes(value)
    },
    text: {
      type: String,
      default: '登录'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click']
};
</script>

<style scoped>
.login-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 40px;
  width: 100%;
  max-width: 800px;
  height: 90px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 默认主题 - 浅蓝灰色 */
.theme-default {
  background-color: #bccbe3;
}

.theme-default:hover:not(:disabled) {
  background-color: #a6b5d3;
}

/* 主题1 - 蓝色 */
.theme-primary {
  background-color: #4a90e2;
}

.theme-primary:hover:not(:disabled) {
  background-color: #3a80d2;
}

/* 主题2 - 蓝色渐变 */
.theme-gradient {
  background: linear-gradient(90deg, #4a90e2 0%, #1565c0 100%);
}

.theme-gradient:hover:not(:disabled) {
  opacity: 0.9;
}

.login-text {
  color: white;
  font-size: 24px;
  font-weight: 500;
}
</style> 