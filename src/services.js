import { API_URL } from "./constants";

//CREATE A NEW TASKS 
export const postTasks = async ({title, description, isComplete}) => {
    return fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({title, description, isComplete}),
        headers: {
            "content-Type": "application/json",
        },
}).then((response)=> response.json());
};

//GET ALL TASKS 
export const getAllTasks = async () => {
    return fetch(API_URL).then((response) => response.json())
};

//DELETE A SINGLE TASK
export const deleteTask = (id) => {
    return fetch(API_URL + '/${id}', {
        method: "DELETE",
    })
};

//UPDATE A SINGLE TASK

export const putTask = (id, { title, description, isComplete }) => {
    return fetch(API_URL + `/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            isComplete,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
};
