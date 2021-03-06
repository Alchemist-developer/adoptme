import * as S from "./styles";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import wallpaperPug from "../../assets/wallpaper-pug.png";
import searchHeart from "../../assets/searchHeart.png";
import { QueroAdotarValues } from "../../types";

interface QueroAdotarProps {
  setInputValues: React.Dispatch<React.SetStateAction<QueroAdotarValues>>;
}

function QueroAdotar({ setInputValues }: QueroAdotarProps) {
  const arrEstados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantis",
  ];

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      estado: "Acre",
      cidade: "",
      generoDoAnimal: "",
      escolhaDoAnimal: "",
      tamanhoDoAnimal: "",
      idadeDoAnimal: "",
    },
    onSubmit: (values) => {
      try {
        if (
          values.cidade === "" ||
          values.escolhaDoAnimal === "" ||
          values.estado === "" ||
          values.generoDoAnimal === "" ||
          values.idadeDoAnimal === "" ||
          values.tamanhoDoAnimal === ""
        ) {
          toast.warn("Preencha todos os campos!");
          return;
        }

        setInputValues(values);
        localStorage.setItem("@dadosInput", JSON.stringify(values));
        navigate("/adotar");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <header>
        <h1>Menu</h1>
      </header>
      <S.Main>
        <S.CardPug src={wallpaperPug} alt="Card cachorro Pug preto" />
        <S.Form onSubmit={formik.handleSubmit}>
          <S.H3>Quero adotar</S.H3>
          <S.LabelInputText>Estado</S.LabelInputText>
          <S.FormSelect onChange={formik.handleChange} name="estado">
            {arrEstados.map((estado, i) => {
              return (
                <option key={i} value={estado}>
                  {estado}
                </option>
              );
            })}
          </S.FormSelect>
          <S.LabelInputText htmlFor="cidade">Cidade</S.LabelInputText>
          <S.InputText
            onChange={formik.handleChange}
            value={formik.values.cidade}
            placeholder="Insira o nome da cidade"
            id="cidade"
            name="cidade"
            type="text"
          />
          <S.DivSexoAnimal>
            <S.DivInputSexoAnimal>
              <S.InputFemea
                onChange={formik.handleChange}
                value="femea"
                type="radio"
                className="inputRadio"
                id="femea"
                name="generoDoAnimal"
              />
              <S.LabelFemea
                id="label-input-femea"
                htmlFor="femea"
              ></S.LabelFemea>
              <S.SpanSexoAnimal>Fêmea</S.SpanSexoAnimal>
            </S.DivInputSexoAnimal>
            <S.DivInputSexoAnimal>
              <S.InputMacho
                onChange={formik.handleChange}
                type="radio"
                className="inputRadio"
                id="macho"
                name="generoDoAnimal"
                value="macho"
              />
              <S.LabelMacho
                id="label-input-macho"
                htmlFor="macho"
              ></S.LabelMacho>
              <S.SpanSexoAnimal>Macho</S.SpanSexoAnimal>
            </S.DivInputSexoAnimal>
            <S.DivInputSexoAnimal>
              <S.InputTantoFaz
                onChange={formik.handleChange}
                type="radio"
                className="inputRadio"
                id="tanto-faz"
                name="generoDoAnimal"
                value="generoTantofaz"
              />
              <S.LabelTantoFaz
                id="label-input-tanto-faz"
                htmlFor="tanto-faz"
              ></S.LabelTantoFaz>
              <S.SpanSexoAnimal>Tanto faz</S.SpanSexoAnimal>
            </S.DivInputSexoAnimal>
          </S.DivSexoAnimal>
          <S.Span>Estou procurando</S.Span>
          <S.DivInputRadio>
            <S.InputPrimeiraCor
              onChange={formik.handleChange}
              type="radio"
              id="cachorro"
              name="escolhaDoAnimal"
              value="cachorro"
            />
            <S.Label htmlFor="cachorro">Cachorro</S.Label>
            <S.InputSegundaCor
              onChange={formik.handleChange}
              type="radio"
              id="gato"
              name="escolhaDoAnimal"
              value="gato"
            />
            <S.Label htmlFor="gato">Gato</S.Label>
            <S.InputTerceiraCor
              onChange={formik.handleChange}
              type="radio"
              id="outros"
              name="escolhaDoAnimal"
              value="outros"
            />
            <S.Label htmlFor="outros">Outros</S.Label>
            <S.InputQuartaCor
              onChange={formik.handleChange}
              type="radio"
              id="animal-tanto-faz"
              name="escolhaDoAnimal"
              value="animalTantofaz"
            />
            <S.Label htmlFor="animal-tanto-faz">Tanto faz</S.Label>
          </S.DivInputRadio>
          <S.Span>Porte</S.Span>
          <S.DivInputRadio>
            <S.InputPrimeiraCor
              onChange={formik.handleChange}
              type="radio"
              id="pequeno"
              name="tamanhoDoAnimal"
              value="pequeno"
            />
            <S.Label htmlFor="pequeno">Pequeno</S.Label>
            <S.InputSegundaCor
              onChange={formik.handleChange}
              type="radio"
              id="medio"
              name="tamanhoDoAnimal"
              value="medio"
            />
            <S.Label htmlFor="medio">Médio</S.Label>
            <S.InputTerceiraCor
              onChange={formik.handleChange}
              type="radio"
              id="grande"
              name="tamanhoDoAnimal"
              value="grande"
            />
            <S.Label htmlFor="grande">Grande</S.Label>
            <S.InputQuartaCor
              onChange={formik.handleChange}
              type="radio"
              id="porte-tanto-faz"
              name="tamanhoDoAnimal"
              value="porteTantoFaz"
            />
            <S.Label htmlFor="porte-tanto-faz">Tanto faz</S.Label>
          </S.DivInputRadio>
          <S.Span>Idade</S.Span>
          <S.DivInputRadio>
            <S.InputPrimeiraCor
              onChange={formik.handleChange}
              type="radio"
              id="filhote"
              name="idadeDoAnimal"
              value="filhote"
            />
            <S.Label htmlFor="filhote">Filhote</S.Label>
            <S.InputSegundaCor
              onChange={formik.handleChange}
              type="radio"
              id="adulto"
              name="idadeDoAnimal"
              value="adulto"
            />
            <S.Label htmlFor="adulto">Adulto</S.Label>
            <S.InputTerceiraCor
              onChange={formik.handleChange}
              type="radio"
              id="idoso"
              name="idadeDoAnimal"
              value="idoso"
            />
            <S.Label htmlFor="idoso">Idoso</S.Label>
            <S.InputQuartaCor
              onChange={formik.handleChange}
              type="radio"
              id="idade-tanto-faz"
              name="idadeDoAnimal"
              value="idadeTantoFaz"
            />
            <S.Label htmlFor="idade-tanto-faz">Tanto faz</S.Label>
          </S.DivInputRadio>
          <S.Button type="submit">
            Buscar amigo <S.ImgButton src={searchHeart} />
          </S.Button>
        </S.Form>
      </S.Main>
    </>
  );
}

export default QueroAdotar;
