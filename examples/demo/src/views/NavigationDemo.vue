<template>
  <div class="demo-container">
    <h1 class="demo-title">自定义导航组件示例</h1>
    
    <div class="nav-container">
      <h2>默认浅色主题</h2>
      <CustomNavigation 
        :menuItems="menuItems" 
        :defaultActive="0"
        @menu-click="handleMenuClick"
      >
        <template #logo>
          <div class="custom-logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Logo" height="28">
            <span class="logo-text">Ant Design</span>
          </div>
        </template>
        <template #actions>
          <a-button type="primary" shape="round" size="small" style="margin-right: 16px;">登录</a-button>
          <a-button shape="round" size="small">注册</a-button>
        </template>
      </CustomNavigation>
    </div>
    
    <div class="nav-container">
      <h2>深色主题</h2>
      <CustomNavigation 
        theme="dark" 
        :menuItems="menuItems" 
        :defaultActive="1"
        @menu-click="handleMenuClick"
      >
        <template #logo>
          <div class="custom-logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Logo" height="28">
            <span class="logo-text" style="color: white;">Ant Design</span>
          </div>
        </template>
        <template #actions>
          <a-avatar style="background-color: #87d068" icon="user" />
        </template>
      </CustomNavigation>
    </div>
    
    <div class="nav-container">
      <h2>主要色主题</h2>
      <CustomNavigation 
        theme="primary" 
        :menuItems="menuItems" 
        :defaultActive="2"
        @menu-click="handleMenuClick"
      >
        <template #logo>
          <div class="custom-logo">
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="Logo" height="28">
            <span class="logo-text" style="color: white;">Ant Design</span>
          </div>
        </template>
        <template #actions>
          <a-button type="default" ghost shape="round" size="small" style="margin-right: 8px;">登录</a-button>
          <a-button type="primary" shape="round" size="small" style="background: white; color: #1890ff; border: none;">注册</a-button>
        </template>
      </CustomNavigation>
    </div>
    
    <div class="usage-guide">
      <h2>使用说明</h2>
      <div class="code-block">
        <pre>
          &lt;template&gt;
            &lt;CustomNavigation 
              theme="light" 
              :menuItems="menuItems" 
              :defaultActive="0"
              @menu-click="handleMenuClick"
            &gt;
              &lt;template #logo&gt;
                &lt;div class="custom-logo"&gt;
                  &lt;img src="logo.svg" alt="Logo" height="28"&gt;
                  &lt;span class="logo-text"&gt;网站名称&lt;/span&gt;
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;template #actions&gt;
                &lt;a-button type="primary"&gt;登录&lt;/a-button&gt;
              &lt;/template&gt;
            &lt;/CustomNavigation&gt;
          &lt;/template&gt;
          
          &lt;script&gt;
          import { CustomNavigation } from 'ant-design-vue';
          
          export default {
            components: { CustomNavigation },
            data() {
              return {
                menuItems: [
                  { label: '首页', key: 'home', path: '/home' },
                  { label: '产品', key: 'products',  children: [
                      {
                        label: '产品',
                        key: '2.1',
                        title: 'Navigation 3',
                        path: '/products'
                      },
                    ] 
                  },
                  { label: '博客', key: 'blog', path: '/blog' },
                  { label: '关于我们', key: 'about', path: '/about' }
                ]
              };
            },
            methods: {
              handleMenuClick(item, index) {
                console.log('点击了菜单项:', item, index);
                // 可以在这里处理导航逻辑
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
            <td>导航栏主题</td>
            <td>string</td>
            <td>light (可选值: light, dark, primary)</td>
          </tr>
          <tr>
            <td>menuItems</td>
            <td>菜单项配置</td>
            <td>array</td>
            <td>[] (格式: [{ label: '菜单名称', key: '唯一键', path: '路径' }])</td>
          </tr>
          <tr>
            <td>defaultActive</td>
            <td>默认激活的菜单项索引</td>
            <td>number</td>
            <td>0</td>
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
          <tr>
            <td>actions</td>
            <td>自定义右侧操作区域内容</td>
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
            <td>(item: Object, index: Number)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import CustomNavigation from '../components/CustomNavigation.vue';

export default {
  name: 'NavigationDemo',
  components: {
    CustomNavigation
  },
  data() {
    return {
      menuItems: [
        { label: '首页', key: 'home', path: '/home' },
        { label: '产品', key: 'products', path: '/products' },
        { label: '博客', key: 'blog', path: '/blog' },
        { label: '关于我们', key: 'about', path: '/about' }
      ]
    };
  },
  methods: {
    handleMenuClick(item, index) {
      this.$message.info(`点击了菜单: ${item.label}, 索引: ${index}`);
    }
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

.nav-container {
  margin-bottom: 40px;
}

.nav-container h2 {
  margin-bottom: 16px;
  color: #333;
  font-size: 18px;
}

.custom-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  margin-left: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
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