import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';
import { TOKEN } from '../../utils';

import './homegallery.css';

const HomeGallery = () => {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cdn.contentful.com/spaces/jr0ojhkrepkp/environments/master/assets?access_token=${TOKEN}`,
      );

      setData(result.data.items);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="gallery-wrapper">
        {data.length && (
          <Masonry className="gallery-wrapper" columns={3} spacing={1}>
            {data.length && data.map((item) => (
              <MasonryItem key={item.fields.title}>
                <img
                  src={`http:${item.fields.file.url}`}
                  alt={item.fields.title}
                  loading="lazy"
                />
              </MasonryItem>
            ))}
          </Masonry>
        )}
      </div>
    </>
  );
};

export default HomeGallery;
