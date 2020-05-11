<template>
  <div class="container">

    <MobTitle :mobSelection="mobSelection" :mobsImagesDir="mobsImagesDir" :mobTag="mobTag" />
    <div class="mob-info">
      <MobSpecifications :mobSelection="mobSelection" />
      <MobDescription :mobSelection="mobSelection" />
    </div>
    
    <MobLoot :mobSelection="mobSelection" :mobsImagesDir="mobsImagesDir" :objectsImagesDir="objectsImagesDir"/>

    <div class="buttons">

      <a :href="mobSelection.wikiUrl" target="_blank">
        <button class="btn gold">
          <span><strong>Wiki </strong>Don't Starve</span>
          <svg class="icon"><use xlink:href="../../public/assets/icons/sprite.svg#external-link"></use></svg>
        </button>
      </a>

      <router-link :to="{ name: 'ListMobs' }">
        <button class="btn gray">
          Liste des mobs
          <svg class="icon"><use xlink:href="../../public/assets/icons/sprite.svg#back"></use></svg>
        </button>
      </router-link>

    </div>

  </div>
</template>

<script>
import mobs from '../json/mobs.json'
import MobTitle from '../components/MobTitle'
import MobSpecifications from '../components/MobSpecifications'
import MobDescription from '../components/MobDescription'
import MobLoot from '../components/MobLoot'

export default {
  name: 'Mob',
  components: {
    MobTitle,
    MobSpecifications,
    MobDescription,
    MobLoot
  },
  data () {
    return {
      mobsJson: mobs,
      mobName: this.$route.params.mob_name,
      mobSelection : [],
      mobsImagesDir: '../assets/img/mobs/',
      objectsImagesDir: '../assets/img/objects/',
      mobTag: ''
    }
  },
  mounted () {
    // On filtre le JSON mobs pour afficher le mob qui correspond au slug
    this.getDataMob()
    // On affiche le tag d'agressivité du mob avec la bonne classe
    this.changeMobTag()
    // On scroll la page tout en haut
    this.scrollToTop()
  },
  methods: {
    getDataMob () {
      this.mobsJson.filter((mob) => {
        if (mob.slug == this.mobName) {
          this.mobSelection = mob
          return mob
        }
      })
    },
    changeMobTag () {
      if (this.mobSelection.agressivite == 0) {
        return this.mobTag = 'familier'
      } else if (this.mobSelection.agressivite == 1) {
        return this.mobTag = 'passif'
      } else if (this.mobSelection.agressivite == 2)  {
        return this.mobTag = 'neutre'
      } else if (this.mobSelection.agressivite == 3) {
        return this.mobTag = 'hostile'
      } else if (this.mobSelection.agressivite == 4) {
        return this.mobTag = 'boss'
      }
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss">

.buttons {
  .icon {
    width: 1.125em;
    height: 1.125em;
    color: white;
    margin-left: 20px;
  }
  .btn {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
    color: #FFFFFF;
    border: none;
    padding: 20px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.gold {
      background-color: #D4C5A8;
      margin-top: 40px;
      transition: background-color .3s;
      &:hover {
      background-color: darken(#D4C5A8, 10);
      }
    }
    &.gray {
      margin-top: 10px;
      background-color: #D8D8D8;
      transition: background-color .3s;
      &:hover {
      background-color: darken(#D8D8D8, 10);
      }
    }
  }
}

@media only screen and (min-width: 800px) {

.container {
    width: 80%;
    margin: 0 auto;
    padding: 80px;
    .buttons {
      display: flex;
      a {
        width: 100%;
        margin: 40px 0 0 0;
        &:nth-of-type(1) {
          margin-right: 20px;
        }
      }
      .btn {
        margin: 0;
      }
    }
}
.mob-info {
  display: flex;
  .mob-description {
    margin-left: 20px;
  }
}
}

</style>