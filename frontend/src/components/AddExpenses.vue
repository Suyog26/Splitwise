<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<template>
  <div id="app">
    <v-app id="inspire">
      <v-dailog @submit.prevent="AddExpenses" :show="show" max-width="600">
        <v-row>
          <v-col cols="4">
            <v-subheader>Add Friends</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-combobox
              multiple
              small-chips
              v-model="friends"
              label="Add Friends"
            ></v-combobox>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader>Split ways</v-subheader>
          </v-col>
          <v-col>
            <v-select
              v-model="value"
              :items="items"
              attach
              chips
              label="split ways"
              multiple
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader>Amount</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="amount"
              label="Amount"
              prefix="INR"
            ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="4">
            <v-subheader>DESCRIPTION</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field v-modal="description" label="Description" suffix="Expenses"></v-text-field>
          </v-col>
        </v-row>


        <v-row justify="center">
          <v-date-picker v-model="picker"></v-date-picker>
        </v-row>
        <v-col cols="8">
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
      </v-dailog>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "AddExpenses",
  data: () => ({
    items: [
      "mutually split",
      "you own full amount",
      "they own full amount",
      "split in percentage",
    ],
    value: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    friends: "",
    amount: "",
    name:"",
    description:"",
    dailog: false,

  }),
  methods:{
    Addexpenses(){
      this.$store.dispatch("Addexpenses",{
        friends:this.friends,
        amount:this.amount,
        name:this.name,
        description:this.description,
        date:this.date
      })
    }
  }

};
</script>