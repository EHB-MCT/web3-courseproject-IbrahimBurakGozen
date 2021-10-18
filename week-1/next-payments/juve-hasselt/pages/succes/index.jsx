import React, {useEffect} from "react";
import axios from 'axios';

const SuccesPage = ()=>{

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        const session_id = query.get('session_id');

        if (session_id) {
            axios.post('/api/mail_sender', {session_id: session_id});
            console.log(session_id);
        }
      }, []);

    return (
        <div className="text-center p-3 mb-2 bg-success text-white mt-3">
            <h4 className="tussentitel-form m-3">Uw bestelling is succesvol doorgekomen. Bedankt om te bestellen bij Juve Hasselt.</h4>
        </div>
    )
}

export default SuccesPage;