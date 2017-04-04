
      $(document).ready(function() {
        $("button#blue").click(function() {
          $("body").removeClass();
          $("body").addClass("blue-background");
        });

        $("button#light").click(function() {
          $("body").removeClass();
          $("body").addClass("light-background");
        });
      });
