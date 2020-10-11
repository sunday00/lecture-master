class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
    }
    
    static defaultProps = {
    
    }
    
    start = (e) => {
        e.preventDefault();

        this.setState({ time: 0 });
        this.refs.btn.disabled = true;

        this.interval = setInterval(() => {
            this.tick();

            if( this.isTimeUp() ){
                this.finish();
            }

        }, 300);
    }

    tick =  () => {
        this.setState({ time: this.state.time + 1 });
    }

    isTimeUp = () => {
        
        return this.state.time == this.refs.input.value;
    }

    finish = () => {

        let time = <span className="text-info">{this.state.time}</span>;
        
        this.setState({time});
        this.refs.input.value = '';
        this.refs.input.focus();
        this.refs.btn.disabled = false;
        return clearInterval(this.interval);
    }
    
    render() {
        return <div>
            <h1>Timer</h1>
            <h3>{this.state.time}</h3>

            <form onSubmit={this.start}>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="set number" required={true}
                    aria-label="set number" aria-describedby="button-addon1" 
                    ref="input" />
                    <div className="input-group-append">
                        <button ref="btn" className="btn btn-outline-secondary" type="submit" id="button-addon1">Add</button>
                    </div>
                </div>
            </form>

        </div>;
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));