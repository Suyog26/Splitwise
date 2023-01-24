<template>
  <div id="recent-activity">
    <v-card>
      <v-card-title>Recent Activity</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4" v-for="expense in filteredExpenses()" :key="expense.name" flex>
              <v-card>
                <v-card-title>{{ expense.name }}</v-card-title>
                <v-card-subtitle>{{ expense.data.date }}</v-card-subtitle>
                <v-card-text>
                  <p>{{ expense.data.description }}</p>
                  <p>Amount: {{ expense.data.amount }}</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>


<script>
// import { mapGetters } from 'vuex';
import axios from "axios"
export default {
  name: "RecentActivity",
  data() {
    return {
      page: 1,
      expenses:[]
    };
  },
  // computed:{
  //   ...mapGetters(["expenses"])
  // },
  mounted() {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        axios
            .post("http://localhost:5000/api/user/getuserData", {
                username: user.username,
            })
            .then((response) => {
                this.expenses =  response.data.user[0].expensis;
                console.log(this.expenses,"kjubku")
            })
            .catch((error) => {
                console.log(error);
            });
  },
  methods:{
    filteredExpenses() {
    return this.expenses.filter(expense => expense.name && expense.data);
    
    }
  }
};
</script>

<style scoped>
#recent-activity {
  margin: 30px;
}
</style>
