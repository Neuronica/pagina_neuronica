
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/quienes-somos-neuronica"
  },
  {
    "renderMode": 2,
    "route": "/domotica-personalizada"
  },
  {
    "renderMode": 2,
    "route": "/linea-servicio-iot"
  },
  {
    "renderMode": 2,
    "route": "/linea-servicio-software"
  },
  {
    "renderMode": 2,
    "route": "/automatizaciones"
  },
  {
    "renderMode": 2,
    "route": "/firmware"
  },
  {
    "renderMode": 2,
    "route": "/recopilacion-datos"
  },
  {
    "renderMode": 2,
    "route": "/linea-servicio-hardware"
  },
  {
    "renderMode": 2,
    "route": "/importacion-componentes"
  },
  {
    "renderMode": 2,
    "route": "/ingenieria-inversa"
  },
  {
    "renderMode": 2,
    "route": "/diseno-producto"
  },
  {
    "renderMode": 2,
    "route": "/PCB"
  },
  {
    "renderMode": 2,
    "route": "/PCBA"
  },
  {
    "renderMode": 2,
    "route": "/linea-servicio-manufactura"
  },
  {
    "renderMode": 2,
    "route": "/cnc"
  },
  {
    "renderMode": 2,
    "route": "/fdm"
  },
  {
    "renderMode": 2,
    "route": "/laser"
  },
  {
    "renderMode": 2,
    "route": "/sla"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14590, hash: '684ff6f4af3a9a76510c06b5b831a3f6ded01ccad204da71c89c5eb8c67f8c64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14960, hash: '24c7a2a775f2ddf223b32b703209d8ce12c454612abd459f99545acbf7dea25e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 71661, hash: 'b39e0b153c7bad46c276540bdf446b9285ae3d52118263848701fbf1d03507ab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'automatizaciones/index.html': {size: 67149, hash: 'ab7bd0e14f625d5fa961ecefa855fe795e9cd57b0a18cfe100875d5c6f176fbb', text: () => import('./assets-chunks/automatizaciones_index_html.mjs').then(m => m.default)},
    'quienes-somos-neuronica/index.html': {size: 68378, hash: '138fc7211cca71c5574302691123507bdd48b880e5e92e708129aaa0bdd8993d', text: () => import('./assets-chunks/quienes-somos-neuronica_index_html.mjs').then(m => m.default)},
    'ingenieria-inversa/index.html': {size: 67066, hash: 'dccdc11aac5ced9a4d8257295c207fecfed1e652445a24a053f0855a253d9d4a', text: () => import('./assets-chunks/ingenieria-inversa_index_html.mjs').then(m => m.default)},
    'fdm/index.html': {size: 67367, hash: '73b300272ab718681a231fb7f84cfa406a39a0baad05ca3c3a8f72f7e9877ad2', text: () => import('./assets-chunks/fdm_index_html.mjs').then(m => m.default)},
    'PCB/index.html': {size: 67380, hash: '6c75e36e949a85566a6f93136945d6c64f7795e9ed3c4f85530826a7e86ea3fd', text: () => import('./assets-chunks/PCB_index_html.mjs').then(m => m.default)},
    'firmware/index.html': {size: 67083, hash: '8d8a88707e33dd01444f9f1ac43d85d37285dd3e023e6878123af62ebc4e17d6', text: () => import('./assets-chunks/firmware_index_html.mjs').then(m => m.default)},
    'linea-servicio-manufactura/index.html': {size: 71110, hash: 'a1e73b995e614391145851d4a08c07e4184289f02c025bde737b603249d3321b', text: () => import('./assets-chunks/linea-servicio-manufactura_index_html.mjs').then(m => m.default)},
    'importacion-componentes/index.html': {size: 66965, hash: '4d077e5d3402199e8968ce195e499161b7718ea7625240560e79f9d4820db525', text: () => import('./assets-chunks/importacion-componentes_index_html.mjs').then(m => m.default)},
    'sla/index.html': {size: 67106, hash: 'a9b049e7da42ad807289ad09bb26d75ed8417bab23da41ee47c40947b1cf853c', text: () => import('./assets-chunks/sla_index_html.mjs').then(m => m.default)},
    'recopilacion-datos/index.html': {size: 67204, hash: 'c5d8ca2993e3c6853b2d77cbcb26c0275425df0c4006997af6f75576f2425195', text: () => import('./assets-chunks/recopilacion-datos_index_html.mjs').then(m => m.default)},
    'linea-servicio-iot/index.html': {size: 65246, hash: '573a8752ac45c6c1f9f8bf4c6f7666bb0b0db854c2232bfc44ea8315f08f801f', text: () => import('./assets-chunks/linea-servicio-iot_index_html.mjs').then(m => m.default)},
    'laser/index.html': {size: 67027, hash: '7584b12bb020b9ac78ae6fdd344cd6887246c2185b3a9356f75078c146784392', text: () => import('./assets-chunks/laser_index_html.mjs').then(m => m.default)},
    'diseno-producto/index.html': {size: 77929, hash: 'd214e4485c77c45639ec1e0aff550a39b9ae161ed243f06f0299d556dad738c6', text: () => import('./assets-chunks/diseno-producto_index_html.mjs').then(m => m.default)},
    'linea-servicio-software/index.html': {size: 70485, hash: 'e9457fc593891fa8f28abc97999a409cdf40ee6be171d4700698df30fb1e3dcf', text: () => import('./assets-chunks/linea-servicio-software_index_html.mjs').then(m => m.default)},
    'PCBA/index.html': {size: 67389, hash: '288e875379dc4060af5216de43d9829f9e11093578bf1a87a417bb612983dd45', text: () => import('./assets-chunks/PCBA_index_html.mjs').then(m => m.default)},
    'domotica-personalizada/index.html': {size: 77247, hash: '86e84003a0e7b80088d535219393fa9c5ad1fa2be2b06204305b8a34145a9c0d', text: () => import('./assets-chunks/domotica-personalizada_index_html.mjs').then(m => m.default)},
    'linea-servicio-hardware/index.html': {size: 72072, hash: '4fb921eacdffdb7c2f2b96bd9240cd43b125eaab1137584ab7af086ff187f106', text: () => import('./assets-chunks/linea-servicio-hardware_index_html.mjs').then(m => m.default)},
    'cnc/index.html': {size: 67259, hash: '9ddc9e2daa334b196f30a774c79c94f91a6a046d5b6201adf4753fab29dd7955', text: () => import('./assets-chunks/cnc_index_html.mjs').then(m => m.default)},
    'styles-PO5AHQPZ.css': {size: 29865, hash: '1Cn4ktPOdAw', text: () => import('./assets-chunks/styles-PO5AHQPZ_css.mjs').then(m => m.default)}
  },
};
