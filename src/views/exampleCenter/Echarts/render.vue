<script>
export default {
  props: {
    tag: String
  },
  data () {
    return {
      fruit: ['apple', 'orange', 'pear']
    }
  },
  render (h) {
    // eslint-disable-next-line no-unused-vars
    const res = h(this.tag, {}, this.fruit.map(name => h('h5', {}, `${name}`)))
    const renderItem = (tag, name) => {
      return h(tag, {}, name)
    }
    return (
      <div>
        <div>{ res }</div>
        <div>{ renderItem(this.tag, 'banana') }</div>
      </div>
    )
  }
}
</script>
