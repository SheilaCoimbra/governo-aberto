<template>
  <div style="max-width: 800px; margin:auto;">
    <h1 class="projects-title">
      A construção desse trabalho envolveu pesquisas e dados de diversas plataformas existentes, além de entrevistas com pessoas e instituições.
    </h1>
    <h6 class="text-right">
      "Se eu vi mais longe, foi por estar sobre ombros de gigantes" <br>
      <small>Isaac Newton</small>
    </h6>
    <div class="text-left">
      <card-reference>
        <template v-slot:img>
          <div class="mt-3">
            <a href="https://dados.gov.br/" target="_blank">
              <img style="width: 120px;" src="../assets/projects/dadosgovbr.png" class="card-img" alt="Portal Brasileiro de Dados Abertos">
            </a>
          </div>
        </template>
        <template v-slot:text>
          O Portal Brasileiro de Dados Abertos é a ferramenta do governo federal para disponibilização de dados abertos. Formalmente o portal foi instituído juntamente com a INDA (Infraestrutura Nacional de Dados Abertos), através da Instrução Normativa nº 4, de 12 de abril de 2012. Até o momento da pesquisa o portal contava com 9971 conjuntos de dados cadastrados, vindos de 182 organizações do governo.
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <div class="mt-3">
            <a href="https://brasil.io/" target="_blank">
              <img style="max-width: 250px; background-color:#3f51b5" src="../assets/projects/brasilio.webp" class="card-img text-center py-3" alt="Brasil.IO">
            </a>
          </div>
        </template>
        <template v-slot:text>
          O projeto Brasil.IO é um projeto, criado em 2018, com objetivo de ser referência para quem procura ou quer publicar dados abertos sobre o Brasil de forma organizada e usando padrões abertos. O projeto foi idealizado e está sendo desenvolvido por Álvaro Justen, com a colaboração de outros desenvolvedores, sendo que atualmente possui mais de 30 contribuidores no Github oficial do projeto.
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <a href="https://www.ok.org.br/" target="_blank">
            <img style="width: 200px;" src="../assets/projects/openknowledgebrasil.png" class="card-img" alt="Open Knowledge Brasil">
          </a>
        </template>
        <template v-slot:text>
          É uma organização sem fins lucrativos que promove iniciativas e projetos relacionados com conhecimento livre. Teve sua fundação em maio de 2004, em Cambridge (OKFN, 2004). A OKFN possui braços no mundo todo, denominados capítulos, sendo que atualmente conta com 10 capítulos em diferentes países, entre eles o Brasil. A OKFN constrói e financia diversos projetos relacionados com transparência e dados abertos no mundo inteiro. Dentre as maiores contribuições da OKFN estão o CKAN e a Open Definition, citados anteriormente.
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <a href="https://institutodegovernoaberto.com.br/" target="_blank">
            <img style="width: 200px;" src="../assets/projects/institutogovernoaberto.png" class="card-img" alt="Instituto Governo Aberto">
          </a>
        </template>
        <template v-slot:text>
          O Instituto Governo Aberto (IGA) é uma organização não governamental que atua com os temas de transparência, participação, inovação e prestação de contas. Dentre as iniciativas do instituto destacam-se o apoio na estruturação e implementação de políticas de transparência, participação e integridade.  O IGA é bastante ativo na prestação de consultoria e treinamentos aos orgãos do governo e participa de oficinas, entrevistas e webconferências na sociedade em geral.
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <div class="mt-3">
            <a href="http://www.portaltransparencia.gov.br/" target="_blank">
              <img style="width: 200px;" src="../assets/projects/portaltransaparencia.png" class="card-img" alt="Portal da Transparência">
            </a>
          </div>
        </template>
        <template v-slot:text>
          Foi lançado pelo Ministério da Transparência e Controladoria-Geral da União (CGU), em 2004. O portal é um site de acesso livre, que permite o cidadão pode encontrar informações sobre como o dinheiro público é utilizado, além de se informar sobre assuntos relacionados ao governo federal. Desde a criação, a ferramenta ganhou novos recursos, aumentou a oferta de dados ano após ano e é uma das maiores ferramentas de transparência, sendo um importante instrumento de controle social, com reconhecimento dentro e fora do país.
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <a href="http://raioxdosmunicipios.insper.edu.br/" target="_blank">
            <img style="width: 200px;" src="../assets/projects/insper.webp" class="card-img" alt="Raio-X dos Municípios">
          </a>
        </template>
        <template v-slot:text>
          O Raio-X dos Municípios é um projeto desenvolvido pelo Inper que disponibiliza dados sobre os municípios a partir de bases públicas
        </template>
      </card-reference>

      <card-reference>
        <template v-slot:img>
          <div class="mt-3">
            <a href="https://cidades.ibge.gov.br/" target="_blank">
              <img style="width: 200px;" src="../assets/projects/ibge.png" class="card-img" alt="Cidades@ IBGE">
            </a>
          </div>
        </template>
        <template v-slot:text>
          O Cidades@ é o sistema agregador de informações do IBGE sobre os municípios e estados do Brasil. Nele você pode encontrar as pesquisas do IBGE, infográficos e mapas. Além disso pode comparar os indicadores entre municípios e estados.
        </template>
      </card-reference>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .projects-title {
    font-size: 1.75rem;
  }
</style>