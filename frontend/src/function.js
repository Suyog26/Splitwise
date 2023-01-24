/* eslint-disable no-unused-vars */
// function splitAmountEvenly(total, numPeople) {
//   // Calculate the amount per person
//   let amountPerPerson = total / numPeople;
//   // Round the amount per person to the nearest cent
//   amountPerPerson = Math.round(amountPerPerson * 100) / 100;
//   // Calculate the remainder
//   let remainder = total - (amountPerPerson * numPeople);
//   // Distribute the remainder evenly among the people
//   for (let i = 0; i < numPeople; i++) {
//     if (remainder > 0) {
//       amountPerPerson += 0.01;
//       remainder--;
//     }
//   }
//   return amountPerPerson;
// }

// let totalAmount = 105;
// let numPeople = 4;
// let amountPerPerson = splitAmountEvenly(totalAmount, numPeople);
// console.log(amountPerPerson);

// function splitAmountInPercentile(total, percentages) {
//   // Calculate the total percentage
//   let totalPercentage = percentages.reduce((a, b) => a + b, 0);
//   // Calculate the amount per percentage
//   let amountPerPercentage = total / totalPercentage;
//   // Calculate the amount for each percentage
//   let amounts = percentages.map(percentage => percentage * amountPerPercentage);
//   // Round the amounts to the nearest cent
//   amounts = amounts.map(amount => Math.round(amount * 100) / 100);
//   return amounts;
// }

// let totalAmount = 100;
// let percentages = [30, 25, 5, 25];
// let amounts = splitAmountInPercentile(totalAmount, percentages);
// console.log(amounts);

// function sayYouOwnFullAmount(numpeople,total) {
//   return `I ${numpeople} own the full amount of ${total}.`;
// }

// console.log(sayYouOwnFullAmount("radhika pramod",500))

function splitAmountByShare(amount, shares) {
  // Calculate the share for each person
  const share = amount / shares.reduce((a, b) => a + b);
  // Create an array to store the amounts for each person
  const amounts = [];
  // Iterate through the shares and calculate the amount for each person
  for (const s of shares) {
    amounts.push(share * s);
  }
  // Return the array of amounts
  return amounts;
}

// const amount = 100;
// const shares = [1, 2, 3];
// const amounts = splitAmountByShare(amount, shares);
// console.log(amounts);  // Output: [16.666666666666668, 33.333333333333336, 50]

// function splitAmountByExactAmount(amount, amounts) {
//   // Calculate the total amount to be split
//   const totalAmount = amounts.reduce((a, b) => a + b);
//   // Calculate the share for each person
//   const share = amount / totalAmount;
//   // Create an array to store the final amounts for each person
//   const finalAmounts = [];
//   // Iterate through the amounts and calculate the final amount for each person
//   for (const a of amounts) {
//     finalAmounts.push(a * share);
//   }
//   // Return the array of final amounts
//   return finalAmounts;
// }

// const amount = 100;
// const amounts = [20, 30, 50];
// const finalAmounts = splitAmountByExactAmount(amount, amounts);
// console.log(finalAmounts);  // Output: [40, 60, 100]

//  below add expenses(){
//   if (this.value === "mutually split") {
    //     const splitamount = this.splitAmountEvenly(
    //       parseInt(this.amount),
    //       this.friends.split(",").length + 1
    //     );
    //     for (const value of this.friends.split(",")) {
    //       this.$store.dispatch("Addexpenses", {
    //         username: this.$store.state.user.username,
    //         user: value,
    //         description: this.description,
    //         amount: splitamount,
    //         date: this.date,
    //       });
    //     }
    //   }
    //   if (this.value === "split in percentage") {
    //     const percentages = this.percent.split(",").map(Number);
    //     const splitamount = this.splitAmountInPercentile(
    //       parseInt(this.amount),
    //       percentages
    //     );
    //     for (let i = 0; i < this.friends.split(",").length; i++) {
    //       this.$store.dispatch("Addexpenses", {
    //         username: this.$store.state.user.username,
    //         user: this.friends.split(",")[i],
    //         description: this.description,
    //         amount: splitamount[i],
    //         date: this.date,
    //       });
    //     }
    //   }
    //   if (this.value === "split by share") {
    //     const shares = this.share.split(",").map(Number);
    //     const splitamount = this.splitAmountByShare(
    //       parseInt(this.amount),
    //       shares
    //     );
    //     for (let i = 0; i < this.friends.split(",").length; i++) {
    //       this.$store.dispatch("Addexpenses", {
    //         username: this.$store.state.user.username,
    //         user: this.friends.split(",")[i],
    //         description: this.description,
    //         amount: splitamount[i],
    //         date: this.date,
    //       });
    //     }
    //   }
    //   if (this.value === "they own full amount") {
    //     for (const value of this.friends.split(",")) {
    //       this.$store.dispatch("Addexpenses", {
    //         username: this.$store.state.user.username,
    //         user: value,
    //         description: this.description,
    //         amount: parseInt(this.amount),
    //         date: this.date,
    //       });
    //     }
    //   }if(this.value==="split by exact amounts"){
    //     const exact = this.exact.split(",").map(Number);
    //     const splitamount = this.splitAmountByExactAmount(
    //       parseInt(this.amount),
    //       exact
    //     );
    //     for (let i = 0; i < this.friends.split(",").length; i++) {
    //       this.$store.dispatch("Addexpenses", {
    //         username: this.$store.state.user.username,
    //         user: this.friends.split(",")[i],
    //         description: this.description,
    //         amount: splitamount[i],
    //         date: this.date,
    //       });
    //     }
    //   }
