/*

React Context api allows you to esaily access data at different levels of the coponent tree,
without passing props to every level

createContext()

provider

consumer

ComC :- esme data he hmara
but ComA hmare <App/> me he
pass ComC data to <App/> with some props

const FirstName = createCotext();

<firstName.Provider value={"vinod"}>
<ComA/>
</firstName.Provider>

now do to C
<FirstName.Consumer>
{(name)=>{
return <h1> my name {name} </h1>
}}
</FirstName.Consumer>


*/