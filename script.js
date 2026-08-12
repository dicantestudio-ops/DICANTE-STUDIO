<script>

document.addEventListener("DOMContentLoaded", function () {

    /* Page starts smoothly */

    document.body.classList.add("page-enter");

    setTimeout(function () {
        document.body.classList.remove("page-enter");
    }, 50);


    /* Page transition when clicking links */

    const links = document.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const destination = link.href;

            /* Ignore external links */

            if (
                !destination ||
                destination.startsWith("#") ||
                link.target === "_blank" ||
                destination.includes("mailto:")
            ) {
                return;
            }


            /* Stop instant navigation */

            event.preventDefault();


            /* Start leaving animation */

            document.body.classList.add("page-exit");


            /* Navigate after animation */

            setTimeout(function () {

                window.location.href = destination;

            }, 600);

        });

    });

});

</script>