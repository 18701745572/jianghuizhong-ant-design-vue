<template>
  <div class="custom-navigation" :class="[`theme-${theme}`]">
    <div class="nav-container">
      <div class="logo-area">
        <slot name="logo">
          <!-- 默认logo位置 -->
          <div class="default-logo">LOGO</div>
        </slot>
      </div>
      
      <div class="menu-area">
        <ul class="menu-list">
          <li 
            v-for="(item, index) in menuItems" 
            :key="index" 
            class="menu-item"
            :class="{ active: activeIndex === index }"
            @click="handleMenuClick(index, item)"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
      
      <div class="action-area">
        <slot name="actions">
          <!-- 默认右侧操作区域 -->
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomNavigation',
  props: {
    theme: {
      type: String,
      default: 'light',
      validator: (value) => ['light', 'dark', 'primary'].includes(value)
    },
    menuItems: {
      type: Array,
      default: () => [],
      // 每个菜单项格式：{ label: '菜单名称', key: '唯一键', path: '可选跳转路径' }
    },
    defaultActive: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: this.defaultActive
    };
  },
  methods: {
    handleMenuClick(index, item) {
      this.activeIndex = index;
      this.$emit('menu-click', item, index);
    }
  }
};
</script>

<style scoped>
.custom-navigation {
  width: 100%;
  height: 60px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-area {
  flex: 0 0 200px;
  display: flex;
  align-items: center;
}

.default-logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.menu-area {
  flex: 1;
  display: flex;
  justify-content: center;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu-item {
  padding: 0 20px;
  font-size: 16px;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-area {
  flex: 0 0 200px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

/* 主题：浅色（默认） */
.theme-light {
  background-color: #ffffff;
}

.theme-light .menu-item {
  color: #666;
}

.theme-light .menu-item:hover,
.theme-light .menu-item.active {
  color: #1890ff;
}

/* 主题：深色 */
.theme-dark {
  background-color: #001529;
}

.theme-dark .default-logo,
.theme-dark .menu-item {
  color: rgba(255, 255, 255, 0.65);
}

.theme-dark .menu-item:hover,
.theme-dark .menu-item.active {
  color: #fff;
}

/* 主题：主要色 */
.theme-primary {
  background-color: #1890ff;
}

.theme-primary .default-logo,
.theme-primary .menu-item {
  color: rgba(255, 255, 255, 0.85);
}

.theme-primary .menu-item:hover,
.theme-primary .menu-item.active {
  color: #fff;
  font-weight: 500;
}
</style> 