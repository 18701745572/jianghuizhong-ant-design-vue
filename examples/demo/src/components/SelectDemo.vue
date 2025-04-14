<template>
  <div class="select-demo-container">
    <h2>自定义选择器组件 (CustomSelect)</h2>
    <p>这是一个基于Vue开发的自定义选择器组件，有两种主题风格可选，并添加了鼠标悬停特效。</p>

    <h3>1. 基础用法</h3>
    <div class="demo-section">
      <div class="demo-block">
        <h4>浅色主题 (Light)</h4>
        <div class="demo-note">鼠标悬停可查看特效</div>
        <custom-select 
          v-model="selectedSystem1" 
          :options="systemOptions"
          theme="light"
        >
          <template #icon>
            <system-icon />
          </template>
        </custom-select>
        <div class="demo-result">
          <p>选中值: {{ selectedSystem1 || '未选择' }}</p>
        </div>
      </div>

      <div class="demo-block">
        <h4>蓝色主题 (Blue)</h4>
        <div class="demo-note">鼠标悬停可查看特效</div>
        <custom-select 
          v-model="selectedSystem2" 
          :options="systemOptions"
          theme="blue"
        >
          <template #icon>
            <system-icon />
          </template>
        </custom-select>
        <div class="demo-result">
          <p>选中值: {{ selectedSystem2 || '未选择' }}</p>
        </div>
      </div>
    </div>

    <h3>2. 设计说明</h3>
    <div class="demo-section design-notes">
      <div class="design-note">
        <h4>初始状态</h4>
        <ul>
          <li>半透明白色背景 (opacity: 0.5)</li>
          <li>边框颜色: #DCE8F0</li>
          <li>文字颜色: #28526B</li>
          <li>圆角: 12px</li>
          <li>背景模糊效果 (backdrop-filter: blur)</li>
          <li>垂直分隔线显示</li>
        </ul>
      </div>
      <div class="design-note">
        <h4>悬停状态</h4>
        <ul>
          <li>渐变背景色</li>
          <li>文字和图标变为白色</li>
          <li>模糊效果增强</li>
          <li>边框颜色变为半透明白色</li>
        </ul>
      </div>
    </div>

    <h3>3. 组件参数</h3>
    <div class="demo-section">
      <table class="params-table">
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
            <td>value / v-model</td>
            <td>指定当前选中的值</td>
            <td>string | number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>options</td>
            <td>下拉选项数据源</td>
            <td>array</td>
            <td>[]</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>选择框默认文本</td>
            <td>string</td>
            <td>请选择系统名称</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>设置主题样式</td>
            <td>string</td>
            <td>light</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>4. 事件</h3>
    <div class="demo-section">
      <table class="params-table">
        <thead>
          <tr>
            <th>事件名称</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>change</td>
            <td>选中值发生变化时触发</td>
            <td>选中项的值</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>5. 插槽</h3>
    <div class="demo-section">
      <table class="params-table">
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>icon</td>
            <td>自定义图标内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CustomSelect from './CustomSelect.vue';
import SystemIcon from './SystemIcon.vue';

export default {
  name: 'SelectDemo',
  components: {
    CustomSelect,
    SystemIcon
  },
  data() {
    return {
      selectedSystem1: '',
      selectedSystem2: '',
      systemOptions: [
        { value: 'system1', label: '系统一' },
        { value: 'system2', label: '系统二' },
        { value: 'system3', label: '系统三' },
        { value: 'system4', label: '系统四' },
        { value: 'system5', label: '系统五' }
      ]
    };
  }
};
</script>

<style scoped>
.select-demo-container {
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

h3 {
  margin: 24px 0 12px;
  font-size: 18px;
  color: #333;
  position: relative;
  padding-left: 12px;
}

h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  height: 16px;
  width: 4px;
  background: #1890ff;
  border-radius: 2px;
}

h4 {
  margin: 12px 0 8px;
  font-size: 15px;
  color: #666;
}

p {
  color: #666;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 24px;
}

.demo-block {
  margin-bottom: 20px;
  background: #f9f9f9;
  padding: 16px;
  border-radius: 6px;
  width: 400px;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}

.demo-note {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  font-style: italic;
}

.demo-result {
  margin-top: 12px;
  padding: 8px;
  background: #eaf7ff;
  border-radius: 4px;
}

.design-notes {
  display: flex;
  gap: 20px;
}

.design-note {
  background: #f9f9f9;
  padding: 16px;
  border-radius: 6px;
  flex: 1;
}

.design-note ul {
  padding-left: 16px;
  margin: 8px 0;
}

.design-note li {
  margin-bottom: 8px;
  color: #666;
}

.params-table {
  width: 100%;
  border-collapse: collapse;
  margin: 12px 0;
}

.params-table th, .params-table td {
  border: 1px solid #e8e8e8;
  padding: 12px 16px;
  text-align: left;
}

.params-table th {
  background: #f5f5f5;
  font-weight: 500;
}

.params-table tr:hover td {
  background: #f9f9f9;
}
</style> 