import react from 'react'


class ClassMethods extends react.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count :0
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props,state){
        // this method invoked both in mounting ans updating
        console.log("getDrivedFromProps");
        
        return null;
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentDidMount(){
        //best place for network call and setting timers(subsription)
        console.log("component did mount");
    }
    getSnapshotBeforeUpdate(){
        console.log("snapshots")
        return true;
     }

    componentWillUnmount(){
        console.log(" component Will Unmount")
    }

     increment(){
        this.setState({count :this.state.count+1})
     }

     shouldComponentUpdate(){
       console.log("should component update")
        return true;
     }

    

    render(){
        console.log("render");
        return(
            <>
             <h1>Lifecycle methods</h1>
             <h1>{this.state.count}</h1>
             <button onClick={()=> {this.increment()}}>Click me</button>
           
             
            </>
        )

    }
}

export default ClassMethods;