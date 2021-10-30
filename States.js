import React, { Component } from 'react'

export default class States extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            name:"Ramjee"
       }
   }

    render() {
        setTimeout(()=>{
            this.setState({name:"Ramjee Buddarapu"})
        },3000)
        return (
            <div>
               <h1>{this.state.name}</h1>
            </div>
        )
    }
}
