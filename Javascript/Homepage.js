/*When the mouse is over a pricing plan, the pricing plan hovered over moves. This indicates focus on a certain plan.*/
$(document).ready( () => {

  $("#basic").on("mouseover", () => {
    $("#professional").animate( { position: "relative", top: "-1em" } );
    $("#all-out").animate( { position: "relative", top: "-9.5em" } );
  });

  $("#basic").on("mouseleave", () => {
    $("#professional").animate( { position: "relative", top: "-2em" } );
    $("#all-out").animate( { position: "relative", top: "-10.5em" } );
  });

  $("#professional").on("mouseover", () => {
    $("#basic").animate( { position: "relative", top: "8em" } );
    $("#all-out").animate( { position: "relative", top: "-9.5em" } );
  });

  $("#professional").on("mouseleave", () => {
    $("#basic").animate( { position: "relative", top: "7em" } );
    $("#all-out").animate( { position: "relative", top: "-10.5em" } );
  });

  $("#all-out").on("mouseover", () => {
    $("#basic").animate( { position: "relative", top: "8em" } );
    $("#professional").animate( { position: "relative", top: "-1em" } );
  });

  $("#all-out").on("mouseleave", () => {
    $("#basic").animate( { position: "relative", top: "7em" } );
    $("#professional").animate( { position: "relative", top: "-2em" } );
  });


});
