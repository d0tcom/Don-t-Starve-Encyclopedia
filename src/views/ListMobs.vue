<template>
  <div class="container">
    <HeaderList />
    <List />
  </div>
</template>

<script>
import HeaderList from '../components/HeaderList'
import List from '../components/List'


export default {
  name: 'ListMobs',
  components: {
    HeaderList,
    List
  }
}
</script>

<style lang="scss">

</style>
