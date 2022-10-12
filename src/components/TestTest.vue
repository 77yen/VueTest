<template>
  <slot name="result" :qq="test"></slot>
</template>

<script>
export default {
  data () {
    return {
      test: 'Steve'
    }
  }
}
</script>
