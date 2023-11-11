import { useParams } from "react-router-dom";

import './model-details.scss'

import { Model } from '../entity/model';
import { useEffect, useState } from 'react';

const ModelDetails = () => {
    const { modelId } = useParams()
    const [models, setModels] = useState<Model[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/models.json');
            const jsonDados = await response.json();
            setModels(jsonDados);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };
    
        fetchData();
      }, []);

    const model: Model | undefined = models.find((modelData) => modelData.id === modelId)

    return (
        <div className='model-details-content'>
            <h1>Detalhes do Modelo "{model?.id}"</h1>
            <div className='details'>
                <div className='detail-column'>
                    <h2> Informações Gerais </h2>
                    <table>
                        <tr>
                            <td className='label'><label htmlFor="author"> Autor </label></td>
                            <td><span> {model?.model_information?.author} </span> </td>
                        </tr>
                        <tr>
                            <td className='label'><label htmlFor="description"> Descrição </label> </td>
                            <td><span> {model?.model_information?.model_type} </span> </td>
                        </tr>
                        <tr>
                            <td className='label'><label htmlFor="library"> Biblioteca </label> </td>
                            <td><span> {model?.model_parameters?.lib_name} </span> </td>
                        </tr>
                        <tr>
                            <td className='label'><label htmlFor="location"> Location</label> </td>
                            <td><span> {model?.model_parameters?.model_class_name} </span></td>
                        </tr>
                    </table>
                    <h2>Parâmetros Categóricos</h2>
                    <table>
                        <tr>
                            {
                                model?.model_information?.features?.categorical && model?.model_information?.features?.categorical.map(
                                    (categorical) => (
                                        <td>{categorical} </td>
                                    )
                                )
                            }
                        </tr>
                    </table>
                    <h2>Parâmetros Numéricos</h2>
                    <table>
                        <tr>
                            {
                                model?.model_information?.features?.numerical && model?.model_information?.features?.numerical.map(
                                    (numerical) => (
                                        <td>{numerical} </td>
                                    )
                                )
                            }
                        </tr>
                    </table>
                    <h2> Saídas </h2>
                    <table>
                        <tr>
                            <td className='label'><label htmlFor="predict"> Predito </label></td>
                            <td><span> {model?.model_information?.features?.output?.predict} </span> </td>
                        </tr>
                        <tr>
                            <td className='label'><label htmlFor="target"> Alvo </label> </td>
                            <td><span> {model?.model_information?.features?.output?.target} </span> </td>
                        </tr>
                    </table>
                </div>
                <div className='detail-column'>
                    <h2>Hiper Parâmetros</h2>
                    <table>
                        {
                            model?.model_parameters?.hyperparameter && Object.keys(model?.model_parameters?.hyperparameter).map(
                                (parameter) => (
                                    <tr>
                                        <td className='label'><label> {parameter} </label></td>
                                        <td><span> {model?.model_parameters?.hyperparameter?.[parameter] as string} </span> </td>
                                    </tr>
                                )
                            )
                        }
                    </table>
                </div>
            </div>
        </div >
    )
}

export default ModelDetails