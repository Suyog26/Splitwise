

import vuex from "vuex"

import axios from "axios"
// import  VuexPersistence  from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//     storage:window.localStorage,
//     // modules: ['user', 'friends', 'expenses']
// })

export default new vuex.Store({
    state:{
        user:null,
        friends:[],
        expenses:[]
        
        
    },
    mutations:{
        SET_USER_DATA (state,userData) {
            state.user=userData
            localStorage.setItem('user',JSON.stringify(userData))
            axios.defaults.headers.common['Authorization']=`Bearer ${userData.token} `
        },
        CLEAR_USER_DATA () {
            localStorage.removeItem('user')
            location.reload()
        },
        Addexpenses (state,expenses){
            // if(!state.expenses) state.expenses = expenses;
            // else state.expenses = [...state.expenses, expenses];
            state.expenses = expenses
            
            
            // state.expenses = state.expenses.concat(expenses);
            // state.expenses=expenses
            // eslint-disable-next-line no-undef
            // Vue.set(state.expenses.user.expensis, expenses.index, expenses.data)
            // state.expenses.push(expenses)
            
        },
        addfriend(state,friends){
            state.friends=friends
            // state.friends.push(friends)
        }
        
        
    },
    actions:{
        async Signup ({commit},credintials) {
            try{
                const { data } = await axios.post("http://localhost:5000/api/user/register", credintials)
                commit("SET_USER_DATA", data)
                return data

            }catch(error){
                return error.response.data
            }
        },
        async login ({commit},credintials) {
            try{
                const { data } = await axios.post("http://localhost:5000/api/user/login", credintials)
                commit("SET_USER_DATA", data)
                const {data:adddata}=await axios.get("http://localhost:5000/api/user/loggeduser")
                console.log(adddata)
                commit("Addexpenses",adddata.user.expensis)
                // eslint-disable-next-line no-unused-vars
                const userString = localStorage.getItem('user');
                const user = JSON.parse(userString);
                const {data:postdata}=await axios.post("http://localhost:5000/api/user/getuserData",{
                   
                    username:user.username
                })
                console.log(postdata,"addfriend")
                commit("addfriend",postdata.user[0].friends)

            }catch(error) {
                return error.response.data.message
            }
        
        },
        
        logout ({commit}) {
            commit('CLEAR_USER_DATA')
        },
        // eslint-disable-next-line no-unused-vars
        async Addexpenses ({commit},expenses){
            const{data}=await axios.post("http://localhost:5000/api/user/addExpenses",expenses)
            // const expensis_arr = [].concat(...data.map(x => x.doc.expensis))
            const expensis_arr = data[data.length - 1]["doc"]["expensis"] // Only get the last element of the data array
            console.log(expensis_arr,"hii")
            commit("Addexpenses",expensis_arr)
              
        },
        async addfriend({commit},friends){
            try{
                const{data}=await axios.post("http://localhost:5000/api/user/addfriend",friends)
                commit("addfriend",data.doc.friends)
                console.log(data.doc.friends)

            }catch(error){
              console.log(error)
            }
        
        },
        // async addfriend({commit},friends){
        //     try{
        //         const{data}=await axios.post("http://localhost:5000/api/user/addfriend",friends)
        //         console.log(data,"main hu asli")
        //         if(data.status==="Success"){
        //           commit("addfriend",data.doc.friends)
        //           console.log(data.doc.friends)
        //         }
        //         else{
        //           alert(data.message)
                 
        //         }
        //     }catch(error){
        //       console.log(error)
        //     }
        // },

        // eslint-disable-next-line no-unused-vars
        async Invite({commit},invite){
            try {
                const {data}=await axios.post("http://localhost:5000/api/user/invite",invite)
                commit(data)
            }catch(error){
                throw new Error(error.response.data.error)
            }
        },
        async settle({commit},amount){
            const {data}=await axios.post("http://localhost:5000/api/user/settleExpenses",amount)
            console.log(data.doc.expensis,"jabe")
            commit("Addexpenses",data.doc.expensis)

        }
        
        
    },
    getters: {
        loggedIn (state) {
            return !!state.user
        },
        friend (state){
            return state.friends
        },
        totalAmount: state => {
            let total = 0
            state.expenses.forEach(expense => {
              if ('data' in expense && 'amount' in expense.data) {
                total += expense.data.amount
              }
            })
            const x = Math.round(total*100)/100
            return x
        },
        negativeTotalAmount: state => {
            let negatotal = 0
            state.expenses.forEach(expense => {
              if ('data' in expense && 'amount' in expense.data) {
                if(expense.data.amount < 0){
                    negatotal += Math.abs(expense.data.amount)
                }
              }
            })
            const y = Math.round(negatotal*100)/100
            return y
        },
        expenses (state) {
            return state.expenses
        },
        
    },
})