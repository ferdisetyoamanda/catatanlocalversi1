import React from "react";
import CatatankuItemBody from "./CatatankuItemBody";
import DeleteButton from "./DeleteButton";




function CatatankuItem({ title, body, createdAt, id, onDelete, onArchive, isArchived, }) {
    return (
    <div className="catatanku-item">
    <CatatankuItemBody title={title} body={body} createdAt={createdAt} />
    <DeleteButton id={id} onDelete={onDelete} onArchive={onArchive} date={isArchived} />
            
    </div>
    );
}

export default CatatankuItem;