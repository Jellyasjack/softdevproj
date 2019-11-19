import React from 'react';
import './App.css';
import logo from './logo.jpg';

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

  //Лого
  logo() {
    return (
      <img src={logo} alt="Logo" class="pict"/>
    )
  }

  //Запоминаем ингридиенты
  handleUserInput = (e) => {
    const name = e.target.name;
    var value = e.target.value.toLowerCase();
    if (value.length > 15) {
      value = value.substr(0, 15);
    }
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
            <p class="lead fatfont">Some snack to eat!!!</p>
            <p class="lead leadd">
              {this.state.recp}
            </p>
            <p class="lead leadd"> Wash and peel the vegetables. Wash the meat, pat dry with paper towels. Fry the meat in vegetable oil over high heat until golden brown on all sides.  Cut the vegetables, add to the meat, fry everything together, stirring occasionally, for several minutes. Add a little water, about half a glass, cover and simmer over low heat for 40-45 minutes. Rinse the rice well. Put rice in a pan with meat and vegetables, put tomatoes on top. Boil. Cook over low heat until liquid is completely gone, about 20 minutes. </p>
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
    if (this.state.inp2 === '') {recipe = 'Take '+ this.state.inp1 +'. Burn that. Throw that away.'};
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
    var stt2
    if (this.state.inp1 !== '') {
      stt2 = "fadein"
    }
    else {
      stt2 = "fadeout"
    }
    return(
      <div class={"col-lg-3 col-12   " + stt2}>
        <input name="inp2" type="text" class="form-control" placeholder="Add ingridient"
          value={this.state.inp2}
          onChange={this.handleUserInput} 
        />
      </div>
    )
  }

  //Выводим форму для ингридиента 3
  Field3() {
    var stt3
    if (this.state.inp1 !== '' && this.state.inp2 !== '') {
      stt3 = "fadein"
    }
    else {
      stt3 = "fadeout"
    }
    return(
      <div class={"col-lg-3 col-12   " + stt3}>
        <input name="inp3" type="text" class="form-control" placeholder="Add ingridient"
          value={this.state.inp3}
          onChange={this.handleUserInput} 
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App" class="">

        {/* Логотип */}
        <div class="row  "> 
          <div class="col-lg-12 col-12 llogo">
            {this.logo()}
          </div>
        </div>  

        {/* Рецепт */}
        <div class="row  "> 
          <div class="col-lg-12 col-12 ">
            {this.Protocol11()}
          </div>
        </div>

        <div class="row  "> 
          <div class="border col-0"/>

          {/* Кнопка */}
          <div class="col-lg-3 col-12">
            <button class="btn btn-outline-secondary " type="button" onClick={this.SummonEdward}>Generate</button>
          </div>

          {/* Поле ввода 1 */}
          <div class="col-lg-3 col-12">
            <input name="inp1" type="text" class="form-control elem" placeholder="Add ingridient"
              value={this.state.inp1}
              onChange={this.handleUserInput} 
            />
          </div>
          
          {/* Поле ввода 2 */}
          {this.Field2()}

          {/* Поле ввода 3 */}
          {this.Field3()}

          <div class="border col-0  "/>
        </div>
        
        
        {/* Прочая ересь */}
        <div class="row"> 
          <div class="col-lg-12 col-12 textt dno">
            <span class="lead leadd">2019   D.E.V.&#169;</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;