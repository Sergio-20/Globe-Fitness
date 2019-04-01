  $(document).ready( () => {

    let clicks = 0;

    $("#caret-nav").hide();

    /*Caret Icon Appears after a certain scroll amount, otherwise it will hide.*/
    $(document).on("scroll", () => {

      let scrollVal = $(document).scrollTop();

      if(scrollVal >= 350)
      {
        $("#caret-nav").fadeIn();
      }
      else
      {
        $("#caret-nav").fadeOut();
      }

    });

    /*Functions Below Take User To A Different Page Upon Click.*/
    $("#home").on("click", () => {
      window.open("Homepage.html", "_self");
    });

    $("#memberships").on("click", () => {
      window.open("Membership.html", "_self");
    });

    $("#about").on("click", () => {
      window.open("About Us.html", "_self");
    });

    $("header nav h1, header nav i").on("click", () => {
      window.open("Homepage.html", "_self");
    });
    /*Functions Above Take User To A Different Page Upon Click.*/


    /*Causes left arrow/caret to cycle between images and headings.*/
    $("#chev-left").on("click", () => {

      clicks--;

      if( clicks === 0 )
      {
        $("header img").attr("src", "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Use The Latest Equpment");
      }
      else if( clicks === 1 )
      {
        $("header img").attr("src", "https://images.pexels.com/photos/866370/pexels-photo-866370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Get a personalized training plan!");
      }

      else if( clicks === -1 )
      {
        clicks = 2;

        $("header img").attr("src", "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Trainors To Take You To The Next Level");
      }

      else
      {
        clicks = 0;

        $("header img").attr("src", "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Use The Latest Equpment");
      }

    });
    /*Causes right arrow/caret to cycle between images and headings.*/
    $("#chev-right").on("click", () => {

      clicks++;

      if( clicks === 1 )
      {
        $("header img").attr("src", "https://images.pexels.com/photos/866370/pexels-photo-866370.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Get a personalized training plan!");
      }
      else if( clicks === 2 )
      {
        $("header img").attr("src", "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Trainors To Take You To The Next Level");
      }
      else
      {
        clicks = 0;

        $("header img").attr("src", "https://images.pexels.com/photos/17840/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940");
        $(".img-caption").html("Use The Latest Equpment");
      }

    });

  });
