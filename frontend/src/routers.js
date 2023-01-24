import Home from "../src/components/Home.vue"
import Login from "../src/components/Login.vue"
import Signup from "../src/components/Signup.vue"
import ForgotPassword from "../src/components/ForgotPassword.vue"
import Dashboard from "../src/components/Dashboard.vue"
import ResetPassword from "../src/components/ResetPassword.vue"
import AddExpenses from "../src/components/AddExpenses.vue"
import RecentActivity from "../src/components/RecentActivity.vue"
import Contactsupport from "../src/components/Contactsupport.vue"
import Terms_services from "../src/components/Terms_services.vue"











import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'signup',
        component: Signup,
        path: '/signup',
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
        
    },
    {
        name:'ForgotPassword',
        component:ForgotPassword,
        path:'/ForgotPassword',
    
    },
    {
        name:'Dashboard',
        component:Dashboard,
        path:'/Dashboard',
        meta:{requiresAuth:true}
    },
    {
        name:'ResetPassword',
        component:ResetPassword,
        path:'/reset/:id/:token',
        meta:{requireAuth:true}
    },
    {
        name:'AddExpenses',
        component:AddExpenses,
        path:'/AddExpenses',
        meta:{requireAuth:true}
    },
   
    {
        name:'RecentActivity',
        component:RecentActivity,
        path:'/RecentActivity',
        meta:{requireAuth:true}
    },
    {
        name:'Contactsupport',
        component:Contactsupport,
        path:'/contactsupport'
    },
    {
        name:'Terms_services',
        component:Terms_services,
        path:'/terms'
    }

]

const router = createRouter({
    history:createWebHistory(), 
    routes
})

router.beforeEach((to,from,next)=>{
    const loggedIn=localStorage.getItem('user')

    if (to.matched.some(record=>record.meta.requiresAuth) && !loggedIn) {
      next("/")
    }
    next()
})

export default router