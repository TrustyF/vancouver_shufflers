import {log_event} from "@/scripts/log_events.js";

export const openNewTab = (path) => {
    log_event('open_new_tab','nav', path)
    window.open(path, '_blank')
}