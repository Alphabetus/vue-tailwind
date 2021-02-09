<template>
  <nav id="navigation" class="bg-gray-300 h-12">
    <div class="flex justify-between h-full px-2">
      <!-- brand -->
      <div class="self-center h-auto"><router-link to="/">Vue App</router-link></div>
      <!-- links -->
      <div class="self-center text-sm flex justify-between links">

        <div class="link">
          <router-link :to="{ name: 'Homepage'}" class="nav-link">Home</router-link>
        </div>

        <div class="link">
          <router-link :to="{name: 'CatAge'}" class="nav-link">Cat Age</router-link>
        </div>

        <div class="link">
          <router-link :to="{name: 'Payload'}" class="nav-link">Todo List</router-link>
        </div>

        <div class="link">
          <router-link :to="{name: 'chat'}" class="nav-link">Chat</router-link>
        </div>
      </div>
      <!-- sign -->
      <div class="self-center text-xs"><a href="//alphawebmaker.com/" target="_blank">@alphabetus</a></div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
#navigation {
  .links {
    .link {
      padding: 0 .5em;
    }

    .link:not(:last-of-type) {
      border-right: 1px solid rgba(0,0,0, 0.1);
    }
  }
}

.router-link-active.nav-link {
  font-weight: bold;
}
</style>