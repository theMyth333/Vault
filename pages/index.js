function Index(){
console.log(process.env.MSG);
console.log("Client Console");
return <h1>Its Working! {process.env.MSG}</h1>
}

export default Index;