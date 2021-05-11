import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IPhoto, IUser} from "../types/types";

const PhotosPage:FC = () => {

    const [photos, setPhotos] = useState<IPhoto[]>([])

    useEffect(() => {
        fetchPhotos()
    }, [])

    async function fetchPhotos() {
        try {
            const response = await axios.get<IPhoto[]>("https://jsonplaceholder.typicode.com/users")
            console.log("photos: ", response)
            setPhotos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <></>
    );
};

export default PhotosPage;