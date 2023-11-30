import React, { useEffect, useState } from "react";
import iDataList from "../model/iDataList";
import { getDataFromServer } from "../services/menu";


function ShowList(){
    const [items, setItems] = useState<iDataList[]>([]);
    
    useEffect(()=>{
        const fetchMenu = async() =>{
            try{
                const data = await getDataFromServer();
                setItems(data)
            }catch(error: any){

            }

        };
        fetchMenu();
    })

    return(
       <>
       <header>Expense Tracker</header>
       <button>Add</button>

       <>
       <div className="use-inline date header-color">Date</div>
       <div className="use-inline date header-color">Product Purchased</div>
       <div className="use-inline date header-color">Price</div>
       <div className="use-inline date header-color">Payee</div>
       </>
       {
        items&&
        items.map((user, ind) =>{
            <div key={ind}>
                <div className="use-inline date">{user.setDate}</div>
                <div className="use-inline ">{user.product}</div>
                <div className="use-inline price">{user.price}</div>
                <div className="use-inline ">{user.payeeName}</div>
            </div>

        })
       }
       <hr/>

       </> 

    )

}

export default ShowList;