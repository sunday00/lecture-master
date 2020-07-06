import React from 'react'

class Cat extends React.Component
{
    render(){
        const mouse = this.props.mouse;
        return (
            <i style={{ position: 'absolute', display: 'inlineBlock', width:'10px', height:'10px', backgroundColor: 'tomato', left: mouse.x, top: mouse.y }}></i>
        );
    }
}

// class MouseWithCat extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.state = { x: 0, y: 0 };
//     }
  
//     handleMouseMove(event) {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       });
//     }
  
//     render() {
//       return (
//         <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
  
//           {/*
//             여기서 <p>를 <Cat>으로 바꿀 수 있습니다. ... 그러나 이 경우
//             Mouse 컴포넌트를 사용할 때 마다 별도의 <MouseWithSomethingElse>
//             컴포넌트를 만들어야 합니다, 그러므로 <MouseWithCat>는
//             아직 정말로 재사용이 가능한게 아닙니다.
//           */}
//           <Cat mouse={this.state} />
//         </div>
//       );
//     }
//   }

class Mouse extends React.Component
{
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    
    render() {
        return (
            <div style={{ height: '100vh' }} 
              onMouseMove={this.handleMouseMove}>
                {/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                ) } />
                {/* <MouseWithCat /> */}
            </>
        );
    }
}

export default class RenderProp extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <MouseTracker></MouseTracker>
            </>
        );
    }
}