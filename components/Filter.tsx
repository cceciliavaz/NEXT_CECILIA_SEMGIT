import { NextPage } from 'next';
import React, { useState } from 'react';
import { Status } from '../consts/status';

type FilterProps = {
    periodoDe: string,
    setPeriodoDe(s: string): void,
    periodoAte: string,
    setPeriodoAte(s: string): void,
    status: string,
    setStatus(s: string): void,
}

const listStatus = Status;

export const Filter: NextPage<FilterProps> = ({
    periodoDe, periodoAte, status,
    setPeriodoDe, setPeriodoAte, setStatus
}) => {

    const [showFilters, setShowFilters] = useState(false);

    return (
        <div className='container-filtros'>
            <div className='title'>
                <span>Tarefas</span>
                <img src='./icons/filter.svg' alt='Filtrar Tarefas' onClick={e => setShowFilters(!showFilters)} />
                <div className='form'>
                    <div>
                        <label>Data prevista de conclusão:</label>
                        <input type="date"
                            value={periodoDe}
                            onChange={e => setPeriodoDe(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>até:</label>
                        <input type="date"
                            value={periodoAte}
                            onChange={e => setPeriodoAte(e.target.value)}
                        />
                    </div>
                    <div className='line' />
                    <div>
                        <label>Status:</label>
                        <select
                            value={status}
                            onChange={e => {
                                setStatus(e.target.value)
                            }}>
                            {
                                listStatus.map(el => <option value={el.value} key={el.name}> {el.name} </option>)
                            }
                        </select>
                    </div>
                </div>
            </div>
            {showFilters && <div className='filtrosMobile'>
                <div>
                    <label>Data prevista de conclusão:</label>
                    <input type="date"
                        value={periodoDe}
                        onChange={e => setPeriodoDe(e.target.value)}
                    />
                </div>
                <div>
                    <label>até:</label>
                    <input type="date"
                        value={periodoAte}
                        onChange={e => setPeriodoAte(e.target.value)}
                    />
                </div>
                <div>
                    <label>Status:</label>
                    <select
                        value={status}
                        onChange={e => {
                            setStatus(e.target.value)
                        }} >
                        {
                            listStatus.map(el => <option value={el.value} key={el.name}> {el.name} </option>)
                        }
                    </select>
                </div>
            </div>}
        </div>
    );
}
