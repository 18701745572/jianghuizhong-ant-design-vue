<template>
  <div class="captcha-example">
    <h2>验证码输入框组件示例</h2>
    
    <div class="example-container">
      <h3>基础验证码输入框</h3>
      <CaptchaInput 
        v-model="captchaValue1" 
        @refresh="refreshCaptcha1"
        :captchaImageUrl="captchaImageUrl1"
      />
      <div class="value-display">输入值: {{ captchaValue1 }}</div>
    </div>
    
    <div class="example-container">
      <h3>蓝色主题验证码输入框</h3>
      <CaptchaInput 
        v-model="captchaValue2" 
        theme="blue" 
        @refresh="refreshCaptcha2"
        :captchaImageUrl="captchaImageUrl2"
        placeholder="请输入验证码"
      />
      <div class="value-display">输入值: {{ captchaValue2 }}</div>
    </div>
    
    <div class="example-container">
      <h3>自定义背景验证码输入框</h3>
      <CaptchaInput 
        v-model="captchaValue3" 
        @refresh="refreshCaptcha3"
        :captchaImageUrl="captchaImageUrl3"
        :backgroundPattern="backgroundPattern"
      />
      <div class="value-display">输入值: {{ captchaValue3 }}</div>
    </div>
  </div>
</template>

<script>
import CaptchaInput from './CaptchaInput.vue';

export default {
  name: 'CaptchaExample',
  components: {
    CaptchaInput
  },
  data() {
    return {
      captchaValue1: '',
      captchaValue2: '',
      captchaValue3: '',
      captchaImageUrl1: this.generateCaptchaUrl(),
      captchaImageUrl2: this.generateCaptchaUrl(),
      captchaImageUrl3: this.generateCaptchaUrl(),
      backgroundPattern: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAAB4CAYAAADFeIh0AAAKs2lDQ1BJQ0MgUHJvZmlsZQAASImVlwdUU+kSgP97bzoJLRCKlFBDEaQTQEoILYCCdLARkgCBEGIgoIiKiLiCa0FFBCu6KqLgWgBZbFiwsAgqdl0QUVHWxYINlXcDh+DuO++98+acyXyZzD//zH/unzMXAIoeVyIRwaoAZIizpRGBvvS4+AQ6fgAgQAXAgA4MubwsCSs8PBSgMmH/Lh9uA0hub9rIc/377/9V1PiCLB4AUDjKSfwsXgbKx1H9wJNIswFADqF+k9xsiZw7UdaQogWi/FTOKeP8Sc5JY4whj8VERbBRpgNAIHO50hQAyFNRPz2Hl4LmIct7sBPzhWKU81H2ysjI5KPcgrIFGiNBWZ6fmfRDnpS/5UxS5ORyUxQ83suYEPyEWRIRd9H/eRz/WzJEsok9GKiSU6VBEahVR8/saXpmiILFSTPDJljIH4sf41RZUPQE87LYCROcJYrkTDCf6xeiyCOaGTrBycIARYwwmxM1wYIs/8gJlmZGKPZNlrJZE8yVTtYgS49W+FMFHEX+vNSo2AnOEcbMVNSWHhkyGcNW+KWyCEUvAnGg7+S+AYpzyMj6oXchR7E2OzUqSHEO3Mn6BWLWZM6sOEVtfIGf/2RMtCJeku2r2EsiClfEC0SBCn9WTqRibTb6cE6uDVfEC8RxXuaJvihpMJzkJn9+kbO83UbQOSGqUBLpPLrV+O1/MyEyRWw0kniJS6KQjIlIczMzpQs1hyjN8U46Mg7MJ1wkmCDcL3Qk+kv/Rw/2NG8wGZPPUTlWIB4OTKZkktJBkEHzFwTxEE79vZSpmOGnOfAKRzRfXANYDnkClUGVSVVPVUJVMkExk1pJvUJ9n0ZDC6Bl0MJovrQDtEx6Bj2BHkUvpDcyUhmpjAxGJqOFMcOYZDgxXBl+jGhGHCOZkcqQMGSMPMZ6xjbGXsZBxglGFeM2o4XxhDHE+MYkMpWYJkw7picziBnKjGamMBcz1zI3M3czDzLPMG8ze5lfWTgWg2XPcmMFsuJY81gLWWWs7awDrFOsW6w+1ns2jq3PtmV7sCPYfHYOezF7E3sv+yT7JruP/ZHDQFAWB3kggEPOdANAAAAASUVORK5CYII='
    };
  },
  methods: {
    refreshCaptcha1() {
      this.captchaImageUrl1 = this.generateCaptchaUrl();
    },
    refreshCaptcha2() {
      this.captchaImageUrl2 = this.generateCaptchaUrl();
    },
    refreshCaptcha3() {
      this.captchaImageUrl3 = this.generateCaptchaUrl();
    },
    generateCaptchaUrl() {
      // 模拟生成随机验证码图片URL (在实际应用中，这应该是从服务器获取的)
      // 为了演示，使用一个随机数来强制刷新图片
      const randomNumber = Math.floor(Math.random() * 10000);
      return `https://dummyimage.com/120x56/4a78c0/ffffff.png&text=验证码${randomNumber}`;
    }
  }
};
</script>

<style scoped>
.captcha-example {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

h3 {
  color: #555;
  margin-bottom: 15px;
}

.example-container {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f8fa;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.value-display {
  margin-top: 10px;
  font-size: 14px;
  color: #666;
  padding: 8px;
  background-color: #edf2f7;
  border-radius: 4px;
}
</style> 