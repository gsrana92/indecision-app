class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusONe = this.handleMinusONe.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() =>({count: count}));
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count : prevState.count +1
            };
        } );

    }
    handleMinusONe(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        })

    }
    handleReset(){
        this.setState((prevState) => {
            return {
                count : 0
            };
        })

    }
    render (){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusONe}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        );
    }

};
ReactDOM.render(<Counter count = {87}/>, document.getElementById('app'));

// function getLocation(location){
//     if (location){
//         return <p> Location: {location}</p>;
//     }
    
// }
// const user= {
//     name: "Gaurav Rana",
//     age: 26,
//     //location: 'Phoneixville'
// };

// let count =0;
// const addOne = () => {
//     count++;
//     renderCounterapp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterapp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterapp();
// };



// const renderCounterapp = () =>{
//     const template2 = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button onClick = {addOne}> +1 </button>
//             <button onClick = {minusOne}> -1 </button>
//             <button onClick = {reset}>reset</button>
            
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// };
// renderCounterapp();