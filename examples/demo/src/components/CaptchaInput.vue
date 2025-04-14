<template>
  <div 
    class="captcha-input" 
    :class="{ 
      'captcha-input-active': isFocused, 
      'captcha-input-light': theme === 'light', 
      'captcha-input-blue': theme === 'blue',
      'captcha-input-hover': isHovered
    }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="captcha-content">
      <div class="captcha-icon">
        <slot name="icon">
          <div class="verification-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.536 5.41675H6.66699V5.00008C6.66699 3.15913 8.15938 1.66675 10.0003 1.66675H15.0003C16.8413 1.66675 18.3337 3.15913 18.3337 5.00008V10.0001C18.3337 11.841 16.8413 13.3334 15.0003 13.3334H14.5837V9.46437C14.5837 7.22893 12.7715 5.41675 10.536 5.41675ZM5.00033 18.3334H10.0003C11.8413 18.3334 13.3337 16.841 13.3337 15.0001V10.0001C13.3337 8.15913 11.8413 6.66675 10.0003 6.66675H5.00033C3.15938 6.66675 1.66699 8.15913 1.66699 10.0001V15.0001C1.66699 16.841 3.15938 18.3334 5.00033 18.3334ZM10.4119 10.3631C10.6717 10.5904 10.698 10.9852 10.4707 11.245L8.07909 13.9782C7.56519 14.5656 6.67998 14.6442 6.07057 14.1567L4.60989 12.9881C4.34035 12.7725 4.29665 12.3792 4.51228 12.1097C4.72791 11.8401 5.12122 11.7964 5.39076 12.012L6.85144 13.1806C6.9385 13.2502 7.06496 13.239 7.13837 13.1551L9.52996 10.4219C9.75726 10.1621 10.1521 10.1358 10.4119 10.3631Z" fill="#28516B"/>
            </svg>
          </div>
        </slot>
      </div>
      <div class="captcha-divider"></div>
      <div class="captcha-input-wrapper">
        <input 
          :type="type" 
          class="captcha-input-field" 
          :placeholder="placeholder"
          :value="value"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          :maxlength="maxlength"
          ref="input"
        />
      </div>
    </div>
    
    <!-- 验证码图片区域 -->
    <div v-if="showCaptchaImage" class="captcha-image-container">
      <div class="captcha-image" ref="captchaImage" :style="captchaImageStyle">
        <img v-if="captchaImageUrl" :src="captchaImageUrl" alt="验证码" @load="onImageLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CaptchaInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入验证码'
    },
    theme: {
      type: String,
      default: 'light', // 'light' 或 'blue'
      validator: value => ['light', 'blue'].includes(value)
    },
    type: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: Number,
      default: 6
    },
    showRefreshButton: {
      type: Boolean,
      default: true
    },
    showCaptchaImage: {
      type: Boolean,
      default: true
    },
    captchaImageUrl: {
      type: String,
      default: ''
    },
    captchaWidth: {
      type: Number,
      default: 100
    },
    captchaHeight: {
      type: Number,
      default: 56
    },
    backgroundPattern: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHovered: false,
      isFocused: false,
      imageLoaded: false
    };
  },
  computed: {
    captchaImageStyle() {
      return {
        width: `${this.captchaWidth}px`,
        height: `${this.captchaHeight}px`,
        backgroundImage: this.backgroundPattern ? `url(${this.backgroundPattern})` : null
      };
    }
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value);
    },
    onFocus() {
      this.isFocused = true;
      this.$emit('focus');
    },
    onBlur() {
      this.isFocused = false;
      this.$emit('blur');
    },
    refreshCaptcha() {
      this.$emit('refresh');
    },
    focus() {
      this.$refs.input.focus();
    },
    onImageLoad() {
      this.imageLoaded = true;
      this.$emit('image-loaded');
    }
  }
};
</script>

<style scoped>
.captcha-input {
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
  display: flex;
}

.captcha-input-light {
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #DCE8F0;
}

.captcha-input-blue {
  background-color: rgba(154, 192, 255, 0.3);
  border: 1px solid rgba(225, 233, 255, 0.8);
}

.captcha-input-hover {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.4) 0%, rgba(0, 56, 255, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.captcha-input-active {
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.5) 0%, rgba(0, 56, 255, 0.5) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.captcha-content {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 100%;
  border-radius: 12px 0 0 12px;
  flex: 1;
  min-width: 200px;
}

.captcha-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.verification-icon {
  width: 20px;
  height: 20px;
}

.captcha-input-hover .verification-icon svg path,
.captcha-input-active .verification-icon svg path {
  fill: #ffffff !important;
}

.captcha-divider {
  width: 1px;
  height: 18px;
  background-color: #28526B;
  margin: 0 16px;
  opacity: 1;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  flex-shrink: 0;
}

.captcha-input-hover .captcha-divider,
.captcha-input-active .captcha-divider {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.75);
}

.captcha-input-wrapper {
  flex: 1;
  overflow: hidden;
  min-width: 120px;
}

.captcha-input-field {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #28526B;
  font-size: 14px;
  font-family: inherit;
  transition: color 0.3s ease;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.captcha-input-field::placeholder {
  color: #28526B;
  opacity: 0.8;
}

.captcha-input-hover .captcha-input-field,
.captcha-input-active .captcha-input-field {
  color: #ffffff;
}

.captcha-input-hover .captcha-input-field::placeholder,
.captcha-input-active .captcha-input-field::placeholder {
  color: #ffffff;
  opacity: 0.8;
}

/* 验证码图片样式 */
.captcha-image-container {
  position: relative;
  height: 56px;
  border-left: 1px solid #DCE8F0;
  overflow: hidden;
  border-radius: 0 12px 12px 0;
  flex-shrink: 0;
}

.captcha-image {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.25);
}

.captcha-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.captcha-input-hover .captcha-image-container,
.captcha-input-active .captcha-image-container {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
</style> 