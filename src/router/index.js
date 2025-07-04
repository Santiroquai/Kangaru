import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/Layout.vue'
import Home from '@/pages/Home.vue'
import Nosotros from '@/pages/Nosotros.vue' 
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
      { path: 'contacto', name: 'Contacto', component: Contacto, meta: { simpleLayout: true } },
      { path: 'comprar/:modelo', name: 'FinalizarCompra', component: FinalizarCompra, meta: { simpleLayout: true } },
      { path: 'modelos', name: 'ListadoModelos', component: ListadoModelos },
      { path: 'modelos/:id', name: 'ModeloDetalle', component: ModeloDetalle, meta: { simpleLayout: true } },
    ],
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    // Si volvés desde una vista detallada al Home con hash "#modelos"
    if (to.name === 'Home' && to.hash === '#modelos') {
      return {
        el: '#modelos',
        behavior: 'smooth' // hace scroll suave
      }
    }

    // Si vas a ModeloDetalle o FinalizarCompra → forzar scroll al top
    if (to.name === 'ModeloDetalle' || to.name === 'FinalizarCompra') {
      return { top: 0 }
    }

    // Para cualquier otra ruta, dejar que Vue Router decida
    return false
  }
})


export default router
