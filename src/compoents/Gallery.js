import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = ({flickrImages, itemsLength, perPage}) => {
    const photosObj = flickrImages.photos.photo;
    return (
        <div className="gallery-wrapper">
            <InfiniteScroll
            dataLength={perPage}
            next={itemsLength}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            >
            {
                Object.keys(photosObj).map((img, index) => {
                    let imgSrc = `https://farm${photosObj[img].farm}.staticflickr.com/${photosObj[img].server}/${photosObj[img].id}_${photosObj[img].secret}.jpg`;

                    return (<div className="gallery-box" key={photosObj[img].id}>{ <img src={imgSrc} title={photosObj[img].title}/> }</div>)
                })
            }
            </InfiniteScroll>
        </div>
    )
}

export default Gallery;