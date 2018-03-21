import React, {Component} from 'react';
import Proptypes from 'prop-types';
import data from './../../../../data/mock.json';

class ItemList extends Component {

  constructor(props) {
    console.log(data);
    super(props);

    this.state = {
        
    }
  }

  render() {
    
    if (!this.props.loaded) {
      return <div>Cargando...</div>
    }
    return (
      <ul>
        <li>
          <img/>

        </li>
      </ul>  
    );
  }
}

export default ItemList;