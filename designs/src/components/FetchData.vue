<script>
import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      res: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url).then((res) => {
      this.res = res.data;
      this.loading = false;
    });
  },
  render() {
    return this.$scopedSlots.default({
      res: this.res,
      loading: this.loading,
    });
  }
}
</script>

<style>

</style>
