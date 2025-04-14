<template>
  <div class="forgot-password">
    <a 
      class="forgot-link" 
      :class="{ 
        'link-light': theme === 'light',
        'link-blue': theme === 'blue'
      }"
      @click="handleForgotPassword"
    >
      忘记密码
    </a>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  props: {
    theme: {
      type: String,
      default: 'light', // 'light' 或 'blue'
      validator: value => ['light', 'blue'].includes(value)
    }
  },
  methods: {
    handleForgotPassword() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.forgot-password {
  display: flex;
  justify-content: flex-end;
  margin: 8px 0;
}

.forgot-link {
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
}

.link-light {
  color: #28516B;
}

.link-light:hover {
  color: #1890ff;
}

.link-blue {
  color: rgba(35, 136, 255, 0.9);
}

.link-blue:hover {
  color: #1890ff;
  text-decoration: underline;
}
</style> 