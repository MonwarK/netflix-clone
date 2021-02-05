import React from 'react'

function PlanItem({planTitle, videoQuality, children, butttonStyle}) {
    return (
        <div className="profile-plan-item">
            <div className="item-info">
                <h5>{planTitle}</h5>
                <p>{videoQuality}</p>
            </div>
            <button className={butttonStyle}>
                {children}
            </button>
        </div>
    )
}

export default PlanItem
