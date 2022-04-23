<script>
    import { url } from "@roxi/routify";
</script>

<a href={$url()}><span>OMDbAPI</span>.COM</a>

<style lang="scss">
  a {
    display: block;
    font-family: "Oswald", sans-serif;
    font-size: 30px;
    color: $color--white-50;
    span {
      color: $color--primary;
    }
  }
</style>
