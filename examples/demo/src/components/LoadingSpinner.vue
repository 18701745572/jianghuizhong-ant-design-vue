<template>
  <div class="loading-container" v-if="visible">
    <div 
      class="loading-overlay" 
      :style="{
        width: containerWidth ? `${containerWidth}px` : '684px',
        height: containerHeight ? `${containerHeight}px` : '529px'
      }"
    >
      <div 
        class="loading-spinner"
        :style="{
          width: `${size}px`,
          height: `${size}px`
        }"
      >
        <svg :width="size" :height="size" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#paint0_angular_13_1033_clip_path)">
            <g transform="matrix(0 0.03 -0.03 0 32 32)">
              <foreignObject x="-1033.33" y="-1033.33" width="2066.67" height="2066.67">
                <div 
                  xmlns="http://www.w3.org/1999/xhtml" 
                  :style="`background:conic-gradient(from 90deg,${color} 0deg,${colorTransparent} 360deg);height:100%;width:100%;opacity:1`">
                </div>
              </foreignObject>
            </g>
          </g>
          <path 
            d="M62 32C62 48.5685 48.5685 62 32 62C15.4315 62 2 48.5685 2 32C2 15.4315 15.4315 2 32 2C48.5685 2 62 15.4315 62 32ZM12.8 32C12.8 42.6039 21.3961 51.2 32 51.2C42.6039 51.2 51.2 42.6039 51.2 32C51.2 21.3961 42.6039 12.8 32 12.8C21.3961 12.8 12.8 21.3961 12.8 32Z" 
            :style="`fill:url(#gradient);`"
          />
          <defs>
            <clipPath id="paint0_angular_13_1033_clip_path">
              <path d="M62 32C62 48.5685 48.5685 62 32 62C15.4315 62 2 48.5685 2 32C2 15.4315 15.4315 2 32 2C48.5685 2 62 15.4315 62 32ZM12.8 32C12.8 42.6039 21.3961 51.2 32 51.2C42.6039 51.2 51.2 42.6039 51.2 32C51.2 21.3961 42.6039 12.8 32 12.8C21.3961 12.8 12.8 21.3961 12.8 32Z"/>
            </clipPath>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" :stop-color="color" />
              <stop offset="100%" :stop-color="colorTransparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 64
    },
    color: {
      type: String,
      default: '#3e8bf9'
    },
    containerWidth: {
      type: Number,
      default: 684
    },
    containerHeight: {
      type: Number,
      default: 529
    }
  },
  computed: {
    colorTransparent() {
      // 创建相同颜色但透明的变体
      return this.color === '#3e8bf9' 
        ? 'rgba(62, 139, 249, 0)' 
        : this.color.replace(')', ', 0)').replace('rgb', 'rgba');
    }
  }
};
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-overlay {
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  position: relative;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 