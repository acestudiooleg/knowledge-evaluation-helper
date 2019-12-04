<template>
  <div class="container">
    <b-row>
      <b-col sm="12">
        <table class="table table-stripped">
          <tr>
            <td colspan="2">
              <b-progress variant="success" show-progress animated height="2rem">
                <b-progress-bar :value="progressValue" variant="danger">
                  Your Progress: {{ progressValue }}%
                </b-progress-bar>
              </b-progress>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Your Level:
              </strong>
            </td>
            <td>
              <b-badge class="big-badge" variant="danger">Senior</b-badge>
            </td>
          </tr>
          <tr>
            <td>
              <strong>
                Lessons Done:
              </strong>
            </td>
            <td>12</td>
          </tr>
          <tr>
            <td>
              <strong>
                Lessons Remaining:
              </strong>
            </td>
            <td>12</td>
          </tr>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      progressValue: 2,
      max: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
};
</script>

<style lang="scss">
.big-badge {
  padding: 0.5em 1em;
}
</style>
