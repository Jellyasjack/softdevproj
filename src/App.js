import React from 'react';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inp1: '',
      inp2: '',
      inp3: '',
      recp: '',
    }
    this.SummonEdward = this.SummonEdward.bind(this);
  }

  //Запоминаем рецепт
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value.toLowerCase();
    this.setState({[name]: value});
    if (this.state.inp1==='') {this.setState({inp3: '', inp2: ''})};
    if (this.state.inp2==='') {this.setState({inp3: ''})};
  }

  //Выводим рецепт
  Protocol11() {
    if (this.state.recp !== '') {
      return(
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Some snack to eat!!!</h1>
            <p class="lead">
              {this.state.recp}
            </p>
          </div>
        </div>
      )
    }
  }
    
  //Записываем рецепт и обнуляем ингридиенты
  SummonEdward() {
    let recipe;
    if (this.state.inp3 !== '') {recipe = 'Mix '+ this.state.inp1 +' and '+ this.state.inp2 +' and '+ this.state.inp3 +'. Burn that. Throw that away.'};
    if (this.state.inp3 === '') {recipe = 'Mix '+ this.state.inp1 +' and '+ this.state.inp2 +'. Burn that. Throw that away.'};
    if (this.state.inp2 === '') {recipe = 'Take'+ this.state.inp1 +'. Burn that. Throw that away.'};
    if (this.state.inp1 === '') {recipe = 'Haha, just kidding) You dont deserve food!!!'};
    this.setState({
      recp : recipe,
      inp1: '',
      inp2: '',
      inp3: '',
    });
  }

  //Выводим форму для ингридиента 2
  Field2() {
    if (this.state.inp1 !== '') {
      return(
        <div class="col-xl-3 col-md-3 col-12">
            <input name="inp2" type="text" class="form-control" placeholder="Add ingridient"
              value={this.state.inp2}
              onChange={this.handleUserInput} 
            />
          </div>
      )
    }
  }

  //Выводим форму для ингридиента 3
  Field3() {
    if (this.state.inp1 !== '' && this.state.inp2 !== '') {
      return(
        <div class="col-xl-3 col-md-3 col-12">
          <input name="inp3" type="text" class="form-control" placeholder="Add ingridient"
            value={this.state.inp3}
            onChange={this.handleUserInput} 
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        {/* Логотип */}
        <div class="row"> 
          <div class="col-xl-12 col-md-12 col-12">
            <span class="text-justify">Logo</span>
          </div>
        </div>  

        {/* Рецепт */}
        <div class="row"> 
          <div class="col-xl-12 col-md-12 col-12">
            {this.Protocol11()}
          </div>
        </div>

        <div class="row"> 

          {/* Кнопка */}
          <div class="col-xl-3 col-md-3 col-12">
            <button class="btn btn-outline-secondary" type="button" onClick={this.SummonEdward}>Generate</button>
          </div>

          {/* Поле ввода 1 */}
          <div class="col-xl-3 col-md-3 col-12">
            <input name="inp1" type="text" class="form-control" placeholder="Add ingridient"
              value={this.state.inp1}
              onChange={this.handleUserInput} 
            />
          </div>
          
          {/* Поле ввода 2 */}
          {this.Field2()}

          {/* Поле ввода 3 */}
          {this.Field3()}
        </div>
        
        
        {/* Прочая ересь */}
        <div class="row"> 
          <div class="col-xl-1 col-md-1 col-1"/>
          <div class="col-xl-2 col-md-4 col-4">
            <span class="text-justify">About us</span>
          </div>
          <div class="col-xl-6 col-md-2 col-2">
          </div>
          <div class="col-xl-2 col-md-4 col-4">
            <span class="text-justify">2019</span>
          </div>
          <div class="col-xl-1 col-md-1 col-1"/>
        </div>
      </div>
    );
  }
}

export default App;