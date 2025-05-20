<template>
  <Header />
  <main>
    <NuxtPage />
  </main>
</template>

<style lang="scss">
#__nuxt {
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.9);
}

body {
  display: flex;
  height: 100%;
  background-color: rgba(43, 39, 39, 0.9);
}
</style>