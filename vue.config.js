let webpack = require('webpack');

module.exports = {
  pwa: {
    themeColor: '#007bff'
  },
  pluginOptions: {
    sitemap: {
      urls: [
        'https://governoaberto.org/',
        'https://governoaberto.org/projetos',
        'https://governoaberto.org/cidades/ac/rio-branco',
        'https://governoaberto.org/cidades/al/maceio',
        'https://governoaberto.org/cidades/ap/macapa',
        'https://governoaberto.org/cidades/am/manaus',
        'https://governoaberto.org/cidades/ba/salvador',
        'https://governoaberto.org/cidades/ce/fortaleza',
        'https://governoaberto.org/cidades/df/brasilia',
        'https://governoaberto.org/cidades/es/vitória',
        'https://governoaberto.org/cidades/go/goiania',
        'https://governoaberto.org/cidades/ma/sao-luis',
        'https://governoaberto.org/cidades/mt/cuiaba',
        'https://governoaberto.org/cidades/ms/campo-grande',
        'https://governoaberto.org/cidades/mg/belo-horizonte',
        'https://governoaberto.org/cidades/pa/belem',
        'https://governoaberto.org/cidades/pb/joao-pessoa',
        'https://governoaberto.org/cidades/pr/curitiba',
        'https://governoaberto.org/cidades/pe/recife',
        'https://governoaberto.org/cidades/pi/teresina',
        'https://governoaberto.org/cidades/rj/rio-de-janeiro',
        'https://governoaberto.org/cidades/rn/natal',
        'https://governoaberto.org/cidades/rs/porto-alegre',
        'https://governoaberto.org/cidades/ro/porto-velho',
        'https://governoaberto.org/cidades/rr/boa-vista',
        'https://governoaberto.org/cidades/sc/florianopolis',
        'https://governoaberto.org/cidades/sp/sao-paulo',
        'https://governoaberto.org/cidades/se/aracaju',
        'https://governoaberto.org/cidades/to/palmas'
      ]
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/projetos'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({ resourceRegExp: /moment$/ })
    ]
  }
}
