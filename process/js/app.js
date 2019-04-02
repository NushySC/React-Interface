import React from 'react';
import ReactDOM from 'react-dom';
import AptList from './AptList';
import _ from 'lodash';
import AddAppointment from './AddAppointment'

class MainInterface extends React.Component {
  //this is equivalent to getInitialState
  constructor(props) {
    super(props);
    this.state = {myAppointments: []
    };
    this.state = { aptBodyVisible: false }

  }

  componentDidMount() {
    this.serverRequest= $.get('./js/data.json', function(result){
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  deleteMassage(item) {
    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    });

  }

  toggleAddDisplay() {
    var tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    });
  }

  render(){
    // var showTitle;
    // if (this.state.show) {
    //   showTitle = 'New';
    // }

    // var displayList = {
    //   display: this.state.show ? 'block': 'none',
    //   color: 'red'
    // }

    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {

    return (
      <AptList key ={index}
      singleItem = { item }
      whichItem = {item}
      onDelete = {this.deleteMessage} />
    )
  }.bind(this));

  return (
<div className="interface">
<AddAppointment 
bodyVisible = {this.state.aptBodyVisible }
handleToggle = { this.toggleAddDisplay}
/>
<ul className='item-list media-list'>{filteredApts}
</ul>
</div>
  )
}
};

export default MainInterface;

ReactDOM.render(
  <MainInterface />,
  document.getElementById('massageAppointments')
);