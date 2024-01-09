export default defineNuxtRouteMiddleware((to, from) => {
    const navigationHistory = useLocalStorage('history', []);
    navigationHistory.value.concat(to.path);
   
    
  });