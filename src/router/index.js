import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'head',
            component: () => import("@/components/head/head.vue"),
            children: [{
                path: '/',
                component: () => import("@/components/center/center_components/introduce.vue")
            }
                , {
                    path: '/content1/0',
                    component: () => import("@/components/center/center_components/introduce.vue")
                }, {
                    path: '/content1/1',
                    component: () => import("@/components/center/center_components/teacher.vue")
                }, {
                    path: '/content1/2',
                    component: () => import("@/components/center/center_components/proguide.vue")
                }, {
                    path: '/content1/3',
                    component: () => import("@/components/center/center_components/material.vue")
                }, {
                    path: '/content1/4',
                    component: () => import("@/components/center/center_components/principle.vue")
                }, {
                    path: '/content1/5',
                    component: () => import("@/components/center/center_components/record.vue")
                }, {
                    path: '/content1/6',
                    component: () => import("@/components/center/center_components/analysis.vue")
                }, {
                    path: '/content1/7',
                    component: () => import("@/components/center/center_components/review.vue")
                }, {
                    path: '/content1/8',
                    component: () => import("@/components/center/center_components/qaans.vue")
                }]
        },
        {
            // path: '/content1/2',
            // name: 'content1',
            // component: () => import("@/components/center/center-components/teacher.vue")
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
