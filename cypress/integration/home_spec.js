/// <reference types="cypress" />

const states = [
  { name: "AC", count: 22 , capital: "RIO BRANCO" },
  { name: "AL", count: 102 , capital: "MACEIÓ" },
  { name: "AP", count: 16 , capital: "MACAPÁ" },
  { name: "AM", count: 62 , capital: "MANAUS" },
  { name: "BA", count: 417 , capital: "SALVADOR" },
  { name: "CE", count: 184 , capital: "FORTALEZA" },
  { name: "DF", count: 1 , capital: "BRASÍLIA" },
  { name: "ES", count: 78 , capital: "VITÓRIA" },
  { name: "GO", count: 246 , capital: "GOIÂNIA" },
  { name: "MA", count: 217 , capital: "SÃO LUÍS" },
  { name: "MT", count: 141 , capital: "CUIABÁ" },
  { name: "MS", count: 79 , capital: "CAMPO GRANDE" },
  { name: "MG", count: 853 , capital: "BELO HORIZONTE" },
  { name: "PA", count: 144 , capital: "BELÉM" },
  { name: "PB", count: 223 , capital: "JOÃO PESSOA" },
  { name: "PR", count: 399 , capital: "CURITIBA" },
  { name: "PE", count: 185 , capital: "RECIFE" },
  { name: "PI", count: 224 , capital: "TERESINA" },
  { name: "RJ", count: 92 , capital: "RIO DE JANEIRO" },
  { name: "RN", count: 167 , capital: "NATAL" },
  { name: "RS", count: 497 , capital: "PORTO ALEGRE" },
  { name: "RO", count: 52 , capital: "PORTO VELHO" },
  { name: "RR", count: 15 , capital: "BOA VISTA" },
  { name: "SC", count: 295 , capital: "FLORIANÓPOLIS" },
  { name: "SP", count: 645 , capital: "SÃO PAULO" },
  { name: "SE", count: 75 , capital: "ARACAJU" },
  { name: "TO", count: 139 , capital: "PALMAS" }
];

context('Actions', () => {
  beforeEach(() => {
    cy.intercept({
      method: "GET",
      url: "https://api.governoaberto.org/**",
    }).as("dataGetFirst");

    cy.intercept('/states/').as('dataGetFirst')
    cy.intercept('/state/*').as('dataGetFirst')
    cy.intercept('/city-info').as('dataGetFirst')
  });

  it('select all states and load cities', () => {
    cy.visit('https://governoaberto.org');

    states.forEach(state => {
      cy.get('.navbar select:first').select(state.name);
      cy.get('.navbar .ui.fluid.search .item').should('have.length', state.count);
      cy.get('.navbar .ui.fluid.search .item').contains(state.capital);
    });
  });

  it('select all states and city capitals', () => {
    cy.visit('https://governoaberto.org');
    
    states.forEach(state => {
      cy.get('.navbar select:first').select(state.name);
      cy.get('.navbar .ui.fluid.search.selection.dropdown').click().type(state.capital);
      cy.get('.navbar .item.selected').click();
      cy.get('.navbar .text-white.ml-2').click();

      cy.waitFor("@dataGetFirst");
      cy.get(".number-visualization").contains("Gentílico: ");
      cy.get(".number-visualization").contains("População (2020): ");
      cy.get(".number-visualization").contains("Prefeito(a) atual: ");
      cy.get(".number-visualization").contains("Área Territorial (2020): ");
    });
    
  });

  it('load numbers from porto alegre', () => {
    cy.visit('https://governoaberto.org/cidades/rs/porto-alegre');
    cy.waitFor("@dataGetFirst");

    cy.get(".number-visualization").contains("Gentílico: porto-alegrense");
    cy.get(".number-visualization").contains("População (2020): 1.488.252");
    cy.get(".number-visualization").contains("Prefeito(a) atual: SEBASTIÃO DE ARAÚJO MELO");
    cy.get(".number-visualization").contains("Área Territorial (2020): 495,390 km²");
  });

  it('load visualization from cities', () => {
    const cities = [
      { url: 'rs/novo-hamburgo/' },
      { url: 'rs/porto-alegre/' },
      { url: 'rs/canoas/' },
      { url: 'rs/sao-leopoldo/' },
      { url: 'rs/taquari/' },
      { url: 'sp/sao-paulo/' },
      { url: 'rj/rio-de-janeiro/' },
    ]

    const visualizations = [
      { alias: "empresas-por-porte", title: "Total de empresas ativas por porte" },
      { alias: "cnpjs-criados-desde-2010", title: "CNPJs criados por ano desde 2010" },
      { alias: "casamentos-desde-2019", title: "Casamentos desde 2019" },
      { alias: "veiculos-tipo-2021", title: "Veículos por tipo em Janeiro/2021" },
      { alias: "cnpjs-por-situacao", title: "CNPJs por situação cadastral" },
      { alias: "empresas-por-mei", title: "Total de empresas por opção pelo MEI" },
      { alias: "populacao-por-ano", title: "Evolução da população" },
      { alias: "nascimentos-desde-2019", title: "Nascimentos desde 2019" },
      { alias: "obitos-desde-2019", title: "Óbitos desde 2019" },
      { alias: "evolucao-frota-veiculos", title: "Evolução da frota de veículos" },
    ]

    cities.map(city => {
      visualizations.map(visualization => {
        cy.visit('https://governoaberto.org/cidades/' + city.url + 'visao/' + visualization.alias);
        cy.waitFor("@dataGetFirst");
        cy.get(".visualization_title").contains(visualization.title);
        // cy.wait(500);
      });
    });
  });
})
  