import { useState, useEffect } from "react";
export const PackageTracking = ({ searchVal, retrieve }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [storData, setOrigData] = useState([]);
  const [searchOdIndex, setSearchIndex] = useState([]);
  const [newData, setLoading] = useState(true);

  useEffect(() => { setLoading(true);
                   const crawl = (user, allValues) => {
                                if (!allValues) allValues = [];
                                for (var key in user) {
                                if (typeof user[key] === "object") crawl(user[key], allValues);
                                else allValues.push(user[key] + " "); }
                                return allValues; };
                   const fetchData = async () => {
                                const { data: users } = await retrieve();
                                setOrigData(users);
                                setFilteredData(users);
                                const searchInd = users.map(user => {
                                const allValues = crawl(user);
                                return { allValues: allValues.toString() };});
                                setSearchIndex(searchInd);
                                if (users) setLoading(false); }; fetchData(); },
             [retrieve]);

  useEffect(() => {
    if (searchVal) {   const reqData = searchOdIndex.map((user, index) => {
                       if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
                       return storData[index];
                       return null; });
                       setFilteredData( reqData.filter(user => { if (user) return true; return false; }));
                       
                    } else setFilteredData(storData);
                }, [searchVal, storData, searchOdIndex])

  return { filteredData, newData };
};
