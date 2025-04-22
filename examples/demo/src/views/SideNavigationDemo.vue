<template>
  <div class="side-nav-demo">
    <div class="layout">
      <SideNavigation
        :menuItems="menuItems"
        :defaultActive="activeKey"
        :background="selectedBackground"
        @menu-click="handleMenuClick"
        @collapse-change="handleCollapseChange"
      />
      <div class="content">
        <div class="content-header">
          <h1>{{ currentTitle }}</h1>
        </div>
        <div class="content-main">
          <div class="content-section">
            <h2>背景设置</h2>
            <div class="background-options">
              <a-radio-group v-model="backgroundType" button-style="solid">
                <a-radio-button value="default">默认渐变</a-radio-button>
                <a-radio-button value="color">纯色背景</a-radio-button>
                <a-radio-button value="gradient">自定义渐变</a-radio-button>
                <a-radio-button value="image">图片背景</a-radio-button>
              </a-radio-group>
              
              <div class="background-input" v-if="backgroundType === 'color'">
                <a-input v-model="colorBackground" placeholder="#0a3d9d" addonBefore="颜色值" style="width: 200px; margin-top: 16px;" />
                <a-button type="primary" @click="applyBackground" style="margin-left: 8px;">应用</a-button>
              </div>
              
              <div class="background-input" v-if="backgroundType === 'gradient'">
                <a-input v-model="gradientBackground" placeholder="linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)" style="width: 400px; margin-top: 16px;" />
                <a-button type="primary" @click="applyBackground" style="margin-left: 8px;">应用</a-button>
              </div>
              
              <div class="background-input" v-if="backgroundType === 'image'">
                <a-input v-model="imageBackground" placeholder="https://example.com/bg.jpg" style="width: 400px; margin-top: 16px;" />
                <a-button type="primary" @click="applyBackground" style="margin-left: 8px;">应用</a-button>
              </div>
            </div>
          </div>
          
          <div class="content-section">
            <h2>侧边导航栏组件示例</h2>
            <p>这是一个模仿您提供的图片样式的侧边导航栏组件，具有以下特点：</p>
            <ul>
              <li>蓝色渐变背景</li>
              <li>带有图标的菜单项</li>
              <li>可高亮当前选中的菜单项</li>
              <li>响应式设计</li>
            </ul>
          </div>
          
          <div class="content-section">
            <h2>使用说明</h2>
            <div class="code-block">
              <pre>
              &lt;template&gt;
                &lt;SideNavigation
                  :menuItems="menuItems"
                  :defaultActive="activeKey"
                  :background="background"
                  @menu-click="handleMenuClick"
                /&gt;
              &lt;/template&gt;
              
              &lt;script&gt;
              import { SideNavigation } from 'ant-design-vue';
              
              export default {
                components: { SideNavigation },
                data() {
                  return {
                    activeKey: 'home',
                    // 自定义背景
                    background: 'linear-gradient(180deg, #0a3d9d 0%, #0264c8 100%)',
                    // 或者使用图片背景
                    // background: 'https://example.com/bg.jpg',
                    menuItems: [
                      { key: 'home', label: '首页', icon: 'home' },
                      { 
                        key: 'customer', 
                        label: '客户中心', 
                        icon: 'user',
                        children: [
                          { key: 'customer-list', label: '客户列表' },
                          { key: 'customer-manage', label: '客户管理' }
                        ]
                      },
                      { 
                        key: 'project', 
                        label: '项目中心', 
                        icon: 'project',
                        children: [
                          { key: 'project-list', label: '项目列表' },
                          { key: 'project-manage', label: '项目管理' }
                        ]
                      },
                      { key: 'contract', label: '合同中心', icon: 'file' },
                      { key: 'approval', label: '审核中心', icon: 'audit' },
                      { key: 'employee', label: '员工中心', icon: 'team' },
                      { key: 'message', label: '消息中心', icon: 'message' },
                      { key: 'setting', label: '系统配置', icon: 'setting' }
                    ]
                  };
                },
                methods: {
                  handleMenuClick(item, parentItem) {
                    this.activeKey = item.key;
                    // 处理菜单点击事件
                    console.log('点击了', item.label, parentItem ? `(父菜单: ${parentItem.label})` : '');
                  }
                }
              };
              &lt;/script&gt;
              </pre>
            </div>
          </div>
          
          <div class="content-section">
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
                  <td>width</td>
                  <td>侧边栏宽度</td>
                  <td>number</td>
                  <td>240</td>
                </tr>
                <tr>
                  <td>menuItems</td>
                  <td>菜单项配置</td>
                  <td>array</td>
                  <td>[] (包含默认的8个菜单项)</td>
                </tr>
                <tr>
                  <td>defaultActive</td>
                  <td>默认激活的菜单项key</td>
                  <td>string</td>
                  <td>'home'</td>
                </tr>
                <tr>
                  <td>background</td>
                  <td>自定义背景，可以是颜色、渐变或图片URL</td>
                  <td>string | object</td>
                  <td>null (使用默认渐变背景)</td>
                </tr>
                <tr>
                  <td>collapsedWidth</td>
                  <td>折叠时的侧边栏宽度</td>
                  <td>number</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>defaultCollapsed</td>
                  <td>是否默认折叠</td>
                  <td>boolean</td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
            
            <h3>插槽</h3>
            <table class="props-table">
              <thead>
                <tr>
                  <th>名称</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>logo</td>
                  <td>自定义Logo区域内容</td>
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
                  <td>menu-click</td>
                  <td>点击菜单项时触发</td>
                  <td>(item: Object, parentItem?: Object)</td>
                </tr>
                <tr>
                  <td>collapse-change</td>
                  <td>侧边栏折叠状态改变时触发</td>
                  <td>(collapsed: Boolean)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavigation from '../components/SideNavigation.vue';

export default {
  name: 'SideNavigationDemo',
  components: {
    SideNavigation
  },
  data() {
    return {
      activeKey: 'home',
      currentTitle: '首页',
      backgroundType: 'default',
      colorBackground: '#0a3d9d',
      gradientBackground: 'linear-gradient(180deg, #6a11cb 0%, #2575fc 100%)',
      imageBackground: './img/CustomNavigationBg.png',
      selectedBackground: './img/CustomNavigationBg.png',
      menuItems: [
        { key: 'home', label: '首页', icon: 'home' },
        { 
          key: 'customer', 
          label: '客户中心', 
          icon: 'user',
          children: [
            { key: 'customer-list', label: '客户列表' },
            { key: 'customer-manage', label: '客户管理' }
          ]
        },
        { 
          key: 'project', 
          label: '项目中心', 
          icon: 'project',
          children: [
            { key: 'project-list', label: '项目列表' },
            { key: 'project-manage', label: '项目管理' }
          ]
        },
        { key: 'contract', label: '合同中心', icon: 'file' },
        { key: 'approval', label: '审核中心', icon: 'audit' },
        { key: 'employee', label: '员工中心', icon: 'team' },
        { key: 'message', label: '消息中心', icon: 'message' },
        { key: 'setting', label: '系统配置', icon: 'setting' }
      ]
    };
  },
  methods: {
    handleMenuClick(item, parentItem) {
      this.activeKey = item.key;
      this.currentTitle = item.label;
      this.$message.info(`点击了菜单: ${item.label}${parentItem ? ` (父菜单: ${parentItem.label})` : ''}`);
    },
    handleCollapseChange(collapsed) {
      this.$message.info(`侧边栏${collapsed ? '已折叠' : '已展开'}`);
    },
    applyBackground() {
      switch (this.backgroundType) {
        case 'default':
          this.selectedBackground = null;
          break;
        case 'color':
          this.selectedBackground = this.colorBackground;
          break;
        case 'gradient':
          this.selectedBackground = this.gradientBackground;
          break;
        case 'image':
          this.selectedBackground = this.imageBackground;
          break;
      }
    }
  },
  watch: {
    backgroundType(newVal) {
      if (newVal === 'default') {
        this.selectedBackground = null;
      } else if (newVal === 'image') {
        // 自动应用默认图片
        this.selectedBackground = this.imageBackground;
      }
    }
  }
};
</script>

<style scoped>
.side-nav-demo {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.content {
  flex: 1;
  overflow: auto;
  background-color: #f5f7f9;
}

.content-header {
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  padding: 0 24px;
  display: flex;
  align-items: center;
}

.content-header h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #333;
}

.content-main {
  padding: 24px;
}

.content-section {
  background-color: #fff;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.content-section h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.content-section p {
  margin-bottom: 16px;
  line-height: 1.6;
  color: #666;
}

.content-section ul {
  padding-left: 24px;
  margin-bottom: 16px;
}

.content-section ul li {
  margin-bottom: 8px;
  color: #666;
}

.code-block {
  background-color: #282c34;
  border-radius: 4px;
  padding: 16px;
  overflow-x: auto;
  margin-bottom: 24px;
}

.code-block pre {
  margin: 0;
  color: #abb2bf;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.5;
}

.props-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
}

.props-table th,
.props-table td {
  border: 1px solid #e8e8e8;
  padding: 12px 16px;
  text-align: left;
}

.props-table th {
  background-color: #f5f7f9;
  font-weight: 500;
}

h3 {
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.background-options {
  margin-bottom: 20px;
}

.background-input {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
</style> 