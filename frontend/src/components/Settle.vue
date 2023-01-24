
<template>
  
  <v-row>
    <v-row>
        <v-col cols="2">
        <v-subheader text-center>Paid_by</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-combobox
        :items="friend"
        chips
        v-model="paid_by"
        label="Paid by"
      ></v-combobox>
        </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-col cols="2">
      <v-subheader>Paid_to</v-subheader>
    </v-col>
    <v-col cols="8">
      <v-combobox
        :items="friend"
        chips
        v-model="paid_to"
        label="Paid to"
      ></v-combobox>
      <v-row>
        <v-col cols="2">
          <v-subheader>Amount</v-subheader>
        </v-col>
        <v-col cols="8">
          <v-text-field type="number" v-model="price" label="Amount" prefix="INR"></v-text-field>
        </v-col>
      </v-row>
            <v-btn @click="settle">ADD</v-btn>
    </v-col>
  </v-row>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Settle",
  data: () => ({
    paid_to:"",
    paid_by:"",
    price:""
  }),
  computed:{
    ...mapGetters(["friend"])
  },
  methods: {
    settle() {
        console.log(this.paid_to, "hii")
        console.log(this.paid_by,"nye")

        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString);

        // Check if paid_to is the user's username
        if (this.paid_to === user.username) {
            this.$store.dispatch("settle", {
                user: this.paid_by,
                username:user.username,
                amount: -parseInt(this.price)
            });
        } else {
            // if paid_to is not user.username, send positive amount
            this.$store.dispatch("settle", {
                user: this.paid_to,
                username:user.username,
                amount: parseInt(this.price)
            });
        }
    }
  }
};
</script>
