/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction()
{
  if(document.getElementById("same").checked){
    var name = document.getElementById("shippingName");
    var zipcode = document.getElementById("shippingZip");
    document.getElementById("billingName").value = name.value;
    document.getElementById("billingZip").value = zipcode.value;
  }
  else{
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }
}