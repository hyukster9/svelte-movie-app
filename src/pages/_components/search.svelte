<script>
    import _upperFist from "lodash/upperFirst";
    import {searchMovies} from "/src/store/movie";

    const types = ["movie", "series", "episode"];
    const years = [];
    for (let y = new Date().getFullYear(); y >= 1985; y -= 1) {
        years.push(y);
    }
    const numbers = [10, 20, 30];
    let title = "";
    let type = "movie";
    let year = "";
    let number = 10;
    function apply() {
        searchMovies({
            title: title,
            type: type,
            year: year,
            number: number,
        });
    }
</script>

<div class="search">
    <div class="text-field">
        <input
                type="text"
                bind:value={title}
                placeholder="Searh for Movie, Series"
                on:keydown={(event) => {
        event.key === "Enter" && apply();
      }}
        />
    </div>
    <div class="select">
        <select bind:value={type}>
            {#each types as typeItem (typeItem)}
                <option value={typeItem}>{_upperFist(typeItem)}</option>
            {/each}
        </select>
    </div>

    <div class="select">
        <select bind:value={year}>
            <option value="">All years</option>
            {#each years as yearItem (yearItem)}
                <option value={yearItem}>{yearItem}</option>
            {/each}
        </select>
    </div>

    <div class="select">
        <select bind:value={number}>
            {#each numbers as numberItem (numberItem)}
                <option value={numberItem}>{numberItem}</option>
            {/each}
        </select>
    </div>

    <button class="btn" on:click={apply}>Apply</button>
</div>

<style lang="scss">
  .search {
    display: grid;
    grid-template-columns: 1fr repeat(4, 120px);
    gap: 10px;
    .text-field {
      display: inline-block;
      height: 50px;
      input {
        width: 100%;
        height: 100%;
        background-color: $color--area;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-size: 14px;
        border-radius: 4px;
        color: $color--white-60;
        &::placeholder {
          color: $color--white-30;
        }
      }
    }
    .select {
      height: 50px;
      position: relative;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 5px solid #555;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        position: absolute;
        top: 50%;
        right: 15px;
        margin-top: -1px;
      }
      select {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 14px;
        color: $color--white-60;
        background-color: $color--area;
        border-radius: 4px;
        cursor: pointer;
        appearance: none;
        padding: 0 32px 0 20px;
        box-sizing: border-box;
      }
    }
    .btn {
      height: 50px;
      padding: 0 20px;
      outline: none;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      color: $color--black;
      background-color: $color--primary;
      &:hover {
        background-color: darken($color--primary, 10%);
        transition: 0.4s;
      }
    }
  }
</style>
