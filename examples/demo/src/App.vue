<template>
  <div class="demo-container">
    <!-- 自定义选择器组件示例 -->
    <select-demo />

    <a-card title="Ant Design Vue 组件示例" style="width: 100%; margin-top: 20px;">
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
    </a-card>
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

export default {
  components: {
    CustomSelect,
    SystemIcon,
    SelectDemo,
    PasswordInput,
    UsernameInput,
    RememberPassword,
    CaptchaInput,
    ForgotPassword
  },
  data() {
    return {
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
</style> 