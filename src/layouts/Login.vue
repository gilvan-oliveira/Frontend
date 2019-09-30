<template>
  <q-layout view="hHh Lpr fFf">
    <q-page class="bg-gradient-primary">
      <div class="absolute-center">
        <q-card style="width: 400px">
          <q-card-section class="q-pa-xl">
            <div class="column q-gutter-lg">
              <div class="col">
                <q-input label="Usuário" outlined/>
              </div>
              <div class="col">
                <q-input label="Senha" outlined/>
              </div>
            </div>
          </q-card-section>
          <q-card-actions class="q-pa-none">
              <q-btn label="Entrar" size="md" class="full-width shadow-0" color="primary"/>
          </q-card-actions>
        </q-card>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import {
  QInput,
  QCard,
  QCardActions,
  QCardSection
} from 'quasar'

export default {
  components: {
    QCard,
    QCardActions,
    QInput,
    QCardSection
  },
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
<style lang="scss">
  //@import '~/quasar-variables';

  .bg-gradient-primary{
    background-image: linear-gradient(-45deg, $primary , lighten($primary, 20%), $primary);
  }
</style>
