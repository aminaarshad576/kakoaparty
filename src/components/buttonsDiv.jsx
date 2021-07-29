import React, { Component } from 'react';


class Button1 extends Component {
    
    constructor(props)
    {
        super(props)

        this.state = {
            buttonPressed: 0,
            buttonArray: [
              {
                id : 1,
                name : "#All"
              },
              {
                id : 2,
                name : "#100m"
              },
              {
                id : 3,
                name : "#1km"
              },
              {
                id : 4,
                name : "#10km"
              },
              {
                id : 5,
                name : "#100km"
              },
            ] 
        }
    }
        render() {
            return(
                <div>
               
                 {
                 this.state.buttonArray.length > 0 ? (
                    this.state.buttonArray.map((button, index)=>
                    {
                        return(
                            <button 
                                key={index}
                                value = {button.id}
                                className='btn bg-muted btn-lg text-dark mr-5 font-weight-bold' 
                                onClick={() => this.handleClick(1)}> 
                                {button.name}
                            </button>
                            
                        )
                    })
                ) : null}
               </div>
               
            )
        }
    }

export default Button1;