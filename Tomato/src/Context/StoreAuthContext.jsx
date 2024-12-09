import { createContext } from "react";
import { food_list } from "../assets/assets";

const StoreAuthContext = createContext(null);

const StoreAuthContextProvider = (props) => {
    const ContextValue={food_list}
  return (


    <StoreAuthContext.Provider value={ContextValue}>
        {props.children}
        </StoreAuthContext.Provider>
  );
};
export {StoreAuthContext}
export default StoreAuthContextProvider;

