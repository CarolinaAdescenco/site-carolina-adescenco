const requestAjax = (URL_TO_FETCH, func, method = 'get', contentJson = null) => {
    if( method == 'get'){
        fetch(URL_TO_FETCH, {
        method: 'get' // opcional 
        })
        .then(response => { 
        return response.json();
        }).then( response => {
            //debugger
            let conteudo_portfolio = document.getElementById('conteudo-portfolio');
            retorno = func(response.conteudo);
            conteudo_portfolio.innerHTML = retorno;
            // debugger          
        })
        .catch(function(err) { 
            console.error(err); 
        });
    } 
}

const makeHtml = (content) => {
    
    let html = '';
    content.forEach((e,i) =>{

        html += `
       
            <div class="col-12 col-md-5">
                <button type="button" class="card card-client py-5" data-toggle="modal" data-target="#exampleModal" style="background-image: url(${e.backgroundCard}); background-size: cover; background-repeat: no-repeat;">
                    <div class="card-body">
                    <div class="card-title text-center">
                        <h3 class="title is-4">${e.nome}</h3>
                        <p class="subtitle is-6">${e.descricao}</p>
                    </div>
                    </div>
                </button>
            </div>
                
            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Faster Cep</h5>
                        </div>
                        <div class="modal-body">      
                            <a href="${e.imagemDesktop}" class="card my-3 col-12 col-md-8 mx-auto" data-toggle="modal" data-target="#exampleModal" data-lightbox="image-1" data-title="Galeria">
                            <div class="card-body">
                                <div class="card-title my-0 text-center">
                                <h3 class="title my-0">Desktop</h3>
                                </div>
                            </div>
                            </a>
                            <a href="${e.imagemMobile}" class="card my-3 col-12 col-md-8 mx-auto" data-toggle="modal" data-target="#exampleModal" data-lightbox="image-1" data-title="Galeria">
                            <div class="card-body">
                                <div class="card-title my-0 text-center">
                                <h3 class="title my-0">Mobile</h3>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-pro" data-dismiss="modal"><i class="fa fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div> `
    });

    return [html];
}


requestAjax('assets/js/content.json',makeHtml);