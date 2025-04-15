<template>
  <div class="demo-container">
    <!-- 顶部导航栏 -->
    <div class="top-nav">
      <a-button type="link" @click="currentView = 'main'">首页</a-button>
      <a-button type="link" @click="currentView = 'loginButtonDemo'">登录按钮演示</a-button>
      <a-button type="link" @click="currentView = 'rememberPasswordDemo'">记住密码演示</a-button>
      <a-button type="link" @click="currentView = 'captchaDemo'">验证码演示</a-button>
    </div>
    
    <!-- 动态组件显示 -->
    <component :is="currentView === 'main' ? 'div' : currentView">
      <!-- 主页内容 -->
      <template v-if="currentView === 'main'">
        <!-- 自定义选择器组件示例 -->
        <select-demo />

        <a-card title="Ant Design Vue 组件示例" style="width: 100%; margin-top: 20px;">
          <!-- 加载组件示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>加载组件示例</h3>
            <loading-example />
          </div>

          <!-- 自定义选择器示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>自定义选择器</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <custom-select 
                  v-model="selectedSystem1" 
                  :options="systemOptions"
                  theme="light"
                >
                  <template #icon>
                    <system-icon />
                  </template>
                </custom-select>
              </div>
              <div style="width: 300px;">
                <custom-select 
                  v-model="selectedSystem2" 
                  :options="systemOptions"
                  theme="blue"
                >
                  <template #icon>
                    <system-icon />
                  </template>
                </custom-select>
              </div>
            </div>
          </div>

          <!-- 记住密码组件示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>记住密码组件</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <h4>浅色主题</h4>
                <remember-password 
                  v-model="rememberLight"
                  theme="light"
                />
              </div>
              <div style="width: 300px;">
                <h4>蓝色主题</h4>
                <remember-password 
                  v-model="rememberBlue"
                  theme="blue"
                />
              </div>
            </div>
          </div>

          <!-- 验证码组件示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>自定义验证码输入框</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <h4>浅色主题</h4>
                <captcha-input 
                  v-model="captchaValue" 
                  @refresh="refreshCaptcha" 
                />
              </div>
              <div style="width: 300px;">
                <h4>蓝色主题</h4>
                <captcha-input 
                  v-model="captchaValueBlue" 
                  theme="blue"
                  @refresh="refreshCaptcha" 
                />
              </div>
            </div>
          </div>

          <!-- 忘记密码组件示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>忘记密码组件</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <h4>浅色主题</h4>
                <forgot-password 
                  theme="light"
                  @click="handleForgotPassword"
                />
              </div>
              <div style="width: 300px;">
                <h4>蓝色主题</h4>
                <forgot-password 
                  theme="blue"
                  @click="handleForgotPassword"
                />
              </div>
            </div>
          </div>

          <!-- 自定义密码输入框示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>自定义密码输入框</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <password-input 
                  v-model="password" 
                  placeholder="请输入账号密码"
                />
              </div>
            </div>
          </div>

          <!-- 自定义账号输入框示例 -->
          <div class="custom-selects-demo" style="margin-bottom: 24px">
            <h3>自定义账号输入框</h3>
            <div class="selects-row">
              <div style="width: 300px; margin-right: 16px;">
                <username-input 
                  v-model="username" 
                  placeholder="请输入账号名称"
                />
              </div>
            </div>
          </div>

          <!-- 表单示例 -->
          <a-form :form="form" @submit="handleSubmit">
            <a-form-item label="用户名">
              <a-input
                v-decorator="['username', { rules: [{ required: true, message: '请输入用户名!' }] }]"
                placeholder="请输入用户名"
              />
            </a-form-item>
            
            <a-form-item label="选择类型">
              <a-select
                v-decorator="['type', { rules: [{ required: true, message: '请选择类型!' }] }]"
                placeholder="请选择类型"
              >
                <a-select-option value="1">类型一</a-select-option>
                <a-select-option value="2">类型二</a-select-option>
              </a-select>
            </a-form-item>
            
            <a-form-item label="日期">
              <a-date-picker
                v-decorator="['date', { rules: [{ required: true, message: '请选择日期!' }] }]"
                style="width: 100%"
              />
            </a-form-item>
            
            <a-form-item>
              <a-button type="primary" html-type="submit">
                提交
              </a-button>
              <a-button style="margin-left: 10px" @click="handleReset">
                重置
              </a-button>
            </a-form-item>
          </a-form>

          <!-- 表格示例 -->
          <a-table :columns="columns" :data-source="data">
            <template #operation="text, record">
              <a-space>
                <a @click="handleEdit(record)">编辑</a>
                <a-popconfirm
                  title="确定要删除吗？"
                  @confirm="handleDelete(record.key)"
                >
                  <a>删除</a>
                </a-popconfirm>
              </a-space>
            </template>
          </a-table>

          <!-- LoadingSpinner 组件用法示例 -->
          <div class="custom-selects-demo" style="margin-top: 24px">
            <h3>加载组件直接调用示例</h3>
            <div class="spinner-usage-example">
              <div class="usage-description">
                <h4>组件属性说明：</h4>
                <ul>
                  <li><strong>visible</strong>: Boolean - 控制显示/隐藏</li>
                  <li><strong>size</strong>: Number - 设置大小（默认64px）</li>
                  <li><strong>color</strong>: String - 设置颜色（默认#3e8bf9）</li>
                  <li><strong>containerWidth</strong>: Number - 容器宽度</li>
                  <li><strong>containerHeight</strong>: Number - 容器高度</li>
                </ul>
              </div>
              
              <div class="spinner-demo-controls">
                <a-button type="primary" @click="showSpinner = !showSpinner">
                  {{ showSpinner ? '隐藏' : '显示' }}加载动画
                </a-button>
                
                <div class="spinner-size-control">
                  <span>大小：</span>
                  <a-slider 
                    v-model="demoSpinnerSize" 
                    :min="32" 
                    :max="120" 
                    style="width: 200px; margin: 0 16px;" 
                  />
                  <span>{{ demoSpinnerSize }}px</span>
                </div>
                
                <div class="spinner-color-control">
                  <span>颜色：</span>
                  <a-radio-group v-model="demoSpinnerColor" button-style="solid">
                    <a-radio-button value="#3e8bf9">蓝色</a-radio-button>
                    <a-radio-button value="#52c41a">绿色</a-radio-button>
                    <a-radio-button value="#f5222d">红色</a-radio-button>
                  </a-radio-group>
                </div>
              </div>
              
              <div class="spinner-preview" style="position: relative; height: 200px; border: 1px dashed #d9d9d9; border-radius: 8px; display: flex; justify-content: center; align-items: center;">
                <p v-if="!showSpinner">点击"显示加载动画"按钮查看效果</p>
                <loading-spinner 
                  :visible="showSpinner"
                  :size="demoSpinnerSize"
                  :color="demoSpinnerColor"
                  :containerWidth="400"
                  :containerHeight="180"
                />
              </div>
              
              <div class="code-example" style="margin-top: 16px;">
                <a-typography-paragraph copyable>
                  <pre><code>&lt;loading-spinner 
  :visible="true"
  :size="64"
  :color="#3e8bf9"
  :containerWidth="400"
  :containerHeight="180"
/&gt;</code></pre>
                </a-typography-paragraph>
              </div>
            </div>
          </div>

          <!-- 登录按钮组件示例 -->
          <div class="custom-selects-demo" style="margin-top: 24px">
            <h3>登录按钮组件</h3>
            <div style="display: flex; justify-content: center; padding: 24px 0;">
              <login-button @click="handleLogin" />
            </div>
            <div style="text-align: center; margin-top: 16px;">
              <a-button type="primary" @click="currentView = 'loginButtonDemo'">
                查看详细登录按钮演示
              </a-button>
            </div>
          </div>
        </a-card>
      </template>
    </component>
  </div>
</template>

<script>
import CustomSelect from './components/CustomSelect.vue';
import SystemIcon from './components/SystemIcon.vue';
import SelectDemo from './components/SelectDemo.vue';
import PasswordInput from './components/PasswordInput.vue';
import UsernameInput from './components/UsernameInput.vue';
import RememberPassword from './components/RememberPassword.vue';
import CaptchaInput from './components/CaptchaInput.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import LoadingExample from './components/LoadingExample.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';
import LoginButton from './components/LoginButton.vue';
import LoginButtonDemo from './views/LoginButtonDemo.vue';
import RememberPasswordDemo from './views/RememberPasswordDemo.vue';
import CaptchaDemo from './views/CaptchaDemo.vue';

export default {
  components: {
    CustomSelect,
    SystemIcon,
    SelectDemo,
    PasswordInput,
    UsernameInput,
    RememberPassword,
    CaptchaInput,
    ForgotPassword,
    LoadingExample,
    LoadingSpinner,
    LoginButton,
    LoginButtonDemo,
    RememberPasswordDemo,
    CaptchaDemo
  },
  data() {
    return {
      currentView: 'main',
      selectedSystem1: '',
      selectedSystem2: '',
      password: '',
      username: '',
      rememberLight: false,
      rememberBlue: false,
      captchaValue: '',
      captchaValueBlue: '',
      systemOptions: [
        { value: 'system1', label: '系统一' },
        { value: 'system2', label: '系统二' },
        { value: 'system3', label: '系统三' }
      ],
      form: this.$form.createForm(this),
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '地址',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: '操作',
          key: 'operation',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data: [
        {
          key: '1',
          name: '张三',
          age: 32,
          address: '北京市朝阳区',
        },
        {
          key: '2',
          name: '李四',
          age: 42,
          address: '上海市浦东新区',
        },
      ],
      showSpinner: false,
      demoSpinnerSize: 64,
      demoSpinnerColor: '#3e8bf9'
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('表单值:', values);
          this.$message.success('提交成功！');
        }
      });
    },
    handleReset() {
      this.form.resetFields();
    },
    handleEdit(record) {
      this.$message.info(`编辑记录: ${record.name}`);
    },
    handleDelete(key) {
      this.data = this.data.filter(item => item.key !== key);
      this.$message.success('删除成功！');
    },
    refreshCaptcha() {
      this.$message.info('刷新验证码');
      // 在实际应用中，这里可以调用API获取新的验证码
    },
    handleForgotPassword() {
      this.$message.info('处理忘记密码逻辑');
    },
    handleLogin() {
      this.$message.success('点击了登录按钮');
    }
  },
};
</script>

<style scoped>
.demo-container {
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
}

.top-nav {
  background: white;
  padding: 12px 24px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
}

.custom-selects-demo {
  background: white;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.selects-row {
  display: flex;
  margin-top: 16px;
}

h4 {
  margin-bottom: 8px;
  font-size: 14px;
  color: #28526B;
  font-weight: 500;
}

/* 新增加载组件示例样式 */
.spinner-usage-example {
  padding: 16px;
}

.usage-description {
  margin-bottom: 20px;
}

.spinner-demo-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.spinner-size-control, 
.spinner-color-control {
  display: flex;
  align-items: center;
}

.code-example {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 16px;
}

.code-example pre {
  margin: 0;
}
</style> 