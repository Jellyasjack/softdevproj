import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="row"> 
        <div class="col-xl-4 col-md-4 col-4">
          <span class="text-justify">Logo</span>
        </div>
      </div>  

      <div class="row"> 
        <div class="col-xl-2 col-md-2 col-0"/>
        <div class="col-xl-2 col-md-2 col-12">
        <input type="text" class="form-control" placeholder="Ingridient"/>
        </div>
        <div class="col-xl-2 col-md-2 col-12">
          <input type="text" class="form-control" placeholder="Ingridient"/>
        </div>
        <div class="col-xl-2 col-md-2 col-12">
          <input type="text" class="form-control" placeholder="Ingridient"/>
        </div>
        <div class="col-xl-1 col-md-1 col-6">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <div class="col-xl-1 col-md-1 col-6">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
        <div class="col-xl-2 col-md-2 col-0"/>
      </div>

      <div class="row"> 
        <div class="col-xl-1 col-md-1 col-1"/>
        <div class="col-xl-10 col-md-10 col-10">
          <ul class="list-group">
            <li class="list-group-item">Recipe</li>
          </ul>
        </div>
        <div class="col-xl-1 col-md-1 col-1"/>
      </div>

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

export default App;
