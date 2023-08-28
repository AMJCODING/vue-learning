<template>
  <div class="PageContent">
    <slot name="PageHeader"></slot>
    <slot name="PageContent"> </slot>
  </div>
</template>
<style scoped>
.PageContent{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>