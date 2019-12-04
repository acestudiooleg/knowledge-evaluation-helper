<template>
  <div class="container">
    <h3 class="center">Questions</h3>
    <b-row>
      <b-col sm="12">
        <b-list-group>
          <b-list-group-item class="science">
            <i class="material-icons">people</i>
            <span class="science">Engineering Management</span>
          </b-list-group-item>
          <b-list-group-item class="science">
            <i class="material-icons">settings_input_component</i>
            <span class="science">Requirements</span>
          </b-list-group-item>
          <b-list-group-item class="science">
            <i class="material-icons">build</i>
            <span class="science">Desing</span>
          </b-list-group-item>
          <b-list-group-item class="science">
            <i class="material-icons">location_city</i>
            <span class="science">Construction</span>
          </b-list-group-item>
          <b-list-group-item class="science">
            <i class="material-icons">search</i>
            <span class="science">Verification</span>
          </b-list-group-item>
          <b-list-group-item class="science">
            <i class="material-icons">settings</i>
            <span class="science">Configuration Management</span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'questions',
  components: {},
};
</script>

<style lang="scss">
.science {
  display: flex;
  i {
    margin-right: 10px;
  }
}
</style>
