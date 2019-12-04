<template>
  <div>
    <b-navbar type="dark" variant="primary">
      <b-navbar-brand tag="h1" class="mb-0">KE</b-navbar-brand>
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/certifications">Certifications</router-link>
        <router-link class="nav-link" to="/qustions">Questions</router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  components: {},
};
</script>

<style lang="scss"></style>
