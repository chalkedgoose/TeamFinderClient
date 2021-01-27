import React from 'react'
import Will from '../images/Will.jpg'
const BadgeGrinders = () => {
    return (
        <div className="BadgeGrindersCont">
            <h1> Trusted Badge Grinders</h1>
            {/* <h1> Coming Soon!</h1> */}
            <div className="infoCont one">
                <img src={Will} />
                <div>
                    <a target="_blank" href="https://twitter.com/WillmotsTV">
                        {' '}
                        Twitter: @WillMotsTv{' '}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BadgeGrinders
