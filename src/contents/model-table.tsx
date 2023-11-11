import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './model-table.scss'

import { Model } from '../entity/model'

const ModelTable: React.FC = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState('')
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
      
    const navigate = useNavigate();

    const start = (10 * page) - 10
    const end = 10 * page
    const totalPages = Math.ceil(models.length / 10)

    const searchLogic = (model: Model) => {
        if (search === '') {
            return true
        }
        return (model.model_information.author && model.model_information.author.includes(search)) ||
            (model.model_information.model_type && model.model_information.model_type.includes(search)) ||
            (model.model_parameters.lib_name && model.model_parameters.lib_name.includes(search)) ||
            (model.model_parameters.model_class_name && model.model_parameters.model_class_name.includes(search)) ||
            (model.models_status.model && model.models_status.model.includes(search)) ||
            (model.models_status.monitoring && model.models_status.monitoring.includes(search))
    }

    const handleOnClick = (modelId?: string) => navigate('/' + modelId, { replace: true });

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }


    return (
        <div className='model-table-content'>
            <div className='header'>
                <h1> Tabela de Modelos </h1>
                <div className='search'>
                    <input type="text" placeholder="Pesquisar" onChange={handleSearch} />
                    <button>Buscar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Autor</th>
                        <th>Tipo</th>
                        <th>Biblioteca</th>
                        <th>Classe</th>
                        <th>Status Modelo</th>
                        <th>Status Monitoramento</th>
                        <th>Data de Registro</th>
                        <th>Última Atualização</th>
                    </tr>
                </thead>
                <tbody>
                    {models.filter(searchLogic).slice(start, end).map((model) => (
                        <tr key={model.id} onClick={() => handleOnClick(model.id)}>
                            <td>{model.model_information?.author ?? 'sem autor'}</td>
                            <td>{model.model_information?.model_type}</td>
                            <td>{model.model_parameters?.lib_name}</td>
                            <td>{model.model_parameters?.model_class_name}</td>
                            <td>{model.models_status?.model}</td>
                            <td>{model.models_status?.monitoring}</td>
                            <td>{model.model_information?.registry_date}</td>
                            <td>{model.model_information?.last_update}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='footer'>
                <span>Exibindo {start + 1} - {end} de {models.length} resultados</span>
                <div className='pagination'>
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</button>
                    <span>Página {page} de {totalPages}</span>
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Próximo</button>
                </div>

            </div>
        </div>
    )
}

export default ModelTable