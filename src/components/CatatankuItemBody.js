import React from "react";
import { showFormattedDate } from '../utils/data.js';

function CatatankuItemBody({ title, body, createdAt}) {
    return (
        <div className="catatanku-item__body">
            <h3 className="catatanku-item__username">{title}</h3>
            <p className="catatanku-item__isi">{body}</p>
            <p className="catatanku-item__date">Created At: {showFormattedDate(createdAt)}</p>
        </div>
    );
}

export default CatatankuItemBody;