import React,{ useState,useEffect } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat.js'
import { Avatar,IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { SearchOutlined } from '@material-ui/icons'
import db from './firebase'
import { useStateValue } from './StateProvider.js'


function Sidebar() {
    const [{user}, dispatch] = useStateValue()
    const [rooms,setRooms] = useState([]);
    useEffect(()=>{
        db.collection('Rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc=>
            ({
                id: doc.id,
                data: doc.data()
            })
        ))))
    },[])


    return (
        <div className="sidebar">


                    {/* HEADER */}
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>


                    {/* SEARCH */}
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search people" />
                </div>
            </div>


                    {/* CHATS */}
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room =>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
