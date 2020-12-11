$(document).ready(function() {


    // Sliders

    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 860,
            responsive: true,
            height: 250
        });
    }


    // Post
    if (window.location.href.indexOf('index') > -1) {

        var post = [{
                title: "Primer titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Segundo titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Tercero titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Cuarto titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Quinto titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                title: "Sexto titulo",
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
        ];

        post.forEach((item, index) => {
            post = `
                <article class="post">
                    <h2>${item.title}</h2>

                    <span class="date">${item.date}</span>

                    <p>${item.content}</p>
                    <a href="#" class="buttMore">Leer mas...</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }


    // Cambiar los estilo
    var theme = $("#theme");

    $("#to_green").click(function() {
        theme.attr("href", "./00-css/green.css");
    });

    $("#to_red").click(function() {
        theme.attr("href", "./00-css/red.css");
    });

    $("#to_blue").click(function() {
        theme.attr("href", "./00-css/blue.css");
    });

    // Scrool hacia arriba

    $("#subir").click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Login Falso
    $("#login form").submit(function() {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var ValidName = $("#ValidName");

        ValidName.html(form_name);
        ValidName.append('<a href="#" id="logout">Cerrar Sesion</a>');
        $("form").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }


    // Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj
    if (window.location.href.indexOf('clock') > -1) {

        setInterval(function() {
            var reloj = moment().format("h:mm:ss");
            $('#reloj').html(reloj);

        }, 1000);
    }

    if (window.location.href.indexOf('contacto') > -1) {

        $("form input[name='date']").datepicker({
            dateformat: "dd/mm/yyyy"
        })

        $.validate({
            lang: 'es'
        });
    }
});