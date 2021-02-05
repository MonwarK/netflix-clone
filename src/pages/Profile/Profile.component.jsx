import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Nav from "../../components/Nav/Nav.component"
import PlanItem from "../../components/Plan-item/PlanItem.component"
import { selectUser } from '../../features/userSlice'
import { auth } from "../../firebase/firebase.utils"
import "./Profile.styles.css"

function Profile() {

    const user = useSelector(selectUser)
    const history = useHistory();

    return (
        <div className="profile-screen">
            <Nav/>
            <div className="profile-body">
                <h1>Edit Profile</h1>
                <div className="profile-info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
                
                    <div className="profile-details">
                        <h2>{user?.email}</h2>
                           
                        <PlanItem planTitle="Netflix Standard" butttonStyle="btn-subscribe" videoQuality="1080p">
                            SUBSCRIBE
                        </PlanItem>

                        <PlanItem planTitle="Netflix Basic" butttonStyle="btn-subscribe" videoQuality="480p">
                            SUBSCRIBE
                        </PlanItem>

                        <PlanItem planTitle="Netflix Premium" videoQuality="4k">
                            CURRENT PACKAGE
                        </PlanItem>

                        <button className="sign-out" onClick={() => {
                            history.push("/")
                            auth.signOut()
                        }}>Sign out</button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Profile
