
const jsonLoad = async (path) => {
    var data =await(await fetch(path)).json(); 
    console.log(`JSON load (${path}): `, data)
    return data;
}

const showPage = (pageid) => {
    var pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.add('hidden');
        if(p.id === pageid){
            p.classList.remove('hidden');
            eval(p.getAttribute('data-onpageswitch'));
        }
    })
} 