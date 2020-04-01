 $(document).ready(function() {
        $(function() {
            $('.toggleArrow').on('show.bs.dropdown', function() {
                $(this).find('#img-burger').attr("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMCA0NDhjLTExMC41IDAtMjAwLTg5LjUtMjAwLTIwMFMxNDUuNSA1NiAyNTYgNTZzMjAwIDg5LjUgMjAwIDIwMC04OS41IDIwMC0yMDAgMjAwem0xMDEuOC0yNjIuMkwyOTUuNiAyNTZsNjIuMiA2Mi4yYzQuNyA0LjcgNC43IDEyLjMgMCAxN2wtMjIuNiAyMi42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDI5NS42bC02Mi4yIDYyLjJjLTQuNyA0LjctMTIuMyA0LjctMTcgMGwtMjIuNi0yMi42Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjIuMi02Mi4yLTYyLjItNjIuMmMtNC43LTQuNy00LjctMTIuMyAwLTE3bDIyLjYtMjIuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjIuMiA2Mi4yIDYyLjItNjIuMmM0LjctNC43IDEyLjMtNC43IDE3IDBsMjIuNiAyMi42YzQuNyA0LjcgNC43IDEyLjMgMCAxN3oiLz48L3N2Zz4=");

            });
            $('.toggleArrow').on('hide.bs.dropdown', function() {
                $(this).find('#img-burger').attr("src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNMTYgMTMyaDQxNmM4LjgzNyAwIDE2LTcuMTYzIDE2LTE2Vjc2YzAtOC44MzctNy4xNjMtMTYtMTYtMTZIMTZDNy4xNjMgNjAgMCA2Ny4xNjMgMCA3NnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2em0wIDE2MGg0MTZjOC44MzcgMCAxNi03LjE2MyAxNi0xNnYtNDBjMC04LjgzNy03LjE2My0xNi0xNi0xNkgxNmMtOC44MzcgMC0xNiA3LjE2My0xNiAxNnY0MGMwIDguODM3IDcuMTYzIDE2IDE2IDE2eiIvPjwvc3ZnPg==");
            });
            /*tootip*/
            $('[data-tooltip="tooltip"]').tooltip();
            /* Show or hide the sticky footer button if it is present*/
            if ($('.back-top')) {
                $(window).scroll(function() {
                    if ($(this).scrollTop() > 200) {
                        $('.back-top').fadeIn(200);
                    } else {
                        $('.back-top').fadeOut(200);
                    }
                });

                /* Animate the scroll to top*/
                $('.back-top').click(function(event) {
                    event.preventDefault();
                    $('html, body').animate({ scrollTop: 0 }, 300);
                });
            }
        });
    });