<template>
  <div class="user-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10C12.0711 10 13.75 8.32107 13.75 6.25C13.75 4.17893 12.0711 2.5 10 2.5C7.92893 2.5 6.25 4.17893 6.25 6.25C6.25 8.32107 7.92893 10 10 10Z" fill="currentColor"/>
      <path d="M10 11.25C6.47715 11.25 3.75 13.9772 3.75 17.5H16.25C16.25 13.9772 13.5228 11.25 10 11.25Z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'UserIcon'
};
</script>

<style scoped>
.user-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #28526B;
  transition: color 0.3s ease;
}
</style> 