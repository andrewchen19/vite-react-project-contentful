import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  // spaceID
  space: "jigtltaf9ha2",
  // defaults to "master" if not set
  environment: "master",
  // accessToken
  accessToken: import.meta.env.VITE_MY_API,
});

// custom Hook
export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      // specific content type
      const response = await client.getEntries({ content_type: "projects" });
      // console.log(response);

      const newArray = response.items.map((item) => {
        return {
          id: item.sys.id,
          title: item.fields.title,
          url: item.fields.url,
          image: item.fields.image.fields.file.url,
        };
      });

      setData(newArray);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, data };
};
