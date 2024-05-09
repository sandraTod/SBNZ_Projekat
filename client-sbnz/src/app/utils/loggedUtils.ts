import { jwtDecode} from 'jwt-decode';
export class LoggedUtils{

    static getDecoded(){
        
        var decoded = jwtDecode(JSON.parse(String(localStorage.getItem("loggedUser"))).token);
        return decoded;

    }

    static getToken(){
        if(this.isEmpty())
            return null;    
        return JSON.parse(String(localStorage.getItem("loggedUser"))).token;
    }

    static isEmpty(){
        return localStorage.getItem("loggedUser") === null;
    }

    static getRole(){
        if(LoggedUtils.getToken()!= null){

            let userRole: any = LoggedUtils.getDecoded();
            var role = userRole.role.authority;
        }
        return role;
    }


    static getUsername(){
        if(LoggedUtils.getToken()!= null){
            let userUsername: any = LoggedUtils.getDecoded();
            var username = userUsername.sub
        }  
        return username;  
    }
    
}