<script>
    import {url} from '@roxi/routify'
</script>

<div class="error-page">
    <div class="status">404</div>
    <div class="status-text">Page not found.
        <!-- link to the parent folder of _fallback.svelte -->
        <a href={$url('../')}>Go back</a>
    </div>
</div>


<style lang="scss">
    .error-page {
        font-family: "Oswald", sans-serif;
        text-align: center;
        padding: 80px 20px;
      line-height: 1.5;
    .status {
        font-size: 160px;
        color: $color--primary;
    }
    .status-text {
        font-size: 50px;
        text-align: center;
      a{
        color: $color--primary;

      }
    }
    }

</style>
