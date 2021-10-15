import { useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';

import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


import { HiArrowLeft } from "react-icons/hi";

const initialCrop = {
    unit: '%', 
    width: 50, 
    height: 50, 
    aspect: 1 / 1, 
    x: 25,
    y: 25
}

const CropImg = () => {
    const { setCurrentUser } = useAuth();
    const [crop, setCrop] = useState(initialCrop);
    const [loading, setLoading] = useState(false)
    
    const imgRef = useRef(null);
    const history = useHistory();

    const saveAvatarHandler = () => {
        
        setLoading(false);

        const image = imgRef.current;
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width;
        canvas.height = crop.height;
    
        const ctx = canvas.getContext('2d');
    
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
     
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );
       
        // As Base64 string
        const base64Image = canvas.toDataURL('image/jpeg');
        // console.log(base64Image)

        axios.post('/save_avatar', { image: base64Image })
        .then(res => {
            setCurrentUser(prevState => {
                prevState.avatar = res.data.file;
                localStorage.setItem('user', JSON.stringify(prevState));
                return {...prevState}
            });
            history.goBack();
        })
        .catch(err => {
            console.log(err)
            setLoading(false);
        })

    }

    const onLoad = useCallback((img) => {
        imgRef.current = img;
    }, []);

      return (
            <div className="crop-container">

                <div className="back-icon-container">
                    <HiArrowLeft className="back-icon" onClick={() => history.goBack()}/>
                    <h3>Crop Avatar</h3>
                </div>

                <ReactCrop
                    src={history.location.state.img}
                    onImageLoaded={onLoad}
                    crop={crop}
                    onChange={(c) => setCrop(c)}
                    keepSelection
                    style={{height: 300, width: 300}}
                    imageStyle={{height: 300, width: 300}}
                />
                <button onClick={saveAvatarHandler} disabled={loading}>Save</button>
            </div>
      );

}

export default CropImg;