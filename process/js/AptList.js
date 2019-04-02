import React from 'react';

class AptList extends React.Component{

  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.onDelete(this.props.singleItem);
  }


    render () {
      return (
        <li className='massage-item media'>
        <div className='media-left'>
        <button className='massage-delete tn btn-xs btn-danger' onClick={this.handleDelete}>
        <span className='glyphicon glyphicon-remove'></span></button>
        </div>
  <div className='massage-info media-body'>
  <div className='massage-head'>
  <span className='massage-name'>{this.props.singleItem. massageName}</span>
  <span className='apt-date pull-right'>{this.props.singleItem.aptDate}</span>
  </div>
  <div className='customer-name'><span className='label-item'>Customer:</span>{this.props.singleItem.customerName}</div>
  <div className='apt-notes'>{this.props.singleItem.aptNotes}</div>
  </div>
  </li>
      )
    }
    
  }
  
  export default AptList;