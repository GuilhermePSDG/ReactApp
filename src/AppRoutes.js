
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Dog from './Components/AuAu/Dog';
import ItemsPage from './Components/ItemsComponents/ItemsPage'
import LargeList from './Components/LargeListWithMemo/LargeList';
import BirthDayReminder from './Components/BirthDayReminder/BirthDayReminder'
import NotFound from './NotFound'

export default function AppRoutes() {
    return <Routes>
        <Route path='' element={<div></div>} />
        <Route path='dog' element={<Dog></Dog>} />
        <Route path='birthday' element={<BirthDayReminder></BirthDayReminder>} />
        <Route path='large' element={<LargeList></LargeList>} />
        <Route path='items' element={
            <div>
                <ItemsPage />
            </div>
        } />
        <Route path='*' element={<NotFound />} />
    </Routes>
}