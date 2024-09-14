import axios from "axios";
import {session_seed, geo_location} from "@/scripts/session.js";

// let local_url = 'http://192.168.1.11:5000'
let server_url = ' https://analytics-trustyfox.pythonanywhere.com'

export async function log_event(name, type, info = null) {


    let url = `${server_url}/event/add`

    let params = {
        name: String(name),
        source: 'shufflers',
        type: String(type),
        info: String(info),
        uid: session_seed,
        geo: await geo_location,
    }


    if (import.meta.env.DEV) {
        // console.log('dev mode not logging to server')
        // console.log('dev log',params)
        return
    }

    axios.post(url, params)
        .then(resp => {
            console.log('successfully logged event')
        })
        .catch(error => null)
}