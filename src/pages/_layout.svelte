<script>
    import FadeDecorator from "./_components/_FadeDecorator.svelte";
    import { url, isActive, goto  } from "@roxi/routify";
    import Logo from "./_components/logo.svelte";
    const links = [
        ["./index", "Search"], //add index if you don't want siblings to be considered children
        ["./movie", "Movie"],
        ["./about", "About"],
    ];
</script>

<div class="example">
    <div class="header">
        <Logo />
        <nav>
            <ul>
                {#each links as [path, name]}
                    <li>
                        <a class:active={$isActive(path)} href={$url(path)}>{name}</a>
                    </li>
                {/each}
            </ul>
        </nav>
        <div class='user' on:click={event =>{
            $goto('/about', {
                name: 'Netlify',
                email: 'hello@netlify.com',
                imageURL: '/assets/netlify.png'
            })
        }}>
            <img src='/assets/svelte.png' alt='User' />
        </div>
    </div>
    <div class="main">
        <slot decorator={FadeDecorator}>
            <!-- optional fallback -->
        </slot>
    </div>
    <div class='footer'>
        <a href="22">Github Repo.</a>
        <a href="11">@{new Date().getFullYear()} KDH-LAB</a>
    </div>
</div>


<style lang='scss'>
  .header {
    display:flex;
    align-items: flex-end;
    padding: 20px 40px;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: rgba(#0e111b, 0.8);

    nav {
      margin-left: 40px;
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
          a {
            font-size: 14px;
            font-weight: 700;
            color: rgba(#fff, 0.5);
            text-decoration: none;
          }
        }
      }
    }
    .user{
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: var(--color--area);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 40px;
      cursor: pointer;
      transition: 0.4s;
      &:hover{
        background-color: lighten(#1C212E, 20%);
      }
      img{
        width: 100%;
      }
    }
  }
  .active {
    font-weight: bold;
    color: var(--color--primary) !important;
  }
  .footer{
    padding: 70px;
    text-align: center;
    a{
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
</style>