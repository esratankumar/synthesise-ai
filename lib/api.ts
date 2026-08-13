export async function fetchJSON(url:string){

const res=await fetch(url);

return await res.json();

}
