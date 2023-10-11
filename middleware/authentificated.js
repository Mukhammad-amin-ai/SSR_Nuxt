let token = process.client ? localStorage.getItem("access_token") : null;



export default defineNuxtRouteMiddleware((to,from)=>{
    // console.log(to);
    if(token){
        
    }
})