<template>
    <div class="mob-specifications">
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Santé</strong><br>
              <span>{{ mobSelection.sante }}</span>
            </td>
            <td>
              <strong>Dégat</strong><br>
              <span v-for="(degat, index) in mobSelection.degat" :key="index">{{ degat }} </span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Marche</strong><br>
              <span>{{ mobSelection.vitesseMarche }}</span>
            </td>
            <td>
              <strong>Course</strong><br>
              <span>{{ mobSelection.vitesseCourse }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Portée</strong><br>
              <span>{{ mobSelection.portee }}</span>
            </td>
            <td>
              <strong>Aura de <span class="madness">folie</span></strong><br>
              <span v-if="mobSelection.auraFolie < 0">{{ mobSelection.auraFolie }}<span> / minute</span></span>
              <span v-else>Aucune</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
    name: 'MobSpecifications',
    // On reçoit les props de la mère 'Mob.vue'
    props: ['mobSelection'],
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss">
.mob-specifications {
  margin-bottom: 40px;
  .madness {
    color: #FF8C67;
  }
  table {
    width: 100%;
    border-spacing: 0;
    td {
      font-size: .875em;
      width: 50%;
      border-bottom: 1px solid #D8D8D8;
      padding: 10px 0;
    }
    tbody {
      tr:last-of-type {
        td {
          border: none;
        }
      }
    }
  }
}
@media only screen and (min-width: 800px) {
.mob-specifications {
  width: 50%;
}
}
</style>