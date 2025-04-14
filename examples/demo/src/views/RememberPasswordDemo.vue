<template>
  <div class="demo-container">
    <h2>记住密码组件示例</h2>
    
    <div class="component-grid">
      <div class="component-card">
        <div class="component-title">浅色主题 (未选中)</div>
        <div class="component-preview">
          <RememberPassword 
            theme="light"
            :value="false"
          />
        </div>
      </div>
      
      <div class="component-card">
        <div class="component-title">浅色主题 (选中)</div>
        <div class="component-preview">
          <RememberPassword 
            theme="light"
            :value="true"
          />
        </div>
      </div>
      
      <div class="component-card">
        <div class="component-title">蓝色主题 (未选中)</div>
        <div class="component-preview">
          <RememberPassword 
            theme="blue"
            :value="false"
          />
        </div>
      </div>
      
      <div class="component-card">
        <div class="component-title">蓝色主题 (选中)</div>
        <div class="component-preview">
          <RememberPassword 
            theme="blue"
            :value="true"
          />
        </div>
      </div>
    </div>
    
    <div class="section">
      <h3>交互示例</h3>
      <div class="interactive-demo">
        <div class="demo-row">
          <RememberPassword 
            theme="light"
            v-model="rememberLight"
          />
          <div class="state-display">
            当前状态: {{ rememberLight ? '已选中' : '未选中' }}
          </div>
        </div>
        
        <div class="demo-row">
          <RememberPassword 
            theme="blue"
            v-model="rememberBlue"
          />
          <div class="state-display">
            当前状态: {{ rememberBlue ? '已选中' : '未选中' }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RememberPassword from '../components/RememberPassword.vue';

export default {
  name: 'RememberPasswordDemo',
  components: {
    RememberPassword
  },
  data() {
    return {
      rememberLight: false,
      rememberBlue: false
    };
  }
};
</script>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

h2 {
  margin-bottom: 24px;
  color: #28526B;
  font-weight: 500;
}

h3 {
  margin-bottom: 16px;
  color: #28526B;
  font-weight: 500;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.component-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.component-title {
  font-size: 14px;
  color: #28526B;
  margin-bottom: 16px;
}

.component-preview {
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(220, 232, 240, 0.3);
}

.section {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.interactive-demo {
  background-color: rgba(220, 232, 240, 0.3);
  border-radius: 8px;
  padding: 20px;
}

.demo-row {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.state-display {
  margin-left: 16px;
  font-size: 14px;
  color: #28526B;
}
</style> 