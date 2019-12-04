<template>
  <div class="container">
    <b-row>
      <b-col sm="12">
        <h3>Select Your level:</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12">
        <b-button variant="success" block>Junior</b-button>
        <b-button variant="warning" block>Intermediate</b-button>
        <b-button variant="danger" block>Senior</b-button>
        <b-button variant="primary" block>Technical Leader</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'level',
  components: {},
};
</script>

<style lang="scss"></style>
