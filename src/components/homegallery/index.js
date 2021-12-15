/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import { LightBox } from 'react-lightbox-pack';
import 'react-lightbox-pack/dist/index.css';
import { TOKEN } from '../../utils';
import './homegallery.css';

const HomeGallery = () => {
  const [data, setData] = useState({ items: [] });
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cdn.contentful.com/spaces/jr0ojhkrepkp/environments/master/assets?access_token=${TOKEN}`
      );
      const cleanImages = result.data.items.map((item) => (
        { image: item.fields.file.url, title: item.fields.title }
      ));
      setData(cleanImages);
    };

    fetchData();
  }, []);

  // eslint-disable-next-line no-shadow
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  return (
    <>
      <div className="gallery-wrapper">
        {data.length && (
          <Masonry className="gallery-wrapper" columns={3} spacing={1}>
            {data.length && data.map((item, index) => (
              <MasonryItem key={item.title}>
                <img
                  src={`http:${item.image}`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => {
                    lightBoxHandler(true, index);
                  }}
                />
              </MasonryItem>
            ))}
          </Masonry>
        )}
        <LightBox
          state={toggle}
          event={lightBoxHandler}
          data={data}
          imageWidth="80vw"
          imageHeight="84vh"
          thumbnailHeight={50}
          thumbnailWidth={50}
          setImageIndex={setSIndex}
          imageIndex={sIndex}
        />
      </div>
    </>
  );
};

export default HomeGallery;
