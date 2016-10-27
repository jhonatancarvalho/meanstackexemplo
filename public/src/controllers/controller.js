class Controller {

  constructor($scope, $http) {
    this.scope = $scope;
    this.http = $http;

    this.bindFuncoesScope();
  };
  
  getScope(){
    return this.scope;
  }

  setScope(scope){
    this.scope = scope;
  }

  getHttp(){
    return this.http;
  }

  setHttp(http){
    this.http = http;
  }

  bindFuncoesScope(){
    this.getScope().scope = this.getScope();
    this.getScope().getScope = function() { return this.scope; }
    this.getScope().http = this.getHttp();
    this.getScope().getHttp = function() { return this.http; }

    let metodosBind = Object.getOwnPropertyNames(this.__proto__);
    for (let metodo of metodosBind) {
      if (metodo == "constructor"){
        continue;
      }
      this.getScope()[metodo] = this[metodo];
    }
  }

}