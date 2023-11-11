import { Route, Routes } from 'react-router-dom';

import './content.scss'

import ModelTable from '../contents/model-table';
import ModelDetails from '../contents/model-details';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Content = () => {
    return (
        <main className='content'>
            <Routes>
                <Route index element={<ModelTable />} />
                <Route path=':modelId' element={<ModelDetails />} handle={{
                    crumb: (data: { threadName: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => <span>{data.threadName}</span>,
                }} />
            </Routes>
        </main>
    )
}
export default Content;