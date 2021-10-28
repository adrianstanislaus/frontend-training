const fill_me = document.getElementById('fill-me');
fill_me.innerHTML = "HALO!"

const change_all_me = document.getElementsByClassName('change-all-of-me');

[].slice.call(change_all_me).forEach((element) => {
    element.innerHTML = "HALO JUGA!";
});

const h2 = document.querySelector('h2');
h2.innerHTML = "Apa Kabar!"