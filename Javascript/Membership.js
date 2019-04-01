  /*Clicking on a plan causes it to be highlighted. This indicates which plan the client has selected to buy.*/
  $(document).ready( () => {

    $("#basic-plan button").on("click", () => {
      $("#basic-plan").css("border", "4px solid #00C851");
      $("#professional-plan").css("border", "");
      $("#all-out-plan").css("border", "");
    });

    $("#professional-plan button").on("click", () => {
      $("#professional-plan").css("border", "4px solid #00C851");
      $("#basic-plan").css("border", "");
      $("#all-out-plan").css("border", "");
    });

    $("#all-out-plan button").on("click", () => {
      $("#all-out-plan").css("border", "4px solid #00C851");
      $("#basic-plan").css("border", "none");
      $("#professional-plan").css("border", "");
    });

  });
