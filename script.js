const navbar = document.getElementsByTagName('nav')[0];

// code [0] menandakan hanya navbar pertama yang dipanggil

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if(window.scrollY > 1){
        navbar.classList.replace('bg-transparent', 'nav-color')
        navbar.classList.remove('navbar-dark')
    } else if(this.window.scrollY <= 0){
        navbar.classList.replace('nav-color', 'bg-transparent')
        navbar.classList.add('navbar-dark')
    }
})