import { Fragment } from 'react';
import * as S from './styles';

interface Props{
  textLabel?: string;
  typeInput?: string;
  rows?: number;
  as?: any;
  id: string;
  value?: string;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  isvalid?: boolean;
  isinvalid?: boolean;
  erros?: any;
  placeholder?: string;

}

const Inputs = ({textLabel, typeInput, rows, as, id, value, onchange, pattern, isvalid, isinvalid, erros, placeholder}: Props) => {
  return (
    <Fragment>
        <S.Label>
          {textLabel}
        </S.Label>
        <br/> 
        <S.Small> {erros} </S.Small>
        <S.Input
          color = {erros} 
          type={typeInput}
          as = {as}
          rows = {rows}
          id={id}
          value={value}
          onChange ={onchange}
          pattern={pattern}
          isValid={isvalid}
          isInvalid={isinvalid}
          placeholder={placeholder}
        />
    </Fragment>

  )
}

export default Inputs;