window.onscroll = async () => {
    if (window.scrollY != 0)
    {
        document.querySelector('header').className = "header-boxshadow"
    } else {
        document.querySelector('header').className = ''
    }
}