<style lang="scss">
  .row {
    display: flex;
  }
</style>

<template>
  <div class="row">
    <recorder
      upload-url="some url"
      :compact="true"
      :attempts="3"
      :time="2"
      :start-record="callback"
      :stop-record="callback"
      :start-upload="callback"
      :successful-upload="callback"
      :failed-upload="callback"/>

      <player :src="mp3"></player>
  </div>
</template>

<script>
  import Player from '../src/components/player'
  import Recorder from '../src/components/recorder'

  export default {
    name: 'app',
    components: {
      Player,
      Recorder
    },
    data () {
      return {
        mp3: '/demo/example.mp3'
      }
    },
    methods: {
      callback (msg) {
        console.debug('Event: ', msg)
      }
    }
  }
</script>
