<template>
  <div>
    <h1>Estatistícas de empresas - AJUSTAR</h1>
    <!-- <div class="text-left">
    <h6>
      <fa class="fa" icon="file-alt"></fa> Dados Originais: <a target="_blank" href="https://receita.economia.gov.br/orientacao/tributaria/cadastros/cadastro-nacional-de-pessoas-juridicas-cnpj/dados-publicos-cnpj">Receita Federal</a>
    </h6>
    <h6>
      <fa class="fa" icon="file-code"></fa> Código utilizado no tratamento dos dados: <a target="_blank" href="https://github.com/GovernoAberto/dataset-transparencia-repasses">Github</a>
    </h6>
    </div> -->
    <DatasetTable :dataset-name="$route.params.name" />
  </div>
</template>

<script>
import DatasetTable from '@/components/tables/DatasetTable';

export default {
  data() {
    return {
      
    }
  },
  components: {
    DatasetTable
  }
}
</script>
