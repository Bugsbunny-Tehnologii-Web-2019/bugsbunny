class State {
    static isLoggedIn() {
        return sessionStorage.getItem("loggedIn") === null ? false : true;
    }
    
    static getUser() {
        return JSON.parse(sessionStorage.getItem("loggedInUser"));
    }

    static setUser(data) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(data));
        sessionStorage.setItem("loggedIn", true);
    }
}

export default State;