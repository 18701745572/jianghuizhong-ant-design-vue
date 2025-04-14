<template>
  <div class="lock-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 8.33333H14.1667V6.66667C14.1667 3.9 11.9333 1.66667 9.16667 1.66667C6.4 1.66667 4.16667 3.9 4.16667 6.66667V8.33333H3.33333C2.41667 8.33333 1.66667 9.08333 1.66667 10V16.6667C1.66667 17.5833 2.41667 18.3333 3.33333 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V10C16.6667 9.08333 15.9167 8.33333 15 8.33333ZM9.16667 14.1667C8.25 14.1667 7.5 13.4167 7.5 12.5C7.5 11.5833 8.25 10.8333 9.16667 10.8333C10.0833 10.8333 10.8333 11.5833 10.8333 12.5C10.8333 13.4167 10.0833 14.1667 9.16667 14.1667ZM12.0833 8.33333H6.25V6.66667C6.25 5.075 7.575 3.75 9.16667 3.75C10.7583 3.75 12.0833 5.075 12.0833 6.66667V8.33333Z" fill="currentColor"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LockIcon'
};
</script>

<style scoped>
.lock-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #28526B;
  transition: color 0.3s ease;
}
</style> 