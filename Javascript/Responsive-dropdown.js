  $(document).ready( () => {

    let clicked = false;

    /*Upon click of the dropdown menu, it expands. Upon a second click, it shrinks.*/
    $("#dropdown").on("click", () => {

      if(!clicked)
      {
        clicked = true;
        $("header nav").animate( { height: "25em" } );
        $("#about-info").animate( { position: "relative", top: "25em" } );
      }

      else
      {
        clicked = false;
        $("header nav").animate( { height: "5em" } );
        $("#about-info").animate( { position: "relative", top: "5em" } );
      }

    });

  });
