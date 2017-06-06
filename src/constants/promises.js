import keyMirror from 'keymirror'

// use null for specifying state where promise hasnt been fired yet

export default keyMirror({
    PENDING: null,
    FULFILLED: null,
    REJECTED: null
})
