import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Login.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../components/Register.vue')
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../components/Home.vue'),
            meta: { requiresAuth: true },
        },


    ]
})

router.beforeEach(async (to, from, next) => {

    const authStore = useAuthStore()

    if (to.meta.requiresAuth) {
        await authStore.getUser()
            .then(() => {
                authStore.user ? next() : next('login')

            })
            .catch(() => {
                next('login')
            })
    } else {
        next()
    }

});

export default router
