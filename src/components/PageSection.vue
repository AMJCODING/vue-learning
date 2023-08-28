<template>
  <div class="section">
    <slot name="controls"> </slot>
    <br />
    <br />
    <slot name="content"> </slot>
  </div>
</template>

<style>
.section {
  text-align: center;
}
.controls {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  margin: auto;
}
</style>
