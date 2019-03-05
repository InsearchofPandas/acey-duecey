import React from 'react';

class CardDisplay extends React.Component {
  render() {

    const cardLeft = require('../images/' + this.props.deck[0].image + '.png')
    const cardRight = require('../images/' + this.props.deck[1].image + '.png')
    const cardMiddle = require('../images/' + this.props.deck[2].image + '.png')

    let middleCardDisplay = (this.props.play === 0)
      ? <div className="w-1/4 mx-1/8"></div>
      : <img className="w-1/4 mx-1/8" src={cardMiddle} alt=""/>

    return (
      <div className=" flex justify-center">
        <div className="lg:w-2/5 mx-2">
          <div className="flex justify-center content-around">
            <img className="w-1/4" src={cardLeft} alt=""/> {middleCardDisplay}
            <img className="w-1/4" src={cardRight} alt=""/>
          </div>
        </div>
      </div>
    )

  }
}


export default CardDisplay;
