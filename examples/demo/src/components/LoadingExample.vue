<template>
  <div class="loading-example">
    <h2>加载组件示例</h2>
    
    <div class="controls">
      <div class="control-group">
        <button @click="toggleLoading" class="toggle-button">
          {{ isLoading ? '隐藏加载' : '显示加载' }}
        </button>
      </div>
      
      <div class="control-group">
        <label>加载图标大小:</label>
        <div class="slider-container">
          <input type="range" min="40" max="120" v-model.number="spinnerSize" class="slider" />
          <span>{{ spinnerSize }}px</span>
        </div>
      </div>
      
      <div class="control-group">
        <label>颜色:</label>
        <div class="color-options">
          <span 
            v-for="(clr, index) in colorOptions" 
            :key="index"
            class="color-option"
            :class="{ active: spinnerColor === clr }"
            :style="{ backgroundColor: clr }"
            @click="spinnerColor = clr"
          ></span>
        </div>
      </div>
    </div>
    
    <LoadingSpinner 
      :visible="isLoading" 
      :size="spinnerSize"
      :color="spinnerColor"
    />
  </div>
</template>

<script>
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  name: 'LoadingExample',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false,
      spinnerSize: 64,
      spinnerColor: '#3e8bf9',
      colorOptions: [
        '#3e8bf9', // 默认蓝色
        '#ff5252', // 红色
        '#4caf50', // 绿色
        '#ffc107', // 黄色
        '#9c27b0'  // 紫色
      ]
    };
  },
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
};
</script>

<style scoped>
.loading-example {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #28526B;
  margin-bottom: 20px;
}

.controls {
  margin-bottom: 20px;
  padding: 20px;
  background-color: rgba(220, 232, 240, 0.3);
  border-radius: 12px;
}

.control-group {
  margin-bottom: 16px;
}

.control-group:last-child {
  margin-bottom: 0;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #28526B;
  font-weight: 500;
}

.toggle-button {
  padding: 10px 20px;
  background: linear-gradient(135deg, rgba(35, 136, 255, 0.8) 0%, rgba(0, 56, 255, 0.8) 100%);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.toggle-button:hover {
  background: linear-gradient(135deg, rgba(35, 136, 255, 1) 0%, rgba(0, 56, 255, 1) 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.slider-container {
  display: flex;
  align-items: center;
}

.slider {
  flex: 1;
  margin-right: 10px;
  -webkit-appearance: none;
  height: 6px;
  background: #dce8f0;
  border-radius: 3px;
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3e8bf9;
  cursor: pointer;
}

.color-options {
  display: flex;
  gap: 8px;
}

.color-option {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
}

.color-option.active {
  transform: scale(1.2);
  box-shadow: 0 0 0 2px white, 0 0 0 4px #3e8bf9;
}

.color-option:hover {
  transform: scale(1.1);
}
</style> 