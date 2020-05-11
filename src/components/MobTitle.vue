<template>
    <div class="mob-title">
      <div>
        <span class="mob-id">#{{ mobSelection.id }}</span>
        <h1>{{ mobSelection.nom }}</h1>
        <span class="mob-tag" v-bind:class="mobTag">{{ mobTag }}</span>
      </div>
      <img :src="mobsImagesDir + mobSelection.image">
    </div>
</template>

<script>
export default {
    name: 'MobTitle',
    // On reçoit les props de la mère 'Mob.vue'
    props: ['mobSelection', 'mobsImagesDir', 'mobTag'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss">
.mob-title {
  display: flex;
  margin-bottom: 30px;
  img {
    align-self: center;
    max-width: 110px;
    margin: 0px 35px;
  }
  .mob-id {
    color: #D8D8D8;
    font-size: 1.125em;
    font-weight: 400;
  }
  h1 {
    color: #404040;
    font-size: 1.5em;
    font-weight: 400;
  }
  .mob-tag {
    color: #FFFFFF;
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    padding: 3px 8px;
    margin-top: 10px;
    display: inline-block;
    &.familier {
      background-color: #86E2FF;
    }
    &.passif {
      background-color: #97FF86;
    }
    &.neutre {
      background-color: #FFCB67;
    }
    &.hostile {
      background-color: #FF6767;
    }
    &.boss {
      background-color: #FF67B0;
    }
  }
}
</style>