<template>
  <div class="remember-password" @click="toggleRemember">
    <div 
      class="checkbox" 
      :class="{ 
        'checked': isRemembered,
        'checkbox-light': theme === 'light',
        'checkbox-blue': theme === 'blue'
      }"
    >
      <div v-if="isRemembered" class="check-icon" :class="{ 'check-icon-blue': theme === 'blue' }"></div>
    </div>
    <div class="label">记住密码</div>
  </div>
</template>

<script>
export default {
  name: 'RememberPassword',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'light', // 'light' 或 'blue'
      validator: value => ['light', 'blue'].includes(value)
    }
  },
  data() {
    return {
      isRemembered: this.value
    };
  },
  watch: {
    value(newVal) {
      this.isRemembered = newVal;
    }
  },
  methods: {
    toggleRemember() {
      this.isRemembered = !this.isRemembered;
      this.$emit('input', this.isRemembered);
      this.$emit('change', this.isRemembered);
    }
  }
};
</script>

<style scoped>
.remember-password {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin: 8px 0;
}

.checkbox {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: all 0.3s;
  position: relative;
  box-sizing: border-box;
}

.checkbox-light {
  border: 1px solid #28526B;
  background-color: transparent;
}

.checkbox-blue {
  background-color: rgba(154, 192, 255, 0.3);
  border: 1px solid rgba(225, 233, 255, 0.8);
}

.checkbox-light.checked {
  background-color: #28526B;
  border: none;
}

.checkbox-blue.checked {
  background: rgba(35, 136, 255, 0.9);
  border: none;
}

.check-icon {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.check-icon:before {
  content: '';
  display: block;
  width: 5px;
  height: 8px;
  border: solid white;
  border-width: 0 1.5px 1.5px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
}

.check-icon-blue:before {
  border-color: white;
}

.label {
  font-size: 14px;
  color: #28526B;
}
</style> 