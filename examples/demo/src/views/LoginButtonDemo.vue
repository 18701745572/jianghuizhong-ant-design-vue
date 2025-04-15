<template>
  <div class="demo-container">
    <h1 class="demo-title">登录按钮组件示例</h1>
    
    <div class="button-container">
      <h2>默认状态 (浅蓝灰色)</h2>
      <LoginButton theme="default" />
    </div>
    
    <div class="button-container">
      <h2>主要状态 (蓝色)</h2>
      <LoginButton theme="primary" />
    </div>
    
    <div class="button-container">
      <h2>渐变状态 (蓝色渐变)</h2>
      <LoginButton theme="gradient" />
    </div>
    
    <div class="button-container">
      <h2>禁用状态</h2>
      <LoginButton theme="primary" disabled />
    </div>
    
    <div class="button-container">
      <h2>自定义文本</h2>
      <LoginButton theme="gradient" text="立即注册" />
    </div>
    
    <div class="usage-guide">
      <h2>使用说明</h2>
      <div class="code-block">
        <pre>
          &lt;template&gt;
            &lt;LoginButton 
              theme="default" 
              text="登录"
              :disabled="false"
              @click="handleLogin"
            /&gt;
          &lt;/template&gt;
          
          &lt;script&gt;
          import { LoginButton } from 'ant-design-vue';
          
          export default {
            components: { LoginButton },
            methods: {
              handleLogin() {
                // 处理登录逻辑
                console.log('登录按钮被点击');
              }
            }
          };
          &lt;/script&gt;
        </pre>
      </div>
      
      <h3>属性说明</h3>
      <table class="props-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>theme</td>
            <td>按钮主题</td>
            <td>string</td>
            <td>default (可选值: default, primary, gradient)</td>
          </tr>
          <tr>
            <td>text</td>
            <td>按钮文字</td>
            <td>string</td>
            <td>登录</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      
      <h3>事件</h3>
      <table class="props-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击按钮时触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue';

export default {
  name: 'LoginButtonDemo',
  components: {
    LoginButton
  }
};
</script>

<style scoped>
.demo-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.demo-title {
  text-align: center;
  margin-bottom: 40px;
  color: #1565c0;
}

.button-container {
  margin-bottom: 30px;
}

.button-container h2 {
  margin-bottom: 16px;
  color: #333;
  font-size: 18px;
}

.usage-guide {
  margin-top: 50px;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.usage-guide h2 {
  margin-bottom: 20px;
  color: #1565c0;
}

.usage-guide h3 {
  margin: 25px 0 15px;
  color: #333;
}

.code-block {
  background-color: #282c34;
  border-radius: 6px;
  padding: 10px;
  overflow-x: auto;
}

.code-block pre {
  color: #abb2bf;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.5;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.props-table th,
.props-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.props-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.props-table tr:nth-child(even) {
  background-color: #f9f9f9;
}
</style> 