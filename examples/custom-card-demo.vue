<template>
  <div class="custom-card-demo">
    <h1>自定义卡片组件示例</h1>
    
    <div class="demo-group">
      <h2>基本用法</h2>
      <a-custom-card title="基本卡片" icon="file">
        <p>这是一个基本的自定义卡片示例。</p>
        <p>您可以在卡片中放置任何内容。</p>
      </a-custom-card>
    </div>
    
    <div class="demo-group">
      <h2>不带边框</h2>
      <a-custom-card title="无边框卡片" :bordered="false">
        <p>这是一个没有边框的卡片。</p>
      </a-custom-card>
    </div>
    
    <div class="demo-group">
      <h2>带悬浮效果</h2>
      <a-custom-card title="悬浮效果卡片" :hoverable="true" icon="star">
        <p>将鼠标悬浮在此卡片上会显示阴影效果。</p>
      </a-custom-card>
    </div>
    
    <div class="demo-group">
      <h2>加载状态</h2>
      <a-custom-card title="加载状态" :loading="true">
        <p>这个卡片处于加载状态。</p>
      </a-custom-card>
    </div>
    
    <div class="demo-group">
      <h2>带页脚</h2>
      <a-custom-card title="带页脚的卡片" icon="info-circle">
        <p>这是卡片的内容部分。</p>
        <template slot="footer">
          <a-button type="primary">确定</a-button>
          <a-button style="margin-left: 8px">取消</a-button>
        </template>
      </a-custom-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCardDemo',
};
</script>

<style scoped>
.custom-card-demo {
  padding: 24px;
}

.demo-group {
  margin-bottom: 32px;
}

.demo-group h2 {
  margin-bottom: 16px;
}
</style> 