import {useState} from "react";

const useDefaultOne = () => {

    const [toggle, setToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle(prev => !prev);
    }

    return {placeholder: "Default One", toggle, handleToggle};
};

export default useDefaultOne;
