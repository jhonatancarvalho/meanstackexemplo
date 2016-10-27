class ContatoController extends Controller {

  constructor($scope, $http) {
    super($scope, $http);
    this.carregarListaContatos();
  };

  carregarListaContatos() {
    this.getHttp().get('/listaContatos').success((resultado) => {
      this.getScope().listaContatos = resultado;
      this.removerSelecaoContato();
    });
  };

  adicionarContato() {
    this.getHttp().post('/listaContatos', this.getScope().contato).success((resultado) => {
      this.carregarListaContatos();
    });
  };

  removerContato(id) {
    this.getHttp().delete('/listaContatos/'+ id).success((resultado) => {
      this.carregarListaContatos();
    }).error((erro) => {
      console.log(erro);
    });
  }

  editarContato(id) {
    this.getHttp().get('/listaContatos/'+ id).success((resultado) => {
      this.getScope().contato = resultado;
    });
  }

  atualizarContato(){
    this.getHttp().put('/listaContatos/'+ this.getScope().contato._id, this.getScope().contato).success((resultado) => {
      this.carregarListaContatos();
    });
  }

  removerSelecaoContato(){
    this.getScope().contato = "";
  }

  expandirContato(contato) {
    if (contato.detalhes == "" || contato.detalhes == undefined){
      return;
    }
    if (contato.expandir == true){
        contato.expandir = false;
        return;
    }
    contato.expandir = true;
  }

}