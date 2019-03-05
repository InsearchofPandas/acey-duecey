import React from 'react';

class ButtonWidget extends  React.Component {
  dummy() {}


  render() {
let edit
let clickable
  if(this.props.active === true) {
    edit = "hover:bg-grey-darkest hover:text-white ";
    clickable = this.props.onClick
  } else {
    edit = 'bg-grey-light text-grey '
    clickable = this.dummy
  }


    return (
      <div className={edit + "bg-grey  text-center rounded-lg py-2 px-3 font-bold"}
      onClick={clickable}
      >
      {this.props.text}
      </div>
    )
  }
}

export default ButtonWidget;
