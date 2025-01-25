"use client";
 interface Iprops{

    
        text:string
    }
    
 
  
  
  
  const Button =(props:Iprops)=>{
    const handleClick=()=>{
        alert("login successfully")

    }
     return(
<button 
onClick={handleClick}

className="text-blue-900  gap-3 px-3 py-5">{props.text}
</button>
    );
};
export default Button