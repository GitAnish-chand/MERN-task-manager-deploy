import { API_URL } from "./utils"


export const createTask = async(taskObj) =>{
    const url = `${API_URL}/tasks`;
    const options  ={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(taskObj)
    };

    try{
        const result = await fetch(url,options);
        const data =  await result.json();
        return data;
    }catch(err){
        console.error(err);
    }
} 


export const getAllTask = async() =>{
    const url = `${API_URL}/tasks`;
    console.log('url ',url);
    const options  ={
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },
        
    };

    try{
        const result = await fetch(url,options);
        const data =  await result.json();
        return data;
    }catch(err){
        console.error(err);
    }
} 


export const deleteTaskById = async(id) =>{
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ',url);
    const options  ={
        method:'Delete',
        headers:{
            'Content-Type':'application/json'
        },
        
    };

    try{
        const result = await fetch(url,options);
        const data =  await result.json();
        return data;
    }catch(err){
        console.error(err);
    }
} 


export const updateTaskById = async(id,reqBody) =>{
    const url = `${API_URL}/tasks/${id}`;
    console.log('url ',url);
    const options  ={
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reqBody)
        
    };

    try{
        const result = await fetch(url,options);
        const data =  await result.json();
        return data;
    }catch(err){
        console.error(err);
    }
} 