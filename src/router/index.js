import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import Home from '@/pages/Home.vue'
import Nosotros from '@/pages/Nosotros.vue' 
import Servicios from '@/pages/Servicios.vue' 
import Contacto from '@/pages/Contacto.vue' 
import FinalizarCompra from '@/pages/comprar/FinalizarCompra.vue'
import ListadoModelos from '@/pages/modelos/listado.vue'
import ModeloDetalle from '@/pages/modelos/ModeloDetalle.vue'



const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'nosotros', name: 'Nosotros', component: Nosotros, meta:{ simpleLayout: true } },
      { path: 'servicios', name: 'Servicios', component: Servicios },
      { path: 'contacto', name: 'Contacto', component: Contacto },
      { path: 'comprar/:modelo', name: 'FinalizarCompra', component: FinalizarCompra, meta: { simpleLayout: true } },
      { path: 'modelos', name: 'ListadoModelos', component: ListadoModelos },
      { path: 'modelos/:id', name: 'ModeloDetalle', component: ModeloDetalle, meta: { simpleLayout: true } },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
