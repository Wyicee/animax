<template>
  <NuxtLoadingIndicator />
  <Header />
  <NuxtLayout>
    <main>
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style lang="scss">
@use '/assets/styles/normalize';

#__nuxt {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
  border-radius: 7px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px 7px rgba(255, 255, 255, 0.4);
}

body {
  display: flex;
  font-family: 'Share Tech', sans-serif;
  background-color: rgba(4, 103, 4, 0.7);
}
</style>