import { InputContainer } from "./styles";

export const Input = ({value, extra}) => {
    return (
        <InputContainer>
        <span>{value}<span className="extra">{extra}</span></span>
        </InputContainer>
    );

}
export const SubInput = ({value}) => {
    return (
        <InputContainer>
        <span className="subinput">{value}</span>
        </InputContainer>
    );
}

