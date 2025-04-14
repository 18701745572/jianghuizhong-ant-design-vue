<template>
  <div class="demo-container">
    <h2>验证码组件演示</h2>
    
    <div class="demo-section">
      <h3>基础用法</h3>
      <CaptchaInput 
        v-model="captchaValue" 
        @refresh="refreshCaptcha" 
      />
      <div class="demo-info">当前输入值: {{ captchaValue }}</div>
    </div>
    
    <div class="demo-section">
      <h3>蓝色主题</h3>
      <CaptchaInput 
        v-model="captchaValueBlue" 
        theme="blue"
        @refresh="refreshCaptchaBlue" 
      />
    </div>
    
    <div class="demo-section">
      <h3>自定义占位符</h3>
      <CaptchaInput 
        v-model="captchaValueCustom"
        placeholder="请输入短信验证码" 
        @refresh="refreshCaptchaCustom" 
      />
    </div>
    
    <div class="demo-section">
      <h3>隐藏刷新按钮</h3>
      <CaptchaInput 
        v-model="captchaValueNoRefresh" 
        :showRefreshButton="false" 
      />
    </div>
    
    <div class="demo-section">
      <h3>自定义图标</h3>
      <CaptchaInput v-model="captchaValueCustomIcon" @refresh="refreshCaptchaCustomIcon">
        <template #icon>
          <div class="custom-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 10.8333V15.8333C16.6667 16.2754 16.4911 16.6993 16.1785 17.0118C15.866 17.3244 15.442 17.5 15 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V5.00001C2.5 4.55798 2.67559 4.13406 2.98816 3.8215C3.30072 3.50893 3.72464 3.33334 4.16667 3.33334H9.16667" stroke="#28526B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.3333 2.5H17.5V6.66667" stroke="#28526B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.33334 11.6667L17.5 2.5" stroke="#28526B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </template>
      </CaptchaInput>
    </div>
  </div>
</template>

<script>
import CaptchaInput from '@/components/CaptchaInput.vue';

export default {
  name: 'CaptchaDemo',
  components: {
    CaptchaInput
  },
  data() {
    return {
      captchaValue: '',
      captchaValueBlue: '',
      captchaValueCustom: '',
      captchaValueNoRefresh: '',
      captchaValueCustomIcon: ''
    };
  },
  methods: {
    refreshCaptcha() {
      console.log('刷新验证码');
      // 在实际应用中，这里可以调用API获取新的验证码
    },
    refreshCaptchaBlue() {
      console.log('刷新蓝色主题验证码');
    },
    refreshCaptchaCustom() {
      console.log('刷新自定义验证码');
    },
    refreshCaptchaCustomIcon() {
      console.log('刷新自定义图标验证码');
    }
  }
};
</script>

<style scoped>
.demo-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h2 {
  color: #28526B;
  margin-bottom: 24px;
}

h3 {
  color: #28526B;
  margin-bottom: 16px;
  font-size: 16px;
}

.demo-section {
  margin-bottom: 32px;
}

.demo-info {
  margin-top: 8px;
  color: #666;
  font-size: 14px;
}

.custom-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 