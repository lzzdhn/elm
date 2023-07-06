<script setup>
const props=defineProps(['isShow'])
const emits=defineEmits(['hide'])
</script>
<template>
    <!-- Teleport路由将组件渲染到网页指定位置 -->
    <Teleport to="#hello">
        <div :="$attrs" @click.self="$emit('hide')" class="mask" v-show="props.isShow">
        <slot></slot>
    </div>
    </Teleport>
  
</template>
<style scoped>
.mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0,0.5);
    z-index: 9999;
}
</style>