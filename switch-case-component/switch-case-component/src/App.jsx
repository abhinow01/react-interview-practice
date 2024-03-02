import React from 'react';
import { Children } from 'react';
function App() {

  const CustomSwitch = ({children,value}) =>{
    const cases = [];
      const defaults = [];
    Children.forEach(children, (e)=>{
      
      if(e.type.name === "CustomCase"){
         if(e.props.value === 'function'){
          cases.push(e);
         }else if(value === e.props.value){
          cases.push(e);
         }
      } else if(e.type.name === "DefaultCase"){
        defaults.push(e);
      }
    });
    console.log(cases);
    if(cases.length>0){
      return cases;
    }else{
      return defaults;
    }
  };

  const CustomCase = ({children})=>{
return <div>{children}</div>
  };

  const DefaultCase =({children}) =>{
    return <>{children}</>
  };
  

  return (
    <>
      <CustomSwitch value="20">
        <CustomCase value={(e) => e>10}>hello 10</CustomCase>
        <CustomCase value ="20">Hello 20</CustomCase>
        <CustomCase value ="30">Hello 30</CustomCase>
        <CustomCase value ="10">Hello 10</CustomCase>
        <DefaultCase>hello 40</DefaultCase> 
      </CustomSwitch>
    </>
  )
}

export default App
