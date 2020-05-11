<template>
    <div v-if="Array.isArray(mobSelection.butin) && mobSelection.butin.length > 0" class="mob-loot">
        <h2 class="loot">Loot</h2>
            <div class="loot-container">
                <div v-for="(butin, index) in mobSelection.butin" :key="index" class="loot-item">
                    <img v-if="butin.image != ''" :src="objectsImagesDir + butin.image">
                    <span>{{ butin.chanceDrop }} <span v-if="!isNaN(butin.chanceDrop)">{{ percent }}</span></span>
                    <span v-if="butin.quantite > 0">(x {{ butin.quantite }})</span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'MobLoot',
    // On reçoit les props de la mère 'Mob.vue'
    props: ['mobSelection', 'objectsImagesDir'],
    data () {
        return {
            percent: '%'
        }
    }
}
</script>

<style lang="scss">
.mob-loot {
  margin: 40px 0 0 0;
  .loot-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    .loot-item {
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        max-width: 64px;
      }
      span {
        display: inline-block;
        font-size: .875em;
        margin-top: 10px;
        span {
          font-size: inherit;
        }
      }
    }
  }
}
@media only screen and (min-width: 800px) {
  .mob-loot {
    .loot-container {
      justify-content: initial;
      .loot-item {
        margin-right: 40px;
      }
    }
  }
}
</style>