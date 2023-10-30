import { InputContainer } from "./styles";

const Input = ({value, extra}) => {
    return (
        <InputContainer>
        <span>{value}<span className="extra">{extra}</span></span>
        </InputContainer>
    );

}

export default Input;