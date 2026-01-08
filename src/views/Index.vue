<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">乐高</router-link>
        </div>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <a-layout-footer :style="{ textAlign: 'center' }">
      © crisyhuang
    </a-layout-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<style>
.page-title {
  color: #fff;
}
</style>
