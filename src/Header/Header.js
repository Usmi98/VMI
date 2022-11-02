import React from 'react';
import './Header.css';

function header(){
return(
<div class="container-fluid">
  <div class="header">
    <a href="#default" class="logo">React Usmi</a>
    <div class="header-right">
      <a class="active" href="./Home">Home</a>
      <a href="./About">About</a>
      <a href="./Contact">Contact</a>    
    </div>
  </div>
</div>
    )
};

export default header;
