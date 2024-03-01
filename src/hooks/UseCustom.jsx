import { useEffect, useState } from "react";


const UseCustom = () => {
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        setLoading("loading...");
    }, []);
  return ({loading})
}

export default UseCustom