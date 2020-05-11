<template>
 <div>
      <input type="text" placeholder="Taper pour rechercher..." v-model="rechercher">
      <p>Cliquez sur un Mob pour afficher ses informations.</p>
      <table>
        <thead>
          <tr>
            <th colspan="1" @click="trierPar('id')">ID</th>
            <th colspan="1" @click="trierPar('nom')">Nom</th>
            <th colspan="1" @click="trierPar('sante')">Santé</th>
            <th colspan="1" @click="trierPar('agressivite')">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mob in mobsJsonFiltered" :key="mob.id">
            <td>{{ mob.id }}</td>
            <router-link :to="{ name: 'Mob', params: { mob_name: mob.slug } }"><td>{{ mob.nom }}</td></router-link>
            <td>{{ mob.sante }}</td>
            <td>{{ mob.agressivite }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import mobs from '../json/mobs.json'

export default {
    name: 'List',
    data () {
        return {
            mobsJson: mobs,
            order: true,
            rechercher: '',
        }
    },
    methods: {
    trierPar(prop) {
      if (this.order == true) {
        this.order = false
        this.mobsJson.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
      } else {
        this.order = true
        this.mobsJson.sort((a, b) => a[prop] < b[prop] ? 1 : -1)
      }
    }
  },
    computed: {
        mobsJsonFiltered: function () {
            return this.mobsJson.filter((mob) => {
            return mob.nom.toLowerCase().match(this.rechercher.toLowerCase())
            })
        }
    }
}
</script>

<style lang="scss" scoped>
p {
  font-size: .875em;
}
table {
  text-align: left;
  margin: 30px 0 0 0;
  font-size: .75em;
  width: 100%;
  border-spacing: 0;
  td, th, tr {
    cursor: pointer;
    padding: 10px;
    transition: background-color .3s;
  }
  tr:hover {
    background-color: #c3ae8686;
  }
  tr:nth-child(even) {
    background-color: #EDEDED;
    &:hover {
      background-color: #c3ae8686;
    }
  }
  thead {
    tr {
      th {
        font-weight: 600;
      }
    }
  }
}

@media only screen and (min-width: 800px) {
div {
  width: 60%;
  margin: 30px auto 0 auto;
}

}

</style>