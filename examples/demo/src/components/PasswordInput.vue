<template>
  <div 
    class="password-input" 
    :class="{ 
      'password-input-active': isFocused, 
      'password-input-hover': isHovered 
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="input-container">
      <div class="input-icon">
        <lock-icon />
      </div>
      <div class="input-divider"></div>
      <input
        :type="showPassword ? 'text' : 'password'"
        :value="value"
        :placeholder="placeholder"
        class="input-field"
        @input="$emit('input', $event.target.value)"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <div class="toggle-icon" @click="togglePasswordVisibility">
        <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M3.33366 3.33325L16.667 16.6666M11.667 11.8633C11.2247 12.2592 10.6406 12.4999 10.0003 12.4999C8.61961 12.4999 7.50033 11.3806 7.50033 9.99992C7.50033 9.35962 7.74104 8.77555 8.1369 8.33325M16.3401 13.0063C16.8163 12.5918 17.2422 12.1748 17.6089 11.789C18.5752 10.7723 18.5752 9.22756 17.6089 8.21083C15.9791 6.49603 13.1799 4.16659 10.0003 4.16659C9.25751 4.16659 8.53547 4.29372 7.84424 4.51045M5.41699 5.66941C4.20152 6.44528 3.16502 7.39724 2.39175 8.21083C1.42541 9.22756 1.42541 10.7723 2.39175 11.789C4.02157 13.5038 6.82073 15.8333 10.0003 15.8333C11.5571 15.8333 13.0226 15.2749 14.3044 14.5036" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </g>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M10.0003 1.66675V3.33341M17.5003 4.16675L16.2503 5.41675M2.5003 4.16675L3.7503 5.41675M10.0003 18.3334C13.0038 18.3334 15.6781 16.3788 17.398 14.7325C18.6455 13.5382 18.6455 11.4619 17.398 10.2677C15.6781 8.62134 13.0038 6.66675 10.0003 6.66675C6.99682 6.66675 4.3225 8.62134 2.60266 10.2677C1.3551 11.4619 1.3551 13.5382 2.60266 14.7325C4.3225 16.3788 6.99682 18.3334 10.0003 18.3334ZM12.5003 12.5001C12.5003 13.8808 11.381 15.0001 10.0003 15.0001C8.61959 15.0001 7.5003 13.8808 7.5003 12.5001C7.5003 11.1194 8.61959 10.0001 10.0003 10.0001C11.381 10.0001 12.5003 11.1194 12.5003 12.5001Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import LockIcon from './LockIcon.vue';

export default {
  name: 'PasswordInput',
  components: {
    LockIcon
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入账号密码'
    }
  },
  data() {
    return {
      isFocused: false,
      isHovered: false,
      showPassword: false
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style scoped>
.password-input {
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

.password-input-hover {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.4) 0%, rgba(0, 56, 255, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.password-input-hover .input-field::placeholder,
.password-input-hover .input-field {
  color: #ffffff;
}

/* 确保图标在悬停时变为白色 */
.password-input-hover :deep(.lock-icon) {
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

.password-input-hover .input-divider {
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

.toggle-icon {
  margin-left: 8px;
  cursor: pointer;
  color: #28526B;
  transition: color 0.3s ease;
}

.password-input-hover .toggle-icon {
  color: #ffffff;
}

/* 以下这些样式可以删除，因为我们已经使用SVG替换了自定义的eye-icon */
.eye-icon {
  display: none;
}

.eye-icon:before,
.eye-icon:after,
.eye-icon-closed:before,
.eye-icon-closed:after {
  display: none;
}
</style> 