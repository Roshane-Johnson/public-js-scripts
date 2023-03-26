/**
* Calculate the bills split evenly and update the dashboard page.
*/
function calculateSplit() {
  // Disable split button after it's clicked
  const calculateSplitBtn = document.querySelector(".calculate-split-btn");
  calculateSplitBtn.setAttribute("disabled", "true");

  // Find and update the prices for all the section that has "Your Payment"
  const yourPaymentDiv = '<span style="background-color: rgb(0, 117, 193);" class="badge">Your Payment</span>';
  document.querySelectorAll("p").forEach((div) => {
    if (div.textContent == "Balance Due") {
      const paymentBalanceDiv = div.parentElement.nextElementSibling.firstElementChild;
      const paymentBalance = parseFloat(paymentBalanceDiv.innerHTML.split(" ")[0].replace("$", "")).toFixed(2);
      const splitBalance = (paymentBalance / 5).toFixed(2);
      paymentBalanceDiv.innerHTML = \`$\${splitBalance + 1.0} \${yourPaymentDiv}\`;
    }
  });
}
