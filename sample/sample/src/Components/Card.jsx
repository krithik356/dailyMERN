const Card = (props)=>{
    console.log(props.data1);
    
 return(
    <div>
        <h1>
            this is the card component
            {
                props.data1.map((each)=>{
                   return(<p>{each.title}</p>);
                })
            }
         
        </h1>
        

    </div>
 )
}
export default Card;