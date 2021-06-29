<template>
<v-app id="app">

    <!-- body content -->
    <div class="app-body">
      <router-view  />
    </div>

  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {

}
</script>

<style lang="scss">

</style>
