import AudioPlayer from './components/player2.vue'
import AudioRecorder from './components/recorder.vue'

export default {
  install: function (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.component('audio-player', AudioPlayer)
    Vue.component('audio-recorder', AudioRecorder)
  }
}
