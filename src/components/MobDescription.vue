<template>
    <div class="mob-description">
        <h2 class="loot">Description</h2>
        <p>{{ mobSelection.description }}</p>
        <p class="text-source">Source : dont-starve.fandom.com/fr/ </p>
    </div>
</template>

<script>
export default {
    name: 'MobDescription',
    // On reçoit les props de la mère 'Mob.vue'
    props: ['mobSelection'],
    data () {
        return {
          
        }
    }
}
</script>

<style lang="scss">
.mob-description {
.text-source {
  font-size: .75em;
  color: #D8D8D8;
}
p {
  margin: 20px 0 0 0;
  font-size: .875em;
  color: #404040;
}
}
@media only screen and (min-width: 800px) {
.mob-description {
  width: 50%;
}
}
</style>