import React from 'react';
import CatatankuItem from './CatatankuItem';

function CatatankuList({ catatankus, onDelete, onArchive}) {
        return(
            <div className="catatanku-list">
                {
                    catatankus.map((catatanku) => (
                        <CatatankuItem
                        key={catatanku.id}
                        id={catatanku.id}
                        onDelete={onDelete}
                        createdAt={catatanku.createdAt}
                        title={catatanku.title}
                        body={catatanku.body}
                        onArchive={onArchive}
                        isArchived={catatanku.archived}
                         />
                    ))
                }
            </div>
        )
    
}

export default CatatankuList;